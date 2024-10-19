<template>
    <div class="background">
        <Header_P />
        <div class="container">
            <div>
                <header>
                    <h1>
                        Animation details
                    </h1>
                </header>
            </div>
            <div style="border-bottom:white 8px solid;padding-bottom: 10px;">
                <h1 style="text-align: center;font-size: 40;">OSHI NO KO</h1> <!--标题k-->


                <h3 style="color:gray;width: 80%;margin: auto;">The standalone version is published by Shueisha, the
                    traditional Chinese version is published by Qingwen Publishing House, and the simplified Chinese
                    version is published by Bilibili Comics. Japanese edition 11 volumes, Taiwan edition 10 volumes
                </h3> <!--小标题k-->
            </div>

            <br><br><br><br>

            <div style="border-bottom:white 8px solid;padding-bottom: 30px;">
                <p style="font-size: 30px;color: pink;width: 90%;margin: auto;">synopsis:</p>
                <img src="@/assets/刘康图选集/我推的孩子图选/我推的孩子封面.jpg" alt=""
                    style="width: 500px;height: 300px;float: right;margin-left: 50px;border: 3px rgb(0, 255, 157) solid;">
                <!--封面图片k-->
                <p style="font-size: 15px;width: 90%;margin: auto;font-size: 22px;border-radius: 25px;">Goro Amimiya is
                    an obstetrician and gynecologist working in a township. One day, his idol "B Komachi" Hoshino Ai
                    suddenly appeared in front of him. She also harbors a taboo secret. The two meet under the "worst"
                    circumstances and their fates turn... Goro was reincarnated as Akua, one of Love's twins, and his
                    former patient Sarina Tentoji was reincarnated as his sister Ruby 52
                    .
                    After that, the genius idol Hoshino loved it. Ruby, the twin sister left behind, enters the show
                    business longing for her mother. The elder brother Akua vows to take revenge on his father who
                    helped kill love. "Love's bastard" "has memories of previous lives." With such two big secret
                    brother and sister, began a new story 5
                </p> <!--剧情简介k-->
            </div>

            <br><br><br><br><br><br>

            <div style="border-bottom:white 8px solid;padding-bottom: 120px;">
                <p style="font-size: 30px;color: aqua;width: 90%;margin: auto;">Climactic scene:</p> <!--剧情简介k-->
                <img src="@/assets/刘康图选集/我推的孩子图选/我推的孩子情节.webp" alt=""
                    style="width: 500px;height: 300px;float: right;margin-left: 50px;border: 3px rgb(0, 255, 157) solid;">
                <!--情节图片k-->
                <p style="font-size: 15px;width: 90%;margin: auto;font-size: 22px;">Rehearsals have begun for the stage
                    production of the popular manga Tokyo Blade. By spending time with actors from the troupe "Lalalai",
                    You Maganai made a big leap forward. Kurokawa while admitting to have Maganai talent, while burning
                    fiercely competitive heart. Surrounded by talented and passionate actors, Akua even uses his acting
                    skills to pursue the truth of the death of love. Ruby, on the other hand, follows her mother's
                    footsteps as an icon
                </p> <!--高潮情节k-->
            </div>

            <br><br><br><br><br>

            <div>
                <p style="font-size: 30px;color: brown;width: 90%;margin: auto;">Main Character</p>
                <br><br>
                <div style="border-radius: 25px ;border: #333 8px solid;"> <!--主要人物头像-->
                    <RouterLink to="/anime1/character1"><img src="@/assets/刘康图选集/我推的孩子图选/阿库亚头像.png" alt=""
                        style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;"></RouterLink>
                    <RouterLink to="/anime1/character2"><img src="@/assets/刘康图选集/我推的孩子图选/露比头像.jpg" alt=""
                        style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;"></RouterLink>
                    <RouterLink to="/anime1/character3"><img src="@/assets/刘康图选集/我推的孩子图选/黑川头像.jpg" alt=""
                        style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;"></RouterLink>
                    <RouterLink to="/anime1/character4"><img src="@/assets/刘康图选集/我推的孩子图选/加奈头像.jpg" alt=""
                        style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;"></RouterLink>
                    <span></span>
                    <span style="white-space: nowrap;margin-left: 173px;"><a href="./阿库亚介绍页.html">Hoshino
                            Aquamarin</a></span> <!--主要人物名-->
                    <span style="white-space: nowrap;margin-left: 200px;"><a href="./露比介绍页.html">Hoshino
                            Rubii</a></span>
                    <span style="white-space: nowrap;margin-left: 210px;"><a href="./黑川介绍页.html">Kurokawa
                            Akane</a></span>
                    <span style="white-space: nowrap;margin-left: 230px;"><a href="./加奈介绍页.html">Arima Kana</a></span>
                </div>
                <br>
                <RouterView />
            </div>
            <div>
                <footer>
                    <p>OSHI NO KO</p> <!--页尾k-->
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
    background-image: url(@/assets/刘康图选集/我推的孩子图选/背景我推的孩子.png);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
