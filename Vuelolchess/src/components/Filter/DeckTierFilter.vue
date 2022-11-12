<template>
  <div class="filter1">
    <button
      v-for="(tier, index) in tiers"
      :key="index"
      :id="tier[0]"
      :class="[
        isClicked[index] === 1
          ? 'filter-type clicked'
          : 'filter-type unclicked',
      ]"
      @click="changeTier(tier[0], index)"
    >
      {{ tier }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['tier'],
  data() {
    return {
      tiers: ['S rank', 'A rank', 'B rank', 'C rank', 'D rank'],
      isClicked: [0, 0, 0, 0, 0],
      filter: [],
    };
  },
  methods: {
    reset() {
      this.isClicked = this.tier;
    },
    // changeTier(i) {
    //   if (this.isClicked[i] === 1) {
    //     this.isClicked[i] = 0;
    //   } else {
    //     this.isClicked[i] = 1;
    //   }
    // },
    changeTier(id, index) {
      const classList = document.getElementById(id).classList;

      //filter off
      if (classList.contains('clicked')) {
        this.isClicked[index] = 0;
        this.filter = this.filter.filter(
          (rank) => rank != this.tiers[index][0]
        );
        classList.replace('clicked', 'unclicked');
      } else {
        //filter on
        this.isClicked[index] = 1;
        this.filter.push(this.tiers[index][0]);
        classList.replace('unclicked', 'clicked');
      }
      this.$store.commit('SetDeckFilterRank', this.filter);
      this.$store.dispatch('filterDecks', this.$store.state.deckFilter);
    },
  },
  updated() {
    this.reset();
  },
};
</script>

<style scoped>
.filter1 {
  display: flex;
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
}
.unclicked {
  color: black;
  border-radius: 10px;
  background-color: #c3936f;
  border: 0.1px solid #c3936f;
}
.clicked {
  color: #c3936f;
  border-radius: 10px;
  background-color: black;
  border: 0.1px solid #eec9ad;
  box-shadow: inset 4px 4px 0px 0 black,
    inset -1px -1px 7px 0 rgba(255, 255, 255, 0.5);
}
.filter-type {
  display: flex;
  margin-right: 10px;
}
</style>
