<template>
  <div class="rank-filter">
    <button
      v-for="(tier, index) in tiers"
      :key="index"
      :id="tier[0]"
      class="rank unclicked"
      @click="changeTier(tier[0], index)"
    >
      {{ tier }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tiers: ["S rank", "A rank", "B rank", "C rank", "D rank"],
      isClicked: [0, 0, 0, 0, 0],
      filter: [],
    };
  },
  methods: {
    reset() {
      this.isClicked = this.tier;
    },
    changeTier(id, index) {
      const classList = document.getElementById(id).classList;

      //filter off
      if (classList.contains("clicked")) {
        this.isClicked[index] = 0;
        this.filter = this.filter.filter(
          (rank) => rank != this.tiers[index][0]
        );
        classList.replace("clicked", "unclicked");
      } else {
        //filter on
        this.isClicked[index] = 1;
        this.filter.push(this.tiers[index][0]);
        classList.replace("unclicked", "clicked");
      }
      this.$store.commit("SetDeckFilterRank", this.filter);
      this.$store.dispatch("filterDecks", this.$store.state.deckFilter);
    },
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
