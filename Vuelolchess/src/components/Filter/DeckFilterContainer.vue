<template>
  <div class="filter-container">
    <Header @reset="reset"></Header>
    <Tier :tier="tier" @tier="changeTier"></Tier>
    <DeckTraits :traits="traits" @traits="changeTrait"></DeckTraits>
    <!-- {{ `${content}, ${type}, ${base}` }} -->
  </div>
</template>

<script>
import Header from './FilterHeader.vue';
import Tier from './DeckTierFilter.vue';
import DeckTraits from './DeckTraitsFilter.vue';

export default {
  props: ['content', 'tier', 'traits'],
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
    changeTier(tier) {
      // console.log('tier');
      this.$emit('tier', tier);
    },
    changeTrait(traits) {
      // console.log(`fileter: ${traits}`);
      this.$emit('traits', traits);
    },
  },
};
</script>

<style scoped>
.filter-container {
  padding: 0.5rem;
}
</style>
