// 动态加载灾害应急内容
async function loadDisasterEmergencyContent() {
  const containerElement = document.querySelector('.disaster-container .disaster-map ul');
  
  if (!containerElement) {
    console.error('未找到灾害应急列表容器元素');
    return;
  }

  // 检查是否配置了API基础地址和灾害应急URL
  if (config.apiBaseUrl && config.disasterEmergencyUrl) {
    try {
      // 从API获取灾害应急内容
      const response = await fetch(Utils.joinApiPath(config.apiBaseUrl, config.disasterEmergencyUrl));
      if (response.ok) {
        const data = await response.json();
        renderDisasterEmergencyList(data.disasters || data.list || []);
      } else {
        // 如果API请求失败，使用静态文件内容
        renderDisasterEmergencyList(disasterEmergencyConfig.disasters);
      }
    } catch (error) {
      // 如果API请求出错，使用静态文件内容
      console.error('从API获取灾害应急内容失败:', error);
      renderDisasterEmergencyList(disasterEmergencyConfig.disasters);
    }
  } else {
    // 如果没有配置API，直接使用静态文件内容
    renderDisasterEmergencyList(disasterEmergencyConfig.disasters);
  }
}

// 渲染灾害应急列表
function renderDisasterEmergencyList(disasters) {
  const containerElement = document.querySelector('.disaster-container .disaster-map ul');
  
  if (!containerElement) {
    console.error('未找到灾害应急列表容器元素');
    return;
  }

  // 清空现有内容
  containerElement.innerHTML = '';

  // 只显示最后4条数据
  const lastFourDisasters = disasters.slice(-4);

  // 生成新的灾害应急列表
  lastFourDisasters.forEach((disaster, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'map';

    listItem.innerHTML = `
      <a href="${disaster.link}" target="_blank">
        <img src="${disaster.image}" alt="${disaster.title}">
      </a>
      <p class="map-info">${disaster.title}</p>
      <p class="time">${disaster.date}</p>
    `;

    containerElement.appendChild(listItem);
  });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 检查是否存在灾害应急容器，如果有则加载内容
  if (document.querySelector('.disaster-emergency-container .disaster-map ul')) {
    loadDisasterEmergencyContent();
  }
});