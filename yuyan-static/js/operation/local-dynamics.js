// 动态加载地方动态内容
async function loadLocalDynamicsContent() {
  const containerElement = document.querySelector('.local-dynamics-container .local-dynamics-list .list-container'); // 地方动态容器
  
  if (!containerElement) {
    console.error('未找到地方动态列表容器元素');
    return;
  }

  // 检查是否配置了API基础地址和地方动态URL
  if (config.apiBaseUrl && config.localDynamicsUrl) {
    try {
      // 从API获取地方动态内容
      const response = await fetch(Utils.joinApiPath(config.apiBaseUrl, config.localDynamicsUrl));
      if (response.ok) {
        const data = await response.json();
        renderLocalDynamicsList(data.dynamics || data.list || []);
      } else {
        // 如果API请求失败，使用静态文件内容
        renderLocalDynamicsList(localDynamicsConfig.dynamics);
      }
    } catch (error) {
      // 如果API请求出错，使用静态文件内容
      console.error('从API获取地方动态内容失败:', error);
      renderLocalDynamicsList(localDynamicsConfig.dynamics);
    }
  } else {
    // 如果没有配置API，直接使用静态文件内容
    renderLocalDynamicsList(localDynamicsConfig.dynamics);
  }
}

// 渲染地方动态列表
function renderLocalDynamicsList(dynamics) {
  const containerElement = document.querySelector('.local-dynamics-container .local-dynamics-list .list-container'); // 地方动态容器
  
  if (!containerElement) {
    console.error('未找到地方动态列表容器元素');
    return;
  }

  // 清空现有内容
  containerElement.innerHTML = '';

  // 只显示最后5条数据
  const lastFiveDynamics = dynamics.slice(-5);

  // 生成新的地方动态列表
  lastFiveDynamics.forEach((dynamicsItem, index) => {
    const dynamicsDiv = document.createElement('div');
    dynamicsDiv.className = 'local-dynamics-item';

    dynamicsDiv.innerHTML = `
      <img src="./img/point.png" alt="">
      <a href="${dynamicsItem.link || ''}" target="_blank">${dynamicsItem.title}</a>
      <div class="local-dynamics-date">${dynamicsItem.date}</div>
    `;

    containerElement.appendChild(dynamicsDiv);
  });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 检查是否存在地方动态容器，如果有则加载内容
  if (document.querySelector('.local-dynamics-container .local-dynamics-list')) {
    loadLocalDynamicsContent();
  }
});