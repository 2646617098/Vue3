<template>
    <div class="container">
        <div class="Tag">
            <div class="TagContent">
                <h3 ref="Anime" style="text-align: center; vertical-align: middle; font-weight: 800;">ANIME</h3>
            </div>
            <div class="ViewAll"><a href="#" style="text-decoration: none; font-weight: 600;">View all</a></div>
        </div>
        <p
            style="margin-top: 10px;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: aliceblue;">
            Popular
            pages in Anime</p>
        <div class="row g-3">
            <div class="col-2">
                <div class="border bg-light" style="text-align: center;">
                    <RouterLink to="/anime1"><img src="@/assets/img/anime(14).jpg" alt="" class="img-fluid"></RouterLink>
                    <p
                        style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">
                        OSHI NO KO</p>
                </div>
            </div>
            <div class="col-2">
                <div class="border bg-light" style="text-align: center;">
                    <RouterLink to="/anime2"><img src="@/assets/img/anime(3).jpg" alt="" class="img-fluid"></RouterLink>
                    <p
                        style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">
                        Sousou no Frieren</p>
                </div>
            </div>
            <div class="col-2">
                <div class="border bg-light" style="text-align: center;">
                    <RouterLink to="/anime3"><img src="@/assets/img/anime(8).png" alt="" class="img-fluid"></RouterLink>
                    <p
                        style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">
                        Shinomiya Kaguya</p>
                </div>
            </div>
            <div class="col-2">
                <div class="border bg-light" style="text-align: center;">
                    <RouterLink to="/anime4"><img src="@/assets/img/anime(13).jpg" alt="" class="img-fluid"></RouterLink>
                    <p
                        style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">
                        Death Note</p>
                </div>
            </div>
            <div class="col-2">
                <div class="border bg-light" style="text-align: center;">
                    <RouterLink to="/anime5"><img src="@/assets/img/anime(12).png" alt="" class="img-fluid"></RouterLink>
                    <p
                        style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">
                        3-gatsu no Lion 2</p>
                </div>
            </div>
            <div class="col-2">
                <div class="border bg-light" style="text-align: center;">
                    <RouterLink to="/anime6"><img src="@/assets/img/anime(15).jpg" alt="" class="img-fluid"></RouterLink>
                    <p
                        style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: large; font-weight: 800;">
                        Bunny Girl Senpai</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container" style="margin-top: 100px;"><!-- 大图 -->
        <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: aliceblue;">Top
            new
            stories in Anime</p>
        <div class="row g-3">
            <div class="col-6">
                <div class="border bg-light" style="position: relative;  display: inline-block;">
                    <img src="@/assets/img/anime-big(1).webp" alt="" class="img-fluid" style="filter: brightness(0.5);">
                    <div class="overlay-text">
                        <p class="underline-text" style="text-decoration-color: aqua;">Helldivers, Elden Ring's
                            Malenia, And The
                            Best Cosplay At Anime Expo 2024</p>
                        <p class="disappear-text">Here are the best cosplays we saw at the event.</p>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="border bg-light" style="position: relative; display: inline-block;">
                    <img src="@/assets/img/anime-big(2).webp" alt="" class="img-fluid" style="filter: brightness(0.5);">
                    <div class="overlay-text">
                        <p class="underline-text" style="text-decoration-color: yellow;">Berserk 1997 Anime On
                            Blu-Ray Drops To
                            Lowest Price Yet For Amazon Prime Day</p>
                        <p class="disappear-text">After the last two print runs sold out quickly, there's a good
                            chance that this restock of the dark
                            fantasy anime series Berserk won't last for long.</p>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="border bg-light" style="position: relative; display: inline-block;">
                    <img src="@/assets/img/anime-big(3).webp" alt="" class="img-fluid" style="filter: brightness(0.5);">
                    <div class="overlay-text">
                        <p class="underline-text" style="text-decoration-color: blue;">Trigun Stampede Anime Blu-Ray
                            Preorders Are
                            Steeply Discounted At Amazon</p>
                        <p class="disappear-text">At long last, the new adventures of Vash the Stampede will be
                            available on Blu-ray this September, and you
                            can save on the standard edition at Amazon.</p>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="border bg-light" style="position: relative; display: inline-block;">
                    <img src="@/assets/img/anime-big(4).webp" alt="" class="img-fluid" style="filter: brightness(0.5);">
                    <div class="overlay-text">
                        <p class="underline-text" style="text-decoration-color: red;">Buy 1, Get 1 50% Off Book Box
                            Sets At Target
                            - Manga, Novels, Comics, And More</p>
                        <p class="disappear-text">Target's massive B1G1 50% off promotion includes a staggering
                            number of popular novel series, comic book
                            omnibuses, and manga collections.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        scrollToAnime() {
            const Element = this.$refs.Anime;
            if (Element) {
                Element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>

<style scoped></style>
