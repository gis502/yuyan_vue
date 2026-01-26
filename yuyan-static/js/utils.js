// 公共工具对象
const Utils = {
  /**
   * 安全拼接API地址，确保路径之间只有一个斜杠
   * @param {string} baseUrl - 基础URL
   * @param {string} path - 要拼接的路径
   * @returns {string} - 拼接后的完整URL
   */
  joinApiPath: function (baseUrl, path) {
    if (!baseUrl) return path || "";
    if (!path) return baseUrl;

    // 移除baseUrl末尾的斜杠
    baseUrl = baseUrl.replace(/\/$/, "");
    // 移除path开头的斜杠
    path = path.replace(/^\//, "");

    // 拼接并添加斜杠
    return baseUrl + "/" + path;
  },

  /**
   * 插入公共页脚
   * @param {string} containerId - 容器ID
   */
  insertCommonFooter: (containerId) => {
    // 定义页脚的HTML模板字符串
    const footerHtml = `
        <div class="footer">
          <div class="footer-info">
              <img src="./img/jzzx-logo.png" alt="logo1" />
              <img src="./img/logo.png" alt="logo2" />
              <img src="./img/qr-code.jpg" alt="二维码" />
              <div class="footer-text">
                  <p>
                      <a href="https://www.ndrcc.org.cn/tscl/2812.jhtml">网站声明</a> &nbsp;|&nbsp;
                      <a href="https://www.ndrcc.org.cn/tscl/2811.jhtml">联系我们</a>
                  </p>
                  <p>主办：中华人民共和国应急管理部国家减灾中心（卫星减灾应用中心）</p>
                  <p>地址：北京市朝阳区广百东路6号院 邮编：100124 </p>
                  <p>
                      <a href="http://www.beian.miit.gov.cn/" target="_blank">京ICP备05086388号-5</a> &nbsp;
                      <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502037912" target="_blank">京公网安备 11010502037912号</a>
                  </p>
              </div>
          </div>
        </div>
      `;

    // 确定挂载目标：优先使用传入的容器ID，没有则直接插入到body末尾
    let targetElement;
    if (containerId) {
      targetElement = document.getElementById(containerId);
      // 容器不存在时给出提示
      if (!targetElement) {
        console.error(`未找到ID为${containerId}的容器，将默认插入到body末尾`);
        targetElement = document.body;
      }
    } else {
      targetElement = document.body;
    }

    // 将页脚HTML插入到目标元素中
    targetElement.insertAdjacentHTML("beforeend", footerHtml);
  },
};
