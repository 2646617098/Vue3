<template>
    <div class="container layout-p">
        <h1 class="title">资讯</h1>
        <div class="row row-1">
            <div class="col-md-6 col-sm-12">
                <Carousel_S />
            </div>
            <div class="col-md-6 col-sm-12">
                <a href="http://re-zero-anime.jp/" target="_blank"><img src="../assets/SakuraAnime/re0.png" alt="..."  class="img-fluid"></a>
            </div>
        </div>
        <div class="row row-2">
            <div class="col-md-3 col-sm-6 text-white">
                <img src="../assets/SakuraAnime/p (14).jpg" alt="...">
            </div>
            <div class="col-md-3 col-sm-6 text-white">
                <img src="../assets/SakuraAnime/p (17).jpg" alt="...">
            </div>
            <div class="col-md-3 col-sm-6 text-white">
                <a href="https://spice-and-wolf.com/" target="_blank"><img src="../assets/SakuraAnime/p (16).jpg" alt="..."></a>
            </div>
            <div class="col-md-3 col-sm-6 text-white">
                <a href="https://wonder-egg-priority.com/" target="_blank"><img src="../assets/SakuraAnime/奇蛋物语.jpg" alt="..."></a>
            </div>
        </div>
    </div>
</template>

<script setup>
import Carousel_S from './Carousel_S.vue';


</script>

<style scoped>
.container {
    margin: 100px auto;
    max-width: 90%;
}

.row-1 {
    margin-top: 20px;
}
.row-2 {
    margin-top: 20px;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
}
img:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
}
</style>
