<template>
  <div class="type-filter">
    <button
      v-for="(type, index) in types"
      :key="index"
      :class="this.typeChange(index)"
      @click="changeType(index)"
    >
      {{ type }}
    </button>
  </div>
</template>

<script>
export default {
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
      filter: [],
    };
  },
  methods: {
    reset() {
      for (let i in this.isClicked) {
        this.isClicked[i] = 0;
      }
    },
    typeChange(index) {
      return this.isClicked[index] === 1
        ? 'filter-type clicked'
        : 'filter-type unclicked';
    },
    changeType(index) {
      const word = [
        'Standard/',
        'Emblem',
        'Ornn_',
        'Radiant/',
        'Shimmerscale/',
      ];
      // filter off
      if (this.isClicked[index] === 1) {
        this.isClicked[index] = 0;
        this.filter = this.filter.filter((type) => type != word[index]);
      } else {
        //filter on
        this.isClicked[index] = 1;
        this.filter.push(word[index]);
      }
      this.$store.commit('SetItemFilterType', this.filter);
      this.$store.dispatch('filterItems', this.$store.state.itemFilter);
    },
  },
  mounted() {
    this.emitter.on('resetButton', this.reset);
  },
};
</script>

<style scoped>
.type-filter {
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
.filter-type {
  display: flex;
  margin-right: 10px;
}
</style>
