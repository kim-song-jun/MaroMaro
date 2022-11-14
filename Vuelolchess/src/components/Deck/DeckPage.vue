<template>
  <div class="deck_container">
    <div class="header-content">
      <Header></Header>
    </div>
    <div class="sidebar-a"></div>
    <div class="sidebar-b"></div>
    <div class="filter-content">
      <Filter @reset="reset"></Filter>
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
import tierDeck from '../../assets/tierDeck.json';

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
      tierDeck,
    };
  },
  methods: {
    reset() {
      console.log('reset');
      this.$store.commit('SetDeckFilterRank', []);
      this.$store.commit('SetDeckFilterTrait', []);
      this.$store.dispatch('filterDecks', this.$store.state.deckFilter);
    },
    initTierDecks() {
      this.$store.commit('SetFilteredDecks', [...this.tierDeck]);
    },
    excute() {
      this.$store.commit('SetTierDeck', [...this.tierDeck]);
    },
  },
  created() {
    this.initTierDecks();
    this.excute();
  },
};
</script>

<style scoped>
.deck_container {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-items: stretch;
  grid-template-areas:
    'header header header'
    'a filter b'
    'footer footer footer';
  height: 100vh;
  align-items: stretch;
  background-color: rgb(10, 10, 26);
}
.header-content {
  grid-area: header;
}
.footer-content {
  grid-area: footer;

  /* height: 30px; */
}
.sidebar-a {
  grid-area: a;
  background-color: rgb(10, 10, 26);
}
.sidebar-b {
  grid-area: b;
  background-color: rgb(10, 10, 26);
}
.filter-content {
  padding-top: 20px;
  grid-area: filter;
  height: 100%;
}
.deck-content {
  /* padding: 10px 0px 20px; */
  background-color: rgb(10, 10, 26);
}
</style>
