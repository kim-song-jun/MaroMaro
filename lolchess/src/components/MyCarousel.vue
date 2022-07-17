<template>
  <Carousel :itemsToShow="3.95" :wrapAround="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item my-card" style="position: relative">
        <img
          style="opacity: 0.9; border-radius: 25%"
          src="https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft7_bard_mobile.tft_set7.png"
        />
        <div
          style="
            position: absolute;
            top: 6%;
            left: 7%;
            color: aliceblue;
            font-size: 2vw;
          "
        >
          Bard
        </div>
        <div
          style="
            position: absolute;
            top: 68%;
            left: 7%;
            color: aliceblue;
            font-size: 1.5vw;
          "
        >
          Guild
        </div>
        <div
          style="
            position: absolute;
            top: 85%;
            left: 31%;
            color: aliceblue;
            font-size: 0.8vw;
          "
        >
          51.2% to 53.3%
        </div>
      </div>
    </Slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </Carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>

<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.8) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.8) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1);
}
.my-card {
  border: 5px solid gold;
  border-radius: 27%;
  margin: 10%;
}
.my-card-info {
  background-image: url("https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft7_bard_mobile.tft_set7.png");
}
</style>
