<template>
  <!-- <ItemInfo v-if="modalOpen" @close="modalOpen = 0"></ItemInfo> -->
  <div class="app_container">
    <div class="header-content">
      <Header></Header>
    </div>
    <div class="sidebar-a"></div>
    <div class="sidebar-b"></div>
    <div class="filter-content">
      <Filter
        :content="this.container"
        :tier="this.tier"
        :traits="this.traits"
        @reset="reset"
        @tier="changeTier"
        @traits="changeTrait"
      ></Filter>
      <div class="deck-content">
        <Deck></Deck>
      </div>
    </div>
    <div class="footer-content">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '../Header.vue';
import Filter from '../Filter/DeckFilterContainer.vue';
import Deck from './TierDeck.vue';
import Footer from '../Footer.vue';

export default {
  components: {
    Header,
    Deck,
    Footer,
    Filter,
  },
  data() {
    return {
      modalOpen: 0,
      container: 0,
      tier: [0, 0, 0, 0, 0],
      traits: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0,
      ],
    };
  },
  methods: {
    reset() {
      console.log('reset');
      this.container = 0;
      this.tier = [0, 0, 0, 0, 0];
      this.traits = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0,
      ];
    },
    changeContent(content) {
      console.log(`content${content}`);
      // console.log(`page: ${content}`);
      this.container = content;
    },
    changeTier(tier) {
      console.log(`tier${tier}`);
      this.tier[tier - 1] = 1;
    },
    changeTrait(traits) {
      console.log(`traits${traits}`);
      this.traits = traits;
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
    'header header header'
    'a filter b'
    'footer footer footer';
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
.filter-content {
  padding-top: 20px;
  grid-area: filter;
  background-color: #cdbba7;
  height: 100%;
}
.deck-content {
  background-color: #cdbba7;
  /* padding: 10px 0px 20px; */
}
</style>
