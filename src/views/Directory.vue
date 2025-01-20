<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const handleJump = (path) => {
  router.push(path);
};

const tocItems = [
  { text: "无标题文档", active: false },
  { text: "先学会 TypeScript 装饰器！", active: false },
  { text: "搭建你的首个Next.js 全栈框架项目", active: false },
  { text: "配置scss全局变量", active: false },
  { text: "prettier代码美化工具", active: false },
  { text: "cors跨域处理", active: false },
  { text: "npm install 建立安全的 TLS 连接", active: false },
  { text: "JSFuck[]()!", active: false },
  { text: "mockjs", active: true },
  { text: "eslint", active: false },
];
</script>

<template>
  <div class="container">
    <div class="sidebar">
      <div class="header">
        <a href="#" class="back-link">
          <img src="/svg/back.svg" />
        </a>
        <div class="title">
          <img class="doc-icon" src="/svg/juzi.svg" />
          <span>web 基础</span>
        </div>
        <button class="add-btn">+</button>
      </div>

      <nav class="nav-menu">
        <a href="#" class="nav-item" @click="handleJump('/dashboard')">
          <img src="/svg/home.svg" class="home-icon" />
          <span>首页</span>
        </a>

        <div class="toc-section">
          <div class="toc-header">
            <img src="/svg/toc.svg" class="home-icon" />
            <span>目录</span>
            <div class="toc-actions">
              <button class="more-btn">⋮</button>
            </div>
          </div>

          <ul class="toc-list">
            <li
              v-for="(item, index) in tocItems"
              :key="index"
              @click=""
              class="toc-item"
              :class="{ active: item.active }"
            >
              {{ item.text }}
            </li>
          </ul>
        </div>
      </nav>
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
  width: 260px;
  height: 100vh;
  background: #fff;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #eee;
}

.back-link {
  color: #666;
  text-decoration: none;
  width: 1rem;
  height: 1rem;
  padding: 8px 3px;
}

.back-link:hover {
  background: #e5e5e5;
  border-radius: 5px;
}

.title {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.doc-icon {
  width: 25px;
  height: 25px;
  color: #4caf50;
}

.lock-icon {
  font-size: 12px;
  color: #999;
}

.add-btn {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: none;
  background: #4caf50;
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-menu {
  flex: 1;
  overflow-y: auto;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  color: #333;
  text-decoration: none;
}

.nav-item:hover {
  background: #f5f5f5;
}

.toc-section {
  margin-top: 8px;
}

.toc-header {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
}

.toc-header:hover {
  cursor: pointer;
}

.toc-actions {
  margin-left: auto;
  display: flex;
  gap: 4px;
}

.expand-btn,
.more-btn {
  border: none;
  background: none;
  color: #999;
  cursor: pointer;
  padding: 2px;
}

.home-icon {
  width: 24px;
  height: 24px;
  color: #666;
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-item {
  padding: 8px 16px 8px 30px;
  font-size: 14px;
  color: #333;
  width: 80%; /* 或者其他合适的宽度 */
  cursor: pointer;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: nowrap; /* 防止文本换行 */
}

.toc-item:hover {
  background: #e8f5e9;
  color: #62bb65;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}

.toc-item.active {
  background: #e8f5e9;
  color: #4caf50;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}

@media (max-width: 900px) {
  .sidebar {
    display: none;
  }
}
</style>
