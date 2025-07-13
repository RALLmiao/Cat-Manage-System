<template>
  <div class="min-h-screen bg-light text-dark font-sans antialiased">
    <header class="fixed w-full top-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-sm">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!--logo和标题-->
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-primary">
              <img src="@/assets/徽枳.png" alt="FLAG" class="w-full h-full object-contain">
            </div>
            <div>
              <h1 class="text-xl font-bold text-dark">喵工大罐头事务所</h1>
              <p>猫咪管理系统</p>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="pt-20"> 
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 class="text-[clamp(3rem,4vw,2.5rem)] font-bold text-black mb-4 text-center">猫咪照片墙</h2>
        <p class="text-gray-600 text-lg text-center">在这里，可以欣赏到猫咪的帅气和可爱瞬间。</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 mb-4">
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
    </main>
  </div>
</template>


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
