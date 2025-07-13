<template>
    <section id="identify" class="py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-black mb-4">校园猫咪档案</h2>
                <p class="text-dark text-lg">认识一下我们校园里的猫咪居民们，每只猫咪都有自己独特的个性和故事</p>
            </div>
            <div class="px-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
                <!-- 猫咪卡片1 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden cat-card">
                    <div class="h-60 overflow-hidden">
                        <img src="@/assets/创创.jpg" alt="创创" class="w-full h-full object-cover object-center">
                    </div>
                    <div class="p-6 m-2">
                        <div class="flex items-center">
                            <h3 class="text-lg font-bold text-black">创创</h3>
                            <i class="fa fa-mars text-blue-600 ml-2"></i>
                        </div>
                        <div class="text-orange-500 text-xs">
                            <strong>已绝育</strong><br>
                            <p>入园时间 ： 2024-12-10</p>
                            <p>猫德 ： 软萌好盘，见人就蹭，喜欢贴贴</p>
                            <p>活动区域 ： 31号楼附近</p>
                            <div>
                                <button @click="clickinformationpopupwindow" class="text-primary font-medium">
                                    查看详细
                                    <i class="fa fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 猫咪卡片2 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden cat-card">
                    <div class="h-60 overflow-hidden">
                        <img src="@/assets/杏仁.jpg" alt="杏仁" class="w-full h-full object-cover object-center">
                    </div>
                    <div class="p-6 m-2">
                        <div class="flex items-center">
                            <h3 class="text-lg font-bold text-black">杏仁</h3>
                            <i class="fa fa-mars text-blue-600 ml-2"></i>
                        </div>
                        <div class="text-orange-500 text-xs">
                            <strong>已绝育</strong><br>
                            <p>入园时间 ： 2025-02-28</p>
                            <p>猫德 ： 碰瓷讨粮，旋饭狂魔</p>
                            <p>活动区域 ： 河东橘坪</p>
                            <div>
                                <button class="text-primary font-medium">
                                    <a href="#">查看详细</a>
                                    <i class="fa fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 猫咪卡片3 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden cat-card">
                    <div class="h-60 overflow-hidden">
                        <img src="@/assets/小老虎.jpg" alt="小老虎" class="w-full h-full object-cover object-center">
                    </div>
                    <div class="p-6 m-2">
                        <div class="flex items-center">
                            <h3 class="text-lg font-bold text-black">小老虎</h3>
                            <i class="fa fa-venus text-pink-600 ml-2"></i>
                        </div>
                        <div class="text-orange-500 text-xs">
                            <strong>已绝育</strong><br>
                            <p>4岁两个月</p>
                            <p>入园时间 ： 2021-01-01</p>
                            <p>猫德 ： 怕寂寞，社交达人，不亲人</p>
                            <p>活动区域 ： 河东</p>
                            <div>
                                <button class="text-primary font-medium">
                                    <a href="#">查看详细</a>
                                    <i class="fa fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!--猫咪卡片4-->
                <div class="bg-white rounded-xl shadow-md overflow-hidden cat-card">
                    <div class="h-60 overflow-hidden">
                        <img src="@/assets/kathy.jpg" alt="kathy" class="w-full h-full object-cover object-top">
                    </div>
                    <div class="p-6 m-2">
                        <div class="flex items-center">
                            <h3 class="text-lg font-bold text-black">kathy</h3>
                            <i class="fa fa-mars text-blue-600 ml-2"></i>
                        </div>
                        <div class="text-orange-500 text-xs">
                            <strong>已绝育</strong><br>
                            <p>1岁4个月</p>
                            <p>入园时间 ： 2024-08-23</p>
                            <p>猫德 ： 旋饭狂魔，软萌好盘，聪明机灵</p>
                            <p>活动区域 ： 三期</p>
                            <div>
                                <button class="text-primary font-medium">
                                    <a href="#">查看详细</a>
                                    <i class="fa fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!--猫咪卡片5-->
                <div class="bg-white rounded-xl shadow-md overflow-hidden cat-card">
                    <div class="h-60 overflow-hidden">
                        <img src="@/assets/煤球.jpg" alt="煤球" class="w-full h-full object-cover object-center">
                    </div>
                    <div class="p-6 m-2">
                        <div class="flex items-center">
                            <h3 class="text-lg font-bold text-black">煤球</h3>
                            <i class="fa fa-venus text-pink-600 ml-2"></i>
                        </div>
                        <div class="text-orange-500 text-xs">
                            <strong>已绝育</strong><br>
                            <p>2岁9个月</p>
                            <p>入园时间 ： 2022-09-01</p>
                            <p>猫德 ： 胆小怂包</p>
                            <p>活动区域 ： 河东</p>
                            <div>
                                <button class="text-primary font-medium">
                                    <a href="#">查看详细</a>
                                    <i class="fa fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!--猫咪卡片6-->
                <div class="bg-white rounded-xl shadow-md overflow-hidden cat-card">
                    <div class="h-60 overflow-hidden">
                        <img src="@/assets/胖车车.jpg" alt="胖车车" class="w-full h-full object-cover object-center">
                    </div>
                    <div class="p-6 m-2">
                        <div class="flex items-center">
                            <h3 class="text-lg font-bold text-black">胖车车</h3>
                            <i class="fa fa-mars text-blue-600 ml-2"></i>
                        </div>
                        <div class="text-orange-500 text-xs">
                            <strong>已绝育</strong><br>
                            <p>入园时间 ： 2021-01-01</p>
                            <p>猫德 ： 不亲人</p>
                            <p>活动区域 ： 河东</p>
                            <div>
                                <button class="text-primary font-medium">
                                    <a href="#">查看详细</a>
                                    <i class="fa fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-8">
                <button @click="openidentify"
                    class="bg-white text-primary border border-primary font-medium py-2 px-6 rounded-full shadow-md hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all">
                    查看所有猫咪
                    <i class="fa fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </section>


</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'

const route=useRoute();
const router=useRouter();

const clickinformationpopupwindow=()=>{
    router.replace({query:{...route.query,informationpopup:true}})
}
const openidentify = () => {
    window.open('/catidentification', '_blank');
}
</script>