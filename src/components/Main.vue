<template>
  <el-row class="tac">
    <h1>== {{name}} ==</h1>
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">
              <!-- name地址，params参数，v-bind绑定 -->
              <router-link :to="{name: 'userProfile', params: {id : 123456}}">个人信息</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <!--
                router-link： 默认会被渲染成一个 <a> 标签，to 属性为指定链接
                router-view： 用于渲染路由匹配到的组件
              -->
              <router-link to="/user/list">用户列表</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link to="/goHome">回到首页</router-link>
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-4">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <router-view></router-view>
  </el-row>
</template>

<script>
export default {
  name: 'main',
  props: ['name'],
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
