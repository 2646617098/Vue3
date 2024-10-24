<template>
    <div>
    <div class="container">
        <div class="Tag">
            <div class="TagContent">
                <h3 ref="Games" style="text-align: center; vertical-align: middle; font-weight: 800;">GAMES</h3>
            </div>
            <div class="ViewAll"><a href="#" style="text-decoration: none; font-weight: 600;">View all</a></div>
        </div>
        <p style="margin-top: 10px;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: aliceblue;">Popular
            pages
            in Games</p>
        <div class="row g-3">
            <div class="col-2">
                <div class="border bg-light" style="text-align: center;">
                    <router-link to="/minecraft1"><img src="@/assets/img/games(1).png" alt="" class="img-fluid"></router-link>
                    <p
                        style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">
                        Minecraft</p>
                </div>
            </div>
            <div class="col-2">
                <div class="border bg-light" style="text-align: center;">
                    <router-link to="/naruto1"><img src="@/assets/img/games(2).png" alt="" class="img-fluid"></router-link>
                    <p
                        style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">
                        Naruto</p>
                </div>
            </div>
            <div class="col-2">
                <div class="border bg-light" style="text-align: center;">
                    <router-link to="/genshin1"><img src="@/assets/photo/genshin.png" alt="" class="img-fluid"></router-link>
                    <p
                        style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: normal; font-weight: 800;">
                        Genshin Impact</p>
                </div>
            </div>
            <div class="col-2">
                <div class="border bg-light" style="text-align: center;">
                    <router-link to="/honorOfKings1"><img src="@/assets/photo/honorOfKings.webp" alt="" class="img-fluid"></router-link>
                    <p
                        style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">
                        Honor of Kings</p>
                </div>
            </div>
            <div class="col-2">
                <div class="border bg-light" style="text-align: center;">
                    <img src="@/assets/img/games(5).png" alt="" class="img-fluid">
                    <p
                        style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">
                        Grand
                        Theft Auto V</p>
                </div>
            </div>
            <div class="col-2">
                <div class="border bg-light" style="text-align: center;">
                    <img src="@/assets/img/games(6).png" alt="" class="img-fluid">
                    <p
                        style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">
                        HuntDown</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container" style="margin-top: 100px;"><!-- 大图 -->
        <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: aliceblue;">Top new
            stories in Games</p>
        <div class="row g-3">
            <div class="col-6">
                <div class="border bg-light" style="position: relative; display: inline-block;">
                    <img src="@/assets/img/games-big(1).webp" alt="" class="img-fluid"
                        style="filter: brightness(0.5);">
                    <div class="overlay-text">
                        <p class="underline-text" style="text-decoration-color: aquamarine;">PS5 Pro Preorders Live At
                            Amazon,
                            Walmart, And Best Buy</p>
                        <p class="disappear-text">PlayStation 5 Pro costs $700 and releases November 7.</p>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="border bg-light" style="position: relative; display: inline-block;">
                    <img src="@/assets/img/games-big(2).webp" alt="" class="img-fluid"
                        style="filter: brightness(0.5);">
                    <div class="overlay-text">
                        <p class="underline-text" style="text-decoration-color: aquamarine;">Destiny 2 Ice Breaker
                            Guide: How To Get
                            The New Solar Sniper Rifle</p>
                        <p class="disappear-text">One of the original Destiny's best Exotic weapons is back in the
                            Vesper's Host dungeon--here's what you need
                            to know about it and how to get it.</p>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="border bg-light" style="position: relative; display: inline-block;">
                    <img src="@/assets/img/games-big(3).webp" alt="" class="img-fluid"
                        style="filter: brightness(0.5);">
                    <div class="overlay-text">
                        <p class="underline-text" style="text-decoration-color: rgb(221, 21, 81);">Mario & Luigi
                            Brothership Aims To
                            Emerge From Paper Mario's Shadow</p>
                        <p class="disappear-text">The first Mario & Luigi game on a Nintendo console looks like a
                            promising mixture of goofball humor and
                            surprisingly deep RPG hooks.</p>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="border bg-light" style="position: relative; display: inline-block;">
                    <img src="@/assets/img/games-big(4).webp" alt="" class="img-fluid"
                        style="filter: brightness(0.5);">
                    <div class="overlay-text">
                        <p class="underline-text" style="text-decoration-color: yellow;">Destiny 2 Onslaught: Salvation
                            Guide -
                            Potions, Banes, And New Defenses</p>
                        <p class="disappear-text">Episode: Revenant in Destiny 2 brings a new version of the Onslaught
                            activity to the game, with a few key
                            changes to how it works.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        scrollToGames() {
            const Element = this.$refs.Games;
            if (Element) {
                Element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>

<style scoped></style>
