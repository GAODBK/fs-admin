<script setup>
import { ref } from "vue";
import CreateKnowledge from "./CreateKnowledge.vue";

const isRepository = ref(false);

const toggleSearchBox = () => {
  isRepository.value = true;
};

const handleClosePopup = () => {
  isRepository.value = false;
};
</script>
<template>
  <CreateKnowledge :isRepository @close="handleClosePopup()"/>

  <div class="start-page">
    <!-- 顶部导航 -->
    <nav class="top-nav">
      <div class="nav-left">
        <button class="menu-btn">☰</button>
        <span class="page-title">开始</span>
      </div>
      <div class="nav-right">
        <button class="share-btn">分享</button>
        <button class="more-btn">⋮</button>
      </div>
    </nav>

    <!-- 内容区域 -->
    <div class="content">
      <div class="welcome-section">
        <h1>👋 欢迎来到瑜浅的知识库</h1>
        <p class="subtitle">这里记录着我的学习笔记和心得体会</p>

        <div class="quick-actions">
          <button class="action-btn">
            <span class="icon">📝</span>
            <span>新建页面</span>
          </button>
          <button class="action-btn"  @click="toggleSearchBox()">
            <span class="icon">📚</span>
            <span>新建知识库</span>
          </button>
        </div>
      </div>

      <div class="recent-section">
        <h2>最近浏览</h2>
        <div class="recent-items">
          <div class="recent-item">
            <i class="doc-icon">📄</i>
            <div class="item-info">
              <span class="item-title">java部分题</span>
              <span class="item-path">试题 / java部分题</span>
            </div>
            <span class="time">3天前</span>
          </div>
          <!-- 更多最近浏览项... -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.start-page {
  height: 100vh;
  background: #fff;
}

.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.menu-btn {
  border: none;
  background: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
}

.page-title {
  font-size: 16px;
  font-weight: 500;
}

.nav-right {
  display: flex;
  gap: 8px;
}

.share-btn,
.more-btn {
  padding: 6px 12px;
  border: 1px solid #eee;
  border-radius: 4px;
  background: #fff;
  color: #666;
  cursor: pointer;
}

.content {
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
}

.welcome-section {
  text-align: center;
  margin-bottom: 48px;
}

.welcome-section h1 {
  font-size: 24px;
  margin-bottom: 8px;
}

.subtitle {
  color: #666;
  margin-bottom: 24px;
}

.quick-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: 1px solid #eee;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
}

.action-btn:hover {
  background: #f5f5f5;
}

.recent-section {
  margin-top: 48px;
}

.recent-section h2 {
  font-size: 16px;
  margin-bottom: 16px;
}

.recent-item {
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
}

.recent-item:hover {
  background: #f5f5f5;
}

.doc-icon {
  margin-right: 12px;
}

.item-info {
  flex: 1;
}

.item-title {
  display: block;
  font-weight: 500;
}

.item-path {
  font-size: 12px;
  color: #999;
}

.time {
  color: #999;
  font-size: 12px;
}
</style>
