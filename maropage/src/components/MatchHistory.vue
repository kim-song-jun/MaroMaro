<template>
  <div
    class="row-vh d-flex flex-row align-items-center justify-content-between my-info"
  >
    <div
      class="item"
      style="margin-left: 15px; white-space: nowrap; width: 7.33%"
    >
      <div class="row-vh d-flex flex-row"><h4>#2</h4></div>
      <div class="row-vh d-flex flex-row">초고속 모드</div>
      <div class="row-vh d-flex flex-row">20:14</div>
      <div class="row-vh d-flex flex-row">1개월전</div>
    </div>
    <div class="item my-profile" style="width: 5.66%"></div>
    <div style="width: 16%">
      <div class="item" style="margin-left: 20px">
        <div class="row-vh d-flex flex-row">
          <div
            class="item my-synergy"
            v-for="item in this.match.metaTraitDTO"
            :key="item.key"
          ></div>
        </div>
        <div
          class="row-vh d-flex flex-row"
          v-if="this.match.metaTraitDTO.length > 5"
        >
          <div
            class="item my-synergy"
            v-for="item in this.match.metaTraitDTO"
            :key="item.key + 5"
          ></div>
        </div>
      </div>
    </div>

    <div class="item" style="margin-left: 20px; width: 3%">
      <div
        class="row-vh d-flex flex-row"
        v-for="item in this.match.augments"
        :key="item.key"
      >
        <div class="item my-advenced"></div>
      </div>
    </div>

    <div class="item row-vh d-flex flex-row" style="width: 40%">
      <div
        class="item"
        style="margin-left: 20px; width: 10%"
        v-for="item in this.match.unitDTO"
        :key="item.key"
      >
        <div class="row-vh d-flex flex-row justify-content-center">
          <div
            class="item my-champion-star"
            v-for="star in item.tier"
            :key="star.key"
          ></div>
        </div>
        <div class="row-vh d-flex flex-row">
          <div
            class="item my-champion"
            :style="{
              backgroundImage: `url(${this.GetCharcterUrl(item)}})`,
            }"
          ></div>
        </div>
        <div class="row-vh d-flex flex-row justify-content-center">
          <div class="item my-champion-item"></div>
          <!-- <div class="item my-champion-item"></div> -->
          <!-- <div class="item my-champion-item"></div> -->
        </div>
      </div>
    </div>
    <div
      class="item row-vh d-flex flex-row justify-content-end"
      style="width: 20%"
    >
      <div class="item" style="margin-right: 3%; width: 50%">
        <div class="row-vh d-flex flex-row">
          <div class="item my-match"></div>
          <a>dfdfd</a>
        </div>
      </div>
      <div class="item" style="margin-right: 3%; width: 50%">
        <div class="row-vh d-flex flex-row">
          <div class="item my-match"></div>
          <a>dfdfd</a>
        </div>
        <div class="row-vh d-flex flex-row">
          <div class="item my-match"></div>
          <a>dfdfd</a>
        </div>
        <div class="row-vh d-flex flex-row">
          <div class="item my-match"></div>
          <a>dfdfd</a>
        </div>
        <div class="row-vh d-flex flex-row">
          <div class="item my-match"></div>
          <a>dfdfd</a>
        </div>
      </div>
    </div>
    <div class="item my-border-color" style="margin-left: 30px">
      <div
        class="item align-self-end my-button"
        v-if="more == 0"
        @click="more = 1"
      ></div>
      <div
        class="item align-self-end my-button"
        style="transform: scaleY(-1)"
        v-if="more == 1"
        @click="more = 0"
      ></div>
    </div>
  </div>

  <div
    v-if="more == 1"
    class="row-vh d-flex flex-row align-items-center justify-content-center my-detail-info"
    style="font-size: x-small"
  >
    <div class="item" style="width: 7%; margin-left: 2%">등수</div>
    <div class="item" style="width: 5%">소환사</div>
    <div class="item" style="width: 5%; margin-left: 3%">라운드</div>
    <div class="item" style="width: 8%">생존시간</div>
    <div class="item" style="width: 13%">시너지</div>
    <div class="item" style="width: 35%; margin-left: 25%">챔피언</div>
  </div>
  <div v-if="more == 1">
    <MatchHistoryDetail></MatchHistoryDetail>
  </div>
</template>

<script>
import MatchHistoryDetailVue from './MatchHistoryDetail.vue';
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
    MatchHistoryDetail: MatchHistoryDetailVue,
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
.my-info {
  width: 60%;
  margin-left: 15%;
  margin-right: 15%;
  text-align: left;
  margin-top: 10px;
  border-left: 7px solid red;
}
.my-border-color {
  border-left: 7px solid red;
  border-right: 7px solid red;
  background-color: red;
  height: 108.8px;
}
.my-profile {
  background-image: url('https://placeimg.com/100/100/arch');
  width: 60px;
  height: 60px;
  background-size: 100%;
  border-radius: 50%;
  margin-left: 15px;
}
.my-synergy {
  background-image: url('https://placeimg.com/100/100/arch');
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  margin-right: 5px;
  margin-bottom: 5px;
}
.my-advenced {
  background-image: url('https://placeimg.com/100/100/arch');
  width: 25px;
  height: 25px;
  background-size: 100%;
  border-radius: 50%;
  margin-right: 5px;
  margin-top: 5px;
}
.my-champion {
  background-image: url('https://placeimg.com/100/100/arch');
  width: 40px;
  height: 40px;
  background-size: 100%;
  border-radius: 80%;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
}
.my-champion-star {
  background-image: url('https://placeimg.com/100/100/arch');
  width: 10px;
  height: 10px;
  background-size: 100%;
  border-radius: 80%;
  margin-right: 3px;
}
.my-champion-item {
  background-image: url('https://placeimg.com/100/100/arch');
  width: 10px;
  height: 10px;
  background-size: 100%;
  border-radius: 80%;
  margin-right: 3px;
}
.my-match {
  background-image: url('https://placeimg.com/100/100/arch');
  width: 15px;
  height: 15px;
  background-size: 100%;
  border-radius: 80%;
  margin-right: 3px;
  margin-top: 5px;
}
.my-button {
  background-image: url('../assets/chevron-down-solid.png');
  width: 15px;
  height: 20px;
  background-size: 100%;
  /* border-radius: 80%; */
  margin-top: 85px;
}
.my-detail-info {
  width: 60%;
  margin-left: 15%;
  margin-right: 15%;
  text-align: left;
  margin-top: 10px;
  background-color: rgb(214, 214, 214);
}
.my-detail-match-info {
  width: 60%;
  margin-left: 15%;
  margin-right: 15%;
  text-align: left;
  margin-top: 10px;
  border-left: 1px rgb(214, 214, 214) solid;
  border-right: 1px rgb(214, 214, 214) solid;
}
.my-detail-match-profile {
  background-image: url('https://placeimg.com/100/100/arch');
  width: 40px;
  height: 40px;
  background-size: 100%;
  border-radius: 50%;
}
.my-detail-match-level {
  background-image: url('https://placeimg.com/100/100/arch');
  width: 15px;
  height: 15px;
  background-size: 100%;
  border-radius: 50%;
}
.my-detail-match-tier {
  background-image: url('https://placeimg.com/100/100/arch');
  width: 20px;
  height: 20px;
  background-size: 100%;
  margin-left: 10px;
  /* border-radius: 50%; */
}
.my-detail-match-synergy {
  background-image: url('https://placeimg.com/100/100/arch');
  width: 20px;
  height: 20px;
  background-size: 100%;
  margin-left: 7px;
  margin-bottom: 3px;
  margin-top: 3px;
  /* border-radius: 50%; */
}
.my-detail-match-advenced {
  background-image: url('https://placeimg.com/100/100/arch');
  width: 15px;
  height: 15px;
  background-size: 100%;
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 10px;
  /* border-radius: 50%; */
}
.my-detail-match-champion {
  background-image: url('https://placeimg.com/100/100/arch');
  width: 36px;
  height: 36px;
  background-size: 100%;
  margin-right: 3px;
  /* border-radius: 100%; */
}
.my-detail-match-champion-star {
  background-image: url('https://placeimg.com/100/100/arch');
  width: 10px;
  height: 10px;
  background-size: 100%;
  border-radius: 80%;
  margin-right: 3px;
  margin-bottom: 3px;
}
.my-detail-match-champion-item {
  background-image: url('https://placeimg.com/100/100/arch');
  width: 10px;
  height: 10px;
  background-size: 100%;
  border-radius: 80%;
  margin-top: 3px;
  margin-right: 3px;
}
</style>
