<template>
  <div
    class="col-container"
    style="border-bottom: 1px solid rgb(185, 192, 199)"
  >
    <div class="row-container detail-match-info">
      <div class="row-item detail-match-rank">Rank</div>
      <div class="row-item detail-match-summoner">Summoner</div>
      <div class="row-item detail-match-round">Round</div>
      <div class="row-item detail-match-alive">Alive</div>
      <div class="row-item detail-match-traits">Traits</div>
      <div class="row-item detail-match-units">Units</div>
      <div class="row-item detail-match-gold">Left Gold</div>
    </div>
    <div
      class="row-container detail-match-info-detail"
      v-for="(item, index) in this.SortByPlaceMent(
        this.resultData.participants
      )"
      :key="index"
    >
      <div class="row-item detail-match-rank">
        <strong>{{ item.placement }}</strong>
      </div>
      <div
        class="row-container detail-match-summoner"
        style="justify-content: flex-start"
      >
        <img
          src="../assets/icon2.png"
          class="row-item"
          style="width: 25%; margin-right: 5px"
        />
        <div
          class="row-item"
          style="
            width: 15%;
            background-color: aquamarine;
            border-radius: 30%;
            border: 0.1px solid gray;
          "
        >
          P4
        </div>
        <div class="row-item" style="width: 60%; font-size: x-small">
          삼시열다섯끼
        </div>
      </div>
      <div class="row-item detail-match-round">{{ item.last_round }}</div>
      <div class="row-item detail-match-alive" style="font-size: x-small">
        {{ this.ChangeUnixTime(item.time_eliminated) }}
      </div>
      <div
        class="row-container detail-match-traits"
        style="justify-content: flex-start; flex-flow: row wrap"
      >
        <img
          v-for="(trait, j) in this.GetTraitSorted(
            this.TraitsFillter(item.traits)
          )"
          :key="j"
          class="row-item"
          style="width: 16%; padding: 4%; margin-top: 2px"
          :src="this.GetTrait(trait)"
          :style="{
            'background-image': `url(${this.GetTraitBackGround(trait)})`,
          }"
        />
      </div>

      <div
        class="row-container detail-match-units"
        style="justify-content: flex-start"
      >
        <div class="detail-match-arg">
          <img
            v-for="k in 3"
            :key="k"
            style="width: 50%"
            class="col-item"
            src="https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/augments/choiceui/celestialblessing3.tft_set6.png"
          />
        </div>
        <div
          class="col-container detail-match-units-attribute"
          v-for="(cham, i) in this.NullFillter(item.units)"
          :key="i"
        >
          <div class="row-container">
            <img
              v-for="(v, k) in cham.tier"
              :key="k"
              class="row-item detail-match-units-attribute-star"
              :src="this.GetStar(cham.tier)"
            />
          </div>
          <img
            class="row-item detail-match-units-attribute-img"
            :src="this.GetChampionUrlByName(cham.character_id)"
            :style="this.championBorderStyle[cham.rarity][cham.rarity]"
          />
          <div class="row-container">
            <img
              class="row-item detail-match-units-attribute-item"
              v-for="(q, w) in cham.items"
              :key="w"
              :src="this.GetItem(q)"
            />
          </div>
        </div>
      </div>
      <div class="row-item detail-match-gold">
        <div
          style="
            text-align: center;
            border: solid 2px gold;
            background-color: gold;
            color: white;
            border-radius: 50%;
            width: 40%;
            display: inline-block;
          "
        >
          {{ item.gold_left }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import alldata from "../assets/data.json";
import AllMatchData from "../assets/AllMatchData.json";
export default {
  props: {
    getRecord: String,
    // championBorderStyle: Array,
  },
  data() {
    return {
      AllMatchData,
      alldata,
      resultData: {},
      championBorderStyle: [
        {
          0: {
            border: "solid 2px gray",
          },
        },
        {
          1: {
            border: "solid 2px green",
          },
        },
        {
          2: {
            border: "solid 2px blue",
          },
        },
        {
          3: {
            border: "solid 2px purple",
          },
        },
        {
          4: {
            border: "solid 2px orange",
          },
        },
        {
          5: {
            border: "solid 2px yellow",
          },
        },
        {
          6: {
            border: "solid 2px red",
          },
        },
      ],
    };
  },
  components: {},
  methods: {
    SortByPlaceMent(array) {
      return array?.sort(function (a, b) {
        return a.placement - b.placement;
      });
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
        if (DTO[i] != null) {
          if (DTO[i].rarity < 7) array.push(DTO[i]);
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
    ChangeUnixTime(unix) {
      return new Date(unix * 1000).toISOString().substr(14, 5);
    },
    GetRecord(name) {
      axios
        .get(
          // cafe24에서 데이터 가져오기
          `/his/GetRecord/${name}`,
          {
            transformRequest: [
              (data, headers) => {
                delete headers.common["X-Requested-With"];
                return data;
              },
            ],
          }
        )
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(result.data);
          this.resultData = result.data;
        })
        .catch(() => {
          console.log("error-GetRecord");
        });
    },
  },
  created() {
    this.GetRecord(this.getRecord);
  },
};
</script>

<style>
.detail-match-info {
  margin-top: 1%;
  width: 100%;
  border-left: 1px solid whitesmoke;
  border-right: 1px solid whitesmoke;
  background-color: whitesmoke;
  font-size: small;
  text-align: center;
}

.detail-match-info-detail {
  width: 100%;
  border-left: 1px solid whitesmoke;
  border-right: 1px solid whitesmoke;
  font-size: small;
  text-align: center;
  padding: 5px;
}

.detail-match-rank {
  width: 6%;
}

.detail-match-summoner {
  width: 16%;
}

.detail-match-round {
  width: 6%;
}

.detail-match-alive {
  width: 6%;
}

.detail-match-traits {
  width: 20%;
}

.detail-match-arg {
  width: 10%;
  flex-direction: column;
  display: flex;
}

.detail-match-units {
  width: 38%;
  justify-content: flex-start;
  margin: 1%;
  align-items: baseline;
}

.detail-match-units-attribute {
  width: 8%;
  margin-left: 10px;
  align-self: baseline;
}

.detail-match-units-attribute-img {
  width: 100%;
  border-radius: 20%;
}

.detail-match-units-attribute-star {
  width: 40%;
  margin-bottom: 3px;
}

.detail-match-units-attribute-item {
  width: 33%;
  margin-top: 2px;
  margin-left: 1px;
  margin-right: 1px;
  border-radius: 40%;
}

.detail-match-gold {
  width: 6%;
}
</style>
