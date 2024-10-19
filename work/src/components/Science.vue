<template>
    <div>
        <div class="container">
            <div class="Tag">
                <div class="TagContent">
                    <h3 ref="Science" style="text-align: center; vertical-align: middle; font-weight: 800;">SCIENCE</h3>
                </div>
                <div class="ViewAll"><a href="#" style="text-decoration: none; font-weight: 600;">View all</a></div>
            </div>
            <p
                style="margin-top: 10px;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: aliceblue;">
                Popular
                pages
                in Science</p>
            <div class="row g-3">
                <div class="col-3">
                    <div class="border bg-light">
                        <img src="@/assets/img/science(1).webp" alt="" class="img-fluid">
                        <p style="font-family: Georgia">A viral gene drive could offer a new approach to fighting herpes
                        </p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="border bg-light">
                        <img src="@/assets/img/science(2).webp" alt="" class="img-fluid">
                        <p style="font-family: Georgia">The largest arthropod to ever live finally has a head </p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="border bg-light">
                        <img src="@/assets/img/science(3).webp" alt="" class="img-fluid">
                        <p style="font-family: Georgia">Work on protein structure and design wins the 2024 chemistry
                            Nobel
                        </p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="border bg-light">
                        <img src="@/assets/img/science(4).webp" alt="" class="img-fluid">
                        <p style="font-family: Georgia">Runaway stars could influence the cosmos far past their home
                            galaxies</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="margin-top: 100px;"><!-- 大图 -->
            <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: aliceblue;">Top
                new
                stories in Science</p>
            <div class="row g-3">
                <div class="col-6">
                    <div class="border bg-light" style="position: relative; display: inline-block;">
                        <img src="@/assets/img/science-big(5).webp" alt="" class="img-fluid"
                            style="filter: brightness(0.5);">
                        <div class="overlay-text">
                            <p class="underline-text" style="text-decoration-color: rgb(55, 0, 255);">Europa Clipper is
                                launching to
                                solve an alien mystery</p>
                            <p class="disappear-text">Taking off no earlier than October 10, the spacecraft will
                                repeatedly
                                buzz Europa in search of water, energy
                                and organic compounds.</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="border bg-light" style="position: relative; display: inline-block;">
                        <img src="@/assets/img/science-big(6).webp" alt="" class="img-fluid"
                            style="filter: brightness(0.5);">
                        <div class="overlay-text">
                            <p class="underline-text" style="text-decoration-color: rgb(0, 255, 128);">New electrical
                                stitches use
                                muscle movement to speed up healing</p>
                            <p class="disappear-text">In rats, the sutures hastened recovery and reduced the risk of
                                infection.</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="border bg-light" style="position: relative; display: inline-block;">
                        <img src="@/assets/img/science-big(3).webp" alt="" class="img-fluid"
                            style="filter: brightness(0.5);">
                        <div class="overlay-text">
                            <p class="underline-text" style="text-decoration-color: rgb(0, 0, 0);">The discovery of
                                tools
                                key to machine
                                learning wins the 2024 physics Nobel</p>
                            <p class="disappear-text">John Hopfield and Geoffrey Hinton used tools from physics to
                                develop
                                data analysis methods that underlie
                                machine learning.</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="border bg-light" style="position: relative; display: inline-block;">
                        <img src="@/assets/img/science-big(8).jpg" alt="" class="img-fluid"
                            style="filter: brightness(0.5);">
                        <div class="overlay-text">
                            <p class="underline-text" style="text-decoration-color: rgb(0, 119, 255);">50 years ago,
                                satellites
                                threatened astronomers’ view of the cosmos</p>
                            <p class="disappear-text">As satellite launches ramp up and the spacecraft clog the skies,
                                astronomers fear for their data.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Science_P",
    methods: {
        scrollToScience() {
            const Element = this.$refs.Science;
            if (Element) {
                Element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>

<style scoped></style>
