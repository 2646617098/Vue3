<template>
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
            <h1 style="text-align: center;font-size: 40;">March comes in like a lion</h1> <!--标题k-->


            <h3 style="color:gray;width: 80%;margin: auto;">"The Lion in March" is a manga series created by Chikebana
                Hakuno and published in Young Animal. The comic won first place in the Comic Awards 2011 and fourth
                place in
                the First Comic Fall 100. [1]
            </h3> <!--小标题k-->
        </div>

        <br><br><br><br>

        <div style="border-bottom:white 8px solid;padding-bottom: 30px;">
            <p style="font-size: 30px;color: pink;width: 90%;margin: auto;">synopsis:</p>
            <img src="@/assets/刘康图选集/三月的狮子图选/三月封面.jpg" alt=""
                style="float: right;margin-left: 50px;border: 3px rgb(0, 255, 157) solid;">
            <!--封面图片k-->
            <p style="font-size: 15px;width: 90%;margin: auto;font-size: 22px;border-radius: 25px;">Male protagonist
                Kiyama
                zero is a seventeen-year-old professional chess player, when his parents and sister were killed in a car
                accident, the soul was greatly traumatized. He is adopted by the chess player and his father's best
                friend,
                and his amazing talent for chess makes him beloved by his adoptive father, but he is also envied by his
                biological children, which makes Zero very lonely and unable to socialize with outsiders. Moved out of
                my
                adoptive father's house and started my own life. In March street met Ming Li, sun, peach three sisters,
                their care makes zero feel the warmth of the heart again. This slender young man walks slowly in the
                warmth
                of friends and the loneliness of a person, the love wrapped in the sadness of the past, looking forward
                to
                one day out of his own bondage
            </p> <!--剧情简介k-->
        </div>

        <br><br><br><br><br><br>

        <div style="border-bottom:white 8px solid;padding-bottom: 130px;">
            <p style="font-size: 30px;color: aqua;width: 90%;margin: auto;">Climactic scene:</p>
            <img src="@/assets/刘康图选集/三月的狮子图选/三月情节.jpg" alt=""
                style="width: 600px;height: 400px;float: right;margin-left: 50px;border: 3px rgb(0, 255, 157) solid;">
            <!--情节图片k-->
            <p style="font-size: 15px;width: 90%;margin: auto;font-size: 22px;">The magic of more than a thousand years
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
            <div style="border-radius: 25px ;border: #333 8px solid;"> <!--主要人物头像k-->
                <RouterLink to="/anime5/character1"><img src="@/assets/刘康图选集/三月的狮子图选/零头像.jpg" alt=""
                        style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;">
                </RouterLink>
                <RouterLink to="/anime5/character2"><img src="@/assets/刘康图选集/三月的狮子图选/二海堂头像.jpg" alt=""
                        style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;">
                </RouterLink>
                <RouterLink to="/anime5/character3"><img src="@/assets/刘康图选集/三月的狮子图选/日向头像.jpeg" alt=""
                        style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;">
                </RouterLink>
                <RouterLink to="/anime5/character4"><img src="@/assets/刘康图选集/三月的狮子图选/明里头像.jpg" alt=""
                        style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;">
                </RouterLink>
                <span></span>
                <span style="white-space: nowrap;margin-left: 200px;"><a href="./零介绍页.html">Kiriyama Rei</a></span>
                <span style="white-space: nowrap;margin-left: 220px;"><a href="./二海堂介绍页.html">Harunobu
                        Nikaido</a></span>
                <span style="white-space: nowrap;margin-left: 190px;"><a href="./日向介绍页.html">Kawamoto Hinata</a></span>
                <span style="white-space: nowrap;margin-left: 200px;"><a href="./明里介绍页.html">Akari Kawamoto</a></span>
            </div>
            <br>


        </div>
        <RouterView />
        <br><br><br>
        <div>
            <footer>
                <p>March comes in like a lion</p> <!--页尾k-->
            </footer>
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
    background-size: cover;
    background-image: url(@/assets/刘康图选集/三月的狮子图选/三月的狮子背景.jpg);
    background-repeat: no-repeat;

}
</style>
