<template>
    <div class="background-container">
 <header>  
        <h1>About Honor of Kings</h1>  
        <nav>  
            <ul>  
                <li><router-link to="/honorOfKings1">Home</router-link></li>  
                <li><router-link to="/honorOfKings2">About</router-link></li>  
                <li><router-link to="/honorOfKings3">Heroes</router-link></li>  
            </ul>  
        </nav>  
    </header>  
    <section class="about-section">  
        <h2>Game Overview</h2>  
        <img src="@/assets/photo/5967fba7293e9d09fb6bfe507ee6b3f.jpg" alt="Game Overview" class="hover-image" width="500" height="300">  
        <p style="color: bisque;;">Honor of Kings is a multiplayer online battle arena (MOBA) game developed by Tencent Games. It features a diverse range of heroes with unique abilities and gameplay mechanics.
            <br>王者荣耀是由腾讯游戏开发的一款多人在线战术竞技游戏（MOBA），拥有众多具有独特技能和游戏机制的英雄。
        </p>  
    </section>  
    <section class="history-section">  
        <h2>Game History</h2>  
        <img src="@/assets/photo/199bf5787a081f2fc4260893410e4d6.jpg" alt="Game History" class="hover-image" width="500" height="300">  
        <p style="color: bisque;">Launched in 2015, Honor of Kings has quickly become one of the most popular mobile games globally, with millions of active players.
            <br>自2015年发布以来，王者荣耀迅速成为全球最受欢迎的移动游戏之一，拥有数百万活跃玩家。
        </p>  
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
    background-image: url('@/assets/photo/3e9f1e441cc943041d5912ccfbc1af0.jpg');
    /* 替换为你的图片路径 */
    background-size: cover;
    background-position: center;
}
        header {  
            background-color: rgba(236, 229, 229, 0.5); /* 可选：为header添加半透明背景 */  
            color: rgb(51, 36, 36);  
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
            color: rgb(79, 66, 66);  
            text-decoration: none;  
        }  
    
        .hero-section {  
            padding: 2em;  
            text-align: center;  
            color: rgb(218, 218, 218); /* 如果背景图片太暗，可以使用白色文字 */  
            background-color: rgba(0, 0, 0, 0.5); /* 可选：为section添加半透明背景 */  
        }  
    
        .hero-section img {  
            max-width: 100%;  
            height: auto;  
        }  
    
        .hover-image {  
            transition: transform 0.3s; /* 添加悬停效果 */  
        }  
    
        .hover-image:hover {  
            transform: scale(1.05); /* 图片悬停时放大 */  
        }  
    
        footer {  
            background-color: rgba(0, 0, 0, 0.5); /* 可选：为footer添加半透明背景 */  
            color: white;  
            text-align: center;  
            padding: 1em 0;  
            position: fixed; /* 使footer固定在页面底部 */  
            width: 100%;  
            bottom: 0;  
        }  
</style>