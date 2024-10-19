<template>
    <div>
        <header>
            <h1>Character introduction</h1>
        </header>
        <div class="container">
            <div class="profile-img">
                <img src="@/assets/animeImg/三月的狮子图选/零头像.jpg" alt=""> <!--人物头像-->
            </div>
            <div class="profile-info"> <!--人物名称-->
                <h2>Kiriyama Rei</h2>
                <!--人物简介-->
                <p>Male protagonist Kiyama zero is a seventeen-year-old professional chess player, when his parents and
                    sister were killed in a car accident, the soul was greatly traumatized. He is adopted by the chess
                    player and his father's best friend, and his amazing talent for chess makes him beloved by his
                    adoptive
                    father, but he is also envied by his biological children, which makes Zero very lonely and unable to
                    socialize with outsiders. Moved out of my adoptive father's house and started my own life. In March
                    street met Ming Li, sun, peach three sisters, their care makes zero feel the warmth of the heart
                    again.
                    This slender young man walks slowly in the warmth of friends and the loneliness of a person, the
                    love
                    wrapped in the sadness of the past, looking forward to one day out of his own bondage</p>
            </div>
        </div>
        <footer>
            <p>&copy; Character introduction page</p>
        </footer>
    </div>
</template>
<script setup></script>
<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.container {
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
    background: #fff;
    padding: 20px;
    margin-top: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

.profile-img {
    text-align: center;
    margin-top: 20px;
}

.profile-img img {
    width: 150px;
    height: 150px;
    border-radius: 60%;
    border: 5px solid #77dd77;
}

.profile-info {
    text-align: center;
    margin-top: 20px;
}

.profile-info p {
    font-size: 16px;
    line-height: 1.6;
}

footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    margin-top: 20px;
}
</style>