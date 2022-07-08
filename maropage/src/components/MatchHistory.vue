<template>
  <div class="row-container main-match-info">
    <div class="row-item main-match-text">
      <div class="col-container">
        <div class="col-item"><h4>#2</h4></div>
        <div class="col-item">초고속 모드</div>
        <div class="col-item">20:14</div>
        <div class="col-item">1개월전</div>
      </div>
    </div>
    <div class="row-item main-match-icon">
      <div class="col-container">
        <div class="row-item main-match-icon-main">
          <div class="row-item main-match-icon-sub"></div>
        </div>
      </div>
    </div>
    <div class="row-container main-match-extend">
      <div class="row-item main-match-extend-attribute">1</div>
      <div class="row-item main-match-extend-attribute">1</div>
      <div class="row-item main-match-extend-attribute">1</div>
      <div class="row-item main-match-extend-attribute">1</div>
      <div class="row-item main-match-extend-attribute">1</div>
    </div>
    <div class="row-item main-match-plus">
      <div class="row-item">1</div>
      <div class="row-item">2</div>
      <div class="row-item">3</div>
    </div>
    <div class="row-container main-match-champion">
      <div class="col-container main-match-champion-attribute">
        <div class="row-container">
          <div class="row-item">r1</div>
          <div class="row-item">r2</div>
          <div class="row-item">r3</div>
        </div>
        <div class="row-item">2</div>
        <div class="row-container">
          <div class="row-item">r1</div>
          <div class="row-item">r2</div>
          <div class="row-item">r3</div>
        </div>
      </div>
    </div>
    <div class="row-item main-match-summoner">6</div>
    <div class="row-item main-match-summoner">6</div>
    <div class="row-item main-match-tab">7</div>
  </div>
</template>

<script>
// import MatchHistoryDetailVue from './MatchHistoryDetail.vue';
export default {
  data() {
    return {
      more: 1,
      url: '',
    };
  },
  props: {
    champions: Object,
    items: Object,
    traits: Object,
    match: Object,
  },
  components: {
    // MatchHistoryDetail: MatchHistoryDetailVue,
  },
  methods: {
    GetCharcterUrl(item) {
      for (let j = 0; j < Object.keys(this.ChampionName).length; j++) {
        if (item.character_id == Object.keys(this.ChampionName)[j]) {
          this.url = this.ChampionName[Object.keys(this.ChampionName)[j]].image;
        }
      }
      return this.url;
    },
  },
};
</script>

<style>
.row-container {
  display: flex;
  display: inline-flex; 
  flex-direction: row;
  flex-wrap: nowrap; 
  justify-content: center;
  align-items: center;
}
.row-item {
  flex-basis: auto;
}
.col-container {
  display: flex;
  /* display: inline-flex; */
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start, center;
}
.col-item {
  flex-basis: auto;
  align-self: flex-start;
}
.main-match-info {
  width: 100%;
  border-left: 7px solid red;
  border-right: 7px solid red;
  margin-top: 1%;
}
.main-match-text {
  width: 9%;
  margin: 1%;
}
.main-match-icon {
  width: 5.5%;
  margin: 1%;
}
.main-match-icon-main {  
  background-image: url('https://placeimg.com/100/100/arch');
  background-size: 100%;
  z-index: 0;
  position: relative;
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.main-match-icon-sub {
  background-image: url('https://placeimg.com/100/100/arch');
  background-size: 100%;
  z-index: 1;
  position: absolute;
  width: 15px;
  height: 15px;
  top: 30px;
  left: 30px;
  border-radius: 50%;
}
.main-match-extend {
  width: 14.5%;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1%;
}
.main-match-extend-attribute {
  width: 20%;
}
.main-match-plus {
  width: 3%;
  align-content: center;
  margin: 1%;
}
.main-match-champion {
  width: 40%;
  justify-content: flex-start;
  margin: 1%;
}
.main-match-champion-attribute{
  width: 10%;
}
.main-match-summoner {
  width: 13%;
  margin: 1%;
}
.main-match-summoner-attribute{
  width: 50%;
}
.main-match-tab {
  width: 2%;
  height: 100%;
}
</style>
