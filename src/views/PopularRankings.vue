<script setup>
import { ref, onMounted } from "vue";

const books1 = ref([]);
const books2 = ref([]);
const books3 = ref([]);

let theFirst1 = ref([]);
let theFirst2 = ref([]);
let theFirst3 = ref([]);

onMounted(async () => {
  const response1 = await fetch("/public/json/科幻.json");
  const data1 = await response1.json();
  books1.value = Object.values(data1).slice(10, 23);
  theFirst1.value = Object.values(data1)[3];
  
  const response2 = await fetch("/public/json/经典.json");
  const data2 = await response2.json();
  books2.value = Object.values(data2).slice(10, 23);
  theFirst2.value = Object.values(data2)[3];
  
  const response3 = await fetch("/public/json/近代史.json");
  const data3 = await response3.json();
  books3.value = Object.values(data3).slice(10, 23);
  theFirst3.value = Object.values(data3)[3];
});
</script>

<template>
  <div class="TopRank w" id="TopRank" style="height: 650px">
    <h3>热门排行</h3>
    <div class="box-ban">
      <div class="rank-list">
        <h3 class="wrap-title">"科幻榜"</h3>
        <table class="tb3">
          <tbody>
            <tr v-if="books1.length === 0">
              <th colspan="3" class="first_book">
                <div class="th_left_box">
                  <span> NO.1 </span>
                  <h2>择日飞升</h2>
                  <h3>624622票</h3>
                  <span style="display: inline-block">仙侠·宅猪</span>
                </div>
                <div class="th_right">
                  <img src="/public/image/Book2.png" />
                </div>
              </th>
            </tr>
            <tr v-else>
              <th colspan="3" class="first_book">
                <div class="th_left_box">
                  <span> NO.1 </span>
                  <h2>
                    <a :href="theFirst1.url" style="color: black;">{{ theFirst1.name }}</a>
                  </h2>
                  <h3>{{ theFirst1.avg_score }}分</h3>
                </div>
                <div class="th_right">
                  <img :src="`/public/image/${theFirst1.name}.jpg`" />
                </div>
              </th>
            </tr>
            <tr class="th_left_box_auto" v-for="(book, index) in books1" :key="index">
              <td>{{ index + 2 }}</td>
              <td>
                <a :href="book.url">{{ book.name }}</a>
              </td>
              <td>{{ book.rating_people }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="rank-list">
        <h3 class="wrap-title">"经典榜"</h3>
        <table class="tb3">
          <tbody>
            <tr v-if="books1.length === 0">
              <th colspan="3" class="first_book">
                <div class="th_left_box">
                  <span> NO.1 </span>
                  <h2>择日飞升</h2>
                  <h3>624622票</h3>
                  <span style="display: inline-block">仙侠·宅猪</span>
                </div>
                <div class="th_right">
                  <img src="/public/image/Book2.png" />
                </div>
              </th>
            </tr>
            <tr v-else>
              <th colspan="3" class="first_book">
                <div class="th_left_box">
                  <span> NO.1 </span>
                  <h2>
                    <a :href="theFirst2.url" style="color: black;">{{ theFirst2.name }}</a>
                  </h2>
                  <h3>{{ theFirst2.avg_score }}分</h3>
                </div>
                <div class="th_right">
                  <img :src="`/public/image/${theFirst2.name}.jpg`" />
                </div>
              </th>
            </tr>
            <tr class="th_left_box_auto" v-for="(book, index) in books2" :key="index">
              <td>{{ index + 2 }}</td>
              <td>
                <a :href="book.url">{{ book.name }}</a>
              </td>
              <td>{{ book.rating_people }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="rank-list">
        <h3 class="wrap-title">"近代史榜"</h3>
        <table class="tb3">
          <tbody>
            <tr v-if="books1.length === 0">
              <th colspan="3" class="first_book">
                <div class="th_left_box">
                  <span> NO.1 </span>
                  <h2>择日飞升</h2>
                  <h3>624622票</h3>
                  <span style="display: inline-block">仙侠·宅猪</span>
                </div>
                <div class="th_right">
                  <img src="/public/image/Book2.png" />
                </div>
              </th>
            </tr>
            <tr v-else>
              <th colspan="3" class="first_book">
                <div class="th_left_box">
                  <span> NO.1 </span>
                  <h2>
                    <a :href="theFirst3.url" style="color: black;">{{ theFirst3.name }}</a>
                  </h2>
                  <h3>{{ theFirst3.avg_score }}分</h3>
                </div>
                <div class="th_right">
                  <img src="/public/image/33.jpg" />
                </div>
              </th>
            </tr>
            <tr class="th_left_box_auto" v-for="(book, index) in books3" :key="index">
              <td>{{ index + 2 }}</td>
              <td>
                <a :href="book.url">{{ book.name }}</a>
              </td>
              <td>{{ book.rating_people }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
