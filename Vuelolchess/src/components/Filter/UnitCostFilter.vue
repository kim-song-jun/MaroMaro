<template>
  <div class="cost-filter">
    <button
      v-for="(cost, index) in costs"
      :key="index"
      :class="costChange(index)"
      @click="changeCost(index)"
    >
      <img class="coin" src="../../assets/coin.png" alt="coin" />
      <span class="coin">{{ index + 1 }} </span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      costs: ['1cost', '2cost', '3cost', '4cost', '5cost'],
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
    costChange(index) {
      return this.isClicked[index] === 1 ? 'cost clicked' : 'cost unclicked';
    },
    changeCost(index) {
      //filter off
      if (this.isClicked[index] === 1) {
        this.isClicked[index] = 0;
        this.filter = this.filter.filter((cost) => cost != index + 1);
      } else {
        //filter on
        this.isClicked[index] = 1;
        this.filter.push(index + 1);
      }
      this.$store.commit('SetUnitFilterCost', this.filter);
      this.$store.dispatch('filterUnits', this.$store.state.unitFilter);
    },
  },
  mounted() {
    this.emitter.on('resetButton', this.reset);
  },
};
</script>

<style scoped>
.cost-filter {
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.cost {
  display: flex;
  margin-right: 10px;
}
.coin {
  display: flex;
  width: 20px;
  height: 20px;
  margin: 0.1rem 0rem;
  padding: 0.2rem 0rem 0.1rem;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
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
</style>
