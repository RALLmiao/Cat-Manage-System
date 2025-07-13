<template>
  <section id="home" class="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8">
          <h2 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-black leading-tight mb-4">
            温暖校园<br>
            <span class="text-primary">与猫同行</span>
          </h2>
          <p class="text-lg text-dark mb-8">
            喵工大罐头事务所猫咪管理系统，帮助我们更好地照顾校园里的猫咪朋友们，记录它们的健康状况和生活点滴。
          </p>
          <div class="flex flex-wrap gap-4">
            <button
              @click="openDetails"
              class="bg-primary text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
              <i class="fa fa-paw mr-1"></i>
              查看详细
            </button>
            <button
              class="bg-primary text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
              <a href="#volunteer" class="flex items-center">
                <i class="fa fa-heart mr-1"></i>
                成为志愿者
              </a>
            </button>
          </div>
        </div>
        <div class="md:w-1/2">
          <div class="rounded-2xl overflow-hidden shadow-2xl">
            <img src="@/assets/cat.jpg" alt="校园猫咪">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const openDetails = () => {
  window.open('/details', '_blank');
};

</script>