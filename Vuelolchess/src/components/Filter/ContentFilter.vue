<template>
  <div class="filter">
    <button
      id="tableBtn"
      @click="changeContent('tableBtn')"
      class="filter-change-button clicked"
    >
      table
    </button>
    <button
      id="graphBtn"
      @click="changeContent('graphBtn')"
      class="filter-change-button unclicked"
    >
      graph
    </button>
  </div>
</template>

<script>
export default {
  props: ['content'],
  data() {
    return {};
  },
  methods: {
    reset(id) {
      const classList = document.getElementById(id).classList;
      const isExist = document.getElementsByClassName(
        'filter-change-button clicked'
      );
      //checked filter off
      isExist.item(0).classList.replace('clicked', 'unclicked');
      //checked filter on
      classList.replace('unclicked', 'clicked');
    },
    changeContent(id) {
      this.reset(id);
      if (id === 'tableBtn') this.$emit('content', 0);
      else this.$emit('content', 1);
    },
  },
  updated() {
    if (this.content == 0) {
      this.reset('tableBtn');
    }
  },
};
</script>

<style scoped>
.filter {
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
}
.filter-change-button {
  margin-right: 10px;
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
</style>
