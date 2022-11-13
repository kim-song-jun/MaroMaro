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
      ></div>
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
      for (let i in this.isClicked) {
        this.isClicked[i] = 0;
      }
    },
    traitChange(index) {
      return this.isClicked[index] === 1
        ? 'filter-trait-img clicked'
        : 'filter-trait-img unclicked';
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
    GetTraitName() {
      for (let i in this.newdata.setData[0].traits) {
        this.traitNames.push(this.newdata.setData[0].traits[i].name);
      }
      this.traitNames.sort();
    },
    changeTrait(index) {
      if (this.isClicked[index] === 1) {
        this.traitFilter = this.traitFilter.filter(
          (el) => el != this.traitNames[index]
        );
        this.isClicked[index] = 0;
      } else {
        this.traitFilter.push(this.traitNames[index]);
        this.isClicked[index] = 1;
      }
      this.$store.commit('SetUnitFilterTrait', this.traitFilter);
      this.$store.dispatch('filterUnits', this.$store.state.unitFilter);
    },
  },
  created() {
    this.GetTraitName();
  },
  mounted() {
    this.emitter.on('resetButton', this.reset);
  },
};
</script>

<style scoped>
.trait-filter {
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
}
.trait-filter .filter-trait-img {
  display: flex;
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin: 0.3rem;
}
.filter-raw {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
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
</style>
