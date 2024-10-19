<template>
    <!-- 文字轮播图 -->
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <!-- 指示器 -->
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <!-- 轮播图片 -->
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="4000">
                <img src="../assets/欢迎来到_Steam/10001.jpg" class="d-block w-100" alt="未加载">
                <div class="carousel-caption d-none d-md-block">
                    <h5>星际战士2</h5>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="4000">
                <img src="../assets/欢迎来到_Steam/10002.jpg" class="d-block w-100" alt="未加载">
                <div class="carousel-caption d-none d-md-block">
                    <h5>犹格索托斯的庭院</h5>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="4000">
                <img src="../assets/欢迎来到_Steam/10003.jpg" class="d-block w-100" alt="未加载">
                <div class="carousel-caption d-none d-md-block">
                    <h5>饿殍，明末千里行</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.carousel {
    height: 100%;
}
.carousel-inner {
    border-radius: 15px;
    height: 100%;
    
}
.carousel-item {
    height: 100%;
}
img {
    /* border-radius: 25px; 写在轮播里，不然轮播图圆角会失效 */
    height: 100%;
    width: auto;
    object-fit: cover;
}
h5{
    color: #fff;
    font-size: 24px;
    text-shadow: 2px 2px 2px #000;
}
.carousel-inner:hover {
    /* opacity: 0.8; */
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
}
</style>