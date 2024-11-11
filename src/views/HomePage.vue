<script setup>
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { useBookStore } from '@/stores/BookData'
import { inject } from 'vue'

const route = useRoute()
const $bookStore = useBookStore()

// 初始化时获取当前路由参数值
$bookStore.setRouteValue(route.path) // 假设路由参数名为 "value"

// 监听路由更新
onBeforeRouteUpdate(to => {
  $bookStore.setRouteValue(to.path.replace(/^\/fs-admin/, '')) // 在路由变化时更新Pinia的状态
})

const selectedProducts = inject('selectedProducts')
</script>

<template>
  <div class="banner">
    <!-- 版心 -->
    <div class="w">
      <div class="subnav">
        <ul>
          <li>
            <RouterLink to="/fs-admin/foreignNovels"
              >外国小说 <span> &gt; </span></RouterLink
            >
          </li>
          <li>
            <RouterLink to="/fs-admin/ContemporaryChineseNovels"
              >中国当代小说 <span> &gt; </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/fs-admin/socialFiction"
              >社会小说 <span> &gt; </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/fs-admin/detectiveNovel"
              >侦探/悬疑/推理小说 <span> &gt; </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/fs-admin/scienceFiction"
              >科幻小说 <span> &gt; </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/fs-admin/primaryAndSecondarySchoolReading"
              >中小学阅读<span> &gt; </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/fs-admin/collegeEntranceExaminationMaterials"
              >高考资料<span> &gt; </span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- course 课程表模块 -->
      <div class="course">
        <h2 id="Myshopcar">我的购物车</h2>

        <div class="bd">
          <ul>
            <li v-for="(item, index) in selectedProducts" :key="index">
              <h4>《{{ item.name }}》</h4>
              <p>——{{ item.author }}</p>
            </li>

            <li v-if="selectedProducts.length === 0">您还没有添加任何商品</li>
          </ul>

          <router-link to="/fs-admin/cart" class="more">全部商品</router-link>
        </div>
      </div>
    </div>
  </div>

  <RouterView />
</template>
