<script setup>
const props = defineProps(["isRepository"]);
const emit = defineEmits(["close"]);

const closeSearchBox = () => {
  emit("close");
};
</script>

<template>
  <div @click="closeSearchBox()" :class="{ overlay: isRepository }">
    <div class="dialog" @click.stop v-if="isRepository">
      <div class="dialog-header">
        <h3>新建知识库</h3>
        <button class="close-btn" @click="closeSearchBox()">×</button>
      </div>

      <div class="dialog-content">
        <div class="basic-info">
          <h4>基本信息</h4>

          <div class="input-group">
            <div class="icon-wrapper">
              <i class="document-icon"></i>
            </div>
            <input type="text" class="input-field" placeholder="知识库名称" />
          </div>

          <textarea
            class="description-field"
            placeholder="知识库简介（选填）"
          ></textarea>
        </div>

        <div class="owner-section">
          <h4>新建至</h4>
          <div class="owner-selector">
            <img src="/svg/doctor.svg" class="avatar" />
            <span class="name">瑜浅</span>
            <i class="arrow-down"></i>
          </div>
        </div>

        <button class="create-btn">新建</button>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
}

.dialog {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 480px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.dialog-header {
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.dialog-header h3 {
  margin: 0;
  font-size: 16px;
  color: #333;
}

.close-btn {
  border: none;
  background: none;
  font-size: 20px;
  color: #999;
  cursor: pointer;
}

.dialog-content {
  padding: 24px;
}

.basic-info h4,
.owner-section h4 {
  margin: 0 0 16px;
  font-size: 14px;
  color: #333;
}

.input-group {
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 16px;
}

.icon-wrapper {
  width: 24px;
  height: 24px;
  margin-right: 8px;
  color: #666;
}

.input-field {
  border: none;
  outline: none;
  width: 100%;
  font-size: 14px;
}

.description-field {
  width: 95%;
  height: 100px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 12px;
  resize: none;
  margin-bottom: 24px;
  font-size: 14px;
}

.owner-selector {
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
}

.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
}

.arrow-down {
  margin-left: auto;
  color: #999;
}

.create-btn {
  width: 100%;
  padding: 12px;
  background: #a5dfd3;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 24px;
}

.create-btn:hover {
  background: #8ed0c3;
}
</style>
