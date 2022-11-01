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
  <SearchPage v-if="$store.state.page == 0"></SearchPage>
  <ResultPage v-if="$store.state.page == 1"></ResultPage>
  <!-- {{ this.tempdata.stats.hp }} -->
  <!-- {{ console.log(lastest) }}
  {{ console.log(tierDeck) }}
  {{ console.log(tierItem) }}
  {{ console.log(tierUnit) }}
  {{ console.log(userInfo) }} -->
  {{ this.temp() }}
  <!-- {{ this.lastest.setData[0].champions[67].apiName }} -->

  <!-- {{ this.GetChampionUrl(this.lastest.setData[0].champions[67].apiName) }} -->
  <!-- <div v-for="item in 68" :key="item">
    <img
      :src="
        this.GetChampionUrl(this.lastest.setData[0].champions[item].apiName)
      "
    />
  </div> -->
  <!-- {{ this.lastest.items[0].id }} -->
  <br />
  <!-- <div v-for="item in this.lastest.items.length" :key="item">
    <img :src="this.GetItem(item)" />
    {{ this.GetItem(item) }}
  </div> -->
  <!-- {{ this.GetItem(15) }} -->
</template>

<script>
import SearchPage from "./components/SearchPage.vue";
import ResultPage from "./components/ResultPage.vue";
// import axios from "axios";
// import tempdata from "./assets/tempdata.json";
import lastest from "./assets/lastest.json";
import tierDeck from "./assets/tierDeck.json";
import tierItem from "./assets/tierItem.json";
import tierUnit from "./assets/tierUnit.json";
import userInfo from "./assets/userInfo.json";

export default {
  name: "App",
  data() {
    return {
      lastest,
      tierDeck,
      tierItem,
      tierUnit,
      userInfo,
    };
  },
  props: {},
  components: {
    SearchPage,
    ResultPage,
  },
  methods: {
    temp() {
      console.log(lastest);
      console.log(tierDeck);
      console.log(tierItem);
      console.log(tierUnit);
      console.log(userInfo);
    },
    GetChampionUrl(championID) {
      // get url by champion ID
      // ex) TFT7_NomsyCannonee
      for (let i in this.lastest.setData) {
        for (let j in this.lastest.setData[i].champions) {
          if (this.lastest.setData[i].champions[j].apiName == championID) {
            let temp = this.lastest.setData[i].champions[j].icon
              .toLowerCase()
              .split("/");
            // console.log(temp[-2]);
            // let newUrl = temp.slice(0, -1);
            let newUrl2 = temp.slice(-1)[0].split(".");
            // console.log(newUrl);
            // console.log(newUrl2);
            return (
              `https://raw.communitydragon.org/latest/game/assets/characters${
                "/" + championID.toLowerCase()
              }/hud/` +
              newUrl2[0] +
              `_square.` +
              `${newUrl2[1]}` +
              `.png`
            );
          }
        }
      }
    },
    GetItem(item) {
      // console.log(item)
      for (let j in this.lastest.items) {
        if (item == this.lastest.items[j].id) {
          console.log(this.lastest.items[j].icon.toLowerCase().split("."));
          let temp = this.lastest.items[j].icon
            .toLowerCase()
            .split(".")
            .slice(0, -1);
          return `https://raw.communitydragon.org/latest/game/${temp.join(
            "."
          )}.png`;
        }
      }
    },
  },
  mounted() {},
};
</script>

<style></style>
