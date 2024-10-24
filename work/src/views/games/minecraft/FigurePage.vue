<template>
    <div class="background-container">
        <div class="wrapin">
            <header>
                <ul class="nav clearfix">
                    <li><router-link to="/minecraft1">Front page</router-link></li>
                    <li><router-link to="/minecraft2">Plot story</router-link></li>
                    <li><router-link to="/minecraft3">Characters</router-link></li>
                    <li><router-link to="/minecraft4">Promotional video</router-link></li>
                </ul>
            </header>


            <!--内容-->

            <div class="con">

                <div class="tupian">

                    <div class="title">

                        <h2>Partial role introduction</h2>
                    </div>
                    <div class="container">
                        <div class="character">
                            <img src="@/assets/photo/MIN6.webp" alt="">
                            <div>
                                <h2>Jesse</h2>
                                <h3>(Players can freely choose their appearance)</h3>
                                <p>The protagonist of the story is also the only character that players can operate in
                                    the game. A huge fan of the Order of the Stone is a fearless warrior who never gives
                                    up in the face of difficulty. He is good at sword fighting and is able to deal with
                                    monsters and enemies with ease. He also has rich knowledge of survival, red stones
                                    and explosions, and helps the team solve various puzzles during the adventure. He
                                    has a tenacious character and never gives in no matter what challenges he
                                    encounters. He is the leader of the team and often motivates everyone.

                                </p>
                            </div>
                        </div>
                        <div class="character">
                            <img src="@/assets/photo/MIN7.webp" alt="">
                            <div>
                                <h2>Olivia </h2>
                                <h3>One of the protagonist's teammates is a redstone engineer. Voiced by Martha Plimpton
                                </h3>
                                <p>When the protagonist faces some redstone problems that are really unsolvable, she can
                                    always give the right guidance. Sometimes I lose confidence in the results of the
                                    team's actions, but I often regain confidence with the encouragement of the
                                    protagonist. The person I admire the most is Ellegaard, the redstone engineer in
                                    Order of Stone.As the protagonist's behavior changes, it is possible to go to
                                    Redstone Lea alone and become Ellegaard's apprentice. And after the Withering Storm
                                    incident, he officially replaced Ellegaard as the most famous redstone engineer and
                                    practiced archery.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <footer>
                    <p>Introduction to some characters&nbsp;</p>
                </footer>
            </div>
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
    background-image: url('@/assets/photo/MIN.jpg');
    /* 替换为你的图片路径 */
    background-size: cover;
    background-position: center;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 50px;
}

.character {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 50px;
}

.character img {
    max-width: 500px;
    max-height: 500px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 50px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.character h2 {
    font-size: 32px;
    margin-bottom: 20px;
}

.character p {
    font-size: 18px;
    line-height: 1.8;
    margin-bottom: 0;
}

/* 通用类 */
/* 设置所有元素的外边距和内边距为0 */
* {
    margin: 0;
    padding: 0;
}

/* 设置body元素的样式 */
body {
    /* 水平居中 */
    margin: 0 auto;
    /* 设置字体大小 */
    font-size: 14px;
    /* 设置背景图片 */
    background: url(@/assets/photo/MIN.jpg) no-repeat fixed;
    /* 背景尺寸 */
    background-size: 100% 100%;
    /* 设置字体颜色 */
    color: #333;
    /* 设置定位为相对定位 */
    position: relative;
    /* 设置顶部内边距为50px */
    padding-top: 50px;
    /* 设置底部内边距为50px */
    padding-bottom: 50px;
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


/* 头部样式 */
header {
    height: 50px;
    background: #fff;
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
