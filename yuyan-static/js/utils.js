// 公共工具对象
const Utils = {
  /**
   * 安全拼接API地址，确保路径之间只有一个斜杠
   * @param {string} baseUrl - 基础URL
   * @param {string} path - 要拼接的路径
   * @returns {string} - 拼接后的完整URL
   */
  joinApiPath: function(baseUrl, path) {
    if (!baseUrl) return path || '';
    if (!path) return baseUrl;
    
    // 移除baseUrl末尾的斜杠
    baseUrl = baseUrl.replace(/\/$/, '');
    // 移除path开头的斜杠
    path = path.replace(/^\//, '');
    
    // 拼接并添加斜杠
    return baseUrl + '/' + path;
  }
};
