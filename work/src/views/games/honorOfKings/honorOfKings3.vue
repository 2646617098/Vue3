<template>
    <div class="background-container">
        <header>
            <h1>Welcome to Honor of Kings</h1>
            <nav>
                <ul>
                    <li><router-link to="/honorOfKings1">Home</router-link></li>
                    <li><router-link to="/honorOfKings2">About</router-link></li>
                    <li><router-link to="/honorOfKings3">Heroes</router-link></li>
                </ul>
            </nav>
        </header>
        <section class="hero-section">
            <h2>Join the Epic Battle</h2>
            <img src="@/assets/photo/9fb975e0c658cf4281d0f2e95f04f35.jpg" alt="Battle Scene" class="hover-image" width="70%"
                height="300">
            <p>Experience the thrill of 5v5 MOBA combat as you clash with players worldwide. Summon your heroes and
                fight for glory!
                <br> 体验5v5多人在线战术竞技游戏的刺激，与世界各地的玩家一决高下。召唤你的英雄，为荣耀而战！
            </p>
        </section>
        <footer>
            <p>&copy; 2023 Honor of Kings. All rights reserved.</p>
        </footer>
    </div>
</template>

<script>

</script>

<style scoped>
body {
    margin: 0;
    font-family: Arial, sans-serif;

}

.background-container {
    width: 100%;
    height: 100vh;
    /* 或任何你需要的高度 */
    background-image: url('@/assets/photo/a6155b6058aec6d7e81ba0b8ae16bd3.jpg');
    /* 替换为你的图片路径 */
    background-size: cover;
    background-position: center;
}

header {
    background-color: rgba(0, 0, 0, 0.5);
    /* 可选：为header添加半透明背景 */
    color: white;
    padding: 1em 0;
    text-align: center;
    height: auto;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 1em;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

.hero-section {
    height: 100vh;
    padding: 2em;
    text-align: center;
    color: white;
    /* 如果背景图片太暗，可以使用白色文字 */
    background-color: rgba(0, 0, 0, 0.5);
    /* 可选：为section添加半透明背景 */
}

.hero-section img {
    max-width: 100%;
    height: auto;
}

.hover-image {
    transition: transform 0.3s;
    /* 添加悬停效果 */
}

.hover-image:hover {
    transform: scale(1.05);
    /* 图片悬停时放大 */
}

footer {
    background-color: rgba(0, 0, 0, 0.5);
    /* 可选：为footer添加半透明背景 */
    color: white;
    text-align: center;
    padding: 1em 0;
    position: fixed;
    /* 使footer固定在页面底部 */
    width: 100%;
    bottom: 0;
}
</style>