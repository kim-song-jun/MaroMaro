<template>
  <div class="rank-filter">
    <button
      v-for="(tier, index) in tiers"
      :key="index"
      :class="tierChange(index)"
      @click="changeTier(index)"
    >
      {{ tier }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tiers: ['S rank', 'A rank', 'B rank', 'C rank', 'D rank'],
      isClicked: [0, 0, 0, 0, 0],
      filter: [],
    };
  },
  methods: {
    reset() {
      for (let i in this.isClicked) {
        this.isClicked[i] = 0;
      }
    },
    tierChange(index) {
      return this.isClicked[index] === 1 ? 'rank clicked' : 'rank unclicked';
    },
    changeTier(index) {
      //filter off
      if (this.isClicked[index] == 1) {
        this.isClicked[index] = 0;
        this.filter = this.filter.filter(
          (rank) => rank != this.tiers[index][0]
        );
      } else {
        //filter on
        this.isClicked[index] = 1;
        this.filter.push(this.tiers[index][0]);
      }
      this.$store.commit('SetDeckFilterRank', this.filter);
      this.$store.dispatch('filterDecks', this.$store.state.deckFilter);
    },
  },
  mounted() {
    this.emitter.on('resetButton', this.reset);
  },
};
</script>

<style scoped>
.rank-filter {
  display: flex;
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
}
/* .unclicked {
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
} */

.unclicked {
  border-radius: 10px;
  background-color: black;
  border: 0.1px solid black;
  color: #f8f7f6;
}
.clicked {
  color: #f8f7f6;
  border-radius: 10px;
  background-color: rgb(158, 146, 146);
  border: 0.1px solid rgb(158, 146, 146);
  box-shadow: inset 0px 0px 0px rgb(131, 123, 123);
  /* inset -1px -1px 7px 0 rgba(255, 255, 255, 0.5); */
}
.rank {
  display: flex;
  margin-right: 10px;
}
</style>
