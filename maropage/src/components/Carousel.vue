<template>
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">

  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <CardDeck></CardDeck>
    </div>
    <div class="carousel-item" data-bs-interval="10000">
      <CardDeck></CardDeck>
  
    </div>
    <div class="carousel-item">
      <CardDeck></CardDeck>

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
import CardDeck from './CardDeck.vue';
export default {
    components: { CardDeck }
}
</script>

<style>

.card img {
  max-width: 100%;
  max-height: 100%;
}
.card {
  margin: 0 0.5em;
  box-shadow: 2px 6px 8px px rgba(22, 22, 26, 0.18);
  border-radius: 0;
}

.carousel-control-prev,
.carousel-control-next {
  background-color: #e1e1e1;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}
@media (min-width: 768px) {
  .card img {
    height: 11em;
  }
}
</style>