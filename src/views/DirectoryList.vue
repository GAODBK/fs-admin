<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleJump = (path) => {
  router.push(path);
};
</script>

<template>
  <div class="knowledge-base">
    <header class="kb-header">
      <div class="kb-title">
        <div class="left">
          <span class="book-icon">📗</span>
          <span class="title">JAVA</span>
        </div>
        <div class="right">
          <button class="btn-star">⭐ 收藏</button>
          <button class="btn-share">分享</button>
          <button class="btn-more" @click="handleJump('/')">...</button>
        </div>
      </div>

      <div class="kb-stats">
        <span class="docs">49 文档</span>
        <span class="words">53470 字</span>
        <span class="info icon">
          <img src="/svg/info.svg" alt="信息图标" />
        </span>
      </div>
    </header>

    <div class="kb-welcome">
      <div class="avatar">
        <img src="/svg/doctor.svg" alt="用户头像" />
      </div>
      <h2>👋 欢迎来到知识库</h2>
      <p>知识库就像书一样，让多篇文档结构化，方便知识的创作与沉淀</p>
    </div>

    <div class="kb-content">
      <div class="article-list">
        <div class="article-item" @click="handleJump('/directory/java')">
          <span class="title hidden">java部分题</span>
          <span class="date">2023-10-09 00:26</span>
        </div>
        <div class="article-item">
          <span class="title hidden">正则表达式提取短信验证码</span>
          <span class="date">2024-05-29 22:40</span>
        </div>
        <!-- 其他文章项 -->
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.knowledge-base {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.kb-header {
  margin-bottom: 30px;
}

.kb-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon img {
  width: 16px;
  height: 18px;
}

.book-icon {
  font-size: 24px;
}

.title {
  font-size: 20px;
  font-weight: bold;
}

.hidden {
  max-width: 50%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
}

.right {
  display: flex;
  gap: 12px;
}

.right button {
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  background: white;
  cursor: pointer;
}

.kb-stats {
  color: #666;
  font-size: 14px;
  display: flex;
  gap: 15px;
}

.kb-welcome {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 15px;
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.article-item {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #eee;
}

.article-item .date {
  color: #999;
  font-size: 14px;
}

.article-item:hover {
  background: #f5f5f5;
  border-radius: 8px;
}
</style>
