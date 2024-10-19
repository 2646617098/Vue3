<template>
    <div>
        <header>
            <h1>Character introduction</h1>
        </header>
        <div class="container">
            <div class="profile-img">
                <img src="@/assets/animeImg/我推的孩子图选/黑川头像.jpg" alt=""> <!--人物头像-->
            </div>
            <div class="profile-info"> <!--人物名称-->
                <h2>Kurokawa Akane</h2>
                <!--人物简介-->
                <p>Qian is the young leading actor of LALALAI troupe, in order to live up to the expectations of others
                    when participating in a love reality show, she is serious because of an accident and was subjected
                    to network violence, but with the help of Hoshino Ai Jiu Ai Sea to be safe, and finally became Ai
                    Jiu ai Sea girlfriend in the program</p>
            </div>
        </div>
        <footer>
            <p>&copy; Character introduction page</p>
        </footer>
    </div>
</template>
<script setup>

</script>
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