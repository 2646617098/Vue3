<template>
    <div class="background-container">
        <header>
            <h1>Heroes in Honor of Kings</h1>
            <nav>
                <ul>
                    <li><router-link to="/honorOfKings1">Home</router-link></li>
                    <li><router-link to="/honorOfKings2">About</router-link></li>
                    <li><router-link to="/honorOfKings3">Heroes</router-link></li>
                </ul>
            </nav>
        </header>
        <section class="heroes-section">
            <h2 style="color: rgb(242, 116, 58);">Meet the Heroes</h2>
            <div class="hero-card">
                <img src="@/assets/photo/a6155b6058aec6d7e81ba0b8ae16bd3.jpg" alt="Hero 1" class="hover-image"
                    width="500" height="300">
                <h3 style="color: rgb(242, 116, 58);">孙尚香</h3>
                <p style="color: rgb(242, 116, 58);">As a relatively easy to pick up shooter, Sun Shangxiang is a late
                    game hero, but that doesn't mean she can't gain an advantage in the early to mid game.
                    In the early stage, Sun Shangxiang mainly focused on development, and could try to fight and harvest
                    with a single skill, especially when facing heroes like Mark with a single skill line, they could
                    shift and avoid damage. However, heroes like Yu Ji were able to counter and restrain Sun Shangxiang,
                    and only started fighting when they saw a confident harvest.
                    In the mid-term, the focus will be on developing core equipment.
                    In the later stage, it is basically the world of marksmen. Sun Shangxiang is a hero with high
                    damage. Basically, in the later stage, he can shoot one child with one shot by strengthening his
                    general attack (this sentence starts from Sun Shangxiang)
                    Sun Shangxiang's outfits mainly consist of three core outfits: Shadow Blade, Endless, and Dawn. But
                    the specific approach to changing the outfit is still based on the match situation.
                    Summoner skills can choose to purify or flash. It was also chosen based on the hero on the opposite
                    side.
                    In terms of playing style, development is the main focus, with harvesting in the middle and later
                    stages, and walking with teammates.
                    <br>作为一个比较好上手的射手，孙尚香是一个偏后期的英雄，但是不意味着不能在前中期拿到优势。
                    前期孙尚香主要还是以发育为主，可以靠一技能尝试对拼收割，尤其是面对马克这样的技能一条线的英雄，可以位移躲伤害，但是虞姬这样的英雄就是对位克制孙尚香的，看到有把握的收割才去打架。
                    中期以出核心装备为主。
                    后期基本上就是射手的天下，孙尚香是个伤害很高的英雄，基本上后期靠着强化普攻都可以一枪一个小朋友（这句话就是从孙尚香开始了）
                    孙尚香的出装具体以影刃，无尽，破晓三个核心装为主。但是具体还是以对局情况来改变出装思路。
                    召唤师技能可以选择净化或闪现。也是根据对面的英雄来选的。
                    打法上是以发育为主，中后期进行收割，和队友一起走。
                </p>
            </div>
            <div class="hero-card">
                <h3 style="color: rgb(242, 116, 58);">庄周</h3>
                <img src="@/assets/photo/23f1b45b5f093f9f7f11665a63daf51.jpg" alt="Hero 2" class="hover-image"
                    width="500" height="300">

                <p style="color: rgb(242, 116, 58);">The mount of King of Glory Zhuang Zhou is Kun; Kun is a legendary
                    big fish. "There is a fish in Beiming, named Kun. Kun is so big that I don't know how many miles it
                    is. It has transformed into a bird and is called Peng. The back of Peng flies in anger, and its
                    wings are like clouds hanging from the sky." This is Zhuang Zhou's deep description of his beloved
                    pet.
                    King of Glory Zhuang Zhou - Auxiliary
                    Passive - Natural Will: Every 6 seconds, Zhuang Zhou enters a natural dream, which will release all
                    control effects and reduce damage by 15%, while increasing movement speed by 15%.
                    One skill - Butterfly Transformation: Zhuang Zhou transforms a butterfly to release his own control.
                    The butterfly flies towards the designated direction, dealing spell damage to enemies on the path
                    and reducing their movement speed by 50%.
                    Second Skill - Butterfly Effect: In Zhuang Zhou's dream, the butterfly flaps its wings, dealing 25
                    spell damage to enemies around it and increasing the movement speed of friendly forces by 3% within
                    the range for 5 seconds. Continuous hits of the skill will have a stacking effect, with damage
                    stacking on each layer and movement speed stacking on 3% per layer, up to a maximum of 5 layers.
                    Zhuang Zhou will automatically release the butterfly effect every 6 seconds
                    Three Skills - Harmony of Heaven and Man: Zhuang Zhou transforms into a dream realm to protect
                    nearby allies, relieve the control effect on teammates, and enable them to escape control and obtain
                    shields.
                    <br>王者荣耀庄周的坐骑是鲲；鲲是传说中的一种大鱼，“北冥有鱼，其名为鲲。鲲之大，不知其几千里也。化而为鸟，其名为鹏。鹏之背，不知其几干里也。怒而飞，其翼若垂天之云。”这是庄周对自己爱宠的深切描写。
                    王者荣耀庄周-辅助
                    被动-自然意志：庄周每隔6秒进入自然梦境，会解除自身所有控制效果，并且减少15%所受到的伤害，增加15%移动速度。
                    一技能-化蝶：庄周幻化出蝴蝶解除自身控制，蝴蝶飞向指定方向，对路径上的敌人造成法术伤害，并减少其50%移动速度。
                    二技能-蝴蝶效应：庄周梦中蝴蝶扇起翅膀，对身边的敌人造成25法术伤害，并增加范围内友军3%移动速度，持续5秒，技能连续命中会叠加效果，伤害每层叠加伤害，移动速度每层叠加3%，最多叠加5层，庄周每隔6秒会自动释放一次蝴蝶效应
                    三技能-天人合一：庄周幻化梦域保护附近友军，解除队友所受的控制效果并使他们免控并且获得护盾。
                </p>
            </div>
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
    height: 100%;
    /* 或任何你需要的高度 */
    background-image: url('@/assets/photo/9c2365ebb82bbfc838f38a65a13a9ef.jpg');
    /* 替换为你的图片路径 */
    background-size: cover;
    background-position: center;
}

header {
    background-color: rgba(244, 243, 243, 0.5);
    /* 可选：为header添加半透明背景 */
    color: rgb(29, 64, 109);
    padding: 1em 0;
    text-align: center;
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
    color: rgb(21, 2, 2);
    text-decoration: none;
}

.hero-section {
    padding: 2em;
    text-align: center;
    color: rgb(218, 218, 218);
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
