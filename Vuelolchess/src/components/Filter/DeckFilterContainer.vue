<template>
  <div class="filter-container">
    <Header @reset="reset"></Header>
    <Tier></Tier>
    <DeckTraits></DeckTraits>
    <!-- {{ `${content}, ${type}, ${base}` }} -->
  </div>
</template>

<script>
import Header from './FilterHeader.vue';
import Tier from './DeckTierFilter.vue';
import DeckTraits from './DeckTraitsFilter.vue';

export default {
  components: {
    Header,
    Tier,
    DeckTraits,
  },
  data() {
    return {};
  },
  methods: {
    reset() {
      // console.log('reset');
      this.$emit('reset');
    },
  },
};
</script>

<style scoped>
.filter-container {
  padding: 0.5rem;
}
</style>
