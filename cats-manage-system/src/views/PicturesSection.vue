<template>
  <section id="pictures" class="py-20 bg-gradient-to-br from-primary/60 to-secondary/40">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-black mb-4">校园猫咪照片墙</h2>
        <p class="text-dark text-lg">猫片收藏计划 ：捕获随处刷新的毛茸茸NPC</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        <!--照片卡片1-->
        <div class="rounded-lg overflow-hidden shadow-md">
          <img src="@/assets/cat1.jpg" alt="cat1" class="w-full h-80 object-cover">
          <div class="p-4 bg-gray-300 rounded-r-md overflow-hidden">
            <p class="text-sm text-gray-600">可爱的小猫咪，喜欢打盹。</p>
            <div class="items-start flex gap-4 mt-2">
              <button @click="increLikes" class="text-red-500">
                <i class="fa fa-heart"></i>
                <span class="pl-2">{{ nums }}</span>
              </button>
              <button class="text-blue-500">
                <i class="fa fa-comment"></i>
                <span class="pl-2">{{ nums }}</span>
              </button>
            </div>
          </div>
        </div>
        <!--照片卡片2-->
        <div class="rounded-lg overflow-hidden shadow-md">
          <img src="@/assets/cat2.jpg" alt="猫咪照片2" class="w-full h-80 object-cover">
          <div class="p-4 bg-gray-300 rounded-r-md overflow-hidden">
            <p class="text-sm text-gray-600">活泼的小猫咪，喜欢玩耍。</p>
            <div class="items-start flex gap-4 mt-2">
              <button class="text-red-500">
                <i class="fa fa-heart"></i>
                <span class="pl-2">{{ nums }}</span>
              </button>
              <button class="text-blue-500">
                <i class="fa fa-comment"></i>
                <span class="pl-2">{{ nums }}</span>
              </button>
            </div>
          </div>
        </div>
        <!--照片卡片3-->
        <div class="rounded-lg overflow-hidden shadow-md">
          <img src="@/assets/cat3.jpg" alt="猫咪照片3" class="w-full h-80 object-[50%_15%] object-cover">
          <div class="p-4 bg-gray-300 rounded-r-md overflow-hidden">
            <p class="text-sm text-gray-600">调皮的小猫咪，喜欢爬高。</p>
            <div class="items-start flex gap-4 mt-2">
              <button class="text-red-500">
                <i class="fa fa-heart"></i>
                <span class="pl-2">{{ nums }}</span>
              </button>
              <button class="text-blue-500">
                <i class="fa fa-comment"></i>
                <span class="pl-2">{{ nums }}</span>
              </button>
            </div>
          </div>
        </div>
        <!--照片卡片4-->
        <div class="rounded-lg overflow-hidden shadow-md">
          <img src="@/assets/cat4.jpg" alt="猫咪照片4" class="w-full h-80 object-cover">
          <div class="p-4 bg-gray-300 rounded-r-md overflow-hidden">
            <p class="text-sm text-gray-600">乖巧的小猫咪，喜欢撒娇。</p>
            <div class="items-start flex gap-4 mt-2">
              <button class="text-red-500">
                <i class="fa fa-heart"></i>
                <span class="pl-2">{{ nums }}</span>
              </button>
              <button class="text-blue-500">
                <i class="fa fa-comment"></i>
                <span class="pl-2">{{ nums }}</span>
              </button>
            </div>
          </div>
        </div>
        <!--照片卡片5-->
        <div class="rounded-lg overflow-hidden shadow-md">
          <img src="@/assets/cat5.jpg" alt="猫咪照片5" class="w-full h-80 object-[50%_5%] object-cover">
          <div class="p-4 bg-gray-300 rounded-r-md overflow-hidden">
            <p class="text-sm text-gray-600">温柔的小猫咪，喜欢依偎。</p>
            <div class="items-start flex gap-4 mt-2">
              <button class="text-red-500">
                <i class="fa fa-heart"></i>
                <span class="pl-2">{{ nums }}</span>
              </button>
              <button class="text-blue-500">
                <i class="fa fa-comment"></i>
                <span class="pl-2">{{ nums }}</span>
              </button>
            </div>
          </div>
        </div>
        <!--照片卡片6-->
        <div class="rounded-lg overflow-hidden shadow-md">
          <img src="@/assets/cat6.jpg" alt="猫咪照片6" class="w-full h-80 object-cover">
          <div class="p-4 bg-gray-300 rounded-r-md overflow-hidden">
            <p class="text-sm text-gray-600">活泼的小猫咪，喜欢拍照。</p>
            <div class="items-start flex gap-4 mt-2">
              <button class="text-red-500">
                <i class="fa fa-heart"></i>
                <span class="pl-2">{{ nums }}</span>
              </button>
              <button class="text-blue-500">
                <i class="fa fa-comment"></i>
                <span class="pl-2">{{ nums }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-8 flex justify-center">
        <button @click="openPictures" class="bg-white text-primary border border-primary font-medium py-2 px-6 rounded-full shadow-md hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all mr-4">
          查看更多照片
          <i class="fa fa-chevron-right"></i>
        </button>
        <button @click="publishpopup" class="bg-white text-primary border border-primary font-medium py-2 px-6 rounded-full shadow-md hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all">
          分享你拍摄的猫咪
          <i class="fa fa-plus"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const openPictures = () => {
  window.open('/pictures', '_blank');
};

const publishpopup = () => {
  router.replace({ query: { ...route.query, publishpopup: 'true' } })
}
</script>

<script>
export default {
  data() {
    return {
      nums: 0
    };
  },
  methods: {
    increLikes() {
      this.nums++;
    },
    cancelLikes() {
      if (this.nums > 0) {
        this.nums--;
      }
    }
  },
};
</script>
<style scoped>
/* 局部样式 */
</style>