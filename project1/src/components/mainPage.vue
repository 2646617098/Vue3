<template>
  <div class="container-fluid" style="background-color: rgb(33, 5, 59)">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap">
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-2">Introduction</a></li>
        <li><a href="#" class="nav-link px-2">Contact</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-sm" style="padding: 10px;">
        <div style="background-color: brown; padding: 10px;">
          <h2 style="color: aliceblue; font-weight: 800;vertical-align: middle;">Wonder Entertainment</h2>
        </div>
      </div>
      <div class="col-sm">
        <p style="font-weight: 1000;color: rgb(207, 86, 0);font-size: larger;">ANIME</p>
        <p style="font-weight: 600; color: aliceblue;">One Piece</p>
        <p style="font-weight: 600; color: aliceblue;">Naruto</p>
        <p style="font-weight: 600; color: aliceblue;">My Hero Acedemic</p>
      </div>
      <div class="col-sm">
        <p style="font-weight: 1000; color: rgb(207, 86, 0); font-size: larger;">GAMES</p>
        <p style="font-weight: 600; color: aliceblue;">Terraria</p>
        <p style="font-weight: 600; color: aliceblue;">Minecraft</p>
        <p style="font-weight: 600; color: aliceblue;">Genshin Impact</p>
      </div>
      <div class="col-sm">
        <p style="font-weight: 1000;color: rgb(207, 86, 0);font-size: larger;">SCIENCE</p>
        <p style="font-weight: 600; color: aliceblue;">Chemistry</p>
        <p style="font-weight: 600; color: aliceblue;">Physics</p>
        <p style="font-weight: 600; color: aliceblue;">Artificial Intelligence</p>
      </div>
      <div class="col-sm">
        <p style="font-weight: 1000;color: rgb(207, 86, 0);font-size: larger;">TV</p>
        <p style="font-weight: 600; color: aliceblue;">Memory Alpha</p>
        <p style="font-weight: 600; color: aliceblue;">Arrowverse</p>
        <p style="font-weight: 600; color: aliceblue;">SpongeBobia</p>
      </div>

      <div class="col-sm">
        <p style="vertical-align: middle;font-weight: 1000;color: rgb(207, 86, 0);font-size: larger;">More to Exploer...
        </p>
      </div>
    </div>
  </div>

  <div class="edge"></div> <!-- 修饰线  Anime-->
  <div class="container" id="Anime">
    <div class="Tag">
      <div class="TagContent">
        <h3 style="text-align: center; vertical-align: middle; font-weight: 800;">ANIME</h3>
      </div>
      <div class="ViewAll"><a href="#" style="text-decoration: none; font-weight: 600;">View all</a></div>
    </div>
    <div class="container" style="margin-top: 10px;">
      <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: aliceblue;">Popular
        pages in Anime</p>
      <div class="row g-3">
        <div class="col-2">
          <div class="border bg-light" style="text-align: center;">
            <img src="/project1/src/assets/img/anime(2).jpg" alt="" class="img-fluid">
            <p style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">
              Gintama°</p>
          </div>
        </div>
        <div class="col-2">
          <div class="border bg-light" style="text-align: center;">
            <img src="/project1/src/assets/img/anime(3).jpg" alt="" class="img-fluid">
            <p style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">
              Sousou no Frieren</p>
          </div>
        </div>
        <div class="col-2">
          <div class="border bg-light" style="text-align: center;">
            <img src="/project1/src/assets/img/anime(8).png" alt="" class="img-fluid">
            <p style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">
              Shinomiya Kaguya</p>
          </div>
        </div>
        <div class="col-2">
          <div class="border bg-light" style="text-align: center;">
            <img src="/project1/src/assets/img/anime(10).png" alt="" class="img-fluid">
            <p style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">Slam
              Dunk</p>
          </div>
        </div>
        <div class="col-2">
          <div class="border bg-light" style="text-align: center;">
            <img src="/project1/src/assets/img/anime(12).png" alt="" class="img-fluid">
            <p style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">
              3-gatsu no Lion 2</p>
          </div>
        </div>
        <div class="col-2">
          <div class="border bg-light" style="text-align: center;">
            <img src="/project1/src/assets/img/anime(7).jpg" alt="" class="img-fluid">
            <p style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: large; font-weight: 800;">Bocchi
              the Rock!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container" style="margin-top: 100px;"><!-- 大图 -->
      <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: aliceblue;">Top new
        stories in Anime</p>
      <div class="row g-3">
        <div class="col-6">
          <div class="border bg-light" style="position: relative;  display: inline-block;">
            <img src="/project1/src/assets/img/anime-big(1).webp" alt="" class="img-fluid" style="filter: brightness(0.5);">
            <div class="overlay-text">
              <p class="underline-text" style="text-decoration-color: aqua;">Helldivers, Elden Ring's Malenia, And The
                Best Cosplay At Anime Expo 2024</p>
              Here are the best cosplays we saw at the event.
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="border bg-light" style="position: relative; display: inline-block;">
            <img src="/project1/src/assets/img/anime-big(2).webp" alt="" class="img-fluid" style="filter: brightness(0.5);">
            <div class="overlay-text">
              <p class="underline-text" style="text-decoration-color: yellow;">Berserk 1997 Anime On Blu-Ray Drops To
                Lowest Price Yet For Amazon Prime Day</p>
              After the last two print runs sold out quickly, there's a good chance that this restock of the dark
              fantasy anime series Berserk won't last for long.
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="border bg-light" style="position: relative; display: inline-block;">
            <img src="/project1/src/assets/img/anime-big(3).webp" alt="" class="img-fluid" style="filter: brightness(0.5);">
            <div class="overlay-text">
              <p class="underline-text" style="text-decoration-color: blue;">Trigun Stampede Anime Blu-Ray Preorders Are
                Steeply Discounted At Amazon</p>
              At long last, the new adventures of Vash the Stampede will be available on Blu-ray this September, and you
              can save on the standard edition at Amazon.
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="border bg-light" style="position: relative; display: inline-block;">
            <img src="/project1/src/assets/img/anime-big(4).webp" alt="" class="img-fluid" style="filter: brightness(0.5);">
            <div class="overlay-text">
              <p class="underline-text" style="text-decoration-color: red;">Buy 1, Get 1 50% Off Book Box Sets At Target
                - Manga, Novels, Comics, And More</p>
              Target's massive B1G1 50% off promotion includes a staggering number of popular novel series, comic book
              omnibuses, and manga collections.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="edge"></div> <!-- 修饰线 GAMES-->
  <div class="container" id="Games">
    <div class="Tag">
      <div class="TagContent">
        <h3 style="text-align: center; vertical-align: middle; font-weight: 800;">GAMES</h3>
      </div>
      <div class="ViewAll"><a href="#" style="text-decoration: none; font-weight: 600;">View all</a></div>
    </div>
    <div class="container" style="margin-top: 10px;"></div>
    <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: aliceblue;">Popular pages
      in Games</p>
    <div class="row g-3">
      <div class="col-2">
        <div class="border bg-light" style="text-align: center;">
          <img src="/project1/src/assets/img/games(1).png" alt="" class="img-fluid">
          <p style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">
            Minecraft</p>
        </div>
      </div>
      <div class="col-2">
        <div class="border bg-light" style="text-align: center;">
          <img src="/project1/src/assets/img/games(2).png" alt="" class="img-fluid">
          <p style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">
            Cyberpunk 2077</p>
        </div>
      </div>
      <div class="col-2">
        <div class="border bg-light" style="text-align: center;">
          <img src="/project1/src/assets/img/games(3).png" alt="" class="img-fluid">
          <p style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: normal; font-weight: 800;">
            Assassin's Creed Unity</p>
        </div>
      </div>
      <div class="col-2">
        <div class="border bg-light" style="text-align: center;">
          <img src="/project1/src/assets/img/games(4).png" alt="" class="img-fluid">
          <p style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">Sonic
            Classic</p>
        </div>
      </div>
      <div class="col-2">
        <div class="border bg-light" style="text-align: center;">
          <img src="/project1/src/assets/img/games(5).png" alt="" class="img-fluid">
          <p style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">Grand
            Theft Auto V</p>
        </div>
      </div>
      <div class="col-2">
        <div class="border bg-light" style="text-align: center;">
          <img src="/project1/src/assets/img/games(6).png" alt="" class="img-fluid">
          <p style="font-family: Georgia, 'Times New Roman', Times, serif;  font-size: large; font-weight: 800;">
            HuntDown</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container" style="margin-top: 100px;"><!-- 大图 -->
    <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: aliceblue;">Top new
      stories in Games</p>
    <div class="row g-3">
      <div class="col-6">
        <div class="border bg-light" style="position: relative; display: inline-block;">
          <img src="/project1/src/assets/img/games-big(1).webp" alt="" class="img-fluid" style="filter: brightness(0.5);">
          <div class="overlay-text">
            <p class="underline-text" style="text-decoration-color: aquamarine;">PS5 Pro Preorders Live At Amazon,
              Walmart, And Best Buy</p>
            The PlayStation 5 Pro costs $700 and releases November 7.
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="border bg-light" style="position: relative; display: inline-block;">
          <img src="/project1/src/assets/img/games-big(2).webp" alt="" class="img-fluid" style="filter: brightness(0.5);">
          <div class="overlay-text">
            <p class="underline-text" style="text-decoration-color: aquamarine;">Destiny 2 Ice Breaker Guide: How To Get
              The New Solar Sniper Rifle</p>
            One of the original Destiny's best Exotic weapons is back in the Vesper's Host dungeon--here's what you need
            to know about it and how to get it.
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="border bg-light" style="position: relative; display: inline-block;">
          <img src="/project1/src/assets/img/games-big(3).webp" alt="" class="img-fluid" style="filter: brightness(0.5);">
          <div class="overlay-text">
            <p class="underline-text" style="text-decoration-color: rgb(221, 21, 81);">Mario & Luigi Brothership Aims To
              Emerge From Paper Mario's Shadow</p>
            The first Mario & Luigi game on a Nintendo console looks like a promising mixture of goofball humor and
            surprisingly deep RPG hooks.
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="border bg-light" style="position: relative; display: inline-block;">
          <img src="/project1/src/assets/img/games-big(4).webp" alt="" class="img-fluid" style="filter: brightness(0.5);">
          <div class="overlay-text">
            <p class="underline-text" style="text-decoration-color: yellow;">Destiny 2 Onslaught: Salvation Guide -
              Potions, Banes, And New Defenses</p>
            Episode: Revenant in Destiny 2 brings a new version of the Onslaught activity to the game, with a few key
            changes to how it project1s.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="edge"></div> <!-- 修饰线 Science-->
  <div class="container" id="Science">
    <div class="Tag">
      <div class="TagContent">
        <h3 style="text-align: center; vertical-align: middle; font-weight: 800;">SCIENCE</h3>
      </div>
      <div class="ViewAll"><a href="#" style="text-decoration: none; font-weight: 600;">View all</a></div>
    </div>
    <div class="container" style="margin-top: 10px;"></div>
    <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: aliceblue;">Popular pages
      in Science</p>
    <div class="row g-3">
      <div class="col-3">
        <div class="border bg-light">
          <img src="/project1/src/assets/img/science(1).webp" alt="" class="img-fluid">
          <p>A viral gene drive could offer a new approach to fighting herpes</p>
        </div>
      </div>
      <div class="col-3">
        <div class="border bg-light">
          <img src="/project1/src/assets/img/science(2).webp" alt="" class="img-fluid">
          <p>The largest arthropod to ever live finally has a head </p>
        </div>
      </div>
      <div class="col-3">
        <div class="border bg-light">
          <img src="/project1/src/assets/img/science(3).webp" alt="" class="img-fluid">
          <p>project1 on protein structure and design wins the 2024 chemistry Nobel</p>
        </div>
      </div>
      <div class="col-3">
        <div class="border bg-light">
          <img src="/project1/src/assets/img/science(4).webp" alt="" class="img-fluid">
          <p>Runaway stars could influence the cosmos far past their home galaxies</p>
        </div>
      </div>
      <!-- <div class="col-2">
              <div class="border bg-light">
                <img src="/project1/src/assets/img/science(5).webp" alt="" class="img-fluid">
              </div>
            </div>
            <div class="col-2">
              <div class="border bg-light">
                <img src="/project1/src/assets/img/science(6).webp" alt="" class="img-fluid">
              </div>
            </div> -->
    </div>
  </div>
  <div class="container" style="margin-top: 100px;"><!-- 大图 -->
    <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: aliceblue;">Top new
      stories in Science</p>
    <div class="row g-3">
      <div class="col-6">
        <div class="border bg-light" style="position: relative; display: inline-block;">
          <img src="/project1/src/assets/img/science-big(5).webp" alt="" class="img-fluid" style="filter: brightness(0.5);">
          <div class="overlay-text">
            <p class="underline-text" style="text-decoration-color: rgb(55, 0, 255);">Europa Clipper is launching to
              solve an alien mystery</p>
            Taking off no earlier than October 10, the spacecraft will repeatedly buzz Europa in search of water, energy
            and organic compounds.
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="border bg-light" style="position: relative; display: inline-block;">
          <img src="/project1/src/assets/img/science-big(6).webp" alt="" class="img-fluid" style="filter: brightness(0.5);">
          <div class="overlay-text">
            <p class="underline-text" style="text-decoration-color: rgb(0, 255, 128);">New electrical stitches use
              muscle movement to speed up healing</p>
            In rats, the sutures hastened recovery and reduced the risk of infection.
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="border bg-light" style="position: relative; display: inline-block;">
          <img src="/project1/src/assets/img/science-big(3).webp" alt="" class="img-fluid" style="filter: brightness(0.5);">
          <div class="overlay-text">
            <p class="underline-text" style="text-decoration-color: rgb(0, 0, 0);">The discovery of tools key to machine
              learning wins the 2024 physics Nobel</p>
            John Hopfield and Geoffrey Hinton used tools from physics to develop data analysis methods that underlie
            machine learning.
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="border bg-light" style="position: relative; display: inline-block;">
          <img src="/project1/src/assets/img/science-big(8).jpg" alt="" class="img-fluid" style="filter: brightness(0.5);">
          <div class="overlay-text">
            <p class="underline-text" style="text-decoration-color: rgb(0, 119, 255);">50 years ago, satellites
              threatened astronomers’ view of the cosmos</p>
            As satellite launches ramp up and the spacecraft clog the skies, astronomers fear for their data.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="edge" id="Movie"></div> <!-- 修饰线 -->
  <div class="container">
    <div class="Tag">
      <div class="TagContent">
        <h3 style="text-align: center; vertical-align: middle; font-weight: 800;">ANIME</h3>
      </div>
      <div class="ViewAll"><a href="#" style="text-decoration: none; font-weight: 600;">View all</a></div>
    </div>
    <div class="container" style="margin-top: 10px;"></div>
    <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: aliceblue;">Popular pages
      in wiki</p>
    <div class="row g-3">
      <div class="col-2">
        <div class="border bg-light">
          <img src="/project1/src/assets/img/ac6eddc451da81cb2a03720b5066d0160824310a.webp" alt="" class="img-fluid">
          <p>12345</p>
        </div>
      </div>
      <div class="col-2">
        <div class="border bg-light">2</div>
      </div>
      <div class="col-2">
        <div class="border bg-light">3</div>
      </div>
      <div class="col-2">
        <div class="border bg-light">4</div>
      </div>
      <div class="col-2">
        <div class="border bg-light">5</div>
      </div>
      <div class="col-2">
        <div class="border bg-light">6</div>
      </div>
    </div>
  </div>
  <div class="container" style="margin-top: 100px;"><!-- 大图 -->
    <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: aliceblue;">Top new
      stories in movie</p>
    <div class="row g-3">
      <div class="col-6">
        <div class="border bg-light">1</div>
      </div>
      <div class="col-6">
        <div class="border bg-light">2</div>
      </div>
      <div class="col-6">
        <div class="border bg-light">1</div>
      </div>
      <div class="col-6">
        <div class="border bg-light">1</div>
      </div>
    </div>
  </div>
  <div class="edge"></div> <!-- 修饰线 -->
  <div class="sidebar">
    <button id="scrollToAnime">Anime</button>
    <button id="scrollToGames">Games</button>
    <button id="scrollToScience">Science</button>
    <p><a href="">4</a></p>
  </div>

</template>

<script setup>
document.getElementById('scrollToAnime').addEventListener('click', function () {
  document.getElementById('Anime').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToScience').addEventListener('click', function () {
  document.getElementById('Science').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToGames').addEventListener('click', function () {
  document.getElementById('Games').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToAnime').addEventListener('click', function () {
  document.getElementById('Anime').scrollIntoView({ behavior: 'smooth' });
});

</script>

<style scoped></style>
