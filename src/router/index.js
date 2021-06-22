import Vue from 'vue'
// 导入路由插件
import Router from 'vue-router'
// 导入自定义的组件
import login from "../components/Login";
import main from '../components/Main'
import notFound from "../components/NotFound";
import userProfile from "../components/user/Profile";
import userList from "../components/user/List";

// 安装路由
Vue.use(Router);

/*
配置路由,路由模式有两种:
  hash：路径带 # 符号，如 http://localhost/#/login
  history：路径不带 # 符号，如 http://localhost/login
 */
export default new Router({
  mode: 'history',
  props: true,
  routes: [
    {
      // 路由路径
      path: '/main/:name',
      //路由名称
      name: 'main',
      // 跳转到组件
      component: main,
      children: [
        {
          path : '/user/profile/:id',
          name: 'userProfile',
          props: true, // 支持参数传递
          component: userProfile
        },
        {
          path: '/user/list', component: userList
        }
      ]
    },
    {
      // 路由路径
      path: '/',
      //路由名称
      name: 'login',
      // 跳转到组件
      component: login
    },
    {
      path: '*',
      component: notFound
    },
    {
      path: '/goHome',
      redirect: '/main/首页'
    }
  ]
});
