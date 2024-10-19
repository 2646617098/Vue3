<template>
    <div>
        <Header_P />
        <Top_P />
        <div>
            <h1 class="content-title">About Page</h1>
        </div>
        <Comic_P />
        <Comic_P />
        <Comic_P />
    </div>
</template>

<script setup>
import Comic_P from '@/components/Comic.vue';
import Header_P from '@/components/Header_P.vue';
import Top_P from '@/components/Top.vue';


</script>

<style scoped>
.content-title {
    text-align: center;
    margin-top: 50px;
    font-size: 250px;
}
</style>
