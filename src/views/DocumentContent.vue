<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const handleJump = (path) => {
  router.push(path);
};
</script>
<template>
  <div class="doc-page">
    <!-- 顶部导航 -->
    <nav class="top-nav">
      <div class="nav-left">
        <button class="menu-btn" @click="handleJump('/directory/')">☰</button>
        <div class="breadcrumb">
          <span>试题</span>
          <span class="separator">/</span>
          <span>java部分题</span>
        </div>
      </div>
      <div class="nav-right">
        <button class="edit-btn">编辑</button>
        <button class="more-btn">⋮</button>
      </div>
    </nav>

    <!-- 主要内容区 -->
    <div class="content">
      <article class="doc-content">
        <h1>java部分题</h1>

        <section class="question">
          <h2>1. 下列说法正确的是（）</h2>
          <div class="options">
            <div class="option">
              <input type="radio" name="q1" id="q1a" />
              <label for="q1a">A. Java程序经编译后会产生machine code</label>
            </div>
            <div class="option">
              <input type="radio" name="q1" id="q1b" />
              <label for="q1b">B. Java程序经编译后会产生byte code</label>
            </div>
            <div class="option">
              <input type="radio" name="q1" id="q1c" />
              <label for="q1c">C. Java程序只能在Unix操作系统中运行</label>
            </div>
            <div class="option">
              <input type="radio" name="q1" id="q1d" />
              <label for="q1d">D. Java程序必须使用专用的硬件来运行</label>
            </div>
          </div>

          <div class="answer">
            <div class="answer-header">
              <span class="tag">答案</span>
              <span class="text">B</span>
            </div>
            <div class="explanation">
              <p>
                解释：Java源代码经过编译器编译后产生字节码（byte
                code），而不是机器码。字节码是一种中间代码，需要由Java虚拟机（JVM）解释执行。这也是Java跨平台的基础。
              </p>
            </div>
          </div>
        </section>

        <section class="question">
          <h2>2. 以下哪个不是Java的基本数据类型（）</h2>
          <!-- 类似的选项和答案结构 -->
        </section>
      </article>
    </div>
  </div>
</template>

<style lang="css" scoped>
.doc-page {
  height: 100vh;
  background: #fff;
}

.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid #eee;
  background: #fff;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.menu-btn {
  border: none;
  background: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 14px;
}

.separator {
  color: #999;
}

.nav-right {
  display: flex;
  gap: 8px;
}

.edit-btn {
  padding: 6px 16px;
  border: 1px solid #eee;
  border-radius: 4px;
  background: #fff;
  color: #666;
  cursor: pointer;
}

.more-btn {
  padding: 6px 12px;
  border: none;
  background: none;
  color: #666;
  font-size: 18px;
  cursor: pointer;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.doc-content h1 {
  font-size: 24px;
  margin-bottom: 32px;
  color: #333;
}

.question {
  margin-bottom: 40px;
}

.question h2 {
  font-size: 16px;
  color: #333;
  margin-bottom: 16px;
}

.options {
  margin-bottom: 20px;
}

.option {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 0;
}

.option label {
  color: #333;
  line-height: 1.5;
}

.answer {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
}

.answer-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.tag {
  background: #e9ecef;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
}

.text {
  color: #333;
  font-weight: 500;
}

.explanation {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

.explanation p {
  margin: 0;
}
</style>
