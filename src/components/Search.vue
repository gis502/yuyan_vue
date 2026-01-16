<template>
  <div class="search-box">
    <div class="s-box">
      <form
          ref="searchFormRef"
          action="/search.jspx"
          name="searchForm"
          id="searchForm"
          @submit.prevent="handleSearch"
      >
        <div class="s-box-input">
          <div class="search-icon">
            <img src="@/assets/images/icon_6.png" alt="搜索">
          </div>
          <div class="search-input-wrap">
            <input
                type="text"
                placeholder="输入关键词"
                name="q"
                v-model="searchKeyword"
                maxlength="50"
                autocomplete="on"
                @keyup.enter="handleSearch"
            >
            <input type="hidden" name="token" id="token" >
          </div>
          <div id="query" class="search-btn" @click="handleSearch">搜索</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const searchKeyword = ref('')

const router = useRouter()

const handleSearch = () => {

  const keyword = searchKeyword.value.trim()
  if (!keyword) {
    alert('请输入搜索内容')
    return
  }
  router.push({
    path: '/moreInfo/search',
    query: { keyword }
  })

}
</script>

<style scoped>
.search-box {
  width: 400px;
  float: right;
  height: auto;
  margin-top: -66px;
  margin-right: 341px;
  list-style: none;
}

.s-box {
  padding: 0;
}

.s-box-input {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 36px; /* 统一搜索框高度 */
  border: 2px solid #e5e5e5;
  border-radius: 4px;
  overflow: hidden;
}

.search-icon {
  padding: 0 10px;
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 2px solid #e5e5e5;
}

.search-icon img {
  width: 16px;
  height: 16px;
}

.search-input-wrap {
  flex: 1; /* 输入框占满剩余空间 */
  height: 100%;
}

.search-input-wrap input[type="text"] {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  border: none;
  outline: none; /* 清除聚焦边框 */
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
}

.search-btn {
  width: 80px;
  height: 100%;
  background-color: #007bff;
  color: white;
  text-align: center;
  line-height: 36px;
  cursor: pointer;
  user-select: none;
}

.search-btn:hover {
  background-color: #0069d9;
}

.search-input-wrap input[type="text"]:focus {
  color: #000;
  background-color: #f8f9fa;
}
</style>