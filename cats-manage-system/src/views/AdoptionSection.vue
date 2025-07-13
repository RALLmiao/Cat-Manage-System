<template>
  <section id="adoption" class="py-20 bg-gradient-to-br from-yellow-200 to-blue-200 bg-cover">
    <!--申请领养-->
    <div class="text-center mb-12">
      <h2 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-black mb-4">申请领养</h2>
      <p class="text-dark text-lg">给毛茸茸的小天使一个温暖的家</p>
    </div>
    <div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 px-5 mb-8">
        <div class="rounded-lg shadow-md overflow-hidden">
          <img src="@/assets/领养.png" alt="领养猫咪" class="object-cover">
        </div>
        <form class="bg-white rounded-lg shadow-md p-8 space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">姓名</label>
            <input type="text" id="name" name="name" required class="mt-1 mr-3 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary">
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">邮箱</label>
            <input type="email" id="email" name="email" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary">
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">联系电话</label>
            <input type="tel" id="phone" name="phone" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary">
          </div>
          <div>
            <label for="catname" class="block text-sm font-medium text-gray-700">想领养猫咪名字</label>
            <input type="text" required id="catname" name="catname" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary">
          </div>
          <div>
            <p class="text-gray-700 text-sm">您是否有养猫经历？</p>
            <select name="是否养过猫" id="是否养过猫" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary">
              <option value="">请选择</option>
              <option value="是">是</option>
              <option value="否">否</option>
            </select>
          </div>
          <div>
            <label for="reason" class="block text-sm font-medium text-gray-700">申请理由</label>
            <textarea id="reason" name="reason" rows="3" class="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"></textarea>
          </div>
          <div>
            <label for="address" class="block text-sm font-medium text-gray-700">地址</label>
            <textarea id="address" name="address" rows="3" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"></textarea>
          </div>
          <button type="submit" class="bg-primary text-center text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
            提交申请
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
// 申请领养组件逻辑
</script>

<style scoped>
/* 局部样式 */
</style>