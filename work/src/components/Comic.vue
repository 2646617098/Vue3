<template>
    <div>
        <div class="container">
            <div class="Tag">
                <div class="TagContent">
                    <h3 ref="Comic" style="text-align: center; vertical-align: middle; font-weight: 800;">COMIC</h3>
                </div>
                <div class="ViewAll"><a href="#" style="text-decoration: none; font-weight: 600;">View all</a></div>
            </div>
            <p
                style="margin-top: 10px;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: aliceblue;">
                Popular
                pages in comics</p>
            <div class="row g-3">
                <div class="col-2">
                    <div class="border bg-light">
                        <img src="@/assets/img/comic (1).jpg" alt="" class="img-fluid comic">
                    </div>
                </div>
                <div class="col-2">
                    <div class="border bg-light">
                        <img src="@/assets/img/comic (1).webp" alt="" class="img-fluid comic">
                    </div>
                </div>
                <div class="col-2">
                    <div class="border bg-light">
                        <img src="@/assets/img/comic (2).jpg" alt="" class="img-fluid comic">
                    </div>
                </div>
                <div class="col-2">
                    <div class="border bg-light">
                        <img src="@/assets/img/comic (2).webp" alt="" class="img-fluid comic">
                    </div>
                </div>
                <div class="col-2">
                    <div class="border bg-light">
                        <img src="@/assets/img/comic (3).jpg" alt="" class="img-fluid comic">
                    </div>
                </div>
                <div class="col-2">
                    <div class="border bg-light">
                        <img src="@/assets/img/comic (4).webp" alt="" class="img-fluid comic">
                    </div>
                </div>
            </div>
        </div>

        <div class="container" style="margin-top: 100px;"><!-- 大图 -->
            <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: aliceblue;">Top
                stories in games</p>
            <div class="row g-3">
                <div class="col-6">
                    <div class="border bg-light" style="position: relative;  display: inline-block;">
                        <img src="@/assets/img/bg (1).jpg" alt="" class="img-fluid">
                        <div class="overlay-text">
                            <p class="underline-text"
                                style="text-decoration-color: rgb(94, 63, 33); text-shadow: 1px 1px 1px #000000;">Dead
                                Space (2008)</p>
                            <p class="disappear-text">Only the Dead Survive</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="border bg-light bg" style="position: relative;  display: inline-block;">
                        <img src="@/assets/img/bg (2).jpg" alt="" class="img-fluid">
                        <div class="overlay-text">
                            <p class="underline-text"
                                style="text-decoration-color:rgb(100, 224, 224); text-shadow: 1px 1px 1px #000000;">
                                Retrowave</p>
                            <p class="disappear-text">The Wondergul Wallpaper</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="border bg-light bg" style="position: relative;  display: inline-block;">
                        <img src="@/assets/img/bg (5).jpg" alt="" class="img-fluid">
                        <div class="overlay-text">
                            <p class="underline-text"
                                style="text-decoration-color:#812836; text-shadow: 1px 1px 1px #000000;">Deep Rock
                                Galactic</p>
                            <p class="disappear-text">Rock And Stone</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="border bg-light bg" style="position: relative;  display: inline-block;">
                        <img src="@/assets/img/bg (4).jpg" alt="" class="img-fluid">
                        <div class="overlay-text">
                            <p class="underline-text"
                                style="text-decoration-color:rgb(181, 61, 13); text-shadow: 1px 1px 1px #000000;">
                                Titanfall 2</p>
                            <p class="disappear-text">Work Of God</p>
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
        scrollToComic() {
            const Element = this.$refs.Comic;
            if (Element) {
                Element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>

<style scoped>
.comic {
    height: 40vh;
    object-fit: cover;
}

/* 对齐漫画下端 */
</style>
