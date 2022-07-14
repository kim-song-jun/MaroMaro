<template>
  <!-- <SearchPage
    v-if="step == 0"
    :name="this.name"
    @name="search"
    @nextStep="nextStep"
  ></SearchPage> -->
  <SearchPage
  v-if="pageChange == 0" 
  >
  </SearchPage>
  <!-- <div>{{this.makeData()}}
  {{this.saveAsFile(JSON.stringify(this.newData,null,2),'newData.json')}}</div> -->
  <!-- <div>{{this.makeData2()}}
  {{this.saveAsFile(JSON.stringify(this.itemData,null,2),'itemData.json')}}</div> -->
  <!-- <div> -->
    <!-- {{more()}} -->
  <!-- {{this.saveAsFile(JSON.stringify(this.instaData,null,2),'set.json')}}</div> -->
  <ResultPage
  v-if="pageChange ==1"
  ></ResultPage>
</template>

<script>
import SearchPage from './components/SearchPage.vue';
import ResultPage from './components/ResultPage.vue';

// import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      pageChange: 0,
    };
  },
  components: {
    SearchPage,
    ResultPage,
  },
  methods: {
      
    },
    mounted() {
      this.emitter.on('page',(e)=>{
        this.pageChange = e;
        console.log(e)})
      },
    // more() {
    //   axios
    //     .get(
    //       'https://cors-anywhere.herokuapp.com/http://yukmaro.cafe24.com/GetMatchHistory/%EC%95%A1%EC%A0%95%EA%B9%A8%EA%B8%B0%EC%9E%A5%EC%9D%B8'
    //     )
    //     .then((result) => {
    //       //요청 성공시 가져오는 코드
    //       // console.log(result.data)
    //       this.instaData.push(result.data);
    //       this.index++;
    //     })
    //     .catch(() => {
    //       console.log('error');
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
    //   this.instaData;
    // },
    // saveAsFile(str, filename) {
    //   var hiddenElement = document.createElement('a');
    //   hiddenElement.href = 'data:attachment/text,' + encodeURI(str);
    //   hiddenElement.target = '_blank';
    //   hiddenElement.download = filename;
    //   hiddenElement.click();
    // },
};
</script>

<style>

</style>
