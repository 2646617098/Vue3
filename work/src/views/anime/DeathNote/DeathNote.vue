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
            <h1 style="text-align: center;font-size: 40;color: #fff;">Death Note</h1> <!--标题k-->


            <h3 style="color:gray;width: 80%;margin: auto;">In August 2003, the manga published the original story of
                Death Note in short form in the Shueisha magazine Shonen Jump No. 36, which won the first place in the
                readers' vote, and from December 2003 to May 2006, it was published in a serialized version with 108
                words, different from the short story
            </h3> <!--小标题k-->
        </div>

        <br><br><br><br>

        <div style="border-bottom:white 8px solid;padding-bottom: 80px;color: #fff;">
            <p style="font-size: 30px;color: pink;width: 90%;margin: auto;">synopsis:</p>
            <img src="@/assets/刘康图选集/死亡笔记图选/死亡笔记封面.jpg" alt=""
                style="width: 250px;height: 400px;float: right;margin-left: 50px;border: 3px rgb(0, 255, 157) solid;">
            <!--封面图片k-->
            <p style="font-size: 15px;width: 90%;margin: auto;font-size: 22px;border-radius: 25px;">Death Lucke because
                tired of life in the world of death, deliberately discarded a death note in the world. After finding the
                death note, Night God Moon, a high school student who is also tired of life on earth, believes that the
                death note is true due to the death of the test subject and the Lucke who is looking for the note, and
                is determined to eradicate the criminals with the power of the note, build a world without crime, and
                become the god of the new world. Later, he sanctioned criminals in the capacity of "KIRA", causing a
                large number of criminals to die of heart paralysis regardless of nationality, which became the topic of
                the ICPO meeting. The mysterious detective L asserts that this is a mass murder, announces that he has
                begun an investigation, asks ICPO for assistance, and sets up an investigation headquarters with the
                police in Japan. After L's investigation, it is determined that KIRA lives in Kanto and challenges her.
                Challenged by L, the night God moon believes that L will become a stumbling block on his way to creating
                a new world, and accepts its challenge and confronts it.
            </p> <!--剧情简介k-->
        </div>

        <br><br><br><br><br><br>

        <div style="border-bottom:white 8px solid;padding-bottom: 120px;color: #fff;">
            <p style="font-size: 30px;color: aqua;width: 90%;margin: auto;">Climactic scene:</p>
            <img src="@/assets/刘康图选集/死亡笔记图选/死亡笔记情节.jpg" alt=""
                style="float: right;margin-left: 50px;border: 3px rgb(0, 255, 157) solid;">
            <!--情节图片k-->
            <p style="font-size: 15px;width: 90%;margin: auto;font-size: 22px;">Invited to join the Japanese
                investigation headquarters. Using Mihaisa, who loves him deeply, he instructs him to kill the criminal
                again after the Four Yechina incident, forcing Rem, who wants to help Haisha, to kill L and win the duel
                with L, replacing him as the second generation L. At the age of 23, he graduated from Dongying
                University and joined the police agency. In a showdown with Nia and Milo, who inherit the will of L, he
                miscalculates in the YB warehouse and discovers his true identity. Death flow Ke think his defeat has
                been unable to save, in the abandoned warehouse to kill the month, the cause of death heart paralysis
            </p> <!--高潮情节k-->
        </div>

        <br><br><br><br><br>

        <div>
            <p style="font-size: 30px;color: brown;width: 90%;margin: auto;">Main Character</p>
            <br><br>
            <div style="border-radius: 25px ;border: #333 8px solid;"> <!--主要人物头像k-->
                <RouterLink to="/anime4/character1"><img src="@/assets/刘康图选集/死亡笔记图选/夜神月头像.jpg" alt=""
                    style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;"></RouterLink>
                <RouterLink to="/anime4/character2"><img src="@/assets/刘康图选集/死亡笔记图选/L头像.jpg" alt=""
                    style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;"></RouterLink>
                <RouterLink to="/anime4/character3"><img src="@/assets/刘康图选集/死亡笔记图选/弥海砂头像.jpg" alt=""
                    style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;"></RouterLink>
                <RouterLink to="/anime4/character4"><img src="@/assets/刘康图选集/死亡笔记图选/N头像.jpg" alt=""
                    style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;"></RouterLink>
                <span></span>
                <span style="white-space: nowrap;margin-left: 180px;"><a href="./夜神月介绍页.html">Night God Moon</a></span>
                <!--主要人物名-->
                <span style="white-space: nowrap;margin-left: 270px;"><a href="./L介绍页.html">L</a></span>
                <span style="white-space: nowrap;margin-left: 290px;"><a href="./弥海砂介绍页.html">miaite</a></span>
                <span style="white-space: nowrap;margin-left: 310px;"><a href="./N介绍页.html">N</a></span>
            </div>
            <br>


        </div>
        <RouterView/>
        <br><br><br>
        <div>
            <footer>
                <p>Death Note</p> <!--页尾k-->
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
    background-image: url(@/assets/刘康图选集/死亡笔记图选/死亡笔记背景.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
