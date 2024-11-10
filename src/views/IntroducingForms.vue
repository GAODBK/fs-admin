<script setup>
import { inject } from 'vue'

const props = defineProps(['bookInformations'])
const emit = defineEmits(['colseFrom']) //, "addData"

const selectedProducts = inject('selectedProducts')

const closeTheIntroductionForm = () => emit('colseFrom')

const addToCart = book => {
  if (!selectedProducts.find(Products => Products.book_id === book.book_id))
    selectedProducts.push({
      book_id: book.book_id,
      author: book.author,
      name: book.name,
      ISBN: book.ISBN,
      price: book.price,
      inventoryQuantity: book.number,
      shoppingQuantity: 1,
    })
}
</script>

<template>
  <div>
    <div class="blackInterface" @click="closeTheIntroductionForm()">
      <div class="blackWindow" @click.stop>
        <div class="btn" @click="closeTheIntroductionForm()"></div>
        <div class="left">
          <img :src="`src/assets/${bookInformations.book_id}.jpg`" />
        </div>

        <div class="right">
          <h4>{{ bookInformations.name }}</h4>

          <p>价格：<span> ￥456</span></p>
          <p>名称：{{ bookInformations.introduction }}</p>
          <p>著者: {{ bookInformations.author }}</p>
          <p>书籍语言: {{ bookInformations.language }}</p>
          <p>上架时间: {{ bookInformations.pub_date }}</p>
          <p>出版社：{{ bookInformations.publish }}</p>

          <p>已售: 65</p>
          <p>
            书籍信息：
            <span style="color: red; border: 1px solid #ff0000">
              {{ bookInformations.ISBN }}
            </span>
          </p>

          <input
            type="submit"
            value="立即订购"
            class="submit"
            @click="addToCart(bookInformations)"
          />

          <p>温馨提示:不满意就退款 电话订购: 400-9700-910</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.submit {
  width: 100px;
  height: 40px;
  background: #37a1fe;
  border: 0;
  margin-right: 20px;
}

.left {
  float: left;
  width: 650px;
  height: 650px;
  display: flex;
  justify-content: center;
}

.left img {
  max-width: 550px;
  height: 650px;
  object-fit: cover;
  border-radius: 5px;
  display: block;
}

.right {
  float: inline-end;
  width: calc(1200px - 650px);
}

.right p {
  margin: 10px 0;
}

.right p span {
  color: red;
  font-size: 20px;
}

.btn::before,
.btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 2px;
  background-color: #000;
}

.btn::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.btn::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.btn:hover::before,
.btn:hover::after {
  background-color: #37a1fe;
}

.qty {
  width: 2em;
  text-align: center;
  font-size: 1em;
  padding: 0.25em;
  margin: 1em 0;
}

.blackInterface {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.btn:focus .blackInterface {
  animation: 2.5s cubic-bezier(0.25, 1, 0.3, 1) tuichu both;
}

.blackWindow {
  background-color: rgb(245, 245, 251);
  font-size: 24px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
  /* text-align: center; */
  /* position: relative; */

  width: 1200px;
  height: 700px;
}
</style>
