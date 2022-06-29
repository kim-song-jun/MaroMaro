<template>
  <div class="container main-match-info">
    <div class="item main-match-text">
      <div class="col-container">
        <div class="col-item"><h4>#2</h4></div>
        <div class="col-item">초고속 모드</div>
        <div class="col-item">20:14</div>
        <div class="col-item">1개월전</div>
      </div>
    </div>
    <div class="item main-match-icon">
      <div class="col-container">
        <div class="item main-match-mainicon">
          <div class="item main-match-subicon"></div>
        </div>
      </div>
    </div>
    <div class="container main-match-extend">
      <div class="item main-match-extend-attribute">1</div>
      <div class="item main-match-extend-attribute">1</div>
      <div class="item main-match-extend-attribute">1</div>
      <div class="item main-match-extend-attribute">1</div>
      <div class="item main-match-extend-attribute">1</div>
    </div>
    <div class="item main-match-plus">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
    <div class="item main-match-champion">5</div>
    <div class="item main-match-summoner">6</div>
    <div class="item main-match-tab">7</div>
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
    ItemName: Object,
    ChampionName: Object,
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
.container {
  display: flex;
  /* display: inline-flex; */
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start, center;
  align-items: center;
}
.item {
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
  width: 80%;
  border-left: 7px solid red;
  border-right: 7px solid red;
  margin-top: 1%;
}
.main-match-text {
  width: 9%;
}
.main-match-icon {
  width: 5.5%;
}
.main-match-mainicon {
  background-image: url('https://placeimg.com/100/100/arch');
  background-size: 100%;
  z-index: 0;
  position: relative;
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.main-match-subicon {
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
  justify-content: flex-start;
}
.main-match-extend-attribute {
  width: 20%;
}
.main-match-plus {
  width: 3%;
  align-content: center;
}
.main-match-champion {
  width: 40%;
}
.main-match-summoner {
  width: 26%;
}
.main-match-tab {
  width: 2%;
}
</style>
