<template>
  <section id="volunteer" class="py-20 bg-gradient-to-br from-red-200 to-green-200 bg-cover">
    <!--志愿者招募-->
    <div class="text-center mb-12">
      <h2 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-black mb-4">志愿者招募</h2>
      <p class="text-dark text-lg">加入我们，成为毛茸茸小天使的守护者！</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="@/assets/爱心志愿者.png" alt="爱心志愿者" class="w-full h-80 object-cover">
        <div class="p-2">
          <h3 class="text-lg font-bold text-black mb-2">喂食活动</h3>
          <p class="text-sm text-gray-600 mb-4">定时投喂猫咪并且关注食物卫生安全</p>
          <button @click="clicktextbutton" class="bg-primary text-white font-medium py-2 px-4 rounded-full shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
            报名参加
          </button>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="@/assets/摄影志愿者.png" alt="摄影志愿者" class="w-full h-80 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-bold text-black mb-2">摄影活动</h3>
          <p class="text-sm text-gray-600 mb-4">定期拍摄猫咪日常，为我们提供素材</p>
          <button @click="clickfilebutton" class="bg-primary text-white font-medium py-2 px-4 rounded-full shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
            报名参加
            
          </button>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="@/assets/医疗志愿者.png" alt="医疗志愿者" class="w-full h-80 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-bold text-black mb-2">医疗活动</h3>
          <p class="text-sm text-gray-600 mb-4">协助记录猫咪健康状况，喂食药品</p>
          <button @click="clicktextbutton" class="bg-primary text-white font-medium py-2 px-4 rounded-full shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
            报名参加
            
          </button>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="@/assets/义卖创意.jpg" alt="义卖创意" class="w-full h-80 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-bold text-black mb-2">创意活动</h3>
          <p class="text-sm text-gray-600 mb-4">提供你的创意，为义卖提供支持</p>
          <button @click="clickfilebutton" class="bg-primary text-white font-medium py-2 px-4 rounded-full shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
            报名参加
            
          </button>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="@/assets/义卖.png" alt="猫咪饰品义卖" class="w-full h-80 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-bold text-black mb-2">猫咪饰品义卖活动</h3>
          <p class="text-sm text-gray-600 mb-4">把你喜欢的猫咪饰品带回家吧</p>
          <button @click="clickbuybutton" class="bg-primary text-white font-medium py-2 px-4 rounded-full shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
            前往挑选

          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const clicktextbutton = () => {
  router.replace({ query: { ...route.query, textpopup: 'true' } })
}

const clickfilebutton = () => {
  router.replace({ query: { ...route.query, filepopup: 'true' } })
}

const clickbuybutton = () => {
  window.open('/purchase', '_blank');
}
</script>

<style scoped>
/* 局部样式 */
</style>