// 动态加载团队信息内容
async function loadTeamContent() {
  const containerElement = document.querySelector('.team-list-container'); // 团队列表容器
  
  if (!containerElement) {
    console.error('未找到团队列表容器元素');
    return;
  }

  // 检查是否配置了API基础地址和团队信息URL
  if (config.apiBaseUrl && config.teamUrl) {
    try {
      // 从API获取团队信息内容
      const response = await fetch(Utils.joinApiPath(config.apiBaseUrl, config.teamUrl));
      if (response.ok) {
        const data = await response.json();
        renderTeamList(data.teams || data.list || data || [], null);
      } else {
        // 如果API请求失败，使用静态文件内容
        renderTeamList(teamConfig, null);
      }
    } catch (error) {
      // 如果API请求出错，使用静态文件内容
      console.error('从API获取团队信息内容失败:', error);
      renderTeamList(teamConfig, null);
    }
  } else {
    // 如果没有配置API，直接使用静态文件内容
    renderTeamList(teamConfig, null);
  }
}

// 渲染团队列表
function renderTeamList(teams, searchTerm = null) {
  const containerElement = document.querySelector('.team-list-container'); // 团队列表容器
  
  if (!containerElement) {
    console.error('未找到团队列表容器元素');
    return;
  }

  // 清空现有内容
  containerElement.innerHTML = '';

  // 如果是搜索模式且没有结果，显示提示信息
  if (searchTerm !== null && teams.length === 0) {
    const noResultDiv = document.createElement('div');
    noResultDiv.className = 'no-result-message';
    noResultDiv.style.textAlign = 'center';
    noResultDiv.style.padding = '20px';
    noResultDiv.style.color = '#999';
    noResultDiv.innerHTML = `未找到包含 "${searchTerm}" 的队伍信息`;
    
    containerElement.appendChild(noResultDiv);
    return;
  }

  // 生成新的团队列表
  teams.forEach((team, index) => {
    const teamItem = document.createElement('div');
    teamItem.className = 'team-item';

    teamItem.innerHTML = `
      <div class="team-info">
        <div class="team-header">
          <span class="team-name">${team.name}</span>
          <span class="team-region">${team.region}</span>
        </div>
        <div class="team-description">${team.description}</div>
      </div>
    `;

    containerElement.appendChild(teamItem);
  });
}

// 搜索团队信息
function searchTeams(searchTerm) {
  const allTeams = window.teamConfig || [];

  if (!searchTerm.trim()) {
    // 如果搜索词为空，则显示所有团队
    renderTeamList(allTeams);
    return;
  }
  
  // 过滤团队数据，查找名称或描述中包含搜索词的团队
  const filteredTeams = allTeams.filter(team => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const nameMatch = team.name.toLowerCase().includes(lowerSearchTerm);
    const descriptionMatch = team.description && typeof team.description === 'string' && team.description.toLowerCase().includes(lowerSearchTerm);
    return nameMatch || descriptionMatch;
  });
  
  // 渲染过滤后的团队列表
  renderTeamList(filteredTeams, searchTerm);
}

// 为搜索框添加事件监听器
function initTeamSearch() {
  const searchBox = document.querySelector('.team-search-container .search-box');
  
  if (!searchBox) {
    console.error('未找到团队搜索框');
    return;
  }
  
  // 监听输入事件，实现实时搜索
  searchBox.addEventListener('input', function(e) {
    const searchTerm = e.target.value;
    searchTeams(searchTerm);
  });
  
  // 监听回车键事件
  searchBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const searchTerm = e.target.value;
      searchTeams(searchTerm);
    }
  });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 检查是否存在团队列表容器，如果有则加载内容
  if (document.querySelector('.team-list-container')) {
    loadTeamContent();
    
    // 初始化搜索功能
    initTeamSearch();
  }
});