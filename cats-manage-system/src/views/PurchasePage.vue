<template>
    <section id="purchase" class="py-20 bg-gradient-to-br from-blue-200 to-green-200 bg-cover ">
        <div class="text-center mb-12">
            <h2 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-black mb-4">购买页面</h2>
            <p class="text-dark text-lg">在这里，您可以购买各式猫咪相关饰品。</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 py-5">
            <div @click="goToProductDetail" class="bg-white rounded-lg shadow-md overflow-hidden border-2 border-transparent hover:border-primary hover:shadow-lg transition-all">
                <img src="@/assets/最肥.jpg" alt="猫咪玩偶" class="w-full h-80 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-bold text-black mb-2">钱包黑洞型进食装置</h3>
                    <p class="text-sm text-gray-600 mb-2 ">将他带回家，让钱包体验被掏空的感觉。</p>
                   <p class="text-lg text-gray-600 mb-4">特价：<span class="text-orange-500 font-bold mb-4 text-4xl">￥ 15.5</span></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
function goToProductDetail() {
    window.open('/product-detail', '_blank');
}
</script>