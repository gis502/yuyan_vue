// 动态加载机制动态内容
async function loadDynamicsContent() {
  const containerElement = document.querySelector('.dynamics-container .dynamics-list .list-container');
  
  if (!containerElement) {
    console.error('未找到机制动态列表容器元素');
    return;
  }

  // 检查是否配置了API基础地址和机制动态URL
  if (config.apiBaseUrl && config.dynamicsUrl) {
    try {
      // 从API获取机制动态内容
      const response = await fetch(Utils.joinApiPath(config.apiBaseUrl, config.dynamicsUrl));
      if (response.ok) {
        const data = await response.json();
        renderDynamicsList(data.dynamics || data.list || []);
      } else {
        // 如果API请求失败，使用静态文件内容
        renderDynamicsList(dynamicsConfig.dynamics);
      }
    } catch (error) {
      // 如果API请求出错，使用静态文件内容
      console.error('从API获取机制动态内容失败:', error);
      renderDynamicsList(dynamicsConfig.dynamics);
    }
  } else {
    // 如果没有配置API，直接使用静态文件内容
    renderDynamicsList(dynamicsConfig.dynamics);
  }
}

// 渲染机制动态列表
function renderDynamicsList(dynamics) {
  const containerElement = document.querySelector('.dynamics-container .dynamics-list .list-container');
  if (!containerElement) {
    console.error('未找到机制动态列表容器元素');
    return;
  }

  // 清空现有内容
  containerElement.innerHTML = '';

  // 只显示最后5条数据
  const lastFiveDynamics = dynamics.slice(-5);

  // 生成新的机制动态列表
  lastFiveDynamics.forEach((dynamicsItem, index) => {
    const dynamicsDiv = document.createElement('div');
    dynamicsDiv.className = 'dynamics-item';

    dynamicsDiv.innerHTML = `
      <img src="./img/point.png" alt="">
      <a href="${dynamicsItem.link || ''}" target="_blank">${dynamicsItem.title}</a>
      <div class="dynamics-date">${dynamicsItem.date}</div>
    `;

    containerElement.appendChild(dynamicsDiv);
  });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 检查是否存在机制动态容器，如果有则加载内容
  if (document.querySelector('.dynamics-container .dynamics-list')) {
    loadDynamicsContent();
  }
});