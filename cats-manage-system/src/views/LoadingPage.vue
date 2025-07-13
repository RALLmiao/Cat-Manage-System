<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            <div class="absolute top-2 right-2">
                <button @click="$emit('close')" class="text-gray-400 hover:text-black text-2xl">&times;</button>
            </div>
            <h2 class="text-xl font-bold mb-4 text-center">登录</h2>
            <form action="">
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">账号</label>
                    <input type="text" required id="username" placeholder="请输入账号/手机号" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-sm font-medium text-gray-700">密码</label>
                    <input type="password" placeholder="请输入密码" required id="password" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <button type="submit"
                        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
                   登录
                </button>
                <div>
                    <p class="mt-4 text-sm text-gray-600 text-center">
                      <a
                        @click.prevent="handleRegisterClick"
                        class="text-blue-500 hover:underline cursor-pointer"
                      >注册新账号</a>
                      <a
                        @click.prevent="handleForgetClick"
                        class="text-blue-500 hover:underline cursor-pointer"
                      > 忘记密码</a>
                    </p>
                    
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>  
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const handleRegisterClick = () => {
  // 只保留 registerpage，移除其它弹窗参数
  router.replace({ query: { registerpage: 'true' } });
  emitClose();
};
const handleForgetClick = () => {
  router.replace({ query: { forgetpassword: 'true' } });
  emitClose();
};

// 兼容 <script setup> 下的 $emit
const emitClose=()=>{
    const emit=defineEmits(['close']);
    emit('close');
}
</script>