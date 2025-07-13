<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button @click="$emit('close')"
                class="absolute top-2 right-2 text-gray-400 hover:text-black text-2xl">&times;</button>
            <h2 class="text-xl font-bold mb-4 text-center">忘记密码</h2>
            <form action="">
                <div class="mb-4">
                    <label for="phone" class="block text-sm font-medium text-gray-700">账号</label>
                    <input type="tel" id="phone" placeholder="请输入账号/手机号" required
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div class="mb-4">
                    <label for="phone" class="block text-sm font-medium text-gray-700">手机号</label>
                    <input type="tel" id="phone" placeholder="请输入手机号" required
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div class="mb-4">
                    <label for="verification-code" class="block text-sm font-medium text-gray-700">验证码</label>
                    <input type="text" id="verification-code" placeholder="请输入验证码" required
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    <button type="button"
                        class="block border-2 border-gray-300 rounded-md shadow-sm p-2">点击获得验证码</button>
                </div>
                <div class="mb-4">
                    <label for="new-password" class="block text-sm font-medium text-gray-700">新密码</label>
                    <input type="password" placeholder="请输入新密码" id="new-password" required
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div class="mb-4">
                    <label for="confirm-password" class="block text-sm font-medium text-gray-700">确认新密码</label>
                    <input type="password" placeholder="请再次输入新密码" id="confirm-password" required
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <button type="submit"
                    class="w-full text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
                    提交
                </button>
            </form>
        </div>

    </div>
</template>