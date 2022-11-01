<template>
  <!-- {{ this.traitsFilter() }} -->
  {{ this.costFilter() }}
  <div class="filter-container">
    <Header @reset="reset"></Header>
    <Content :content="content" @content="changeContent"></Content>
    <UnitCost :cost="cost" @cost="changeCost"></UnitCost>
    <UnitTraits :traits="traits" @traits="changeTrait"></UnitTraits>
  </div>
</template>

<script>
import Header from './FilterHeader.vue';
import Content from './ContentFilter.vue';
import UnitCost from './UnitCostFilter.vue';
import UnitTraits from './UnitTraitsFilter.vue';

import newdata from '../../assets/newdata.json';

export default {
  props: ['content', 'cost', 'traits'],
  components: {
    Header,
    Content,
    UnitCost,
    UnitTraits,
  },
  data() {
    return { newdata };
  },
  methods: {
    reset() {
      // console.log('reset');
      this.$emit('reset');
    },
    changeContent(content) {
      // console.log(`fileter: ${content}`);
      this.$emit('content', content);
    },
    changeCost(cost) {
      // console.log(`fileter: ${cost}`);
      this.$emit('cost', cost);
    },
    changeTrait(traits) {
      // console.log(`fileter: ${traits}`);
      this.$emit('traits', traits);
    },
    costFilter() {
      const { champions } = this.newdata.setData[0];
      const costs = [1, 0, 1, 1, 0];
      let champs = [];
      for (let cost = 0; cost < costs.length; cost++) {
        if (costs[cost] == 1) {
          const temp = champions.filter((v) => v.cost == cost + 1);
          // console.log(temp);
          champs.push(temp);
        }
      }
      let temp = champs[0];
      if (champs.length > 1) {
        for (let i = 1; i < champs.length; i++) {
          temp = temp.concat(champs[i]);
        }
      }
      champs = temp;
      console.log(champs);
    },
    traitsFilter() {
      const { champions } = this.newdata.setData[0];
      const filteredChampionsTrait = champions.filter((v) =>
        v.traits.includes('Astral')
      );
      console.log(filteredChampionsTrait);
    },
    testFilter() {
      const objPersons = {
        persons: [
          { name: 'kim', age: 20, gender: 'man' },
          { name: 'vicky', age: 22, gender: 'women' },
          { name: 'gloria', age: 42, gender: 'women' },
          { name: 'gom', age: 27, gender: 'man' },
        ],
      };
      const { persons } = objPersons;
      // ES5: const persons = Object.assign([], objPersons.persons)와 동일
      console.log(Object.values(persons));
      const mapPersons = Object.values(persons).map((v) =>
        Object.keys(v).map((v2) => v[v2])
      );
      const filteredPersonsAge = persons.filter((v) => v.age > 25);
      console.log(mapPersons);
      console.log(filteredPersonsAge);
    },
  },
};
</script>

<style scoped>
.filter-container {
  padding: 0.5rem;
}
</style>
