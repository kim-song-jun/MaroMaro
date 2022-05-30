<template>
  <SearchPage
    v-if="step == 0"
    :name="this.name"
    @name="search"
    @nextStep="nextStep"
  ></SearchPage>
  <ResultPage
    v-if="step == 1"
    :name="this.name"
    @name="search"
    @nextStep="nextStep"
    :MatchData = "this.MatchData"
    :UserData = "this.UserData" 
    :ItemName = "this.ItemName"
    :ChampionName = "this.ChampionName"
  ></ResultPage>
  <!-- <router-view :name="this.name" @name="search"></router-view> -->
</template>

<script>
import ResultPage from "./components/ResultPage.vue";
import SearchPage from "./components/SearchPage.vue";
import MatchData from "./assets/MatchData.js";
import UserData from "./assets/UserData.js";
import ItemName from "./assets/ItemName.js";
import ChampionName from "./assets/ChampionName.js";
export default {
  name: "App",
  data() {
    return {
      step: 0,
      name: "",
      MatchData: MatchData,
      UserData: UserData,
      ItemName: ItemName,
      ChampionName: ChampionName,
    };
  },
  components: { ResultPage, SearchPage },
  methods: {
    search(name) {
      this.name = name;
    },
    nextStep(next) {
      this.step = next;
    },
    // more() {
    //   axios
    //     .get(`https://codingapple1.github.io/vue/more${this.index}.json`)
    //     .then((result) => {
    //       //요청 성공시 가져오는 코드
    //       // console.log(result.data)
    //       this.instaData.push(result.data);
    //       this.index++;
    //     });
    // },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
