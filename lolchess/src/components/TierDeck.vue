<template>
  <div
    style="
      background-color: white;
      border-radius: 0% 0% 5% 5% / 0% 0% 25% 25%;
      padding: 3%;
    "
  >
    <div class="my-tier" v-for="(tier, tIndex) in this.getData" :key="tIndex">
      <div class="my-tier-main">
        <img
          style="margin-right: 1%"
          src="https://raw.communitydragon.org/latest/game/assets/ux/tft/notificationicons/streak.png"
          class="row-item my-tier-img"
        />
        <div class="row-item my-tier-deck-name">
          <strong class="my-tier-deck-main">{{ tier.deckName }}</strong>
          {{ tier.deckName }}
        </div>
        <div class="row-item" style="width: 30%; margin-left: auto">
          carries
        </div>
      </div>
      <div class="my-tier-main-info">
        <div class="my-tier-champions" style="margin-top: 10px">
          <div
            style="align-self: baseline"
            class="my-tier-champion"
            v-for="(j, i) in tier.character_id"
            :key="i"
          >
            <div class="my-tier-champion-stars">
              <!-- <img
                :src="GetStar(j.tier)"
                class="my-tier-champion-star"
                v-for="(item, index) in 3"
                :key="index"
              /> -->
            </div>
            <img
              class="my-tier-champion-img"
              :src="this.GetChampionUrlByName(j)"
            />
            <div class="my-tier-champion-name">
              {{ j.slice(5) }}
            </div>
          </div>
        </div>
        <div class="col-container my-tier-APtext" style="text-align: center">
          <div class="col-item" style="text-align: center; width: 100%">
            Avg Place:
            <strong class="my-tier-Avg">{{ tier.placementRate }}</strong>
          </div>
          <div class="col-item" style="width: 100%; text-align: center">
            Pick Rate:
            <strong class="my-tier-Pick">{{ tier.placementrate }}</strong>
          </div>
        </div>
        <div
          class="my-tier-carries"
          style="justify-items: flex-start; width: 30%"
        >
          <!-- <div
            class="my-tier-champion"
            style="width: 15%"
            v-for="(j, i) in this.tierdata[0].carryUnit"
            :key="i"
          >
            <img
              :src="this.GetChampionUrlByName(j.character_id)"
              class="my-tier-champion-img"
              style="width: 100%; margin-bottom: 10%"
            />
            <div class="my-tier-champion-stars" style="width: 100%">
              <img
                :src="GetItem(w)"
                class="my-tier-champion-star"
                v-for="w in j.items"
                :key="w"
              />
            </div>
          </div> -->
        </div>
        <div class="row-container my-tier-expands">
          <div class="row-item">
            <img
              v-if="!this.tabs"
              src="../assets/chevron-down-solid.png"
              style="justify-self: flex-end"
              @click="this.tabs = !this.tabs"
            />
            <img
              v-if="this.tabs"
              src="../assets/chevron-down-solid.png"
              style="justify-self: flex-end; transform: scaleY(-1)"
              @click="this.tabs = !this.tabs"
            />
          </div>
        </div>
      </div>
    </div>
    <UserTabs v-if="this.tabs"></UserTabs>
  </div>
</template>

<script>
import alldata from "../assets/data.json";
import UserTabs from "./UserTabs.vue";
import tierdata from "../assets/TierData.json";
import axios from "axios";

export default {
  data() {
    return {
      tabs: false,
      tierdata,
      alldata,
      getData: [],
    };
  },
  components: { UserTabs },
  methods: {
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
    GetStar(i) {
      if (i == 3) {
        return `https://raw.communitydragon.org/latest/game/assets/ux/tft/notificationicons/goldstar.png`;
      } else {
        return ``;
      }
    },
    GetItem(item) {
      // console.log(item);
      for (let j in this.alldata.items) {
        // console.log(this.alldata.items[j].id);
        if (item == this.alldata.items[j].id) {
          return `https://raw.communitydragon.org/latest/game/${this.alldata.items[
            j
          ].icon
            .toLowerCase()
            .slice(0, -4)}.png`;
        }
      }
    },
    GetDeck() {
      axios
        .get("/test/mockdoridomabem")
        .then((result) => {
          console.log(`GetDeck: ${result.data}`);
          console.log(result.data);
          this.getData = result.data;
        })
        .catch(() => {
          console.log("GetDeck Error");
        });
    },
  },
  created() {
    this.GetDeck();
  },
};
</script>

<style>
.my-tier {
  display: flex;
  /* display: inline-flex; */
  flex-direction: column;
}
.my-tier-main {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.my-tier-img {
  width: 3%;
  justify-items: flex-start;
}
img {
  display: inline-block;
}
.my-tier-deck-main {
  justify-content: flex-start;
}
.my-tier-carries {
  width: 30%;
}
.my-tier-champions {
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.my-tier-champion {
  display: inline-flex;
  flex-direction: column;
  flex-basis: auto;
  width: 12%;
  block-size: fit-content;
  margin-right: 5px;
  margin-left: 5px;
}
.my-tier-main-info {
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}
.my-tier-champion-stars {
  width: 100%;
  display: flex;
  /* display: inline-flex; */
  flex-direction: row;
  justify-content: space-between;
  justify-self: center;
  height: auto;
}
.my-tier-champion-star {
  width: 30%;
}
.my-tier-champion-img {
  width: 100%;
  border-radius: 25%;
}
.my-tier-champion-name {
  text-align: center;
  width: 100%;
  font-size: small;
}
.my-tier-APtext {
  width: 30%;
  font-size: small;
  text-align: center;
}
.my-tier-Avg {
  width: 50%;
  text-align: center;
}
.my-tier-Pick {
  width: 50%;
  text-align: center;
}
.my-tier-item-img {
  width: 4%;
}
.my-tier-expands {
  width: 3%;
}
</style>
