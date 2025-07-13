<template>
    <div class="min-h-screen bg-light text-dark flex flex-col">
        <main class="flex-1 py-10">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl bg-white rounded-xl shadow-lg">
                <!-- 标题区 -->
                <div class="flex flex-col items-center py-6">
                    <img src="@/assets/徽枳.png" alt="Logo" class="w-16 h-16 mb-2 rounded-full border border-primary" />
                    <h1 class="text-2xl font-bold mb-1">喵工大罐头事务所</h1>
                    <p class="text-gray-500">猫咪管理系统</p>
                </div>
                <!-- 内容区 -->
                <section class="mb-8">
                    <h2 class="text-xl font-bold mb-4">猫咪管理系统：守护校园萌宠的暖心家园</h2>
                    <p class="mb-4">
                        在书香弥漫的大学校园里，流浪猫咪常常是师生们心中的 “团宠”，而 “猫咪管理系统” 网站正是为这群校园毛孩子量身打造的专属守护平台。
                        这里以 “科学管理、温情陪伴” 为理念，聚焦校园流浪猫的生活与健康，搭建起师生与猫咪之间的爱心桥梁。
                    </p>
                    <h3 class="font-semibold mb-2">🌟 校园猫咪的专属档案库</h3>
                    <p class="mb-4">
                        网站为每只校园猫咪建立了详细的 “电子档案”：从它们的花色品种、常活动区域，到是否已绝育、健康状况等信息一目了然。
                        师生们可以通过照片和动态更新，随时 “云吸猫”，还能提交猫咪的最新行踪，让管理团队及时掌握它们的生活状态。
                    </p>
                    <h3 class="font-semibold mb-2">🐾 全方位的关爱行动</h3>
                    <p class="mb-4">
                        定时喂食与健康监测：志愿者团队根据猫咪活动规律，在校园固定区域设置投喂点，并定期记录猫咪的食欲、体重等情况，
                        若发现生病或受伤的猫咪，会第一时间联系宠物医院进行驱虫、疫苗接种或治疗。<br>
                        绝育计划：为控制流浪猫数量，网站联合动物保护组织开展 “TNR”（捕捉 - 绝育 - 放归）项目，
                        减少流浪猫无序繁殖带来的生存压力，让校园猫咪的生活更可持续。
                    </p>
                    <h3 class="font-semibold mb-2">🎀 爱心义卖：让温暖循环生长</h3>
                    <p class="mb-4">
                        网站开设的 “校园猫咪文创专区”，售卖由师生设计的萌宠周边 —— 校园猫咪玩偶、钥匙链、帆布包，
                        或是各式搞笑猫咪样式玩具等。所有义卖收入将全额纳入 “校园猫咪关爱基金”，专项用于购买猫粮、猫砂、
                        医疗用品，以及支持流浪猫绝育和紧急救治项目。
                    </p>
                    <h3 class="font-semibold mb-2">🌱 邀你一起守护校园萌物</h3>
                    <p class="mb-4">
                        无论是想参与喂食志愿服务、提供猫咪线索，还是通过义卖支持猫咪生活，“猫咪管理系统” 都期待师生们的加入。
                        在这里，每一次点击、每一份支持，都在为校园猫咪编织一张温暖的保护网，让它们在知识与爱的氛围里，
                        安心度过每一个四季。<br>
                        校园因猫咪而灵动，而它们的幸福，正由无数颗爱心共同守护。
                    </p>
                </section>
                <section class="mb-8">
                    <h2 class="text-xl font-bold mb-4">网站功能介绍</h2>
                    <p class="mb-4">
                      “猫咪管理系统” 网站旨在为校园流浪猫咪提供全面的管理与关爱服务。以下是网站的主要功能：
                    </p>
                    <ul class="list-disc pl-6 space-y-2 text-base">
                        <li>猫咪档案管理：记录每只猫咪的基本信息、健康状况、绝育情况等。</li>
                        <li>猫咪排行榜：定时更新校园猫咪的受欢迎程度，展示最受欢迎的猫咪。</li>
                        <li>健康监测：定期更新猫咪的体重、健康状况，及时发现异常。</li>
                        <li>绝育计划：记录已绝育猫咪的信息，并跟踪未绝育猫咪的绝育进度。</li>
                        <li>动态更新：上传猫咪照片和视频，分享它们的日常生活。</li>
                        <li>义卖专区：售卖校园猫咪周边产品，所有收入用于支持猫咪关爱基金。</li>
                        <li>猫咪档案管理：记录每只猫咪的基本信息、健康状况、绝育情况等。</li>
                        <li>猫咪排行榜：定时更新校园猫咪的受欢迎程度，展示最受欢迎的猫咪。</li>
                        <li>健康监测：定期更新猫咪的体重、健康状况，及时发现异常。</li>
                        <li>绝育计划：记录已绝育猫咪的信息，并跟踪未绝育猫咪的绝育进度。</li>
                        <li>动态更新：上传猫咪照片和视频，分享它们的日常生活。</li>
                        <li>义卖专区：售卖校园猫咪周边产品，所有收入用于支持猫咪关爱基金。</li>
                    </ul>
                </section>
            </div>
        </main>
        
    </div>
</template>

<script>
export default {
  name: 'DetailedInformations',
  // 如果有需要，可以在这里定义组件的 data、methods、生命周期钩子等
  data() {
    return {
      // 可在此处定义页面所需数据，比如后续可能动态加载的内容
    };
  },
  mounted() {
    // 页面加载后执行的逻辑（如滚动监听、数据初始化等）
    console.log('猫咪管理系统介绍页加载完成');
  },
  methods: {
    // 可在此处定义页面交互方法（如滚动到指定区域等）
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>
