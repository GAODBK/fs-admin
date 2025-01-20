<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const toDirectory = () => {
  router.push("/directory");
};

const gridItems = [
  {
    icon: "📄",
    color: "blue-icon",
    title: "试题",
    subtitle: "复制格子的，标签",
  },
  { icon: "📚", color: "green-icon", title: "JAVA" },
  { icon: "📊", color: "blue-icon", title: "数据库" },
  { icon: "📐", color: "blue-icon", title: "高数" },
  { icon: "📁", color: "blue-icon", title: "GitHub收集" },
  { icon: "📖", color: "blue-icon", title: "阅读资料" },
  { icon: "🌐", color: "blue-icon", title: "web 基础", subtitle: "网页" },
  { icon: "📱", color: "blue-icon", title: "Android" },
];
</script>
<template>
  <div class="knowledge-base">
    <div class="header">
      <h2>知识库</h2>
      <button class="action-btn">
        <img class="arrow-up-icon" src="/svg/arrow-up.svg" alt="收起图标" />
      </button>
    </div>

    <div class="category">常用</div>

    <div class="grid-container">
      <div v-for="(item, index) in gridItems" :key="index">
        <div class="grid-item" @click="toDirectory()">
          <div :class="['icon', item.color]">{{ item.icon }}</div>
          <div class="content">
            <div class="title">{{ item.title }}</div>
            <div v-if="item.subtitle" class="subtitle">{{ item.subtitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="knowledge-base">
    <div class="section-header">
      <h2>我的知识库</h2>
      <div class="section-actions">
        <button class="action-btn">
          <img class="arrow-up-icon" src="/svg/add.svg" alt="收起图标" />
        </button>
        <button class="action-btn">
          <img class="arrow-up-icon" src="/svg/arrow-up.svg" alt="收起图标" />
        </button>
        <button class="action-btn">
          <img class="arrow-up-icon" src="/svg/more.svg" alt="收起图标" />
        </button>
      </div>
    </div>

    <div class="content-grid">
      <div v-for="(item, index) in gridItems" :key="index">
        <!-- JAVA 部分 -->
        <div class="content-card" @click="toDirectory()">
          <div class="card-header">
            <span class="icon green">📚</span>
            <h3>JAVA</h3>
          </div>
          <ul class="article-list">
            <li>
              <span class="title">正则表达式提取短信验证码</span>
              <span class="date">2024-05-29 22:40</span>
            </li>
            <li>
              <span class="title">Tomcat</span>
              <span class="date">2024-03-14 19:33</span>
            </li>
            <li>
              <span class="title">JDK8环境</span>
              <span class="date">2024-03-11 17:44</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.knowledge-base {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.tabs {
  display: flex;
  gap: 10px;
}

.tab {
  padding: 8px 16px;
  border: none;
  background: none;
  cursor: pointer;
}

.tab.active {
  color: #1890ff;
  border-bottom: 2px solid #1890ff;
}

.actions {
  display: flex;
  gap: 8px;
}

.section-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  padding: 6px 12px;
  border: 1px solid #eee;
  border-radius: 4px;
  background: #fff;
  color: #666;
  cursor: pointer;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.content-card {
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}

.icon.green {
  background-color: #e6fff0;
}

.icon.blue {
  background-color: #e6f4ff;
}

.article-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.article-list li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.article-list li:last-child {
  border-bottom: none;
}

.date {
  color: #999;
  font-size: 12px;
}

.knowledge-base {
  padding: 20px;
  background-color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h2 {
  font-size: 18px;
  color: #333;
  margin: 0;
}

.category {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.grid-item {
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.grid-item:hover {
  background-color: #f5f5f5;
}

.icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.arrow-up-icon {
  width: 10px;
  height: 15px;
}

.blue-icon {
  background-color: #e6f4ff;
  color: #1890ff;
}

.green-icon {
  background-color: #e6fff0;
  color: #18a058;
}

.content {
  flex: 1;
}

.title {
  font-size: 14px;
  color: #333;
  overflow: hidden;
  max-width: 60%;
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
}

.subtitle {
  font-size: 12px;
  color: #999;
  max-width: 250px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
