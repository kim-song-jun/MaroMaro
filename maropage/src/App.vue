<template>
  <div class="app_container">
    <div class="header-content"><Header></Header></div>
    <div class="sidebar-a">sidebar-a</div>
    <div class="sidebar-b">sidebar-b</div>
    <div class="search-content" style="height: 10em">
      <SearchBar></SearchBar>
    </div>
    <div class="card-content">
      <Carousel></Carousel>
    </div>
    <div class="tier-content"><Tabs></Tabs></div>
    <div class="footer-content"><Footer></Footer></div>
  </div>
  <!-- <SearchPage
    v-if="step == 0"
    :name="this.name"
    @name="search"
    @nextStep="nextStep"
  ></SearchPage> -->
  <!-- <div>{{this.makeData()}}
  {{this.saveAsFile(JSON.stringify(this.newData,null,2),'newData.json')}}</div> -->
  <!-- <div>{{this.makeData2()}}
  {{this.saveAsFile(JSON.stringify(this.itemData,null,2),'itemData.json')}}</div> -->
  <!-- <div>{{this.makeData3()}}
  {{this.saveAsFile(JSON.stringify(this.setData,null,2),'set.json')}}</div> -->
  <ResultPage
    v-if="step == 1"
    :name="this.name"
    @name="search"
    @nextStep="nextStep"
    :MatchData="this.MatchData"
    :UserData="this.UserData"
    :champions="this.champions"
    :items="this.items"
    :traits="this.traits"
  ></ResultPage>
  <!-- <router-view :name="this.name" @name="search"></router-view> -->
</template>

<script>
import ResultPage from './components/ResultPage.vue';
// import SearchPage from "./components/SearchPage.vue";
import MatchData from './assets/MatchData.js';
import UserData from './assets/UserData.js';
// import ApexVue from "./components/Apex.vue";
import Data from '../src/assets/data.json';
import Header from './components/Header.vue';
import SearchBar from './components/SearchBar.vue';
import Footer from './components/Footer.vue';
import Carousel from './components/Carousel.vue';
import Tabs from './components/Tabs.vue';
export default {
  name: 'App',
  data() {
    return {
      step: 0,
      name: '',
      MatchData: MatchData,
      UserData: UserData,
      champions: require('../src/assets/set5patch1115/champions.json'),
      items: require('../src/assets/set5patch1115/items.json'),
      traits: require('../src/assets/set5patch1115/traits.json'),
      data: require('../src/assets/data.json'),
      t: Data,
      newData: { setData: [] },
      itemData: { items: [] },
      setData: {},
    };
  },
  components: {
    ResultPage,
    // SearchPage,
    // ApexVue,
    Header,
    SearchBar,
    Footer,
    Carousel,
    Tabs,
  },
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
    // makeData(){
    //   for (var value in this.t.setData){
    //     console.log(value)
    //     if (this.t.setData[value].mutator.includes('TFTSet7')){
    //       this.newData.setData.push(this.t.setData[value]);
    //     }
    //   }
    // },
    // makeData2(){
    //   for (var value in this.t.items){
    //     this.itemData.items.push(this.t.items[value])
    //   }
    // },
    // makeData3(){
    //   this.setData.sets = this.t.sets
    // },
    // saveAsFile(str, filename) {
    //   var hiddenElement = document.createElement('a');
    //   hiddenElement.href = 'data:attachment/text,' + encodeURI(str);
    //   hiddenElement.target = '_blank';
    //   hiddenElement.download = filename;
    //   hiddenElement.click();
    // },
  },
};
</script>

<style>
.app_container {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  justify-items: stretch;
  grid-template-areas:
    'header header header'
    'a search b'
    'a card b'
    'a tier b'
    'footer footer footer';
  height: 100vh;
  align-items: stretch;
}
.header-content {
  grid-area: header;
}
.footer-content {
  grid-area: footer;
  height: 30px;
}
.sidebar-a {
  grid-area: a;
}
.sidebar-b {
  grid-area: b;
}
.search-content {
  grid-area: search;
}
.card-content {
  grid-area: card;
}
.tier-content {
  grid-area: tier;
}
</style>
