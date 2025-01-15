<script setup>
import { computed, ref } from "vue";

const successTasks = ref([]);

const unfinishedTasks = ref([]);

const text = ref("");

const addTask = () => {
  if (text.value) {
    unfinishedTasks.value.push(text.value);
  }
  text.value = "";
};

const completeTask = (task, index) => {
  if (unfinishedTasks.value[index] === task) {
    unfinishedTasks.value.splice(index, 1);
    successTasks.value.push(task);
  }
};

const deleteTask = (task, index) => {
  if (successTasks.value[index] === task) {
    successTasks.value.splice(index, 1);
  }
};

const resetTask = (task, index) => {
  if (successTasks.value[index] === task) {
    successTasks.value.splice(index, 1);
    unfinishedTasks.value.push(task);
  }
};
</script>
<template>
  <div class="box">
    <h1>最近完成的任务</h1>

    <div class="form">
      <input
        type="text"
        placeholder="添加一个任务"
        v-model="text"
        @keyup.enter="addTask()"
      />
      <button @click="addTask()">添加</button>
    </div>

    <div class="OKBox">
      <span>未完成 {{ unfinishedTasks.length }} 项</span>
      <ul>
        <li v-if="unfinishedTasks.length === 0">你没有添加任何任务</li>

        <li v-for="(task, index) in unfinishedTasks" :key="index">
          {{ task }}
          <div class="rightBtn">
            <button @click="completeTask(task, index)">完成任务</button>
          </div>
        </li>
      </ul>
    </div>

    <div class="NOOKBox">
      <span>已完成 {{ successTasks.length }} 项</span>
      <ul>
        <li v-if="successTasks.length === 0">你没有添加任何任务</li>

        <li v-for="(task, index) in successTasks" :key="index">
          {{ task }}

          <div class="rightBtn">
            <button @click="deleteTask(task, index)">删除任务</button>
            <button @click="resetTask(task, index)">重置任务</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.box {
  width: 300px;
  height: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 50px auto;
  padding: 10px 40px;
}

.box h1 {
  margin: 20px 0;
}

.form input,
button {
  padding: 3px 8px;
  margin: 0 7px 7px 0;
}

.OKBox,
.NOOKBox {
  margin: 20px 0;
}

ul li {
  display: flex;
  justify-content: space-between;
}

.box .OKBox ul li {
  position: relative;
  padding-left: 30px;
}

.box .OKBox ul li::before {
  content: "*";
  position: absolute;
  left: 10px;
  color: green;
}

.NOOKBox ul {
  list-style-type: none;
  padding: 0;
}

.NOOKBox li {
  position: relative;
  text-decoration: line-through;
  padding-left: 30px;
}

.box .NOOKBox li::before {
  content: "√";
  position: absolute;
  left: 10px;
  color: green;
}
</style>
