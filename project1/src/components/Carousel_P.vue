<template>
        <!-- 轮播图 -->
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <!-- 指示器 -->
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <!-- 轮播图片 -->
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="3000"><!-- 3000ms切换一次 -->
                    <a href="https://girls-band-cry.com/" target="_blank"><img src="../assets/樱花动漫/gbc.png" class="d-block w-100" alt="未加载"></a>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img src="../assets/樱花动漫/com_media_.jpg" class="d-block w-100" alt="未加载">
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img src="../assets/樱花动漫/10001 (2).jpg" class="d-block w-100" alt="未加载">
                </div>
            </div>
            <!-- 左右按钮 -->
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
</template>

<script setup>
//有setup就自动暴露，不用export default导出了
// export default {
//     name: 'CarouselP'
// }
</script>

<style scoped>
.carousel {
    height: auto;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 73px;
}
img {
    height: 1000px;
    width: 100%;
    object-fit: cover;
}
</style>