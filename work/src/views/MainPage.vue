<template>
  <div class="main">
    <Header_P />
    <Carousel />
    <Top />
    <div class="edge"></div> <!-- 修饰线  Anime-->
    <Anime ref="Anime" />
    <div class="edge"></div> <!-- 修饰线 GAMES-->
    <Games ref="Games" />
    <div class="edge"></div> <!-- 修饰线 Science-->
    <Science ref="Science" />
    <div class="edge" id="Movie"></div> <!-- 修饰线 -->
    <Comic ref="Comic" />
    <div class="edge"></div> <!-- 修饰线 -->
    <div class="sidebar" style="z-index: 999;">
      <button id="scrollToAnime" @click="scrollToAnimeInChild">Anime</button>
      <button id="scrollToGames" @click="scrollToGamesInChild">Games</button>
      <button id="scrollToScience" @click="scrollToScienceInChild">Science</button>
      <button id="scrollToComic" @click="scrollToComicInChild">Comic</button>
    </div>
  </div>


</template>

<script>
import Header_P from '@/components/Header_P.vue';
import Carousel from '@/components/Carousel.vue';
import Top from '@/components/Top.vue';
import Anime from '@/components/Anime.vue';
import Comic from '@/components/Comic.vue';
import Games from '@/components/Games.vue';
import Science from '@/components/Science.vue';


export default {
  name: 'MainPage',
  components: {
    Anime,
    Comic,
    Games,
    Science,
    Header_P,
    Top,
    Carousel
  },
  methods: {
    scrollToAnimeInChild() {
      this.$refs.Anime.scrollToAnime({ behavior: 'smooth' });
    },
    scrollToGamesInChild() {
      this.$refs.Games.scrollToGames({ behavior: 'smooth' });
    },
    scrollToScienceInChild() {
      this.$refs.Science.scrollToScience({ behavior: 'smooth' });
    },
    scrollToComicInChild() {
      this.$refs.Comic.scrollToComic({ behavior: 'smooth' });
    }
  }
}

</script>

<style scoped>
.main {
  margin-right: calc(100% - 100vw);
}
</style>
