import { createRouter, createWebHashHistory } from 'vue-router'

import MainPage from '@/views/MainPage.vue'
import Login from '@/views/login/Login.vue'
import Register from '@/views/login/Register.vue'
import Introduction from '@/views/introduction/Introduction.vue'
import Frieren from '@/views/anime/Frieren/Frieren.vue'
import 芙莉莲 from '@/views/anime/Frieren/characters/芙莉莲.vue'
import 修塔尔克 from '@/views/anime/Frieren/characters/修塔尔克.vue'
import 辛梅尔 from '@/views/anime/Frieren/characters/辛梅尔.vue'
import 菲伦 from '@/views/anime/Frieren/characters/菲伦.vue'
import Kaguya from '@/views/anime/Shinomiya Kaguya/Kaguya.vue'
import 辉夜 from '@/views/anime/Shinomiya Kaguya/characters/辉夜.vue'
import 白银 from '@/views/anime/Shinomiya Kaguya/characters/白银.vue'
import 优 from '@/views/anime/Shinomiya Kaguya/characters/优.vue'
import 千花 from '@/views/anime/Shinomiya Kaguya/characters/千花.vue'
import March from '@/views/anime/March/March.vue'
import 二海棠 from '@/views/anime/March/characters/二海棠.vue'
import 零 from '@/views/anime/March/characters/零.vue'
import 日向 from '@/views/anime/March/characters/日向.vue'
import 明里 from '@/views/anime/March/characters/明里.vue'
import OSHINOKO from '@/views/anime/OSHINOKO/OSHINOKO.vue'
import DeathNote from '@/views/anime/DeathNote/DeathNote.vue'
import Adolescent from '@/views/anime/Adolescent/Adolescent.vue'
import 咲太 from '@/views/anime/Adolescent/characters/咲太.vue'
import 麻衣 from '@/views/anime/Adolescent/characters/麻衣.vue'
import 翔子 from '@/views/anime/Adolescent/characters/翔子.vue'
import 古贺 from '@/views/anime/Adolescent/characters/古贺.vue'
import 夜神月 from '@/views/anime/DeathNote/characters/夜神月.vue'
import L from '@/views/anime/DeathNote/characters/L.vue'
import 弥海砂 from '@/views/anime/DeathNote/characters/弥海砂.vue'
import N from '@/views/anime/DeathNote/characters/N.vue'
import 阿库亚 from '@/views/anime/OSHINOKO/characters/阿库亚.vue'
import 露比 from '@/views/anime/OSHINOKO/characters/露比.vue'
import 黑川 from '@/views/anime/OSHINOKO/characters/黑川.vue'
import 加奈 from '@/views/anime/OSHINOKO/characters/加奈.vue'
import About from '@/views/introduction/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainPage,
    },
    {
        path: '/introduction',
        name: 'Introduction',
        component: Introduction
    },
    {
        path: '/*',
        name: 'about',
        component: About
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/anime1',
        name: 'Anime1',
        component: OSHINOKO,
        children: [
            {
                path: 'character1',
                component: 阿库亚
            },
            {
                path: 'character2',
                component: 露比
            },
            {
                path: 'character3',
                component: 黑川
            },
            {
                path: 'character4',
                component: 加奈
            }
        ]
    },
    {
        path: '/anime2',
        name: 'Anime2',
        component: Frieren,
        children: [
            {
                path: 'character1',
                component: 芙莉莲
            },
            {
                path: 'character3',
                component: 菲伦
            },
            {
                path: 'character2',
                component: 辛梅尔
            },
            {
                path: 'character4',
                component: 修塔尔克
            }
        ]
    },
    {
        path: '/anime3',
        name: 'Anime3',
        component: Kaguya,
        children: [
            {
                path: 'character1',
                component: 辉夜
            },
            {
                path: 'character2',
                component: 白银
            },
            {
                path: 'character3',
                component: 优
            },
            {
                path: 'character4',
                component: 千花
            }
        ]
    },
    {
        path: '/anime4',
        name: 'Anime4',
        component: DeathNote,
        children: [
            {
                path: 'character1',
                component: 夜神月
            },
            {
                path: 'character2',
                component: L
            },
            {
                path: 'character3',
                component: 弥海砂
            },
            {
                path: 'character4',
                component: N
            }
        ]
    },
    {
        path: '/anime5',
        name: 'Anime5',
        component: March,
        children: [
            {
                path: 'character1',
                component: 零
            },
            {
                path: 'character2',
                component: 二海棠
            },
            {
                path: 'character3',
                component: 日向
            },
            {
                path: 'character4',
                component: 明里
            }
        ]
    },
    {
        path: '/anime6',
        name: 'Anime6',
        component: Adolescent,
        children: [
            {
                path: 'character1',
                component: 咲太
            },
            {
                path: 'character2',
                component: 麻衣
            },
            {
                path: 'character3',
                component: 翔子
            },
            {
                path: 'character4',
                component: 古贺
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router