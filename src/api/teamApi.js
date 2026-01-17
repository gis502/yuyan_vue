// src/api/teamApi.js
const API_BASE_URL = 'http://localhost:7001/team';

/**
 * 获取所有团队
 * @returns {Promise<Array>} 团队列表
 */
export const getAllTeams = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/all`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('获取团队数据失败:', error);
    throw error;
  }
};

/**
 * 根据关键词搜索团队
 * @param {string} keyword - 搜索关键词
 * @returns {Promise<Array>} 搜索结果
 */
export const searchTeams = async (keyword) => {
  try {
    const encodedKey = encodeURIComponent(keyword.trim());
    const response = await fetch(`${API_BASE_URL}/search?keyword=${encodedKey}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('搜索团队失败:', error);
    throw error;
  }
};

/**
 * 根据ID获取团队详情
 * @param {number} id - 团队ID
 * @returns {Promise<Object>} 团队详情
 */
export const getTeamById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('获取团队详情失败:', error);
    throw error;
  }
};