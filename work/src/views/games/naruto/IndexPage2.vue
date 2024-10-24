<template>
    <div class="background-container">
        <div class="wrapin">
            <!--头部-->
            <header>
                <ul class="nav clearfix">
                    <li><router-link to="/naruto1">Front page</router-link></li>
                    <li><router-link to="/naruto2">Plot story</router-link></li>
                    <li><router-link to="/naruto3">Character</router-link></li>
                    <li><router-link to="/naruto4">Promotional video</router-link></li>
                </ul>
            </header>
            <!--内容-->
            <div class="con">
                <div class="top clearfix">
                    <div class="text">
                        <h2 align='center'>Naruto</h2><br>
                        <P>
                            As long as there is fire in your heart, you can ignite the flame of hope—— <br>
                            <br> The story of "Naruto" mainly revolves around the protagonist Uzumaki Naruto, a ninja
                            from the Leaf Village. Because he has a nine-tailed demon fox sealed in his body, Naruto is
                            ostracized and lonely in the village. In order to prove his worth, he decided to become the
                            most powerful ninja in the village and became Hokage.
                            <br>In the process of becoming a ninja, Naruto met friends who also wanted to become
                            ninjas-Uchiha Sasuke and Haruno Sakura. The three experienced many difficulties and
                            challenges together, including fighting against enemies in other ninja villages, protecting
                            the village from threats, and rescuing their companions, etc. In the process, they continued
                            to grow and improve, and established deep friendship and trust.
                            <br>Throughout the story, Naruto and his friends face many difficult choices and challenges,
                            including sacrificing themselves to protect the village, facing their past, solving various
                            mysteries, and more. In the end, through unremitting efforts and firm belief, they overcame
                            all difficulties and realized their dreams.

                            <img src="@/assets/photo/15.webp" width="594" height="265" alt="" />
                        </P>
                        <h2 align='center'>"Boruto"</h2>
                        <br>
                        <P>
                            "Boruto" is the sequel to "Naruto" and tells the story of the protagonist Boruto Uzumaki.
                            The story takes place a few years after the end of the original story, and Konoha Village
                            has become a modern city. Boruto is the son of Naruto and Hinata. He longs to become an
                            excellent ninja and protect the village with his companions.
                        </P>
                        <br>
                        <h2 align='center'>Small things often determine the success or failure of big things</h2>
                        <br>
                        <P>At the beginning of the story, Boruto entered the Konoha Ninja School for training and met
                            his companions who also aspired to become ninjas. They participated in various tasks and
                            exams together and continued to grow and improve. At the same time, Boruto also faces
                            threats from other ninja villages, including the mysterious organization "Sky Ninja" and
                            other powerful ninjas.
                        </P>
                        <br>
                        In addition to combat and adventure, the story also explores themes of family, friendship, love,
                        and more. Not only does Boruto have to face his own growth and challenges, but he also has to
                        deal with his relationship with his parents and other family issues. He also made some new
                        friends, and with their help, he gradually grew into a real ninja.

                        "Boruto" has a wide fan base around the world and is regarded as an important part of the
                        "Naruto" series.
                        <p>
                            "Boruto" has currently launched an animation version and a comic version, and the story is
                            still being updated. In the latest plot, Boruto and his companions face more severe
                            challenges, including fighting against more powerful enemies and protecting the village from
                            various threats. At the same time, they continue to grow and improve, building deeper
                            friendships and trust. If you like "Boruto", you can continue to pay attention to the latest
                            comics and animation series to learn more about the stories of Boruto and his companions.
                        </p><br>

                        <p> "What you have to do is not fight for yourself, but fight to protect the people around you."
                            ——Kakashi Hatake </p>

                    </div>
                    <div class="pic"> <img src="@/assets/photo/16.webp" width="600" height="900" /> </div>
                    <div class="title">
                        <h2 style="text-align: center;">The story of the ninja world continues</h2>
                    </div>
                    <div class="top clearfix">
                        <div class="texts"> <img src="@/assets/photo/8.webp" width="100%" height="600" />
                        </div>
                        <div class="pics">
                            <p><img src="@/assets/photo/4.webp" width="550" height="320" alt="" /></p>
                        </div>
                    </div>
                </div>
            </div>
            <!--底部-->
            <footer>
                <p>NARUTO-ナルト-</p>
            </footer>
        </div>
    </div>
</template>


<script setup>

</script>

<style scoped>
/* 通用类 */
/* 设置所有元素的外边距和内边距为0 */
* {
    margin: 0;
    padding: 0;
}

.background-container {
    width: 100%;
    height: 100%;
    /* 或任何你需要的高度 */
    background-image: url('@/assets/photo/huoying4\(1\).jpg');
    /* 替换为你的图片路径 */
    background-size: cover;
    background-position: center;
}

/* 设置body元素的样式 */

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

.nav li {
    background: #336699;
    line-height: 50px;
    float: left;
    width: 25%;
    text-align: center;
    font-size: 19px;
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