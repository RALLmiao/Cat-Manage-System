<template>
  <section id="health" class="py-20 bg-gradient-to-br from-lime-400/40 to-secondary/10">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-black mb-4">健康管理</h2>
        <p class="text-dark text-lg">喵星人健康守护站：专属猫咪的温柔呵护</p>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 px-5">
      <div class="rounded-xl shadow-md overflow-hidden z-20">
        <div class="pt-3 bg-white rounded-lg shadow-md overflow-hidden">
          <h1 class="text-[clamp(1rem,3vw,1.5rem)] text-center font-bold text-black mb-4">猫咪喂食注意事项</h1>
          <ul class="pl-10 text-dark">
            <li class="text-dark font-bold mb-2">❌ 别乱喂：巧克力、洋葱、人类零食别给，容易中毒！</li>
            <li class="text-dark font-bold mb-2">✅ 喂对粮：猫粮优先，水煮鸡肉可当加餐，去骨！</li>
            <li class="text-dark font-bold mb-2">⚠️ 别过量：顿顿大餐会吃出三高，适量投喂！</li>
            <li class="text-dark font-bold mb-2">👀 讲安全：别逼社恐小猫，远离围堵投喂；清理食盒垃圾，别留卫生死角！</li>
            <li class="text-dark font-bold mb-2">💡 终极关爱：带猫绝育，控制数量才是真爱！</li>
            <li class="text-dark font-bold mb-2">⚠️ 小猫禁令：警惕猫条隐患！成分不明 + 诱食剂，严禁投喂易致猫咪挑食、口炎、肾衰，严禁盲目投喂！</li>
            <li class="text-dark font-bold mb-2">🚫 别当移动饭票：固定投喂点别随意更换，不然猫会在旧地盘守到 emo，上演「你消失的每一天我都在流浪」。</li>
            <li class="text-dark font-bold mb-2">🧹 及时收碗碟：吃完的饭碗别过夜，否则会召唤出老鼠大军，食堂阿姨追着你问是不是想加餐！</li>
            <li class="text-dark font-bold mb-2">🔏：守护猫咪安全：勿随意暴露定居点！防止恶意利用，杜绝潜在威胁</li>
            <li class="text-dark font-bold mb-2">👯♂️ 别搞拉帮结派：看到猫打架别硬劝架，小心误伤！毕竟江湖恩怨，猫自有猫的解决办法。</li>
          </ul>
        </div>
      </div>
      <div class="rounded-xl shadow-md overflow-hidden bg-[url('@/assets/猫手.png')] bg-[50%_80%] bg-cover bg-no-repeat z-20">
        <h2 class="text-[clamp(1rem,3vw,1.5rem)] text-center font-bold">患病猫咪</h2>
        <div>
          <div class="border border-white rounded-lg shadow-md p-4 z-40">
            <div class="ml-1 font-bold">
              <p class="text-lg text-dark">创创</p>
              <p class="text-red-500 text-sm">治疗ing</p>
            </div>
            <div class="mt-2 font-bold">
              <p class="text-sm text-dark">症状 ：感染FIV，高烧两天</p>
              <p class="text-sm text-dark">治疗方法 ：药物治疗</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 健康管理组件逻辑
</script>

<style scoped>
/* 局部样式 */
</style>