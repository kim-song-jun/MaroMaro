<template>
  <div class="type-filter">
    <button
      v-for="(type, index) in types"
      :key="index"
      :id="type"
      class="filter-type unclicked"
      @click="changeType(type, index)"
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
    };
  },
  methods: {
    reset() {
      for (let i = 0; i < this.isClicked.length; i++) {
        if (this.isClicked[i] === 1) {
          const classList = document.getElementById(this.types[i]).classList;
          classList.replace('clicked', 'unclicked');
        }
      }
      // this.isClicked = this.middletype;
    },
    changeType(type, index) {
      const classList = document.getElementById(type).classList;
      if (classList.contains('clicked')) {
        this.isClicked[index] = 0;
        classList.replace('clicked', 'unclicked');
      } else {
        this.isClicked[index] = 1;
        classList.replace('unclicked', 'clicked');
      }
    },
  },
};
</script>

<style>
.type-filter {
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
