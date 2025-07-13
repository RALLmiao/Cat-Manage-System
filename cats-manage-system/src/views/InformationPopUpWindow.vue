<template>
  <div class="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50">
    <div class="relative flex bg-white rounded-lg p-6 w-full h-[600px] max-w-4xl">
      <div class="bg-gray-100 w-[500px] h-[550px] rounded-lg shadow-sm flex items-center justify-center object-cover">
        <img src="@/assets/创创.jpg" alt="创创" class="rounded-lg shadow-md w-[400px] h-[500px]">
      </div>
      <div class="bg-white rounded-xl shadow-md overflow-hidden cat-card flex-1 ml-6">
        <div @click="$emit('close')" class="cursor-pointer text-gray-400 absolute top-2 right-2 text-2xl hover:text-black">
          &times;
        </div>
        <div class="p-6 m-2">
          <div class="flex items-center">
            <h3 class="text-lg font-bold text-black">创创</h3>
            <i class="fa fa-mars text-blue-600 ml-2"></i>
          </div>
          <div class="text-orange-500 text-lg mb3">
            <strong>已绝育</strong><br>
            <p>入园时间 ： 2024-12-10</p>
            <p>猫德 ： 软萌好盘，见人就蹭，喜欢贴贴</p>
            <p>活动区域 ： 31号楼附近</p>
            <p>猫生经历： </p>
            <p>饮食习惯：</p>
            <p>趣事：</p>
            <p>糗事：</p>
            <p>领养情况：暂未领养</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>