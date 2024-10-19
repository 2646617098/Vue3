<template>
    <div>
        <Header_P />
        <div class="main">
            <h1 style="font-weight: bolder;color: rgb(201, 32, 96); ">World's Largest Fan-Generated Entertainment &
                Gaming Platform</h1>
            <p style="font-size: large;color: aliceblue;">We're a constant companion and the ultimate end-to-end
                resource for 350 million fans worldwide.</p>
        </div>
        <div class="introd">
            <div class="box">
                <h2 style="color: rgb(33, 5, 59);font-weight: 800;">News & Features</h2>
                <p>Our sites are a go-to dstination for news,features,and in-depth analysis of gaming and entertainment.
                </p>
            </div>
            <div class="box">
                <h2 style="color: rgb(33, 5, 59);font-weight: 800;">Reviws & Ratings</h2>
                <p>Use our expert resources to find out what to watch or play next or to discover your next big
                    obsession.</p>
            </div>
            <div class="box">
                <h2 style="color: rgb(33, 5, 59);font-weight: 800;">Reference</h2>
                <p>A universe of content explores entertainment from the fan's perspective-watch thousands of hours of
                    video created for fans ,by fans.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header_P from '@/components/Header_P.vue';


</script>

<style scoped>
body {
    background-color: #571f77;
}

.main {
    padding-top: 200px;
    width: 100%;
    height: 400px;
    background-color: rgb(33, 5, 59);
    text-align: center;
}

.introd {
    display: flex;
    justify-content: space-around;
}

.introd .box {
    margin-top: 10px;
    background-color: aliceblue;
    padding-left: 5px;
    width: 400px;
    height: 300px;
    border: 1px solid black;
    border-radius: 10px;
    transition: background-color 0.3s, box-shadow 0.3s;
    /* 添加过渡效果 */
}

.introd .box p {
    font-size: large;
    color: rgb(74, 9, 134);
    font-weight: 600;
}

.box:hover {
    background-color: white;
    /* 鼠标进入时的背景颜色 */
    box-shadow: 10px 8px 16px rgb(2s01, 32, 96);
}
</style>
