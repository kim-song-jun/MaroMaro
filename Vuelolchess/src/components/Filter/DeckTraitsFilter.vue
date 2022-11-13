<template>
  <div class="trait-filter">
    <div class="filter-raw">
      <div
        v-for="(trait, index) in traitNames"
        :key="index"
        :class="traitChange(index)"
        :style="{
          'background-image': `url(${this.GetTraitUrl(trait)})`,
          'background-size': '65%',
          'background-repeat': 'no-repeat',
          'background-position': 'center',
        }"
        @click="changeTrait(index)"
        alt="trait image"
      />
    </div>
  </div>
</template>

<script>
import newdata from '../../assets/newdata.json';

export default {
  data() {
    return {
      newdata,
      isClicked: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0,
      ],
      traitNames: [],
      traitFilter: [],
    };
  },
  methods: {
    reset() {
      // this.isClicked = this.traits;
    },
    traitChange(index) {
      return this.isClicked[index] === 1
        ? 'filter-trait-img clicked'
        : 'filter-trait-img unclicked';
    },
    GetTraitName() {
      for (let i in this.newdata.setData[0].traits) {
        this.traitNames.push(this.newdata.setData[0].traits[i].name);
      }
      this.traitNames.sort();
    },
    GetTraitUrl(traitName) {
      for (let i in this.newdata.setData[0].traits) {
        if (this.newdata.setData[0].traits[i].name == traitName) {
          let temp = this.newdata.setData[0].traits[i].icon
            .toLowerCase()
            .split('.')
            .slice(0, -1);
          return `https://raw.communitydragon.org/latest/game/${temp.join(
            '.'
          )}.png`;
        }
      }
    },
    changeTrait(index) {
      if (this.isClicked[index] === 1) {
        this.isClicked[index] = 0;
        this.traitFilter = this.traitFilter.filter(
          (trait) => trait != this.traitNames[index]
        );
      } else {
        this.isClicked[index] = 1;
        this.traitFilter.push(this.traitNames[index]);
      }
      this.$store.commit('SetDeckFilterTrait', this.traitFilter);
      this.$store.dispatch('filterDecks', this.$store.state.deckFilter);
    },
  },
  created() {
    this.GetTraitName();
  },
};
</script>

<style></style>
