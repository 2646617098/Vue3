<template>
  <div class="sidebar" style="z-index: 999;">
    <button id="scrollToAnime" @click="scrollToAnimeInChild">Anime</button>
    <button id="scrollToGames" @click="scrollToGamesInChild">Games</button>
    <button id="scrollToScience" @click="scrollToScienceInChild">Science</button>
    <button id="scrollToComic" @click="scrollToComicInChild">Comic</button>
  </div>
</template>

<script>
// 导航栏动画，这里引入对应组件的scrollTo方法
export default {
    method: {
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

</style>
