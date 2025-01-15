<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import SearchContent from "./SearchContent.vue";

const router = useRouter();
const isSearchVisible = ref(false);

const knowledgeItems = ref([
  { icon: 'icon-test', text: '试题' },
  { icon: 'icon-java', text: 'JAVA' },
  { icon: 'icon-database', text: '数据库' },
  { icon: 'icon-math', text: '高数' },
  { icon: 'icon-github', text: 'GitHub收集' },
  { icon: 'icon-android', text: '阅读资料' },
  { icon: 'icon-android', text: 'web 基础' },
  { icon: 'icon-android', text: 'Android' },
]);

const toggleSearchBox = () => {
  isSearchVisible.value = true;
};

const handleClosePopup = () => {
  isSearchVisible.value = false;
};

const toHomeDocuments = () => {
  router.push("/homedocuments");
};
const toDashboard = () => {
  router.push("/dashboard");
};
</script>

<template>
  <SearchContent :isSearchVisible @close="handleClosePopup()"/>

  <div class="container">
    <div class="sidebar">
      <!-- 搜索框 -->
      <div class="search-box" @click="toggleSearchBox()">
        <input type="text" placeholder="搜索" />
        <span class="shortcut">Ctrl + J</span>
      </div>

      <!-- 主导航菜单 -->
      <nav class="main-nav">
        <ul>
          <li @click="toHomeDocuments()"><i class="icon-clock"></i>开始</li>
          <li><i class="icon-note"></i>小记</li>
          <li><i class="icon-star"></i>收藏</li>
          <li><i class="icon-recent"></i>近期</li>
        </ul>
      </nav>

      <!-- 知识库部分 -->
      <div class="knowledge-base">
        <h3 @click="toDashboard()">知识库</h3>
        <ul>
          <li v-for="item in knowledgeItems" :key="item.text">
            <i :class="item.icon"></i>{{ item.text }}
          </li>
        </ul>
      </div>
    </div>

    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
}

.content {
  flex: 1;
  padding: 16px;
}
.sidebar {
  width: 250px;
  background-color: #ffffff;
  height: 100vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eee;
}

.search-box {
  position: relative;
  /* margin-bottom: 20px; */
}

.search-box input {
  width: 95%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
}

.shortcut {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 12px;
}

.knowledge-base h3:first-child:hover {
  cursor: pointer;
}

.main-nav ul,
.knowledge-base ul {
  list-style: none;
  padding: 0;
}

.main-nav li,
.knowledge-base li {
  padding: 8px 12px;
  margin: 4px 0;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.main-nav li:hover,
.knowledge-base li:hover {
  background-color: #f5f5f5;
}

.knowledge-base h3 {
  color: #666;
  font-size: 14px;
  /* margin: 20px 0 10px; */
}

/* 图标样式可以根据实际使用的图标库进行调整 */
[class^="icon-"] {
  margin-right: 8px;
  font-size: 16px;
}

@media (max-width: 900px) {
  .sidebar {
    display: none;
  }
}
@media (max-width: 1300px) {
  .sidebar {
    width: 200px;
  }
}
</style>
