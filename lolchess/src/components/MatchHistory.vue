<template>
  <div>
    {{ $store.state.matchData }}
  </div>
  <div
    class="col-container"
    v-for="(item, index) in $store.state.matchData5"
    :key="index"
  >
    <div
      class="row-container main-match-info"
      :style="this.ChangeBorder(item.placement)[0]"
      style="
        background-color: whitesmoke;
        /* filter: brightness(80%); */
        /* color: aliceblue; */
      "
    >
      <div class="row-item main-match-text">
        <div class="col-container">
          <div class="col-item">
            <h4>#{{ item.placement }}</h4>
          </div>
          <div class="col-item">랭크</div>
          <div class="col-item">{{ ChangeUnixTime(item.time_eliminated) }}</div>
          <div class="col-item">1개월전</div>
        </div>
      </div>
      <div class="row-item main-match-icon">
        <div class="col-container">
          <img
            src="../assets/icon2.png"
            class="row-item main-match-icon-main"
          />
        </div>
      </div>
      <div class="row-container main-match-extend" v>
        <img
          v-for="(trait, j) in this.GetTraitSorted(
            this.TraitsFillter(item.traits)
          )"
          :key="j"
          class="row-item main-match-extend-attribute"
          :src="this.GetTrait(trait)"
          :style="{
            'background-image': `url(${this.GetTraitBackGround(trait)})`,
          }"
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
          v-for="(cham, i) in this.NullFillter(item.unitDTO)"
          :key="i"
        >
          <!-- {{this.GetChampionUrl(cham.character_id)}} -->
          <!-- {{this.NullFillter(item.unitDTO)}} -->
          <div class="row-container">
            <img
              v-for="(v, k) in cham.tier"
              :key="k"
              class="row-item main-match-champion-attribute-star"
              :src="this.GetStar(cham.tier)"
            />
          </div>
          <img
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            :title="cham.character_id.slice(5)"
            class="row-item main-match-champion-attribute-img"
            :src="this.GetChampionUrlByName(cham.character_id)"
            :style="
              this.championBorderStyle[cham.rarity][
                Object.keys(this.championBorderStyle[cham.rarity])[0]
              ]
            "
          />
          <!-- {{ Object.keys(this.championBorderStyle[cham.rarity])[0] }} -->
          <div class="row-container">
            <img
              class="row-item main-match-champion-attribute-item"
              v-for="(q, w) in cham.items"
              :key="w"
              :src="this.GetItem(q)"
            />
          </div>
        </div>
      </div>
      <div class="row-item main-match-summoner">
        <div class="col-container">
          <!-- style="color: aliceblue" -->
          <strong
            v-for="(a, b) in this.GetDeck(
              this.TraitsFillter(item.traits)
            ).slice(0, 2)"
            :key="b"
            >{{ a.num_units }} {{ a.name.split("_")[1] }}</strong
          >
          {{ this.GetDeck(this.TraitsFillter(item.traits))[2].num_units }}
          {{
            this.GetDeck(this.TraitsFillter(item.traits))[2].name.split("_")[1]
          }}
        </div>
      </div>
      <div
        class="row-item main-match-tab"
        v-if="more[index] == 0"
        @click="more[index] = 1"
        :style="this.ChangeBorder(item.placement)[1]"
      ></div>
      <div
        class="row-item main-match-tab"
        v-if="more[index] == 1"
        @click="more[index] = 0"
        :style="this.ChangeBorder(item.placement)[1]"
        style="transform: scaleY(-1); background-position: top"
      ></div>
    </div>
    <MatchHistoryDetail
      v-if="more[index] == 1 && this.returnData[index] !== null"
      :getRecord="item.match_id"
      :championBorderStyle="this.championBorderStyle"
    ></MatchHistoryDetail>
  </div>
</template>

<script>
import alldata from "../assets/data.json";
import allMatchData from "../assets/AllMatchData.json";
// import matchData from '../assets/MatchData.json'
// import userMatchData from "../assets/UserMatchData.json";
import MatchHistoryDetail from "./MatchHistoryDetail.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";

export default {
  props: {
    matchData: Array,
  },
  data() {
    return {
      more: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      returnData: [],
      url: "",
      alldata,
      allMatchData,
      // userMatchData,
      apiUrl: [],
      apiName: [],
      userName: "",
      greenStyleLeft: {
        borderLeft: "solid 10px wheat",
      },
      greenStyleRight: {
        backgroundColor: "wheat",
      },
      blueStyleLeft: {
        borderLeft: "solid 10px lightskyblue",
      },
      blueStyleRight: {
        backgroundColor: "lightskyblue",
      },
      grayStyleLeft: {
        borderLeft: "solid 10px lightgray",
      },
      grayStyleRight: {
        backgroundColor: "lightgray",
      },
      championBorderStyle: [
        {
          gray: {
            border: "solid 2px gray",
          },
        },
        {
          green: {
            border: "solid 2px green",
          },
        },
        {
          blue: {
            border: "solid 2px blue",
          },
        },
        {
          purple: {
            border: "solid 2px purple",
          },
        },
        {
          orange: {
            border: "solid 2px orange",
          },
        },
        {
          yellow: {
            border: "solid 2px yellow",
          },
        },
        {
          red: {
            border: "solid 2px red",
          },
        },
      ],
    };
  },
  components: {
    MatchHistoryDetail,
  },
  methods: {
    GetChampionUrl(championName) {
      for (let i in this.alldata.setData) {
        for (let j in this.alldata.setData[i].champions) {
          if (this.alldata.setData[i].champions[j].apiName == championName) {
            let temp = this.alldata.setData[i].champions[j].icon
              .toLowerCase()
              .split("/");
            // console.log(temp[-2])
            let newUrl = temp.slice(0, -1);
            return `https://raw.communitydragon.org/latest/game/${
              newUrl.join("/") + "/" + championName.toLowerCase()
            }_mobile.tft_set7.png`;
          }
        }
      }
    },
    GetChampionUrlByName(championName) {
      let changeName = "";
      let temp = championName.toLowerCase();
      if (temp == "tft7_dragonblue") {
        changeName = "tft7_miragedragon";
      } else if (temp == "tft7_dragongold") {
        changeName = "tft7_shimmerscaledragon";
      } else if (temp == "tft7_dragongreen") {
        changeName = "tft7_jadedragon";
      } else if (temp == "tft7_dragonpurple") {
        changeName = "tft7_whispersdragon";
      } else {
        changeName = temp;
      }
      // console.log(temp)
      // console.log(changeName)
      return `https://raw.communitydragon.org/latest/game/assets/characters/${temp}/hud/${changeName}_square.tft_set7.png`;
    },
    TraitsFillter(trait) {
      let array = [];
      for (let i in trait) {
        if (trait[i].style > 0) {
          array.push(trait[i]);
        }
      }
      return array;
    },
    GetChampionID(match) {
      for (let i in match.unitDTO) {
        this.apiName.push(i.character_id);
      }
    },
    NullFillter(DTO) {
      let array = [];
      for (let i in DTO) {
        if (DTO[i] != null && DTO[i].rarity < 7) {
          array.push(DTO[i]);
        }
      }
      return array;
    },
    GetTrait(trait) {
      // console.log(trait.name)
      for (let i in this.alldata.setData) {
        if (this.alldata.setData[i].traits.length != 0) {
          for (let j in this.alldata.setData[i].traits) {
            if (
              this.alldata.setData[i].traits[j].apiName.toLowerCase() ==
              trait.name.toLowerCase()
            ) {
              return `https://raw.communitydragon.org/latest/game/${this.alldata.setData[
                i
              ].traits[j].icon
                .toLowerCase()
                .slice(0, -4)}.png`;
            }
          }
        }
      }
    },
    GetTraitBackGround(trait) {
      // console.log(trait)
      if (trait.style == 0) {
        // console.log(trait.style)
      } else if (trait.style == 1) {
        // console.log(trait.style)
        return require("../assets/background/bronze.svg");
      } else if (trait.style == 2) {
        // console.log(trait.style)
        return require("../assets/background/silver.svg");
      } else if (trait.style == 3) {
        // console.log(trait.style)
        return require("../assets/background/gold.svg");
      } else if (trait.style == 4) {
        // console.log(trait.style)
        return require("../assets/background/chromatic.svg");
      } else {
        console.log("error");
      }
    },
    GetStar(i) {
      if (i == 2) {
        return `https://raw.communitydragon.org/latest/game/assets/ux/tft/notificationicons/silverstar.png`;
      } else if (i == 3) {
        return `https://raw.communitydragon.org/latest/game/assets/ux/tft/notificationicons/goldstar.png`;
      } else {
        return ``;
      }
    },
    GetDeck(trait) {
      return trait.sort(function (a, b) {
        return b.num_units - a.num_units;
      });
    },
    GetTraitSorted(trait) {
      return trait.sort(function (a, b) {
        return b.style - a.style;
      });
    },
    GetItem(item) {
      // console.log(item)
      for (let j in this.alldata.items) {
        if (item == this.alldata.items[j].id) {
          return `https://raw.communitydragon.org/latest/game/${this.alldata.items[
            j
          ].icon
            .toLowerCase()
            .slice(0, -4)}.png`;
        }
      }
    },
    GetMatchDetailInfo(info) {
      // console.log(`MatchHistory-GetMatchDetailInfo: ${info}`);
      return this.More(info);
    },
    ChangeUnixTime(unix) {
      return new Date(unix * 1000).toISOString().substr(14, 5);
    },
    ChangeBorder(placement) {
      let myStyle = [];
      if (placement == 1) {
        myStyle.push(this.greenStyleLeft, this.greenStyleRight);
        // console.log(myStyle);
        return myStyle;
      } else if (placement < 5) {
        myStyle.push(this.blueStyleLeft, this.blueStyleRight);
        // console.log(myStyle);
        return myStyle;
      } else {
        myStyle.push(this.grayStyleLeft, this.grayStyleRight);
        // console.log(myStyle);
        return myStyle;
      }
    },
  },
  mounted() {
    Array.from(
      document.querySelectorAll('img[data-bs-toggle="tooltip"]')
    ).forEach((tooltipNode) => new Tooltip(tooltipNode));
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
  border-left: 7px solid wheat;
  margin-top: 1%;
}
.main-match-text {
  width: 9%;
  margin: 1%;
}
.main-match-icon {
  width: 6%;
  margin: 1%;
}
.main-match-icon-main {
  border-radius: 30%;
}
.main-match-icon-sub {
  z-index: 1;
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
  margin-bottom: 3px;
  background-size: 100%;
  padding: 4%;
  background-repeat: no-repeat;
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
  align-items: baseline;
}
.main-match-champion-attribute {
  width: 8%;
  margin-left: 10px;
}
.main-match-champion-attribute-img {
  width: 100%;
  border-radius: 20%;
}
.main-match-champion-attribute-star {
  width: 40%;
  margin-bottom: 3px;
}
.main-match-champion-attribute-item {
  width: 33%;
  margin-top: 2px;
  margin-left: 1px;
  margin-right: 1px;
  border-radius: 40%;
}
.main-match-summoner {
  width: 15%;
  margin: 1%;
}
.main-match-summoner-attribute {
  width: 50%;
}
.main-match-tab {
  width: 3%;
  background-color: red;
  align-self: stretch;
  background-image: url("../assets/chevron-down-solid.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>
