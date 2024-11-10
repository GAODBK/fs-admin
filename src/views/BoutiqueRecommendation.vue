<script setup>
import { computed, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useBookStore } from '@/stores/BookData'
import pop from './IntroducingForms.vue'

const $bookStore = useBookStore()
//函数直接解构
const { isShowAll } = $bookStore
//数据需要响应式解构

const filterResults = computed(() => $bookStore.filterResults)
const hideBox = ref(true)
const bookInformations = ref(null)

const goToCheck = item => {
  bookInformations.value = item
}

const colseFrom = () => {
  bookInformations.value = null
}
</script>

<template>
  <div class="box w">
    <div class="box-hd">
      <label @click="isShowAll()">查看全部</label>
      <h3 id="shoplist">精品推荐</h3>
    </div>
    <div class="box-bd">
      <ul class="clearfix">
        <li v-for="(item, index) in filterResults" :key="index">
          <div class="goodItem" @click="goToCheck(item)">
            <a class="img_box">
              <img
                loading="lazy"
                :src="`src/assets/${item.book_id}.jpg`"
                alt=""
              />
            </a>
            <a class="review">{{ item.name }} ({{ item.introduction }})</a>
            <div class="appraise">书籍信息：{{ item.ISBN }}</div>
            <div class="upload_items_price">
              <i>$</i>
              <span>{{ item.price }}</span>
            </div>
          </div>
        </li>
        <li v-if="filterResults.length > 20">
          <div class="goodItem">
            <a class="img_box">
              <img loading="lazy" src="../assets/Book1.jpg" alt="" />
            </a>
            <a class="review"
              >人生海海（麦家重磅力作，莫言、董卿盛赞，连续两年高居畅销榜，发行量超200万册）</a
            >
            <div class="appraise">来自于 117384232 的评价</div>
            <div class="upload_items_price"><i>￥</i><span>599.00</span></div>
          </div>
        </li>
      </ul>
      <button @click="isShowAll()">点击加载更多</button>
    </div>
  </div>

  <pop v-if="bookInformations" :bookInformations @colseFrom="colseFrom()" />
</template>
