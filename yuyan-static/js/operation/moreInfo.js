(function () {
    if (typeof Utils.joinApiPath !== 'function') {
        Utils.joinApiPath = function (basePath, relativePath) {
            if (!basePath || !relativePath) return null;
            const cleanBase = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
            const cleanRelative = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
            return ` $ {cleanBase}/ $ {cleanRelative}`;
        };
    }
})();

// URL参数映射
const urlParamMap = {
    'dynamic': 'dynamicsUrl',
    'disaster': 'disasterEmergencyUrl',
    'localdynamic': 'localDynamicsUrl',
    'technology': 'technologyFrontierUrl'
};

// 标题映射
const titleMap = {
    'dynamic': '机制动态',
    'disaster': '灾害应急',
    'localdynamic': '地方动态',
    'technology': '技术前沿'
};

// 数据映射（对应到实际的JS文件变量名）
const dataMap = {
    'dynamic': 'window.dynamicsConfig',
    'disaster': 'window.disasterEmergencyConfig',
    'localdynamic': 'window.localDynamicsConfig',
    'technology': 'window.technologyFrontierConfig'
};

// 文件映射（用于动态加载JS文件）
const fileMap = {
    'dynamic': './js/static/dynamics.js',
    'disaster': './js/static/disaster-emergency.js',
    'localdynamic': './js/static/local-dynamics.js',
    'technology': './js/static/technology-frontier.js'
};

// 全局变量
let currentData = [];
let currentPage = 1;
let pageSize = 10;
let totalPages = 1;

// DOM元素引用
const lawsList = document.getElementById('laws-list');
const pageTitle = document.getElementById('page-title');
const lawsTitleText = document.getElementById('laws-title-text');
const paginationContainer = document.getElementById('pagination');
const pageContainer = document.getElementById('page-container');
const backButton = document.getElementById('back-button');

// 获取URL参数
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// 主要加载函数
async function loadContentByType(type) {
    const containerElement = document.querySelector('.moreinfo-content');
    if (!containerElement) {
        console.error('未找到内容容器元素');
        return;
    }

    // 确保 config 已经加载
    if (!config) {
        console.error('请确保 config.js 已正确加载');
        await loadStaticContent(type);
        return;
    }

    // 检查是否配置了API基础地址和对应URL
    const apiUrlKey = urlParamMap[type];
    if (config.apiBaseUrl && config[apiUrlKey]) {
        try {
            // 使用 Utils.joinApiPath
            const response = await fetch(Utils.joinApiPath(config.apiBaseUrl, config[apiUrlKey]));
            if (response.ok) {
                const data = await response.json();
                let listData = [];
                if (type === 'dynamic') {
                    listData = data.dynamics || data.list || [];
                } else if (type === 'disaster') {
                    listData = data.disasters || data.list || [];
                } else if (type === 'localdynamic') {
                    listData = data.dynamics || data.list || [];
                } else if (type === 'technology') {
                    listData = data.technologies || data.list || [];
                }
                renderContent(listData, type);
            } else {
                await loadStaticContent(type);
            }
        } catch (error) {
            console.error(`从API获取 $ {titleMap[type]}内容失败:`, error);
            await loadStaticContent(type);
        }
    } else {
        await loadStaticContent(type);
    }
}

// 加载静态文件内容
async function loadStaticContent(type) {
    try {
        await loadScript(fileMap[type]);
        const configPath = dataMap[type];
        const staticConfig = eval(configPath);
        if (!staticConfig) {
            throw new Error('静态配置数据不存在');
        }
        let dataList = [];
        if (type === 'dynamic') {
            dataList = staticConfig.dynamics || [];
        } else if (type === 'disaster') {
            dataList = staticConfig.disasters || [];
        } else if (type === 'localdynamic') {
            dataList = staticConfig.dynamics || [];
        } else if (type === 'technology') {
            dataList = staticConfig.technologies || [];
        }
        renderContent(dataList, type);
    } catch (error) {
        console.error(`加载静态 $ {titleMap[type]}内容失败:`, error);
        showNotFound();
    }
}

// 动态加载JS文件
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const existingScript = document.querySelector(`script[src=" $ {src}"]`);
        if (existingScript) {
            if (existingScript.hasAttribute('data-loaded')) {
                resolve();
                return;
            }
            existingScript.addEventListener('load', resolve);
            existingScript.addEventListener('error', reject);
            return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            script.setAttribute('data-loaded', 'true');
            resolve();
        };
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// 渲染内容
function renderContent(dataList, type) {
    currentData = dataList;
    totalPages = Math.ceil(currentData.length / pageSize);

    const title = titleMap[type];
    pageTitle.textContent = title;
    lawsTitleText.textContent = title;

    renderCurrentPage();

    if (totalPages > 1) {
        pageContainer.style.display = 'block';
        renderPagination();
    }
}

// 渲染当前页的内容
function renderCurrentPage() {
    lawsList.innerHTML = '';
    if (currentData.length === 0) {
        const emptyItem = document.createElement('li');
        emptyItem.className = 'laws-item';
        emptyItem.innerHTML = '<span style="color:#999;">暂无数据</span>';
        lawsList.appendChild(emptyItem);
        return;
    }
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, currentData.length);
    for (let i = startIndex; i < endIndex; i++) {
        const item = currentData[i];
        const listItem = document.createElement('li');
        listItem.className = 'laws-item';

        const link = document.createElement('a');
        link.href = item.link || '#';
        link.className = 'lt laws';
        link.target = '_blank';
        link.textContent = item.title;

        const timeSpan = document.createElement('span');
        timeSpan.className = 'rt time';
        timeSpan.textContent = formatDate(item.date);

        listItem.appendChild(link);
        listItem.appendChild(timeSpan);
        lawsList.appendChild(listItem);
    }
}

// 渲染分页控件
function renderPagination() {
    paginationContainer.innerHTML = '';

    if (currentPage === 1) {
        const activeSpan = document.createElement('span');
        activeSpan.className = 'active';
        activeSpan.textContent = '1';
        paginationContainer.appendChild(activeSpan);
    } else {
        const firstLink = document.createElement('a');
        firstLink.href = 'javascript:void(0);';
        firstLink.textContent = '1';
        firstLink.addEventListener('click', () => changePage(1));
        paginationContainer.appendChild(firstLink);
    }

    const visiblePages = getVisiblePages();
    visiblePages.forEach(page => {
        if (page === currentPage) {
            const activeSpan = document.createElement('span');
            activeSpan.className = 'active';
            activeSpan.textContent = page;
            paginationContainer.appendChild(activeSpan);
        } else {
            const pageLink = document.createElement('a');
            pageLink.href = 'javascript:void(0);';
            pageLink.textContent = page;
            pageLink.addEventListener('click', () => changePage(page));
            paginationContainer.appendChild(pageLink);
        }
    });

    if (showEllipsis()) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        paginationContainer.appendChild(ellipsis);
    }

    if (currentPage !== totalPages && totalPages > 1) {
        const lastLink = document.createElement('a');
        lastLink.href = 'javascript:void(0);';
        lastLink.textContent = totalPages;
        lastLink.addEventListener('click', () => changePage(totalPages));
        paginationContainer.appendChild(lastLink);
    }

    if (currentPage < totalPages) {
        const nextLink = document.createElement('a');
        nextLink.href = 'javascript:void(0);';
        nextLink.className = 'next';
        nextLink.textContent = '下一页';
        nextLink.addEventListener('click', () => changePage(currentPage + 1));
        paginationContainer.appendChild(nextLink);
    }

    const totalSpan = document.createElement('span');
    totalSpan.className = 'totle-num';
    totalSpan.textContent = `共  $ {totalPages} 页`;
    paginationContainer.appendChild(totalSpan);

    const jumpInput = document.createElement('input');
    jumpInput.className = 'jump-ipt';
    jumpInput.type = 'number';
    jumpInput.min = '1';
    jumpInput.max = totalPages.toString();
    jumpInput.value = currentPage;
    jumpInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            jumpToPage(jumpInput.value);
        }
    });
    paginationContainer.appendChild(jumpInput);

    const jumpButton = document.createElement('a');
    jumpButton.href = 'javascript:void(0);';
    jumpButton.className = 'jump-btn';
    jumpButton.textContent = '跳转';
    jumpButton.addEventListener('click', () => jumpToPage(jumpInput.value));
    paginationContainer.appendChild(jumpButton);
}

// 计算可见页码
function getVisiblePages() {
    const pages = [];
    const maxVisible = 7;
    if (totalPages <= maxVisible) {
        for (let i = 2; i <= totalPages; i++) {
            pages.push(i);
        }
    } else {
        const half = Math.floor(maxVisible / 2);
        let start = Math.max(2, currentPage - half);
        let end = Math.min(totalPages - 1, currentPage + half);
        if (currentPage - half < 2) {
            end = Math.min(totalPages - 1, maxVisible - 1);
        }
        if (currentPage + half > totalPages - 1) {
            start = Math.max(2, totalPages - maxVisible + 1);
        }
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
    }
    return pages;
}

// 是否显示省略号
function showEllipsis() {
    return totalPages > 8 && currentPage < totalPages - 3;
}

// 切换页面
function changePage(page) {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
        currentPage = page;
        renderCurrentPage();
        renderPagination();
        const jumpInput = document.querySelector('.jump-ipt');
        if (jumpInput) {
            jumpInput.value = page;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// 跳转到指定页面
function jumpToPage(pageStr) {
    const page = parseInt(pageStr);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
        changePage(page);
    }
}

// 日期格式化
function formatDate(dateStr) {
    if (!dateStr) return '';
    if (dateStr.includes('T')) {
        return dateStr.replace('T', ' ').substring(0, 16);
    }
    return dateStr;
}

// 显示未找到页面
function showNotFound() {
    const notFoundDiv = document.createElement('div');
    notFoundDiv.className = 'not-found';
    notFoundDiv.innerHTML = `
        <h2>未找到相关信息</h2>
        <p>请求的列表不存在或已被移除</p>
        <a href="javascript:history.back()" class="back-btn">返回上一页</a>
    `;
    const contentContainer = document.querySelector('.moreinfo-content');
    if (contentContainer) {
        contentContainer.style.display = 'none';
    }
    document.body.appendChild(notFoundDiv);
    notFoundDiv.style.display = 'flex';
}

// 初始化函数
async function init() {
    const type = getUrlParameter('type');
    if (!type || !titleMap[type]) {
        showNotFound();
        return;
    }
    try {
        await loadContentByType(type);

        //调用公共页脚组件
        if (typeof Utils !== 'undefined' && typeof Utils.insertCommonFooter === 'function') {
            Utils.insertCommonFooter("footer_container");
        } else {
            console.warn('Utils.insertCommonFooter 未定义，使用备用页脚');
            const footerContainer = document.getElementById('footer_container');
            if (footerContainer) {
                footerContainer.innerHTML = `
                    <footer class="footer">
                        <div class="footer-content">
                            <p>应急管理部国家减灾中心 © 2026</p>
                        </div>
                    </footer>
                `;
            }
        }
    } catch (error) {
        console.error('初始化内容失败:', error);
        showNotFound();
    }
}

// 返回按钮事件
if (backButton) {
    backButton.addEventListener('click', () => {
        window.location.href = './index.html';
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);