<template>
  <div class="row-container main-match-info" style="background-color: #1D1D1D; color:aliceblue">
    <div class="row-item main-match-text">
      <div class="col-container">
        <div class="col-item"><h4>#2</h4></div>
        <div class="col-item">랭크</div>
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
      <div class="row-item main-match-plus-attribute"></div>
      <div class="row-item main-match-plus-attribute"></div>
      <div class="row-item main-match-plus-attribute"></div>
    </div>
    <div class="row-container main-match-champion">
      <div class="col-container main-match-champion-attribute" v-for="item in 7" :key="item" > 
        <div class="row-container">
          <div class="row-item main-match-champion-attribute-star"></div>
          <div class="row-item main-match-champion-attribute-star"></div>
          <div class="row-item main-match-champion-attribute-star"></div>
        </div>
        <div class="row-item main-match-champion-attribute-img"></div>
        <div class="row-container">
          <div class="row-item main-match-champion-attribute-item"></div>
          <div class="row-item main-match-champion-attribute-item"></div>
          <div class="row-item main-match-champion-attribute-item"></div>
        </div>
      </div>
    </div>
    <div class="row-item main-match-summoner">
      <div class="col-container">
        <div class="col-item">1</div>
        <div class="col-item">1</div>
        <div class="col-item">1</div>
        <div class="col-item">1</div>
      </div>
    </div>
    <div class="row-item main-match-summoner">
      <div class="col-container">
        <div class="col-item">2</div>
        <div class="col-item">2</div>
        <div class="col-item">2</div>
        <div class="col-item">2</div>
      </div>
    </div>
    <div class="row-item main-match-tab"></div>
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
  background-image: url('https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/augments/hexcore/academyemblem3.tft_set6.png');
  background-size: 100%;
  background-repeat: no-repeat;
  width: 20%;
  display: block;
  border-radius: 0%;
}
.main-match-plus {
  width: 4%;
  align-content: center;
}
.main-match-plus-attribute {
  background-image: url('https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/augments/choiceui/celestialblessing3.tft_set6.png');
  background-size: 100%;
  background-repeat: no-repeat;
  width: 70%;
  display: block;
  padding-bottom: 60%;
  border-radius: 0%;
}
.main-match-champion {
  width: 40%;
  justify-content: flex-start;
  margin: 1%;
}
.main-match-champion-attribute{
  width: 10%;
  margin-left: 10px;
}
.main-match-champion-attribute-img{
  background-image: url('../assets/set5patch1115/champions/TFT5_Aatrox.png');
  background-size: 100%;
  width: 100%;
  display: block;
  padding-bottom: 100%;
  border-radius: 30%;
}
.main-match-champion-attribute-star{
  background-image: url('https://raw.communitydragon.org/latest/game/assets/ux/tft/notificationicons/goldstar.png');
  background-size: 100%;
  background-repeat: no-repeat;
  width: 40%;
  display: block;
  padding-bottom: 50%;
  border-radius: 0%;
}
.main-match-champion-attribute-item{
  background-image: url('https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/bf_sword.png');
  background-size: 100%;
  background-repeat: no-repeat;
  width: 40%;
  display: block;
  padding-bottom: 50%;
  border-radius: 0%;
  margin-top: 2px;
  margin-left: 1px;
  margin-right: 1px;
}
.main-match-summoner {
  width: 13%;
  margin: 1%;
}
.main-match-summoner-attribute{
  width: 50%;
}
.main-match-tab {
  width: 3%;
  background-color: red;
  padding-bottom: 14%;
  background-image: url('../assets/chevron-down-solid.png');
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: bottom}
</style>
