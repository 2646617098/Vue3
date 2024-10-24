<template>
    <div class="background-container">
        <header>
            <h1>原神 - 提瓦特大陆的冒险</h1>
        </header>
        <div class="container">
            <h2>Game Introduction</h2>
            <p>Genshin Impact is an open world adventure game produced and distributed by Shanghai Mihayou Technology
                Co.,
                Ltd. The game takes place in a fantasy world called "Tivat", where people selected by the god will be
                awarded "Eye of God" to guide the elements</p>

            <br>
            <p>《原神》是由上海米哈游科技有限公司制作发行的一款开放世界冒险游戏，游戏发生在一个被称作“提瓦特”的幻想世界，在这里，被神选中的人将被授予“神之眼”，导引元素之力。
            </p>
            <p>The player will play a mysterious role called "Traveler", meet friends with different personalities and
                unique abilities in the free travel, defeat the strong enemy with them, and find the lost relatives - at
                the
                same time, gradually discover the truth of "Genshin Impact".
                <br>
                玩家将扮演一位名为“旅行者”的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，找回失散的亲人——同时，逐步发掘“原神”的真相。
            </p>

            <h2>feature</h2>

            <ul>
                <li>Elemental interaction: Use characters and enemies with different elements to engage in battles and
                    explore every corner of the world.
                    <br>元素互动：使用不同元素的角色和敌人进行战斗，探索世界的每一个角落。
                </li>
                <li>Open world adventure experience: Players can freely explore the vast continent of Teyvat.
                    <br>开放世界的冒险体验：玩家可以在广阔的提瓦特大陆上自由探索。
                </li>
                <li>Rich character system: Numerous characters with unique personalities and abilities, each with their
                    own
                    story.
                    <br>丰富的角色系统：众多独特性格和能力的角色，每一位角色都有自己的故事。
                </li>
                <li>Diversified tasks and activities: a large number of main and side quests, as well as regular holiday
                    events.
                    <br>多样化的任务和活动：大量的主线和支线任务，以及定期的节日活动。
                </li>
            </ul>

            <h2>Game screenshot</h2>
            <img src="@/assets/photo/563e16e0a1ea8001bc8c7b6ef1a23e0.jpg" alt="原神游戏截图1">
            <img src="@/assets/photo/fa14fdea1db04dcb4c1fb4c7f5504b9.jpg" alt="原神游戏截图2">

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
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.background-container {
    width: 100%;
    height: 100%;
    /* 或任何你需要的高度 */
    background-color: #a1d5ed;
    /* 替换为你的图片路径 */
    background-size: cover;
    background-position: center;
}

header {
    background-color: #333;
    color: rgb(189, 58, 58);
    padding: 1rem 0;
    text-align: center;
}

.container {
    width: 80%;
    margin: 2rem auto;
    background-color: rgb(197, 206, 235);
    padding: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.container img {
    width: 100%;
    height: auto;
    display: block;
    margin: 1rem 0;
}

footer {
    background-color: #151414;
    color: white;
    text-align: center;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    bottom: 0;
}
</style>