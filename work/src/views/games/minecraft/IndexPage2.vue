<template>
    <div class="background-container">
        <div class="wrapin">
            <!--头部-->
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
                <div class="top clearfix">
                    <div class="text">
                        <h2 align='center'>Stroy mode</h2><br>
                        <P>
                            "Minecraft: Story Mode" is an RPG game developed by Telltale Games and Mojang based on
                            "Minecraft". In the game, you will control the protagonist Jesse and experience various
                            adventures with his friends.
                            The physical version of "Minecraft: Story Mode: Complete Adventure" for Nintendo Switch is
                            priced at US$39.99 and will be released on June 27, 2017.
                            "Minecraft: Story Mode" is available on iOS, Android, Mac, Xbox, PlayStation, and Windows
                            platforms.
                            <img src="@/assets/photo/MIN3.webp" width="600" height="265" alt="" />
                        </P>
                        <h2 align='center'>Preface</h2>
                        <br>
                        <P>
                            In the vast universe, many great legends have passed away over time, leaving only unanswered
                            questions in the end. However, the legend of the Order of Stone has been passed down and has
                            become an indisputable fact. This troubled land once awaited the salvation of four heroes:
                            The warrior Gabriel: made his enemies tremble with his sword. Redstone Engineer Ellegaard:
                            Created an epoch-making machine. Magnus, the Rogue: Extraordinarily witty, acts chivalrously
                            for all sentient beings. Soren the Architect: Builder of the world and leader of the Order
                            of Stone. They worked together to embark on a dangerous journey to find the mysterious
                            monster "Ender Dragon", and finally succeeded in defeating the dragon and winning. Since
                            then, their story has become an eternal legend.

                            <br>
                        <h2 align='center'>Chapter 1: The Order of the Rock </h2>
                        <br>
                        <P>Jesse and his friends, Olivia and Axel, have always admired the legendary Order of Stone, the
                            four heroes Gabriel the Warrior, Ellegaard the Redstone Engineer, Magnus the Rogue, and
                            Soren the Architect. They successfully defeated the Ender Dragon and became an eternal
                            legend. Every year, the world holds an Ender Carnival to commemorate them.
                            <br>In this Ender Carnival, the carnival atmosphere was broken by the withering storm
                            created by the mysterious figure Ivor. If not controlled, this storm will destroy the entire
                            world. The three heroes have been separated, and Gabriel cannot deal with it alone. So, at
                            Gabriel's request, Jesse and his friends embarked on an adventure to find the other three
                            heroes in an attempt to save the world on the verge of destruction.
                            <br>
                        <h2 align="center">Chapter 2: Rallying Order</h2>
                        <br>
                        In this Ender Carnival, the carnival atmosphere was broken by the withering storm created by the
                        mysterious figure Ivor. If not controlled, this storm will destroy the entire world. The three
                        heroes have been separated, and Gabriel cannot deal with it alone. So, at Gabriel's request,
                        Jesse and his friends embarked on an adventure to find the other three heroes in an attempt to
                        save the world on the verge of destruction.
                        </P>

                        </p><br>
                        <h2 align="left"> Question(Easter eggs): </h2>
                        <p>Between ten zombie-sized chickens and a hundred chicken-sized zombies, which one would you
                            choose as your opponent? </p>

                    </div>
                    <div class="pic"> <img src="@/assets/photo/MIN1.webp" width="600" height="700" /> </div>
                    <div class="title">
                        <h2 style="text-align: center;">The story of the world continues</h2>
                    </div>
                    <div class="top clearfix">
                        <div class="texts"> <img src="@/assets/photo/MIN4.webp" width="100%" height="310" />
                        </div>
                        <div class="texts">
                            <p><img src="@/assets/photo/MIN5.webp"  width="100%" height="310" alt="" /></p>
                        </div>
                    </div>

                </div>
                <!--底部-->
                <footer>
                    <p>Minecraft</p>
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
    background: url(@/assets/photo/01.webp) no-repeat fixed;
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