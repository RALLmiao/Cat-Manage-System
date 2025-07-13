<template>
  <div id="app" class="bg-light text-dark font-sans antialiased">
    <!-- 只在需要时显示导航栏 -->
    <Headers />
    <main class="pt-16">
      <router-view />
      <TextPopUpWindow v-if="showTextPopup" @close="closeTextPopup" />
      <FilePopUpWindow v-if="showFilePopup" @close="closeFilePopup" />
      <LoadingPage v-if="showLoadingPage" @close="closeLoadingPage" />
      <RegisterPage v-if="showRegisterPage" @close="closeRegisterPage" />
      <ForgetPassword v-if="showForgetPassword" @close="closeForgetPassword" />
      <InformationPopUpWindow v-if="showInformationPopup" @close="closeInformationPopup" />
      <PublishPicturesPopUpWindow v-if="showPublishPicturesPopup" @close="closePublishPicturesPopup" />
    </main>
    
    <!-- 页脚 -->
    <footer class="bg-gray-700 text-white py-8">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center mb-4">
              <img src="@/assets/徽枳.png" alt="徽枳" class="w-10 h-10 mr-3 rounded-full border border-primary">
              <div>
                <h3 class="text-lg font-bold">喵工大罐头事务所</h3>
                <p class="text-xs mt-1 text-gray-400 text-left">猫咪管理系统</p>
              </div>
            </div>
            <div>
              <p class="text-sm text-gray-400">温暖校园，与猫同行</p>
            </div>
            <div class="flex flex-row gap-4 mt-4 text-gray-400">
              <i class="fa fa-weixin"></i>
              <i class="fa fa-qq"></i>
              <i class="fa fa-weibo"></i>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-bold text-white">快速链接</h4>
            <ul class="mt-2 space-y-2">
              <li><a href="#home" class="text-gray-400 hover:text-white transition-colors">首页</a></li>
              <li><a href="#identify" class="text-gray-400 hover:text-white transition-colors">猫咪档案</a></li>
              <li><a href="#health" class="text-gray-400 hover:text-white transition-colors">健康管理</a></li>
              <li><a href="#pictures" class="text-gray-400 hover:text-white transition-colors">照片墙</a></li>
              <li><a href="#adoption" class="text-gray-400 hover:text-white transition-colors">申请领养</a></li>
              <li><a href="#volunteer" class="text-gray-400 hover:text-white transition-colors">志愿者服务</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-bold text-white">联系我们</h4>
            <ul class="mt-2 space-y-2">
              <li class="flex items-center">
                <i class="fa fa-map-marker"></i>
                <p class="pl-3 text-gray-400">上海市浦东新区金海路2360号</p>
              </li>
              <li class="flex items-center">
                <i class="fa fa-envelope"></i>
                <p class="pl-3 text-gray-400">1194720721@qq.com</p>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-bold pb-2">订阅更新</h4>
            <p class="text-gray-400">获取猫咪最新消息和动态</p>
          </div>
        </div>
      </div>
      <div class="border-t border-black py-4 mt-8">
        <p class="text-gray-400 text-center py-10">© 2025 喵工大罐头事务所猫咪管理系统. 版权所有.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Headers from './components/Headers.vue'
import TextPopUpWindow from './views/TextPopUpWindow.vue'
import FilePopUpWindow from './views/FilePopUpWindow.vue'
import LoadingPage from './views/LoadingPage.vue'
import RegisterPage from './views/RegisterPage.vue'
import InformationPopUpWindow from './views/InformationPopUpWindow.vue'
import ForgetPassword from './views/ForgetPassword.vue'
import PublishPicturesPopUpWindow from './views/PublishPicturesPopUpWindow.vue'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'



const route = useRoute()
const router = useRouter()
const showTextPopup = computed(() => route.query.textpopup === 'true')
const showFilePopup = computed(() => route.query.filepopup === 'true')
const showLoadingPage = computed(() => route.query.loadingpage === 'true')
const showRegisterPage = computed(() => route.query.registerpage === 'true')
const showForgetPassword = computed(() => route.query.forgetpassword === 'true')
const showInformationPopup = computed(() => route.query.informationpopup === 'true')
const showPublishPicturesPopup = computed(() => route.query.publishpopup === 'true')

function closeTextPopup() {
  const { textpopup, ...rest } = route.query
  router.replace({ query: { ...rest } })
}

function closeFilePopup() {
  const { filepopup, ...rest } = route.query
  router.replace({ query: { ...rest } })
}

function closeLoadingPage() {
  const { loadingpage, ...rest } = route.query
  router.replace({ query: { ...rest } })
}

function closeRegisterPage() {
  const { registerpage, ...rest } = route.query
  router.replace({ query: { ...rest } })
}

function closeForgetPassword() {
  const { forgetpassword, ...rest } = route.query
  router.replace({ query: { ...rest } })
}

function closeInformationPopup(){
  const {informationpopup,...rest}=route.query
  router.replace({query:{...rest}})
}

function closePublishPicturesPopup(){
  const {publishpopup,...rest}=route.query
  router.replace({query:{...rest}})
}

</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>