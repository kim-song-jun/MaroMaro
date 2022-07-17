<template>
  <div class="app_container">
    <div class="header-content"><Header></Header></div>
    <div class="sidebar-a"></div>
    <div class="sidebar-b"></div>
    <div class="search-content" style="height: 13em">
      <SearchBar @inputValue="DataPass($event)"></SearchBar>
    </div>
    <div class="card-content">
      <!-- <Carousel></Carousel> -->
      <MyCarousel></MyCarousel>
    </div>
    <div class="tier-content"><Tabs></Tabs></div>
    <div class="footer-content">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import SearchBar from "./SearchBar.vue";
import Footer from "./Footer.vue";
// import Carousel from './Carousel.vue';
import Tabs from "./Tabs.vue";
import MyCarousel from "./MyCarousel.vue";

export default {
  components: {
    Header,
    SearchBar,
    Footer,
    // Carousel,
    Tabs,
    MyCarousel,
  },
  data() {
    return {};
  },
  methods: {
    DataPass(input) {
      this.$emit("inputValue", input);
    },
  },
};
</script>

<style>
.app_container {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-items: stretch;
  grid-template-areas:
    "header header header"
    "a search b"
    "a card b"
    "a tier b"
    "footer footer footer";
  height: 100vh;
  align-items: stretch;
}
.header-content {
  grid-area: header;
}
.footer-content {
  grid-area: footer;
  height: 30px;
}
.sidebar-a {
  grid-area: a;
}
.sidebar-b {
  grid-area: b;
}
.search-content {
  grid-area: search;
}
.card-content {
  grid-area: card;
}
.tier-content {
  grid-area: tier;
}
</style>
