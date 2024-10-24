<template>
    <div class="background-container">
        <div class="content-container">
            <h1>原神 - 提瓦特大陆的冒险</h1>
            <p>
                Genshin Impact is an open world action role-playing game developed and released by the Chinese game
                company
                miHoYo. Since its release in 2020, it has quickly won the favor of players worldwide with its beautiful
                pictures, rich story background and innovative game mechanism. The artistic style of the game is deeply
                influenced by Eastern aesthetics, while also incorporating Western fantasy elements. Every corner of the
                game is filled with delicate design and rich colors, from magnificent castles to peaceful villages, from
                lush forests to vast deserts, every place is unforgettable. Players can freely explore this vast world,
                climb mountains, cross rivers, and even use the wings of the wind to soar in the sky. The world is
                filled
                with various secrets and treasures waiting for players to discover. There are more than in the game
                30 playable characters, each with a unique background story, personality, and combat skills. Players can
                form their own adventure teams based on their preferences and combat strategies. The music of the game
                is
                composed by famous composers, and each area has its own unique theme song, perfectly integrated into the
                atmosphere of the game, allowing players to enjoy a wonderful musical journey during the exploration
                process
                <br><br>
                《原神》

                一款由中国游戏公司miHoYo开发并发行的开放世界动作角色扮演游戏，自2020年发布以来，它以其精美的画面、丰富的故事背景和创新的游戏机制，迅速在全球范围内赢得了玩家的喜爱。游戏的艺术风格深受东方美学的影响，同时也融入了西方幻想元素。游戏中的每一个角落都充满了细腻的设计和丰富的色彩，从宏伟的城堡到宁静的村庄，从葱郁的森林到辽阔的沙漠，每一处都让人流连忘返。玩家可以自由探索这个广阔的世界，攀登山峰，穿越河流，甚至利用风之翼在天空中翱翔。世界中充满了各种秘密和宝藏，等待着玩家去发现。游戏中有超过
                30个可玩角色，每个角色都有独特的背景故事、个性和战斗技能。玩家可以根据自己的喜好和战斗策略，组建属于自己的冒险队伍。游戏的音乐由著名的作曲家负责，每个区域都有其独特的主题曲，完美地融入了游戏的氛围中，让玩家在探索的过程中享受到美妙的音乐之旅
            </p>
            <router-link to="/genshin1" style="margin-right: 10px;">introduction</router-link>
            <router-link to="/genshin2" style="margin-right: 10px;">homepage</router-link>
            <router-link to="/genshin3" style="margin-right: 10px;">character</router-link>
            <router-link to="/genshin4">background story</router-link>
        </div>
        <footer>
            <p>&copy; 2023 米哈游. 保留所有权利.</p>
        </footer>
    </div>
</template>


<script>

</script>

<style scoped>
body,
html {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
}

.background-container {
    width: 100%;
    height: 100%;
    /* 或任何你需要的高度 */
    background-image: url('@/assets/photo/7ab3e9386be06f2aa1ada00ac5cf2ef.jpg');
    /* 替换为你的图片路径 */
    background-size: cover;
    background-position: center;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-container {
    background-color: rgba(255, 255, 255, 0.8);
    /* 半透明白色背景 */
    padding: 2rem;
    border-radius: 10px;
    /* 可选：圆角边框 */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    /* 可选：阴影效果 */
    text-align: center;
    max-width: 100%;
    /* 限制容器最大宽度 */
    width: 100%;
    /* 确保在小屏幕上也能占满宽度 */
    height: 100vh;
    font-size: larger;
}

h1,
p {
    color: #333;
    /* 确保文字在白色背景上清晰可见 */
    margin: 0 20vh;
}

/* 可选：添加一些额外的样式 */
footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* 半透明黑色背景 */
    color: white;
    text-align: center;
    padding: 1rem 0;
}
</style>