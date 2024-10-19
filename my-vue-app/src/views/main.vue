<!-- 主界面-->
<template>
  <!-- 引入预设布局-->
  <div class="common-layout">
    <el-container>
      <Aside />
      <el-container>
        <el-header>标题</el-header>
        <el-main>
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/Steam_社区_Solaire_of_Astora_游戏/10001.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/Steam_社区_Solaire_of_Astora_游戏/10002.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/Steam_社区_Solaire_of_Astora_游戏/10003.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>




</template>

<script setup>
import Aside from '../components/aside.vue';
import { dividerProps } from 'element-plus';

</script>

<style lang="less" scoped>
.common-layout {
  height: 100%;

  .el-container {
    height: 100%;
  }
}
</style>