<template>
  <header class="fixed w-full top-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-sm">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- logo和标题 -->
        <div class="flex items-center">
          <div class="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-primary">
            <img src="@/assets/徽枳.png" alt="FLAG" class="w-full h-full object-contain">
          </div>
          <div>
            <h1 class="text-xl font-bold text-dark">喵工大罐头事务所</h1>
            <p>猫咪管理系统</p>
          </div>
        </div>
        <!-- 导航 -->
        <div v-if="showNavbar">
          <nav class="hidden space-x-8 md:flex">
            <a href="#home" class="text-dark hover:text-primary font-medium transition-colors">首页</a>
            <a href="#identify" class="text-dark hover:text-primary font-medium transition-colors">猫咪档案</a>
            <a href="#chart" class="text-dark hover:text-primary font-medium transition-colors">排行榜</a>
            <a href="#health" class="text-dark hover:text-primary font-medium transition-colors">健康管理</a>
            <a href="#pictures" class="text-dark hover:text-primary font-medium transition-colors">照片墙</a>
            <a href="#adoption" class="text-dark hover:text-primary font-medium transition-colors">申请领养</a>
            <a href="#volunteer" class="text-dark hover:text-primary font-medium transition-colors">志愿者服务/义卖</a>
          </nav>
        </div>
        <div class="hidden md:block">
          <button @click="showLoadingPage" class="bg-primary text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
            <i class="fa fa-user mr-1"></i> 登录/注册
          </button>
        </div>
      </div>

      <!-- 手机端导航 -->
      <div class="md:hidden">
        <button @click="toggleMobileMenu" id="mobile-menu-button" class="text-dark hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
          <i class="fa fa-bars text-xl"></i>
        </button>
      </div>

      <!-- 手机端菜单 -->
      <div v-show="isNavopen" id="mobile-menu" class="md:hidden bg-white border-t">
        <div class="container mx-auto px-4 py-2 space-y-3">
          <a href="#home" class="block px-4 py-2 text-dark hover:bg-primary/5">首页</a>
          <a href="#identify" class="block px-4 py-2 text-dark hover:bg-primary/5">猫咪档案</a>
          <a href="#health" class="block px-4 py-2 text-dark hover:bg-primary/5">健康管理</a>
          <a href="#adoption" class="block px-4 py-2 text-dark hover:bg-primary/5">申请领养</a>
          <a href="#pictures" class="block px-4 py-2 text-dark hover:bg-primary/5">照片墙</a>
          <a href="#volunteer" class="block px-4 py-2 text-dark hover:bg-primary/5">志愿者服务</a>
        </div>
        <div>
          <button
            @click="showLoadingPage"
            class="bg-primary text-white w-full font-medium py-2 px-6 rounded-full shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          >
            <i class="fa fa-user mr-1"></i> 登录/注册
          </button>
        </div>
      </div>
    </div>
  </header>
</template>


<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue' 

const router = useRouter()
const route = useRoute()
const showNavbar = computed(() => !route.meta.hidenavbar)

const showLoadingPage = () => {
    router.replace({ query: { ...route.query, loadingpage: 'true' } })
}

const isNavopen = ref(false)
const toggleMobileMenu = () => {
  isNavopen.value = !isNavopen.value
}
</script>