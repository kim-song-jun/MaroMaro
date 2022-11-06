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
      tiers: ['S rank', 'A rank', 'B rank', 'C rank', 'D rank'],
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
