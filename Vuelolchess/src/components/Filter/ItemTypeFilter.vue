<template>
  <div class="filter1">
    <button
      v-for="(type, index) in types"
      :key="index"
      :class="[
        isClicked[index] === 1
          ? 'filter-type clicked'
          : 'filter-type unclicked',
      ]"
      @click="changeType(index)"
    >
      {{ type }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['type'],
  data() {
    return {
      types: [
        'normal(일반)',
        'emblem(상징)',
        'ornn(오른)',
        'radiant(찬란한)',
        'shimmerscale(빛비늘)',
      ],
      isClicked: [0, 0, 0, 0, 0],
    };
  },
  methods: {
    reset() {
      this.isClicked = this.type;
    },
    changeType(i) {
      if (this.isClicked[i] === 1) {
        this.isClicked[i] = 0;
      } else {
        this.isClicked[i] = 1;
        this.$emit('type', i + 1);
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
  background-color: #faf8ec;
  border: 0.1px solid #c3936f;
  box-shadow: 4px 4px 0px 0 #c3936f, -5px -7px 1px 0 rgba(255, 255, 255, 0.3);
}
.clicked {
  color: black;
  border-radius: 10px;
  background-color: #faf8ec;
  border: 0.1px solid #eec9ad;
  box-shadow: inset 4px 4px 0px 0 #eec9ad,
    inset -1px -1px 7px 0 rgba(255, 255, 255, 0.5);
}
.filter-type {
  display: flex;
  margin-right: 10px;
}
</style>
