<script setup>
const props = defineProps(["isSearchVisible"]);
const emit = defineEmits(["close"]);

const closeSearchBox = () => {
  emit("close");
};
</script>

<template>
  <div @click="closeSearchBox()" :class="{ overlay: isSearchVisible }">
    <div class="search-popup" @click.stop v-if="isSearchVisible">
      <div class="search-header">
        <div class="search-input-wrapper">
          <i class="search-icon">🔍</i>
          <input
            type="text"
            class="search-input"
            placeholder="搜索内容，或输入 > 唤醒更多"
            value="java"
          />
        </div>
        <div class="search-tools">
          <button class="tool-btn">
            <span class="shortcut">⌘</span>
            <span class="shortcut">K</span>
          </button>
          <button class="close-btn">ESC</button>
        </div>
      </div>

      <div class="search-content">
        <div class="search-section">
          <div class="section-header">
            <h3>最近搜索</h3>
            <button class="clear-btn">清除</button>
          </div>
          <ul class="search-list">
            <li class="search-item">
              <i class="history-icon">⏱️</i>
              <span>java部分题</span>
              <span class="item-path">试题 / java部分题</span>
            </li>
            <li class="search-item">
              <i class="history-icon">⏱️</i>
              <span>java环境配置</span>
              <span class="item-path">JAVA / java环境配置</span>
            </li>
          </ul>
        </div>

        <div class="search-section">
          <div class="section-header">
            <h3>建议</h3>
          </div>
          <ul class="search-list">
            <li class="search-item">
              <i class="suggestion-icon">💡</i>
              <span>在"试题"中搜索"java"</span>
            </li>
            <li class="search-item">
              <i class="suggestion-icon">💡</i>
              <span>在"JAVA"中搜索"java"</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
}

.sidebar {
  width: 250px;
  height: 100vh;
  background: #fff;
  border-right: 1px solid #eee;
}

.search-bar {
  padding: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  padding: 8px;
  margin: 0 8px;
  font-size: 14px;
  color: #666;
}

.tools {
  display: flex;
  gap: 4px;
}

.tools button {
  border: none;
  background: none;
  color: #999;
  cursor: pointer;
  padding: 4px;
}

.section {
  padding: 12px 0;
}

.section h3 {
  font-size: 12px;
  color: #999;
  padding: 0 16px;
  margin: 0 0 8px 0;
}

.nav-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-menu li {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
}

.nav-menu li:hover {
  background: #f5f5f5;
}

.icon,
.doc-icon {
  margin-right: 8px;
  font-size: 16px;
  width: 20px;
  text-align: center;
}

.search-popup {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 640px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.search-header {
  padding: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.search-input-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  margin-right: 12px;
}

.search-icon {
  color: #999;
  margin-right: 8px;
}

.search-input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 14px;
  color: #333;
}

.search-tools {
  display: flex;
  gap: 8px;
}

.tool-btn,
.close-btn {
  padding: 4px 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  background: #f5f5f5;
  color: #666;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.shortcut {
  background: #fff;
  padding: 2px 4px;
  border-radius: 3px;
  border: 1px solid #ddd;
}

.search-content {
  padding: 12px;
}

.search-section {
  margin-bottom: 20px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.section-header h3 {
  font-size: 12px;
  color: #999;
  margin: 0;
}

.clear-btn {
  border: none;
  background: none;
  color: #999;
  font-size: 12px;
  cursor: pointer;
}

.search-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.search-item {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
}

.search-item:hover {
  background: #f5f5f5;
}

.history-icon,
.suggestion-icon {
  margin-right: 8px;
  font-size: 16px;
}

.item-path {
  margin-left: auto;
  font-size: 12px;
  color: #999;
}
</style>
