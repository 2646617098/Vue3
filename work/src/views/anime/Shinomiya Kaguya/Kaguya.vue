<template>
    <div class="background">
        <Header_P/>
        <div>
            <header>
                <h1>
                    Animation details
                </h1>
            </header>
        </div>
        <div style="border-bottom:white 8px solid;padding-bottom: 10px;">
            <h1 style="text-align: center;font-size: 40;">Miss Shinomiya Kaguya wants me to confess</h1> <!--标题k-->


            <h3 style="color:gray;width: 80%;margin: auto;">Based on Akasaka Akasaka's manga of the same name, it was
                produced by A-1 Pictures and aired from January 12 to March 30, 2019, [2] with 12 episodes.
            </h3> <!--小标题k-->
        </div>

        <br><br><br><br>

        <div style="border-bottom:white 8px solid;padding-bottom: 100px;">
            <p style="font-size: 30px;color: pink;width: 90%;margin: auto;">synopsis:</p>
            <img src="@/assets/刘康图选集/辉夜大小姐图选/辉夜大小姐封面.jpg" alt=""
                style="width: 400px;height: 300px;float: right;margin-left: 50px;border: 3px rgb(0, 255, 157) solid;">
            <!--封面图片k-->
            <p style="font-size: 15px;width: 90%;margin: auto;font-size: 22px;border-radius: 25px;">Family background
                and personality are excellent, a large group of promising scholars gathered in the Soochiwon Gakuen.
                Where the student union met vice president · four palace Hui night and president · Silver royal line
                should have been attracted to each other... But it's been six months and nothing has happened. The most
                troublesome thing is that these two self-respecting, unable to be frank guys actually began to think
                about "trying to get the other side to confess to themselves."
                Until the fall of love will be very happy before the story, the new feeling "battle of wits" romantic
                comedy, this war
            </p> <!--剧情简介k-->
        </div>

        <br><br><br><br><br><br>

        <div style="border-bottom:white 8px solid;padding-bottom: 150px;">
            <p style="font-size: 30px;color: aqua;width: 90%;margin: auto;">Climactic scene:</p>
            <img src="@/assets/刘康图选集/辉夜大小姐图选/辉夜大小姐情节.jpg" alt=""
                style="width: 450px;height: 300px;float: right;margin-left: 50px;border: 3px rgb(0, 255, 157) solid;">
            <!--情节图片k-->
            <p style="font-size: 15px;width: 90%;margin: auto;font-size: 22px;">The elite school gathered show know
                Academy, where the student union met vice president four palace Hui night and president silver royal
                line, is anyone think suitable for each other's two geniuses, thought they could contact immediately,
                but they have not been able to confess because of strong self-esteem. Two people racking their brains in
                the love mind war of "how to let each other confess", that rare intelligence heat out of control, has
                been unable to control
            </p> <!--高潮情节k-->
        </div>

        <br><br><br><br><br>

        <div>
            <p style="font-size: 30px;color: brown;width: 90%;margin: auto;">Main Character</p>
            <br><br>
            <div style="border-radius: 25px ;border: #333 8px solid;"> <!--主要人物头像k-->
                <RouterLink to="/anime3/character1"><img src="@/assets/刘康图选集/辉夜大小姐图选/辉夜头像.jpg" alt=""
                    style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;"></RouterLink>
                <RouterLink to="/anime3/character2"><img src="@/assets/刘康图选集/辉夜大小姐图选/白银头像.jpg" alt=""
                    style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;"></RouterLink>
                <RouterLink to="/anime3/character3"><img src="@/assets/刘康图选集/辉夜大小姐图选/优头像.jpg" alt=""
                    style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;"></RouterLink>
                <RouterLink to="/anime3/character4"><img src="@/assets/刘康图选集/辉夜大小姐图选/藤原头像.jpg" alt=""
                    style=" width: 150px;height: 150px;border-radius: 60%;border: 5px solid black;margin-left: 170px;"></RouterLink>
                <span></span>
                <span style="white-space: nowrap;margin-left: 175px;"><a href="./辉夜介绍页.html">Shinomiya Kaguya</a></span>
                <span style="white-space: nowrap;margin-left: 200px;"><a href="./白银介绍页.html">Shirogane Miyuki</a></span>
                <span style="white-space: nowrap;margin-left: 210px;"><a href="./优介绍页.html">Ishigami Yuu</a></span>
                <span style="white-space: nowrap;margin-left: 230px;"><a href="./藤原介绍页.html">Fujiwara Chika</a></span>
            </div>
            <br>
            
        </div>
        <RouterView/>
        <br><br><br>
        <div>
            <footer>
                <p>Miss Shinomiya Kaguya wants me to confess</p> <!--页尾k-->
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
    background-image: url(@/assets/刘康图选集/辉夜大小姐图选/辉夜大小姐背景.png);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
