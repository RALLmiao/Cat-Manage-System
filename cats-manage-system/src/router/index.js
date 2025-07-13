import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';

const routes = [{
    path: '/',
    component: HomePage,
    meta: {
        hidenavbar: false,
        title: '喵工大罐头事务所猫咪管理系统',
    },
},
{
    path: '/details',
    component: () => import('@/views/DetailsInformations.vue'),
    meta: {
        hidenavbar: true,
        title: '网站功能介绍',
    },
},
{
    path: '/catidentification',
    component: () => import('@/views/CatIdentifyPage.vue'),
    meta:{
        hidenavbar: true,
        title:'校园猫咪档案',
    },
},
{
    path: '/pictures',
    component: () => import('@/views/PicturesWall.vue'),
    meta: {
        hidenavbar: true,
        title: '校园猫咪照片墙',
    },

},
{
    path: '/textpopup',
    component: () => import('@/views/TextPopUpWindow.vue'),
    meta: {
        hidenavbar: true,
        title: '文本弹窗',
    },
},
{
    path:'/filepopup',
    component: () => import('@/views/FilePopUpWindow.vue'),
    meta: {
        hidenavbar: true,
        title: '文件弹窗',
    },
},
{
    path:'/loadingpage',
    component: () => import('@/views/LoadingPage.vue'),
    meta: {
        hidenavbar: true,
        title: '登录页面',
    },
},
{
    path:'/registerpage',
    component: () => import('@/views/RegisterPage.vue'),
    meta: {
        hidenavbar: true,
        title: '注册页面',
    },
},
{
    path:'/forgetpassword',
    component: () => import('@/views/ForgetPassword.vue'),
    meta: {
        hidenavbar: true,
        title: '忘记密码',
    },
},
{
    path: '/informationpopup',
    component: () => import('@/views/InformationPopUpWindow.vue'),
    meta: {
        hidenavbar: true,
        title: '信息弹窗',
    },
},
{
    path: '/informationpopupwindow',
    component: () => import('@/views/InformationPopUp.vue'),
    meta: {
        hidenavbar: true,
        title: '内部信息弹窗',
    },
},
{
    path:'/purchase',
    component: () => import('@/views/PurchasePage.vue'),
    meta: {
        hidenavbar: true,
        title: '喵工大罐头事务所猫咪饰品发售平台',
    },
},
{
    path: '/product-detail',
    component: () => import('@/views/ProductDetail.vue'),
    meta: {
        hidenavbar: true,
        title: '产品详情',
    },
},
{
    path:'/publishpopupwindow',
    component: () => import('@/views/PublishPicturesPopUpWindow.vue'),
    meta:{
        hidenavbar:true,
        title:'发布照片弹窗'
    }
}
]

const router = createRouter({
  history: createWebHistory(), 
  routes
});


export default router;