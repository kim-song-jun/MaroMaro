<template>
  <div class="row-container main-match-info">
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
      <img
        class="row-item main-match-extend-attribute"
        v-for="i in 7"
        :key="i"
        src="https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/augments/hexcore/academyemblem3.tft_set6.png"
      />
    </div>
    <div class="row-item main-match-plus">
      <img
        class="row-item main-match-plus-attribute"
        src="https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/augments/choiceui/celestialblessing3.tft_set6.png"
        v-for="i in 3"
        :key="i"
      />
    </div>
    <div class="row-container main-match-champion">
      <div
        class="col-container main-match-champion-attribute"
        v-for="item in 10"
        :key="item"
      >
        <div class="row-container">
          <img
            class="row-item main-match-champion-attribute-star"
            src="https://raw.communitydragon.org/latest/game/assets/ux/tft/notificationicons/goldstar.png"
            v-for="i in 3"
            :key="i"
          />
        </div>
        <img
          class="row-item main-match-champion-attribute-img"
          src="../assets/set5patch1115/champions/TFT5_Aatrox.png"
        />
        <div class="row-container">
          <img
            class="row-item main-match-champion-attribute-item"
            src="https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/bf_sword.png"
            v-for="i in 3"
            :key="i"
          />
        </div>
      </div>
    </div>
    <div class="row-item main-match-summoner">
      <div class="col-container">
        <strong>3 Ragewing, 3 Guild,</strong> 2 Tempest
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
  display: block;
}
.main-match-plus {
  width: 4%;
  align-content: center;
}
.main-match-plus-attribute {
  width: 70%;
}
.main-match-champion {
  width: 60%;
  justify-content: flex-start;
  margin: 1%;
}
.main-match-champion-attribute {
  width: 10%;
  margin-left: 10px;
}
.main-match-champion-attribute-img {
  width: 100%;
  border-radius: 20%;
}
.main-match-champion-attribute-star {
  width: 40%;
}
.main-match-champion-attribute-item {
  width: 33%;
  margin-top: 2px;
  margin-left: 1px;
  margin-right: 1px;
}
.main-match-summoner {
  width: 13%;
  margin: 1%;
}
.main-match-summoner-attribute {
  width: 50%;
}
.main-match-tab {
  width: 3%;
  background-color: red;
  padding-bottom: 14%;
  background-image: url('../assets/chevron-down-solid.png');
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>
