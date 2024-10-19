<template>
    <div>
        <div class="background">
            <Header_P />
            <div>
                <header>
                    <h1>
                        Animation details
                    </h1>
                </header>
            </div>
            <div style="border-bottom:white 8px solid;padding-bottom: 10px;">
                <h1 style="text-align: center;font-size: 40;">Frieren: Beyond Journey's End</h1>


                <h3 style="color:gray;width: 80%;margin: auto;">The magic of more than
                    a thousand years of life makes Lillian, with the death of the brave
                    Simmel who once defeated the demon Lord as an opportunity, embark
                    on a journey to understand humanity
                </h3> <!--小标题-->
            </div>

            <br><br><br><br>

            <div style="border-bottom:white 8px solid;padding-bottom: 30px;">
                <p style="font-size: 30px;color: pink;width: 90%;margin: auto;">synopsis:</p>
                <img src="@/assets/animeImg/芙莉莲图选/封面.jpg" alt=""
                    style="float: right;margin-left: 50px;border: 3px rgb(0, 255, 157) solid;">
                <!--封面图片-->
                <p style="font-size: 15px;width: 90%;margin: auto;font-size: 22px;border-radius: 25px;">The magic of
                    more
                    than a
                    thousand years of
                    life makes Lillian, with the death of the brave Simmel who once de
                    feated the demon Lord as an opportunity, embark on a journey to un
                    derstand humanity.
                    Met the same group of brave monks Haita and the warrior Ezek respe
                    ctively cultivated Philon and Hutalc, and Flillian and the two peo
                    ple together to the soul of the sleeping place. In order to go, th
                    e qualification of the First Level Sorcerer is required, so Flilli
                    an and Philon travel to the magical city of Visastor to take the F
                    irst Level Sorcerer selection test. Where all kinds of extraordina
                    ry magic make... At this moment, the best of magic will collide in
                    Visasat!
                </p> <!--剧情简介-->
            </div>

            <br><br><br><br><br><br>

            <div style="border-bottom:white 8px solid;padding-bottom: 90px;">
                <p style="font-size: 30px;color: aqua;width: 90%;margin: auto;">Climactic scene:</p>
                <img src="@/assets/animeImg/芙莉莲图选/芙莉莲情节.png" alt=""
                    style="float: right;margin-left: 50px;border: 3px rgb(0, 255, 157) solid;">
                <!--情节图片-->
                <p style="font-size: 15px;width: 90%;margin: auto;font-size: 22px;">The magic of more than a thousand
                    years
                    of
                    life makes Lillian, with the death of the brave Simmel who once de
                    feated the demon Lord as an opportunity, embark on a journey to un
                    derstand humanity.
                    Met the same group of brave monks Haita and the warrior Ezek respe
                    ctively cultivated Philon and Hutalc, and Flillian and the two peo
                    ple together to the soul of the sleeping place. In order to go, th
                    e qualification of the First Level Sorcerer is required, so Flilli
                    an and Philon travel to the magical city of Visastor to take the F
                    irst Level Sorcerer selection test. Where all kinds of extraordina
                    ry magic make... At this moment, the best of magic will collide in
                    Visasat!
                </p> <!--高潮情节-->
            </div>

            <br><br><br><br><br>

            <div>
                <p style="font-size: 30px;color: brown;width: 90%;margin: auto;">Main Character</p>
                <br><br>
                <div style="border-radius: 25px ;border: #333 8px solid;"> <!--主要人物头像-->
                    <RouterLink to="/anime2/character1"><img src="@/assets/animeImg/芙莉莲图选/头像芙.jpg" alt=""
                            style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;">
                    </RouterLink>
                    <RouterLink to="/anime2/character2"><img src="@/assets/animeImg/芙莉莲图选/头像辛美尔.webp" alt=""
                            style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;">
                    </RouterLink>
                    <RouterLink to="/anime2/character3"><img src="@/assets/animeImg/芙莉莲图选/头像菲.jpg" alt=""
                            style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;">
                    </RouterLink>
                    <RouterLink to="/anime2/character4"><img src="@/assets/animeImg/芙莉莲图选/头像修塔.png" alt=""
                            style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;">
                    </RouterLink>
                    <span></span>
                    <span style="white-space: nowrap;margin-left: 220px;"><a href="./芙莉莲介绍页.html">Frieren</a></span>
                    <!--主要人物名-->
                    <span style="white-space: nowrap;margin-left: 280px;"><a href="./辛美尔介绍页.html">Himmel</a></span>
                    <span style="white-space: nowrap;margin-left: 280px;"><a href="./菲伦介绍页.html">Fillon</a></span>
                    <span style="white-space: nowrap;margin-left: 280px;"><a href="./修塔尔克介绍页.html">Stark</a></span>
                </div>
                <br>
            </div>
            <RouterView />
            <br><br><br>
            <div>
                <footer>
                    <p>Frieren: Beyond Journey's End</p> <!--页尾-->
                </footer>
            </div>
        </div>




    </div>
</template>

<script setup>
import Header_P from '@/components/Header_P.vue';


</script>

<style scoped>
footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    margin-top: 20px;
    border-top: white 3px solid;
}

header {
    background: #333;
    color: #fff;
    padding-top: 30px;
    min-height: 70px;
    border-bottom: #77dd77 3px solid;
}

header h1 {
    text-align: center;
    text-transform: uppercase;
    margin: 0;
    font-size: 24px;
}

.background {
    background-image: url(@/assets/animeImg/芙莉莲图选/背景芙莉莲.png);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

<!-- 前后加background的div标签，back-size设为cover，实现背景图片的适应。 -->
