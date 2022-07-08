<template>
  <SearchPage
    v-if="step == 0"
    :name="this.name"
    @name="search"
    @nextStep="nextStep"
  ></SearchPage>
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
    :MatchData = "this.MatchData"
    :UserData = "this.UserData" 
    :champions = "this.champions"
    :items = "this.items"
    :traits = "this.traits"
  ></ResultPage>
  <div
    v-for="(data,index) in this.t" :key="index">
  {{index}}
    </div>
    <!-- <div>
      items = {{t.items[200].name}} -->
      <!-- <div v-for="(d1,i1) in this.t.items" :key="i1">
      {{i1}}</div> -->
    <!-- </div> -->
    <!-- <div>
      setData = {{t.setData[0]}}
      <div v-for="(d2,i2) in this.t.setData" :key="i2">
      setData.name = {{d2.mutator}} -->
      <!-- <div v-for="(d5,i5) in d2.champions" :key="i5">
      setData.name = {{d5.apiName}}</div> -->
      <!-- <div v-for="(d6,i6) in d2.traits" :key="i6">
      setData.name = {{d5.apiName}}</div> -->
      <!-- </div>
    </div> -->
    <div>
      <!-- sets= {{t.sets}} -->
      <div v-for="(d3,i3) in this.t.sets" :key="i3">
        <!-- <div v-for="(d4,i4) in d3.champions" :key="i4">
        {{d4.name}}</div> -->
      {{i3}}
      </div>
      <div>{{this.t.sets[0]}}</div>
      </div>
  <ApexVue></ApexVue>
  <!-- <router-view :name="this.name" @name="search"></router-view> -->
</template>

<script>
import ResultPage from "./components/ResultPage.vue";
import SearchPage from "./components/SearchPage.vue";
import MatchData from "./assets/MatchData.js";
import UserData from "./assets/UserData.js";
import ApexVue from "./components/Apex.vue";
import Data from "../src/assets/data.json";
export default {
  name: "App",
  data() {
    return {
      step: 0,
      name: "",
      MatchData: MatchData,
      UserData: UserData,
      champions: require('../src/assets/set5patch1115/champions.json'),
      items: require('../src/assets/set5patch1115/items.json'),
      traits: require('../src/assets/set5patch1115/traits.json'),
      data: require('../src/assets/data.json'),
      t : Data,
      newData: {"setData":[]},
      itemData:{"items":[]},
      setData: {},
    };
  },
  components: { 
    ResultPage, SearchPage ,
    ApexVue,
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
    makeData(){
      for (var value in this.t.setData){
        console.log(value)
        if (this.t.setData[value].mutator.includes('TFTSet7')){
          this.newData.setData.push(this.t.setData[value]);
        }
      }
    },
    makeData2(){
      for (var value in this.t.items){
        this.itemData.items.push(this.t.items[value])
      }
    },
    makeData3(){
      this.setData.sets = this.t.sets
    },
    saveAsFile(str, filename) {
      var hiddenElement = document.createElement('a');
      hiddenElement.href = 'data:attachment/text,' + encodeURI(str);
      hiddenElement.target = '_blank';
      hiddenElement.download = filename;
      hiddenElement.click();
    },
  },
};
</script>

<style>
</style>
