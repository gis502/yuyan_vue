// 轮播图配置项
const swiperConfig = {
  autoplayTime: 2500,
  loop: true,
  showArrows: true,
  showPagination: true,
  animationDuration: 300,
  slidesPerView: 3,
  spaceBetween: 28,
  slidesPerGroup: 1
};

// 全局轮播相关变量
let currentGroupIndex = 0;
let autoplayTimer = null;
let slideCount = 0;
let totalGroups = 0;
let swiperWrapper = null;
let containerList = null;

// 安全获取DOM元素的工具函数
function getSafeElement(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn(`找不到DOM元素：${selector}`);
  }
  return element;
}

// 动态加载公告通知内容
async function loadNoticeContent() {
  // 等待DOM完全加载
  await new Promise(resolve => {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      resolve();
    } else {
      document.addEventListener('DOMContentLoaded', resolve);
    }
  });

  // 适配实际HTML结构：找到container-list（核心修改）
  containerList = getSafeElement('.announcement-container .container .container-list');
  if (!containerList) {
    console.error('无法初始化轮播：找不到container-list容器');
    return;
  }

  // 动态创建swiper-wrapper并插入到container-list中（核心修复）
  swiperWrapper = document.createElement('div');
  swiperWrapper.className = 'swiper-wrapper';
  containerList.innerHTML = ''; // 清空原有内容
  containerList.appendChild(swiperWrapper);

  // 检查配置并加载数据（增加可选链容错）
  if (config?.apiBaseUrl && config?.noticeUrl) {
    try {
      const response = await fetch(Utils?.joinApiPath(config.apiBaseUrl, config.noticeUrl) || '');
      if (response.ok) {
        const data = await response.json();
        renderNoticeList(data.notices || data.list || []);
      } else {
        renderNoticeList(noticeConfig?.notices || []);
      }
    } catch (error) {
      console.error('从API获取公告内容失败:', error);
      renderNoticeList(noticeConfig?.notices || []);
    }
  } else {
    renderNoticeList(noticeConfig?.notices || []);
  }
}

// 渲染公告列表
function renderNoticeList(notices) {
  if (!swiperWrapper) return;

  // 清空现有内容
  swiperWrapper.innerHTML = '';

  // 记录幻灯片数量
  slideCount = notices?.length || 0;
  currentGroupIndex = 0;

  // 计算总组数
  totalGroups = swiperConfig.loop
      ? slideCount
      : Math.max(1, Math.ceil(slideCount / swiperConfig.slidesPerGroup));

  // 没有公告时显示提示
  if (slideCount === 0) {
    const emptySlide = document.createElement('div');
    emptySlide.className = 'swiper-slide';
    emptySlide.style.cssText = `width: ${332}px; margin-right: ${swiperConfig.spaceBetween}px;`;
    emptySlide.innerHTML = `
      <div class="kpzn-list">
        <div class="kpzn-title" style="text-align: center; color: #999;">
          暂无公告
        </div>
      </div>
    `;
    swiperWrapper.appendChild(emptySlide);
    // 补全3个空白slide
    for (let i = 1; i < swiperConfig.slidesPerView; i++) {
      const blankSlide = document.createElement('div');
      blankSlide.className = 'swiper-slide';
      blankSlide.style.cssText = `width: ${332}px; margin-right: ${swiperConfig.spaceBetween}px;`;
      blankSlide.innerHTML = `
        <div class="kpzn-list" style="background: #f9f9f9;">
          <div class="kpzn-title"></div>
        </div>
      `;
      swiperWrapper.appendChild(blankSlide);
    }
    return;
  }

  // 生成公告slide
  notices.forEach((notice, index) => {
    const swiperSlide = document.createElement('div');
    swiperSlide.className = 'swiper-slide';
    swiperSlide.setAttribute('role', 'group');
    swiperSlide.setAttribute('aria-label', `${index + 1} / ${notices.length}`);
    swiperSlide.setAttribute('data-swiper-slide-index', index);
    swiperSlide.style.cssText = `width: 332px; margin-right: ${swiperConfig.spaceBetween}px; flex-shrink: 0;`;

    // 保留id=7的特殊跳转逻辑
    swiperSlide.innerHTML = `
      <div class="kpzn-list">
        <div class="kpzn-title">
          <a 
            ${notice.link ? `href="${notice.link}"` : 'style="cursor: pointer;"'} 
            style="text-decoration: none; color: inherit;"
            ${!notice.link ? 'onclick="return false;"' : ''}
            ${notice.id === 7 ? 'onclick="window.location.href=\'./index.html#/notice\'; return false;"' : ''}
          >
            ${notice.title}
          </a>
        </div>
      </div>
    `;

    swiperWrapper.appendChild(swiperSlide);
  });

  // 循环模式下的无缝克隆逻辑（核心修改）
  if (swiperConfig.loop && slideCount > swiperConfig.slidesPerView) {
    // 1. 复制最后N个slide到开头（实现向左无缝循环）
    const lastSlides = Array.from(swiperWrapper.children).slice(-swiperConfig.slidesPerView);
    clonedCount = lastSlides.length;
    lastSlides.forEach((slide, index) => {
      const clone = slide.cloneNode(true);
      clone.setAttribute('data-clone', 'prev');
      clone.setAttribute('data-original-index', slideCount - swiperConfig.slidesPerView + index);
      swiperWrapper.insertBefore(clone, swiperWrapper.firstChild);
    });

    // 2. 复制前N个slide到末尾（实现向右无缝循环）
    const firstSlides = Array.from(swiperWrapper.children).slice(clonedCount, clonedCount + swiperConfig.slidesPerView);
    firstSlides.forEach((slide, index) => {
      const clone = slide.cloneNode(true);
      clone.setAttribute('data-clone', 'next');
      clone.setAttribute('data-original-index', index);
      swiperWrapper.appendChild(clone);
    });

    // 3. 初始索引定位到克隆后的起始位置（跳过开头的克隆slide）
    currentGroupIndex = clonedCount;
  } else {
    // 非循环模式或不足一屏，初始索引为0
    currentGroupIndex = 0;
  }

  // 初始化轮播功能
  initSwiper();
}

// 初始化轮播核心功能
function initSwiper() {
  const container = getSafeElement('.announcement-container');
  if (!container || !swiperWrapper || !containerList) return;

  // 初始化wrapper样式
  swiperWrapper.style.cssText = `
    display: flex;
    flex-wrap: nowrap;
    transition: transform ${swiperConfig.animationDuration}ms ease;
    width: fit-content;
    transform: translateX(0px);
  `;

  // 给container-list添加样式（适配实际结构）
  containerList.style.cssText = `
    width: 100%;
    overflow: hidden;
    position: relative;
  `;

  // 创建切换箭头
  if (swiperConfig.showArrows && !container.querySelector('.swiper-arrows')) {
    const arrowsHtml = `
     <div class="swiper-arrows">
        <!-- 上一组箭头：使用指定样式，替换背景图路径为本地./img/prev.png -->
        <div class="swiper-button-xuanchuan-prev" 
             style="left:0;width: 50px;height: 70px;background: url(./img/prev.png);position: absolute;margin-top: -100px;z-index: 35;cursor: pointer;" 
             tabindex="0" 
             role="button" 
             aria-label="Previous slide">
        </div>
        <!-- 下一组箭头：使用指定样式，替换背景图路径为本地./img/next.png -->
        <div class="swiper-button-xuanchuan-next" 
             style="right:0px;width: 50px;height: 70px;background: url(./img/next.png);position: absolute;margin-top: -100px;z-index: 35;cursor: pointer;" 
             tabindex="0" 
             role="button" 
             aria-label="Next slide">
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', arrowsHtml);

    // 绑定箭头点击事件
    const prevBtn = container.querySelector('.swiper-button-xuanchuan-prev');
    const nextBtn = container.querySelector('.swiper-button-xuanchuan-next');
    if (prevBtn) prevBtn.addEventListener('click', () => switchSlide('prev'));
    if (nextBtn) nextBtn.addEventListener('click', () => switchSlide('next'));
  }

  // 创建分页指示器
  if (swiperConfig.showPagination && !container.querySelector('.swiper-pagination')) {
    const paginationHtml = `<div class="swiper-pagination"></div>`;
    container.insertAdjacentHTML('beforeend', paginationHtml);
    const pagination = container.querySelector('.swiper-pagination');
    if (!pagination) return;

    // 生成分页点
    const dotCount = swiperConfig.loop ? slideCount : totalGroups;
    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('button');
      dot.className = `pagination-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('data-index', i);
      dot.setAttribute('aria-label', `跳转到第${i+1}组公告`);
      pagination.appendChild(dot);

      dot.addEventListener('click', () => switchSlide(i));
    }
  }

  // 启动自动轮播
  startAutoplay();

  // 鼠标悬浮暂停/恢复
  container.addEventListener('mouseenter', stopAutoplay);
  container.addEventListener('mouseleave', startAutoplay);
}

// 切换幻灯片核心函数
function switchSlide(target) {
  if (!swiperWrapper || slideCount === 0) return;

  const slides = document.querySelectorAll('.swiper-slide');
  const dots = document.querySelectorAll('.pagination-dot');
  const slideWidth = 332 + swiperConfig.spaceBetween;
  // 克隆后的总slide数
  const totalSlidesWithClone = slides.length;
  // 原始slide的结束位置
  const originalEndIndex = clonedCount + slideCount;

  // 计算新组索引
  let newGroupIndex = currentGroupIndex;
  if (target === 'prev') {
    newGroupIndex = currentGroupIndex - 1;
    // 循环模式下向左无限滚动
    if (swiperConfig.loop && newGroupIndex < 0) {
      newGroupIndex = originalEndIndex - 1;
    }
  } else if (target === 'next') {
    newGroupIndex = currentGroupIndex + 1;
    // 循环模式下向右无限滚动
    if (swiperConfig.loop && newGroupIndex >= totalSlidesWithClone) {
      newGroupIndex = clonedCount;
    }
  } else if (typeof target === 'number') {
    newGroupIndex = target;
  }

  // 更新分页点状态（映射到原始slide索引）
  if (dots.length > 0 && swiperConfig.loop) {
    // 计算当前位置对应的原始slide索引
    let originalIndex = (newGroupIndex - clonedCount) % slideCount;
    if (originalIndex < 0) originalIndex += slideCount;

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === originalIndex);
    });
  }

  // 执行滚动动画
  swiperWrapper.style.transition = `transform ${swiperConfig.animationDuration}ms ease`;
  const translateX = -newGroupIndex * slideWidth;
  swiperWrapper.style.transform = `translateX(${translateX}px)`;

  // 无缝循环的关键：滚动到克隆区时瞬间切换到对应原始位置
  if (swiperConfig.loop && slideCount > swiperConfig.slidesPerView) {
    // 1. 滚动到开头克隆区（向左滑到最左）
    if (newGroupIndex < clonedCount) {
      setTimeout(() => {
        if (!swiperWrapper) return;
        swiperWrapper.style.transition = 'none';
        // 瞬间切换到原始最后一组位置
        swiperWrapper.style.transform = `translateX(-${(originalEndIndex - 1) * slideWidth}px)`;
        newGroupIndex = originalEndIndex - 1;
      }, swiperConfig.animationDuration);
    }
    // 2. 滚动到末尾克隆区（向右滑到最右）
    else if (newGroupIndex >= originalEndIndex) {
      setTimeout(() => {
        if (!swiperWrapper) return;
        swiperWrapper.style.transition = 'none';
        // 瞬间切换到原始第一组位置
        swiperWrapper.style.transform = `translateX(-${clonedCount * slideWidth}px)`;
        newGroupIndex = clonedCount;
      }, swiperConfig.animationDuration);
    }
  }

  // 更新当前索引
  currentGroupIndex = newGroupIndex;
}

// 启动自动轮播
function startAutoplay() {
  if (slideCount <= swiperConfig.slidesPerView) return;

  stopAutoplay();
  autoplayTimer = setInterval(() => {
    switchSlide('next');
  }, swiperConfig.autoplayTime);
}

// 停止自动轮播
function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

// 样式：适配实际HTML结构
const style = document.createElement('style');
style.textContent = `
   .announcement-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 40px; /* 给分页器留空间 */
  }
  
  .announcement-container .container {
    width: 100%;
  }
  
  .container-list {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  
  .swiper-wrapper {
    width: fit-content;
    height: auto;
    position: relative;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    flex-shrink: 0;
  }

  /* 移除原有箭头样式，使用内联样式替代 */
  .swiper-arrows {
    position: relative;
    width: 100%;
    height: 100%;
  }

  /* 分页器样式 */
  .swiper-pagination {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  
  .pagination-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ddd;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  
  .pagination-dot.active {
    background: #666;
  }

  /* 公告卡片样式 */
  .kpzn-list {
    width: 332px;
    height: 136px;
    background: linear-gradient(180deg, #EDF5FF 0%, #FFFFFF 69%, #FFFFFF 100%);
    box-shadow: 0px 10px 20px 0px rgba(121, 152, 201, 0.15);
    border-radius: 8px;
    border: 2px solid #FFFFFF;
    padding: 23px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  
  .kpzn-title {
    font-size: 18px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-word;
  }

  /* 响应式适配 */
  @media (max-width: 1200px) {
    .announcement-container {
      width: 100%;
      padding: 0 20px 40px;
    }
    .kpzn-list {
      width: 100%;
      max-width: 332px;
    }
  }
  
  @media (max-width: 768px) {
    .swiper-slide {
      width: 100% !important;
      margin-right: 10px !important;
    }
    .kpzn-list {
      height: 72px;
      font-size: 16px;
    }
    /* 响应式下调整箭头样式 */
    .swiper-button-xuanchuan-prev,
    .swiper-button-xuanchuan-next {
      width: 30px !important;
      height: 40px !important;
      margin-top: -120px !important;
      background-size: cover !important;
    }
  }
`;
document.head.appendChild(style);
