<template>
    <div class="background-container">

        <header>
            <h1>background story</h1>
        </header>
        <div class="container">
            <h2>introduction</h2>
            <p>Yuan shenis an open world role-playing game developed by the Chinese game company miHo Yo. Its background
                is
                set in a mysterious continent called Tivat. On this vast continent, players will embark on a legendary
                journey about the disappearance of gods and adventurous exploration.</p>

            <h2>History</h2>
            <p>Tivat Continent is a fantasy world where seven elements intersect. Two thousand years ago, under the
                guidance
                and protection of the seven elemental gods, humans on the continent of Tivat gradually established their
                own
                civilization and beliefs. These deities represent different elemental powers, such as wind, fire, water,
                etc.
                <br>
                提瓦特大陆是一个七种元素交汇的幻想世界。两千年前，在七大元素神明的指引与庇护下，提瓦特大陆上的人类逐渐建立起了自己的文明与信仰。这些神明分别代表着不同的元素力量，如风、火、水等。
            </p>

            <p>However, this continent also experienced a disaster called the Old Gods War. In that disaster, the gods
                disappeared one after another, and the elemental power also weakened, causing the entire world to fall
                into
                chaos and unrest.
                <br>

                然而，这片大陆也曾经历过一场名为旧神战争的灾难。在那场灾难中，神明们纷纷失踪，元素力量也随之减弱，使得整个世界陷入了混乱与不安。
            </p>

            <h2>The Arrival of Travelers</h2>

            <p>The traveler first arrived in Mondstadt, a wind city created by the wind god Barbados and also the
                capital of
                freedom. Here, travelers will assist the Knights of the West Wind in investigating the cause of the Wind
                Demon Dragon's anomaly and meet numerous companions.
                <br>
                旅行者最初降临在蒙德城，这是一座由风神巴巴托斯创建的风之城，也是自由之都。在这里，旅行者将协助西风骑士团调查风魔龙异动的原因，并结识众多伙伴。
            </p>

            <h2>The downfall of Kanria and the Abyssal Order</h2>
            <p>In the history of the Teyvat continent, Kanria was a godless kingdom that constantly attempted to
                overthrow
                the rule of heaven. However, five hundred years ago, fate overthrew Kanria, leading to the spread of
                dark
                disasters on the earth. In this disaster, the traveler's sister Ying was granted the title of princess
                by
                the Kanriya royal family and met many high-ranking Kanriya figures.
                <br>
                在提瓦特大陆的历史中，坎瑞亚是一个无神的国度，他们一直试图颠覆天理的统治。然而，五百年前，天理覆灭了坎瑞亚，导致地上漆黑灾厄蔓延。在这场灾难中，旅行者中的妹妹荧被坎瑞亚王室封为了公主，并结识了许多坎瑞亚高层人物。
            </p>


            <p>After the downfall of Kanria, Ying led the Abyss Sect in search of a force to resist the laws of nature,
                with
                the intention of restoring Kanria to its own country. And the older brother among the travelers, Kong,
                woke
                up five hundred years later, lost his original strength, and embarked on a journey to find his sister
            </p>

            <br>
            <p>坎瑞亚覆灭后，荧为了寻找对抗天理的力量，领导了深渊教团，意图复国坎瑞亚。而旅行者中的哥哥空则在五百年后苏醒，失去了原本的力量，踏上了寻找妹妹的旅程。</p>

            <h2>The Seven Gods and the Power of Elements</h2>
            <p>
                On the continent of Tivat, those who are recognized by the gods can use the power of the divine eye to
                drive
                the power of the elements. The power of these elements comes from seven deities, namely the Wind God
                Babatos, the Rock God Morax, and the Thunder God Baal. Each deity possesses their own unique elemental
                power
                and guards a region of the continent.
                <br>在提瓦特大陆上，被神认可的人可以籍神之眼的力量驱动元素之力。这些元素之力来源于七位神明，他们分别是风神巴巴托斯、岩神摩拉克斯、雷神巴尔等。每位神明都拥有自己独特的元素力量，并守护着大陆的一片区域。
            </p>

            <p>However, with the outbreak of the Old Gods War and the disappearance of the gods, the elemental power
                gradually weakened. In order to restore peace to the continent and balance the power of elements,
                travelers
                will embark on a journey full of challenges and adventures.
                <br>然而，随着旧神战争的爆发和神明们的失踪，元素力量逐渐减弱。为了恢复大陆的和平与元素之力的平衡，旅行者将踏上一段充满挑战与冒险的旅程。
            </p>

            <h2>Ending</h2>
            <p> The story of "Genshin Impact" is set in a land of Tivat full of fantasy and adventure. Here, players
                will
                take on the role of travelers embarking on a legendary journey about the disappearance of gods and
                adventurous exploration. By unraveling the mysterious stories and making friends, players will gradually
                learn about the history and future of this continent.

                <br>《原神》的故事背景设定在一个充满奇幻与冒险的提瓦特大陆上。在这里，玩家将扮演旅行者展开一段关于神明失踪与冒险探索的传奇旅程。通过解开神秘背后的故事和结交伙伴，玩家将逐渐了解这片大陆的历史与未来。
            </p>

            <router-link to="/genshin1" style="margin-right: 10px;">introduction</router-link>
            <router-link to="/genshin2" style="margin-right: 10px;">homepage</router-link>
            <router-link to="/genshin3" style="margin-right: 10px;">character</router-link>
            <router-link to="/genshin4">background story</router-link>
        </div>
    </div>
</template>


<script>

</script>

<style scoped>
.background-container {
    width: 100%;
    height: 100%;
    /* 或任何你需要的高度 */
    background-image: url('@/assets/photo/c3a966a97283c5f22c932f89359e4c4.jpg');
    /* 替换为你的图片路径 */
    background-size: cover;
    background-position: center;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;

    text-align: center;
}

header {
    padding: 2em 0;
    background-color: rgba(255, 255, 255, 0.7);
    /* 半透明背景，以便看到背景图片 */
    border-bottom: none;
    /* 移除之前的边框 */
}

.container {
    width: 80%;
    margin: 0 auto;
    padding: 2em 0;
    background-color: rgba(255, 255, 255, 0.9);
    /* 更深的半透明背景，增加对比度 */
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    text-align: left;
}

h1,
h2 {
    color: #5a4949;
    /* 根据背景图片的亮度调整标题颜色 */
}

/* 移除之前的闪烁效果，因为它可能与背景图片不太搭配 */
</style>