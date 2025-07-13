<template>
  <div class="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50 ">
    <div class="relative  bg-white rounded-lg w-[600px] h-[400px] ">
        <div class="absolute top-2 right-2">
                <button @click="$emit('close')" class="text-gray-400 hover:text-black text-2xl">&times;</button>
            </div>
        <form action="" class="flex flex-col w-full h-full">
            <div class="p-4">
                <label for="description" class="font-medium block text-center mb-2" >发表看法与描述</label>
                <textarea id="description" rows="5" placeholder="为你的照片添加几句描述吧" class="block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
            </div>
            <div class="p-4">
                <label for="file-upload" class="block font-medium text-center mb-2">上传照片</label>
                 <label for="file-upload" class="block  items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4 cursor-pointer hover:border-blue-400 transition">
                        <span class="text-gray-400 text-sm">点击或拖拽图片到此处上传(支持JPG/PNG,不超过10MB)</span>
                        <input id="file-upload" type="file" required
                            accept="image/*" multiple
                            class="hidden" />
                    </label>
            </div>
            <button class="bg-blue-500 text-white font-medium mx-3 py-2 px-8 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all mt-4">
          发布照片
        </button>
        </form>
    </div>
  </div>
</template>