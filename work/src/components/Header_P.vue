<template>
    <div style="margin: 72px;"><!-- header的position属性设置为fixed那他的margin就不起作用了,用一个div把下面内容往下推了72px -->
        <header
            class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div class="col-md-3 mb-2 mb-md-0"></div>
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <RouterLink to="/">
                    <li>Home</li>
                </RouterLink>
                <RouterLink to="/introduction">
                    <li>Introduction</li>
                </RouterLink>
            </ul>
            <div class="col-md-3 text-end">
                <RouterLink to="/login"><button type="button" class="btn btn-outline-primary me-2">Login</button>
                </RouterLink>
                <RouterLink to="/register"><button type="button" class="btn btn-primary">Register</button>
                </RouterLink>
            </div>
        </header>
    </div>
</template>

<script setup>

</script>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    padding: 17px;
}

/* .btn-primary {
    margin-right: 30px;
    } */
li {
    margin-right: 10px;
}
</style>
