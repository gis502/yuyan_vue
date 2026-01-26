// 异步加载介绍内容
async function loadIntroductionContent() {
    const textContentElement = document.querySelector('.introduction-container .text-content');

    // 检查是否配置了API基础地址和介绍URL
    if (config.apiBaseUrl && config.introductionUrl) {
        try {
            // 从API获取介绍内容
            const response = await fetch(Utils.joinApiPath(config.apiBaseUrl, config.introductionUrl));
            if (response.ok) {
                const data = await response.json();
                textContentElement.innerHTML = data.content || data.description || data.text || '';
            } else {
                // 如果API请求失败，使用静态文件内容
                textContentElement.innerHTML = introductionConfig.content;
            }
        } catch (error) {
            // 如果API请求出错，使用静态文件内容
            console.error('Failed to fetch introduction content from API:', error);
            textContentElement.innerHTML = introductionConfig.content;
        }
    } else {
        // 如果没有配置API，直接使用静态文件内容
        textContentElement.innerHTML = introductionConfig.content;
    }
}