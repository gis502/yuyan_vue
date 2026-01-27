// 动态加载技术前沿内容
async function loadTechnologyFrontierContent() {
  const containerElement = document.querySelector('.technical-container .list .technology-list ul'); // 技术前沿容器
  
  if (!containerElement) {
    console.error('未找到技术前沿列表容器元素');
    return;
  }

  // 检查是否配置了API基础地址和技术前沿URL
  if (config.apiBaseUrl && config.technologyFrontierUrl) {
    try {
      // 从API获取技术前沿内容
      const response = await fetch(Utils.joinApiPath(config.apiBaseUrl, config.technologyFrontierUrl));
      if (response.ok) {
        const data = await response.json();
        renderTechnologyFrontierList(data.technologies || data.list || data || []);
      } else {
        // 如果API请求失败，使用静态文件内容
        renderTechnologyFrontierList(technologyFrontierConfig.technologies);
      }
    } catch (error) {
      // 如果API请求出错，使用静态文件内容
      console.error('从API获取技术前沿内容失败:', error);
      renderTechnologyFrontierList(technologyFrontierConfig.technologies);
    }
  } else {
    // 如果没有配置API，直接使用静态文件内容
    renderTechnologyFrontierList(technologyFrontierConfig.technologies);
  }
}

// 渲染技术前沿列表
function renderTechnologyFrontierList(technologies) {
  const containerElement = document.querySelector('.technical-container .list .technology-list ul'); // 技术前沿容器
  
  if (!containerElement) {
    console.error('未找到技术前沿列表容器元素');
    return;
  }

  // 清空现有内容
  containerElement.innerHTML = '';

  // 只显示最后5条数据
  const lastFiveTechnologies = technologies.slice(-5);

  // 生成新的技术前沿列表
  lastFiveTechnologies.forEach((tech, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'technology-item';

    listItem.innerHTML = `
      <div class="technology-item-img">
        <a href="${tech.link}" target="_blank">
          <img src="${tech.image}" alt="技术文章缩略图" class="technology-item-img-children">
        </a>
      </div>
      <div class="technology-item-content">
        <a href="${tech.link}" target="_blank" class="technology-item-title">${tech.title}</a>
      </div>
    `;

    containerElement.appendChild(listItem);
  });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 检查是否存在技术前沿容器，如果有则加载内容
  if (document.querySelector('.technology-frontier-container ul')) {
    loadTechnologyFrontierContent();
  }
});