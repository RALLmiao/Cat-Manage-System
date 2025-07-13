<template>
  <section id="chart" class="py-20 bg-gradient-to-br from-orange-300 to-red-400">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-4">排行榜</h2>
      <p class="text-white text-lg">喵星人排行榜：看看谁是最受欢迎的猫咪</p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 py-10">
      <div>
        <div class="flex items-center mb-6 ml-20">
          <i class="fa fa-trophy text-yellow-400"></i>
          <h3 class="text-black text-center font-bold">上海第二工业大学最肥猫咪</h3>
        </div>
        <div class="rounded-lg shadow-md overflow-hidden bg-white">
          <img src="@/assets/最肥.jpg" alt="最肥猫咪" class="w-full h-80 object-cover object-center">
          <div class="p-4">
            <p class="text-dark text-sm">姓名 ：学长</p>
            <p class="text-gray-600">体重：抱不动</p>
            <p class="text-gray-600">日常 ：吃喝拉撒以及睡觉</p>
          </div>
        </div>
      </div>
      <div>
        <div class="flex items-center mb-6 ml-20">
          <i class="fa fa-trophy text-yellow-400"></i>
          <h3 class="text-black text-center font-bold">上海第二工业大学最能吃猫咪</h3>
        </div>
        <div class="rounded-lg shadow-md overflow-hidden bg-white">
          <img src="@/assets/最肥.jpg" alt="最能吃猫咪" class="w-full h-80 object-cover object-center">
          <div class="p-4">
            <p class="text-dark text-sm">姓名 ：学长</p>
            <p class="text-gray-600">食量：一直吃</p>
            <p class="text-gray-600">日常 ：吃喝拉撒以及睡觉</p>
          </div>
        </div>
      </div>
      <div>
        <div class="flex items-center mb-6 ml-20">
          <i class="fa fa-trophy text-yellow-400"></i>
          <h3 class="text-black text-center font-bold">上海第二工业大学最能睡猫咪</h3>
        </div>
        <div class="rounded-lg shadow-md overflow-hidden bg-white">
          <img src="@/assets/最肥.jpg" alt="最能睡猫咪" class="w-full h-80 object-cover object-center">
          <div class="p-4">
            <p class="text-dark text-sm">姓名 ：学长</p>
            <p class="text-gray-600">睡眠时长 ： 一直睡</p>
            <p class="text-gray-600">日常 ：吃喝拉撒以及睡觉</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 排行榜组件逻辑
</script>

<style scoped>
/* 局部样式 */
</style>