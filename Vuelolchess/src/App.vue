<template>
  <!-- <SearchPage
    v-if="pageChange == 0"
    @inputValue="this.userName = $event"
    @page="this.pageChange = $event"
  ></SearchPage>
  <ResultPage
    v-if="pageChange == 1"
    @inputValue="this.userName = $event"
    @page="this.pageChange = $event"
    :userName="this.userName"
    :matchData="this.More(this.userName)"
  ></ResultPage> -->
  <!-- <SearchPage v-if="$store.state.page == 0"></SearchPage>
  <ResultPage v-if="$store.state.page == 1"></ResultPage>
  <ItemPage v-if="$store.state.page == 2"></ItemPage>
  <UnitPage v-if="$store.state.page == 3"></UnitPage>
  <TierPage v-if="$store.state.page == 4"></TierPage> -->
  <router-view></router-view>
</template>

<script>
import axios from 'axios';
import tierUnit from './assets/tierUnit.json';
import newdata from './assets/newdata.json';

export default {
  name: 'App',
  data() {
    return {
      pageChange: 0,
      userName: '',
      matchData: [],
      tierUnit,
      newdata,
      tempUnit: tierUnit,
    };
  },
  props: {},
  components: {},
  methods: {
    // GetChamp(champName) {
    //   var temp = {};
    //   for (let i = 0; i < this.newdata.setData[0].champions.length; i++) {
    //     let name = this.newdata.setData[0].champions[i].apiName.replace(
    //       / /g,
    //       ''
    //     );
    //     if (name === champName) temp = this.newdata.setData[0].champions[i];
    //   }
    //   return temp;
    // },
    // AddTraits() {
    //   for (let i = 0; i < this.tierUnit.units.length; i++) {
    //     this.GetChamp(this.tierUnit.units[i].ID);
    //     this.tierUnit.units[i].traits = this.GetChamp(
    //       this.tierUnit.units[i].ID
    //     ).traits;
    //   }
    // },
    // ChampCostFilter(cost) {
    //   this.tempUnit.units = this.tempUnit.units.filter(
    //     (el) => el.rarity == cost
    //   );
    // },
    // ChampTraitFilter(trait) {
    //   this.tempUnit.units = this.tempUnit.units.filter((el) =>
    //     el.traits.includes(trait)
    //   );
    // },
    // ChampCostsFilter(costs) {
    //   if (costs == null) {
    //     return;
    //   }
    //   for (let i; i < costs.lengh; i++) {
    //     this.ChampCostFilter(costs[i]);
    //   }
    // },
    // ChampTraitsFilter(traits) {
    //   if (traits == null) {
    //     return;
    //   }
    //   for (let i; i < traits.lengh; i++) {
    //     this.ChampTraitFilter(traits[i]);
    //   }
    // },
    RefreshMatchData(bool) {
      if (bool == true) {
        this.GetMatchData(this.userName);
      }
      console.log(bool);
    },
    SearchByHeader(name) {
      this.userName = name;
    },
    // Excute() {
    //   this.$store.commit('SetTierUnit', this.tierUnit);
    //   console.log(this.$store.state.tierUnit);
    //   // console.log(this.$store.page);
    // },
    More(name) {
      axios
        .get(`/GetMatchHistory/${name}`)
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(result);
          this.matchData = result.data;
          return this.matchData;
        })
        .catch((e) => {
          console.log(e.message);
        });
    },
  },
  mounted() {
    this.emitter.on('inputValue', (e) => {
      this.userName = e;
      console.log(e);
    });
    this.emitter.on('page', (e) => {
      this.pageChange = e;
      console.log(e);
    });
  },
  created() {
    // this.$store.commit('SetTierUnit', this.tierUnit);
    // console.log(this.$store.tierUnit);
  },
};
</script>

<style></style>
