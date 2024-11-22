<template>
    <div>
      <h2>书籍列表</h2>
      <ul>
        <li v-for="(book, index) in books" :key="index">{{ book.name }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const books = ref([])
  
  onMounted(async () => {
    const response = await fetch('src/json/经典.json')
    const data = await response.json()
    books.value = Object.values(data)
    books.value = books.value.slice(10, 30)
  })
  </script>
  