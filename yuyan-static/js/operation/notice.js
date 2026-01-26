// 动态加载公告通知内容
async function loadNoticeContent() {
  const containerListElement = document.querySelector('.announcement-container .container-list .swiper-wrapper');

  // 检查是否配置了API基础地址和公告URL
  if (config.apiBaseUrl && config.noticeUrl) {
    try {
      // 从API获取公告内容
      const response = await fetch(Utils.joinApiPath(config.apiBaseUrl, config.noticeUrl));
      if (response.ok) {
        const data = await response.json();
        renderNoticeList(data.notices || data.list || []);
      } else {
        // 如果API请求失败，使用静态文件内容
        renderNoticeList(noticeConfig.notices);
      }
    } catch (error) {
      // 如果API请求出错，使用静态文件内容
      console.error('从API获取公告内容失败:', error);
      renderNoticeList(noticeConfig.notices);
    }
  } else {
    // 如果没有配置API，直接使用静态文件内容
    renderNoticeList(noticeConfig.notices);
  }
}

// 渲染公告列表
function renderNoticeList(notices) {
  const containerListElement = document.querySelector('.announcement-container .container-list');
  // 清空现有内容
  containerListElement.innerHTML = '';

  // 生成新的公告列表
  notices.forEach((notice, index) => {
    const swiperSlide = document.createElement('div');
    swiperSlide.className = 'swiper-slide';
    swiperSlide.setAttribute('role', 'group');
    swiperSlide.setAttribute('aria-label', `${index + 1} / ${notices.length}`);
    swiperSlide.setAttribute('data-swiper-slide-index', index);
    swiperSlide.style.cssText = 'width: 381.333px; margin-right: 28px;';

    swiperSlide.innerHTML = `
      <div class="kpzn-list">
        <div class="kpzn-title">
          <a 
            ${notice.link ? `href="${notice.link}"` : 'style="cursor: pointer;"'} 
            style="text-decoration: none; color: inherit;"
            ${!notice.link ? 'onclick="return false;"' : ''}
          >
            ${notice.title}
          </a>
        </div>
      </div>
    `;

    containerListElement.appendChild(swiperSlide);
  });
}