import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login/App.vue';
import register from '@/components/register/App.vue';
import index from '@/components/index/App.vue';
import waitForRelease from '@/components/demand/waitForRelease/App.vue';
import projectList from '@/components/project/projectList/App.vue';
Vue.use(Router)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: login,
    },
    {
        path: '/register',
        name: 'register',
        component: register,
    },
    {
        path: '/',
        name: 'index',
        component: index,
    },
    {
        path: '/index',
        name: 'index',
        component: index,
    },
    {
        path: '/waitForRelease',
        name: 'waitForRelease',
        component: waitForRelease,
    },
    {
        path: '/projectList',
        name: 'projectList',
        component: projectList,
    },
];

export default new Router({
    // 服务器部署会有问题，后端需进行配置
    mode: 'history',
    routes,
})

