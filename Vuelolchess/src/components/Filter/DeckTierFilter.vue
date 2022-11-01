<template>
  <div class="filter1">
    <button
      v-for="(tier, index) in tiers"
      :key="index"
      :class="[
        isClicked[index] === 1
          ? 'filter-type clicked'
          : 'filter-type unclicked',
      ]"
      @click="changeTier(index)"
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
      tiers: ['Srank', 'Arank', 'Brank', 'Crank', 'Drank'],
      isClicked: [0, 0, 0, 0, 0],
    };
  },
  methods: {
    reset() {
      this.isClicked = this.tier;
    },
    changeTier(i) {
      if (this.isClicked[i] === 1) {
        this.isClicked[i] = 0;
      } else {
        this.isClicked[i] = 1;
        this.$emit('tier', i + 1);
      }
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
  /* background-color: #faf8ec; */
  background-color: #c3936f;
  border: 0.1px solid #c3936f;
  /* box-shadow: 4px 4px 0px 0 #c3936f, -5px -7px 1px 0 rgba(255, 255, 255, 0.3); */
}
.clicked {
  color: white;
  border-radius: 10px;
  /* background-color: #faf8ec; */
  background-color: black;
  border: 0.1px solid #eec9ad;
  /* box-shadow: inset 4px 4px 0px 0 #eec9ad,
    inset -1px -1px 7px 0 rgba(255, 255, 255, 0.5); */
  box-shadow: inset 4px 4px 0px 0 black,
    inset -1px -1px 7px 0 rgba(255, 255, 255, 0.5);
}
.filter-type {
  display: flex;
  margin-right: 10px;
}
</style>
