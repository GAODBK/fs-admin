<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleJump = (path) => {
  router.push(path);
};
</script>

<template>
  <div class="container">
    <div class="sidebar">
      <div class="header">
        <a href="#" class="back-link">
          <i class="back-icon">
            <svg
              class="icon"
              style="
                width: 1em;
                height: 1em;
                vertical-align: middle;
                fill: currentColor;
                overflow: hidden;
              "
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3357"
            >
              <path
                d="M631.04 161.941333a42.666667 42.666667 0 0 1 63.061333 57.386667l-2.474666 2.730667-289.962667 292.245333 289.706667 287.402667a42.666667 42.666667 0 0 1 2.730666 57.6l-2.474666 2.752a42.666667 42.666667 0 0 1-57.6 2.709333l-2.752-2.474667-320-317.44a42.666667 42.666667 0 0 1-2.709334-57.6l2.474667-2.752 320-322.56z"
                fill="#111111"
                p-id="3358"
              ></path>
            </svg>
          </i>
        </a>
        <div class="title">
          <i class="doc-icon">📄</i>
          <span>web 基础</span>
          <i class="lock-icon">🔒</i>
        </div>
        <button class="add-btn">+</button>
      </div>

      <nav class="nav-menu" @click="handleJump('/dashboard')">
        <a href="#" class="nav-item">
          <i class="home-icon">🏠</i>
          <span>首页</span>
        </a>

        <div class="toc-section">
          <div class="toc-header">
            <i class="list-icon">📑</i>
            <span>目录</span>
            <div class="toc-actions">
              <button class="expand-btn">⊕</button>
              <button class="more-btn">⋮</button>
            </div>
          </div>

          <ul class="toc-list">
            <li class="toc-item">无标题文档</li>
            <li class="toc-item">先学会 TypeScript 装饰器！</li>
            <li class="toc-item">搭建你的首个Next.js 全栈框架项目</li>
            <li class="toc-item">配置scss全局变量</li>
            <li class="toc-item">prettier代码美化工具</li>
            <li class="toc-item">cors跨域处理</li>
            <li class="toc-item">npm install 建立安全的 TLS 连接</li>
            <li class="toc-item">JSFuck[]()!</li>
            <li class="toc-item active">mockjs</li>
            <li class="toc-item">eslint</li>
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
}

.title {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.doc-icon {
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

.toc-section {
  margin-top: 8px;
}

.toc-header {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
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

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-item {
  padding: 8px 16px 8px 40px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
}

.toc-item:hover {
  background: #f5f5f5;
}

.toc-item.active {
  background: #e8f5e9;
  color: #4caf50;
}

@media (max-width: 900px) {
  .sidebar {
    display: none;
  }
}
</style>
