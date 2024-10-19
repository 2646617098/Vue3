<!-- 边框菜单组件，从elemnt官网复制的 -->
<template>
  <el-menu default-active="2" class="aside-container" @open="handleOpen" @close="handleClose" background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b">
    <p class="logo-lg">侧边菜单</p>
    <treeMenu :index="1" :menuData="menuData" />
  </el-menu>
</template>

<script setup>
// 引入treeMenu组件，然后就可以直接写在上面了
import treeMenu from './treeMenu.vue';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';



const router = useRouter();
const menuData = reactive(router.options.routes[0].children)//reactvie获取路由数据


const handleOpen = (key, keyPath) => { }
const handleClose = (key, keyPath) => { }
</script>

<style lang="less" scoped>
.aside-container {
  height: 100%;

  .logo-lg {
    font-size: 20px;
    font-weight: 400;
    margin: 16px;
    text-align: center;
    color: white;
  }
}
</style>
