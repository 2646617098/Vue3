<template>
    <div class="background-container">
        <div class="wrapin">
            <header>
                <ul class="nav clearfix">
                    <li><router-link to="/naruto1">Front page</router-link></li>
                    <li><router-link to="/naruto2">Plot story</router-link></li>
                    <li><router-link to="/naruto3">Characters</router-link></li>
                    <li><router-link to="/naruto4">Promotional video</router-link></li>
                </ul>
            </header>



            <!--内容-->

            <div class="con">

                <div class="tupian">

                    <div class="title">

                        <h2>Naruto super burning clip</h2>
                    </div>
                    <video src="@/assets/video/hy1.mp4" class="hm_vdo" loop controls width="100%"
                        type="video/mp4"></video>            
                </div>
            </div>
            <div class="con">

                <div class="tupian">

                    <div class="title">

                        <h2>It's hard to hide the tears from the divine power, all eyes can see is Lin</h2>
                    </div>
                    <video src="@/assets/video/hy2.mp4" class="hm_vdo" loop controls width="100%"
                        type="video/mp4"></video>            
                </div>
            </div>

            <!--底部-->

            <footer>

                <p>Naruto super burning clip</p>
            </footer>
        </div>
    </div>
</template>

<script setup>

</script>


<style scoped>
.background-container {
    width: 100%;
    height: 100%;
    /* 或任何你需要的高度 */
    background-image: url('@/assets/photo/huoying4\(1\).jpg');
    /* 替换为你的图片路径 */
    background-size: cover;
    background-position: center;
}

/* 通用类 */
/* 设置所有元素的外边距和内边距为0 */
* {
    margin: 0;
    padding: 0;
}


/* 设置图片的边框为none */
img {
    border: none;
}

/* 设置链接的样式 */
a {
    cursor: pointer;
    color: #333;
    text-decoration: none;
    outline: none;
}

/* 设置无序列表的样式为无样式 */
ul {
    list-style-type: none;
}

/* 设置强调字体的样式为正常字体 */
em {
    font-style: normal;
}

/* 设置左浮动 */
.lt {
    float: left;
}

/* 设置右浮动 */
.rt {
    float: right;
}

/* 清除浮动 */
div.clear {
    font: 0px Arial;
    line-height: 0;
    height: 0;
    overflow: hidden;
    clear: both;
}

/* 清除浮动 */
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}


/* 主体容器宽度 */
.wrapin {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

/* 导航栏列表项样式 */
.nav li {
    background: #336699;
    line-height: 50px;
    float: left;
    width: 25%;
    text-align: center;
    font-size: 19px;
}

/* 导航栏链接样式 */
.nav li a {
    color: #fff;
}

/* 轮播图样式 */
.banner {
    display: block;
}

.banner img {
    width: 100%;
    display: block;
}

.banner {
    width: 100%;
    height: 560px;
    overflow: hidden;
    position: relative;
}

/* 内容区样式 */
.con {
    padding: 15px;
    background: rgb(233, 249, 250);
}

.top .text {
    float: left;
    width: 60%;
    line-height: 26px;
}

.top .pic {
    float: right;
    width: 38%;
    margin-top: 20px;
}

.top .texts {
    float: left;
    width: 38%;
    line-height: 26px;
}

.top .pics {
    float: right;
    width: 60%;
    margin-top: 20px;
}

.top .pic img {
    width: 100%;
}

.top .texts img {
    width: 100%;
}

.title {
    padding: 20px 0;
}

.title h2 {
    font-size: 20px;
    color: #333;
}

.tupian ul {
    margin: 0 -15px;
}

.tupian ul li {
    width: 29.33%;
    float: left;
    padding: 0;
    margin: 2%;
    box-sizing: border-box;
    overflow: hidden;
}

.tupian ul li img {
    width: 100%;
    transition: all 0.6s;
    height: 200px;
    display: block;
    object-fit: cover;
}

.tupian ul li:hover img {
    transform: scale(1.4);
}

.pinglun {
    line-height: 26px;
    color: #333;
    font-size: 14px;
    padding-bottom: 30px;
}

/* 底部样式 */
footer {
    background: #282828;
    text-align: center;
    color: #fff;
    line-height: 50px;
}
</style>