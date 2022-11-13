<template>
  <div class="filter-header">
    Filter
    <img
      class="filter-header-reset"
      src="../../assets/reroll_default.png"
      alt="init"
      width="22"
      height="22"
      @click="reset()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    reset() {
      this.emitter.emit('resetContent', 'tableBtn');
      this.emitter.emit('resetButton');
      this.$emit('reset');
    },
  },
};
</script>

<style scoped>
.filter-header {
  display: flex;
  font-size: 25px;
  font-weight: 500;
  color: #f8f7f6;
}
.filter-header-reset {
  padding: 0.4rem 0rem;
  margin-left: 0.4rem;
}
</style>
