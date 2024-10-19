<template>
    <div>
        <header>
            <h1>Character introduction</h1>
        </header>
        <div class="container">
            <div class="profile-img">
                <img src="@/assets/animeImg/死亡笔记图选/N头像.jpg" alt=""> <!--人物头像-->
            </div>
            <div class="profile-info"> <!--人物名称-->
                <h2>N</h2>
                <!--人物简介-->
                <p>The child who was raised as L's candidate successor, the most talented boy who is closest to L, is
                    the
                    core figure of the organization "SPK" that deals with KIRA, and can even make the FBI obey him. In
                    the
                    duel with KIRA, discover her true identity.</p>
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