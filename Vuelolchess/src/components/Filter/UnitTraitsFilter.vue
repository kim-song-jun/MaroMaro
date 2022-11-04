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
      ></div>
    </div>
  </div>
</template>

<script>
import traitsdata from '../../assets/tfttraits.json';
import newdata from '../../assets/newdata.json';
import tierUnit from '../../assets/tierUnit.json';

export default {
  props: ['traits'],
  data() {
    return {
      newdata,
      isClicked: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0,
      ],
      tierUnit,
      traitNames: [],
      traitFilter: [],
      filteredTierUnit: {},
    };
  },
  methods: {
    reset() {
      this.isClicked = this.traits;
      // this.initTierUnits();
      // this.Excute();
    },
    traitChange(index) {
      return this.isClicked[index] === 1
        ? 'filter-trait-img clicked'
        : 'filter-trait-img unclicked';
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
    GetTraitName() {
      for (let i = 0; i < traitsdata.length; i++) {
        if (traitsdata[i].set === 'TFTSet7') {
          this.traitNames.push(traitsdata[i].display_name);
        }
      }
      // console.log(this.traitNames);
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
        this.traitFilter = this.traitFilter.filter(
          (el) => el != this.traitNames[index]
        );
        this.isClicked[index] = 0;
      } else {
        this.traitFilter.push(this.traitNames[index]);
        this.isClicked[index] = 1;
      }
      this.ChampTraitsFilter(this.traitFilter);
      this.Excute();
      this.$emit('traits', this.isClicked);
    },
    initTierUnits() {
      this.filteredTierUnit = { ...this.tierUnit };
    },
    Excute() {
      this.$store.commit('SetTierUnit', this.filteredTierUnit);
    },
    GetChamp(champName) {
      var temp = {};
      for (let i = 0; i < this.newdata.setData[0].champions.length; i++) {
        let name = this.newdata.setData[0].champions[i].apiName.replace(
          / /g,
          ''
        );
        if (name === champName) temp = this.newdata.setData[0].champions[i];
      }
      return temp;
    },
    AddTraits() {
      for (let i = 0; i < this.tierUnit.units.length; i++) {
        this.GetChamp(this.tierUnit.units[i].ID);
        this.tierUnit.units[i].traits = this.GetChamp(
          this.tierUnit.units[i].ID
        ).traits;
      }
    },
    ChampTraitFilter(trait) {
      this.filteredTierUnit.units = this.filteredTierUnit.units.filter((el) =>
        el.traits.includes(trait)
      );
    },
    ChampTraitsFilter(trait) {
      this.initTierUnits();
      if (trait.length == 0) {
        return;
      }
      for (let i = 0; i < trait.length; i++) {
        this.ChampTraitFilter(trait[i]);
      }
    },
  },
  created() {
    this.GetTraitName();
    this.AddTraits();
    this.initTierUnits();
    this.Excute();
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
