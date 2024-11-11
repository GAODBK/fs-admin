<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { provide, reactive, ref } from 'vue'
import { useBookStore } from '@/stores/BookData'

const bookStore = useBookStore()
const inputText = ref(bookStore.inputText)

// 定义一个方法来更新store中的值
const updateStore = () => {
  bookStore.setInputValue(inputText.value)
}

const selectedProducts = reactive([])

provide('selectedProducts', selectedProducts)
</script>

<template>
  <div class="header w">
    <!-- 导航栏部分 nav -->
    <div class="nav">
      <ul>
        <li><RouterLink to="/fs-admin">首页</RouterLink></li>
        <li>
          <RouterLink to="/fs-admin/WaterfallChart">图库收集</RouterLink>
        </li>
      </ul>
    </div>
    <!-- 搜索模块 -->
    <div class="search">
      <input
        type="text"
        v-model="inputText"
        @input="updateStore"
        placeholder="输入关键词"
        class="el-input"
      />
      <button @click="updateStore" class="el-button">搜索</button>
    </div>
  </div>

  <RouterView />
</template>

<style scoped></style>
