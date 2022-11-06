<template>
  <div class="filter2">
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
  props: ['traits'],
  data() {
    return {
      newdata,
      isClicked: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0,
      ],
      traitNames: [],
    };
  },
  methods: {
    reset() {
      this.isClicked = this.traits;
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
      // console.log(temp);
    },
    GetTraitUrl(traitName) {
      for (let i in this.newdata.setData[0].traits) {
        // console.log(i);
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
    GetTraitImage(traitName) {
      // console.log(traitName.toLowerCase());
      const exceptionNone = ['assassin', 'shapeshifter'];
      const exceptionStage2 = ['lagoon', 'monolith', 'darkflight', 'prodigy'];
      const exception2 = ['mage', 'mystic'];
      if (exceptionNone.includes(traitName.toLowerCase())) {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_${traitName.toLowerCase()}.png`;
      } else if (exceptionStage2.includes(traitName.toLowerCase())) {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_${traitName.toLowerCase()}.tft_set7_stage2.png`;
      } else if (traitName.toLowerCase() === 'bruiser') {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_6_bruiser.png`;
      } else if (exception2.includes(traitName.toLowerCase())) {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_2_${traitName.toLowerCase()}.png`;
      } else if (traitName.toLowerCase() === 'scalescorn') {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_7_dragonbane.png`;
      } else if (traitName.toLowerCase() === 'cavalier') {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_5_cavalry.png`;
      } else if (traitName.toLowerCase() === 'spelltheif') {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_7_spellthief.png`;
      } else if (traitName.toLowerCase() === 'cannoneer') {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_5_cannoneer.png`;
      } else {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_7_${traitName.toLowerCase()}.png`;
      }
    },
    changeTrait(index) {
      if (this.isClicked[index] === 1) {
        this.isClicked[index] = 0;
      } else {
        this.isClicked[index] = 1;
      }
      // console.log(this.isClicked[i]);
      this.$emit('traits', this.isClicked);
    },
  },
  created() {
    this.GetTraitName();
  },
  updated() {
    this.reset();
  },
};
</script>

<style scoped>
.filter2 {
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
}
.filter2 .filter-trait-img {
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
  color: black;
  border-radius: 10px;
  /* background-color: #faf8ec; */
  background-color: #c3936f;
  border: 0.1px solid #c3936f;
  /* box-shadow: 4px 4px 0px 0 #c3936f, -5px -7px 1px 0 rgba(255, 255, 255, 0.3); */
}
.clicked {
  color: black;
  border-radius: 10px;
  /* background-color: #faf8ec; */
  background-color: black;
  border: 0.1px solid #eec9ad;
  /* box-shadow: inset 4px 4px 0px 0 #eec9ad,
    inset -1px -1px 7px 0 rgba(255, 255, 255, 0.5); */
  box-shadow: inset 4px 4px 0px 0 black,
    inset -1px -1px 7px 0 rgba(255, 255, 255, 0.5);
}
</style>
