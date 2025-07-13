<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div class="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden relative">
            <button @click="$emit('close')" class="absolute top-2 right-2 text-gray-400 hover:text-black text-2xl">&times;</button>
            <div class="p-6">
                <h2 class="text-2xl font-bold mb-4 text-center">请填写以下信息</h2>
                <form action="">
                    <div class="mb-4">
                        <label for="name" class="block text-sm font-medium text-gray-700">姓名</label>
                        <input  type="text" required id="name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div class="mb-4">
                        <label for="phone" class="block text-sm font-medium text-gray-700">电话</label>
                        <input type="tel" required id="phone" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div class="mb-4">
                        <label for="weichart" class="block text-sm font-medium text-gray-700">微信号</label>
                        <input type="text" required id="weichart" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div class="mb-4">
                        <label for="message" class="block text-sm font-medium text-gray-700">留言</label>
                        <textarea id="message" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
                    </div>
                    <div class="flex justify-center">
                        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
                            提交
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>