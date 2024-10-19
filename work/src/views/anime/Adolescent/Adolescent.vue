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
            <h1 style="text-align: center;font-size: 40;">adolescent</h1> <!--标题k-->


            <h3 style="color:gray;width: 80%;margin: auto;">Adapted from a book by Kazuichi Shida and illustrated by
                Katsuki Mizoguchi, the light novel "Young Pig Head Youth Series" was announced as an animation on
                March 10, 2018, at the new work information conference of the Electric Shock Library. [1] Produced
                by CloverWorks, the film premiered on Asahi on Wednesdays starting October 3, 2018. All 13 episodes
            </h3> <!--小标题k-->
        </div>

        <br><br><br><br>

        <div style="border-bottom:white 8px solid;padding-bottom: 120px;">
            <p style="font-size: 30px;color: pink;width: 90%;margin: auto;">synopsis:</p>
            <img src="@/assets/刘康图选集/青春期少年图选/青春期封面.jpg" alt=""
                style="width: 400px;height: 250px;float: right;margin-left: 50px;border: 3px rgb(0, 255, 157) solid;">
            <!--封面图片k-->
            <p style="font-size: 15px;width: 90%;margin: auto;font-size: 22px;border-radius: 25px;">Sakita Tsukawa,
                a sophomore at Minnohara High School, meets a bunny in the library one day. Her true identity is
                that of Sakurajima Mayi, a third-year student at Sakuta's high school. Although Mayi's dress is very
                attractive, but somehow the people around her can not see her. Ma Yi said to Sakita absolutely not
                to have anything to do with her, but he greeted her on the platform of the station the next day.
                Then Sakita learns of the incredible phenomenon that happened to Mai
            </p> <!--剧情简介k-->
        </div>

        <br><br><br><br><br><br>

        <div style="border-bottom:white 8px solid;padding-bottom: 120px;">
            <p style="font-size: 30px;color: aqua;width: 90%;margin: auto;">Climactic scene:</p>
            <img src="@/assets/刘康图选集/青春期少年图选/青春期情节.jpg" alt=""
                style="float: right;margin-left: 50px;border: 3px rgb(0, 255, 157) solid;">
            <!--情节图片k-->
            <p style="font-size: 15px;width: 90%;margin: auto;font-size: 22px;">Even after leaving Fujisawa and
                coming to Ogaki, no one remembers Sakurajima Mayi. Back to school from the two people learned that
                the school in addition to him has no one still remember Mayi. Sakata hears a hypothesis that a
                certain behavior causes people to gradually forget Mai, and tries to preserve his memory of Mai.
                Seeing that Sakita, Mayi also made a decision
            </p> <!--高潮情节k-->
        </div>

        <br><br><br><br><br>

        <div>
            <p style="font-size: 30px;color: brown;width: 90%;margin: auto;">Main Character</p>
            <br><br>
            <div style="border-radius: 25px ;border: #333 8px solid;"> <!--主要人物头像k-->
                <RouterLink to="/anime6/character1"><img src="@/assets/刘康图选集/青春期少年图选/咲太头像.jpg" alt=""
                    style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;"></RouterLink>
                <RouterLink to="/anime6/character2"><img src="@/assets/刘康图选集/青春期少年图选/麻衣头像.jpg" alt=""
                    style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;"></RouterLink>
                <RouterLink to="/anime6/character3"><img src="@/assets/刘康图选集/青春期少年图选/翔子头像.jpg" alt=""
                    style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;"></RouterLink>
                <RouterLink to="/anime6/character4"><img src="@/assets/刘康图选集/青春期少年图选/古贺头像.jpg" alt=""
                    style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;"></RouterLink>
                <span></span>
                <span style="white-space: nowrap;margin-left: 180px;"><a href="./咲太介绍页.html">Azusagawa
                        Sakut</a></span> <!--主要人物名-->
                <span style="white-space: nowrap;margin-left: 200px;"><a href="./麻衣介绍页.html">Sakurajima
                        Maiyi</a></span>
                <span style="white-space: nowrap;margin-left: 200px;"><a href="./翔子介绍页.html">Makinohara
                        Shoko</a></span>
                <span style="white-space: nowrap;margin-left: 200px;"><a href="./古贺介绍页.html">Koga Tomoe</a></span>
            </div>
            <br>


        </div>
        <RouterView />
        <br><br><br>
        <div>
            <footer>
                <p>adolescent</p> <!--页尾k-->
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
    background-image: url(@/assets/刘康图选集/青春期少年图选/青春期少年背景.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
