<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <div class="absolute top-2 right-2">
                <button @click="$emit('close')" class="text-gray-400 hover:text-black text-2xl">&times;</button>
            </div>
            <h2 class="text-xl font-bold mb-4 text-center">请填写以下信息</h2>
            <form action="">
                <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-gray-700">姓名</label>
                    <input type="text" id="name" required
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div class="mb-4">
                    <label for="class" class="block text-sm font-medium text-gray-700">班级</label>
                    <input type="text" id="class" required
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div class="mb-4">
                    <label for="phone" class="block text-sm font-medium text-gray-700">电话</label>
                    <input type="tel" id="phone" required
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div class="mb-4">
                    <label for="weichart" class="block text-sm font-medium text-gray-700">微信号</label>
                    <input type="text" required id="weichart"
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-1">文件添加</label>
                    <label for="file-upload" class="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4 cursor-pointer hover:border-blue-400 transition">
                        <span class="text-gray-400 text-sm">点击或拖拽图片/文件到此处上传(支持JPG/PNG,不超过10MB)</span>
                        <input id="file-upload" type="file" required
                            accept="image/*,.pdf,.doc,.docx" multiple
                            class="hidden" />
                    </label>
                </div>
                <div class="mb-4">
                    <label for="message" class="block text-sm font-medium text-gray-700">留言</label>
                    <textarea id="message" required
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
                </div>
                <div class="flex justify-center">
                    <button type="submit"
                        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
                        提交
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>