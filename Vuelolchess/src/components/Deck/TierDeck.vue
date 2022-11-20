<template>
  <div
    class="tierDeckMainContainer"
    style="color: white; border-radius: 3% / 15%; padding: 2%"
    v-for="(tier, tIndex) in this.$store.state.filteredDecks"
    :key="tIndex"
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
  >
    <div class="my-tier">
      <div class="my-tier-main">
        <img
          style="margin-right: 1%"
          :src="require(`../../assets/tier${tier.tier}.png`)"
          class="row-item my-tier-img"
          :alt="tier.tier"
        />
        <div class="row-item my-tier-deck-name">
          <strong class="my-tier-deck-main" style="color: white">{{
            tier.deckName
          }}</strong>
          <br />
          <p class="my-tier-deck-sub">{{ tier.subDeckName }}</p>
        </div>
        <div class="row-item" style="width: 30%; margin-left: auto">
          <strong style="color: white">carries</strong>
        </div>
      </div>
      <div class="my-tier-main-info">
        <div class="my-tier-champions" style="margin-top: 10px">
          <div
            style="align-self: baseline"
            class="my-tier-champion"
            v-for="(j, i) in tier.unit"
            :key="i"
          >
            <div class="my-tier-champion-stars">
              <img
                :src="require(`../../assets/${GetStar(j.tier)}.png`)"
                class="my-tier-champion-star"
                v-for="(item, index) in j.tier"
                :key="index"
              />
            </div>
            <img
              class="my-tier-champion-img"
              :src="this.GetChampionUrl(j.character_id)"
              width="44"
              height="44"
            />
            <div class="my-tier-champion-name">
              {{ this.getChampName(j.character_id) }}
            </div>
          </div>
        </div>
        <div class="col-container my-tier-APtext" style="text-align: center">
          <div class="col-item" style="text-align: center; width: 100%">
            Avg Place:
            <strong class="my-tier-Avg" style="color: white">{{
              tier.averagePlacement
            }}</strong>
          </div>
          <div class="col-item" style="width: 100%; text-align: center">
            Frequency:
            <strong class="my-tier-Pick" style="color: white">{{
              tier.frequency
            }}</strong>
          </div>
        </div>
        <div
          class="my-tier-carries"
          style="justify-items: flex-start; width: 30%"
        >
          <div
            class="my-tier-champion"
            style="width: 14%"
            v-for="(j, i) in tier.unit"
            :key="i"
          >
            <img
              :src="this.GetChampionUrl(j.character_id)"
              class="my-tier-champion-img"
              style="width: 100%; margin-bottom: 10%"
            />
            <div class="my-tier-champion-stars" style="width: 100%">
              <img
                :src="GetItemUrl(w)"
                class="my-tier-champion-item"
                v-for="w in j.items"
                :key="w"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newdata from '../../assets/newdata.json';
import axios from 'axios';

export default {
  data() {
    return {
      tabs: false,
      newdata,
      getData: [],
    };
  },
  methods: {
    getChampName(championID) {
      for (let j in this.newdata.setData[0].champions) {
        if (this.newdata.setData[0].champions[j].apiName == championID) {
          return this.newdata.setData[0].champions[j].name.replace(/ /g, '');
        }
      }
    },
    GetChampionUrl(championID) {
      // get url by champion ID
      // ex) TFT7_NomsyCannonee
      for (let i in this.newdata.setData) {
        for (let j in this.newdata.setData[i].champions) {
          if (this.newdata.setData[i].champions[j].apiName == championID) {
            let temp = this.newdata.setData[i].champions[j].icon
              .toLowerCase()
              .split('/');
            // console.log(temp);
            // let newUrl = temp.slice(0, -1);
            let newUrl2 = temp.slice(-1)[0].split('.');
            // console.log(newUrl);
            // console.log(newUrl2);
            if (newUrl2[0] == 'tft7_volibear') {
              return `https://raw.communitydragon.org/latest/game/assets/characters/${championID.toLowerCase()}/hud/${
                newUrl2[0]
              }_square.${newUrl2[1].slice(0, 8)}.png`;
            } else if (newUrl2[0] == 'tft7_zippy') {
              return `https://raw.communitydragon.org/latest/game/assets/characters/${championID.toLowerCase()}/hud/icons2d/${
                newUrl2[0]
              }_square.${newUrl2[1]}.png`;
            } else if (newUrl2[0] == 'tft7_dragongreen') {
              return `https://raw.communitydragon.org/latest/game/assets/characters/${championID.toLowerCase()}/hud/tft7_jadedragon_square.${newUrl2[1].slice(
                0,
                8
              )}.png`;
            } else {
              return `https://raw.communitydragon.org/latest/game/assets/characters/${championID.toLowerCase()}/hud/${
                newUrl2[0]
              }_square.${newUrl2[1]}.png`;
            }
          }
        }
      }
    },
    GetStar(i) {
      if (i == 3) {
        // return `https://raw.communitydragon.org/latest/game/assets/ux/tft/notificationicons/goldstar.png`;
        return 'stargold';
      } else if (i == 2) {
        // return ``;
        return 'starsilver';
      } else {
        return 'starbronze';
      }
    },
    GetItemUrl(item) {
      for (let j in newdata.items) {
        if (item == newdata.items[j].id) {
          let temp = newdata.items[j].icon
            .toLowerCase()
            .split('.')
            .slice(0, -1);
          return `https://raw.communitydragon.org/latest/game/${temp.join(
            '.'
          )}.png`;
        }
      }
    },
    GetDeck() {
      axios
        .get('/test/mockdoridomabem')
        .then((result) => {
          console.log(`GetDeck: ${result.data}`);
          console.log(result.data);
          this.getData = result.data;
        })
        .catch(() => {
          console.log('GetDeck Error');
        });
    },
  },
  created() {
    this.$store.dispatch('SetTierDeck');
    // this.GetDeck();
  },
};
</script>

<style>
.tierDeckMainContainer {
  background: linear-gradient(
    to right,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 1) 60%,
    rgba(2, 0, 36, 1) 80%
  );
  color: white;
  border: solid 10px rgb(10, 10, 26);
}
.tierDeckMainContainer:hover {
  background: linear-gradient(
    to right,
    rgb(11, 8, 68) 0%,
    rgb(43, 43, 43) 60%,
    rgb(11, 8, 68) 80%
  );
}
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
  display: flex;
  padding: 5px 0px 15px;
  width: 2%;
  justify-items: flex-start;
}
img {
  display: inline-block;
}
.my-tier-deck-main {
  justify-content: flex-start;
}
.my-tier-deck-sub {
  font-size: 0.9rem;
  margin: 0px;
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
  width: 8%;
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
  justify-self: center;
  height: auto;
}
.my-tier-champion-star {
  width: 25%;
  margin-right: 0.25rem;
}
.my-tier-champion-item {
  width: 30%;
}
.my-tier-champion-img {
  /* width: auto; */
  border-radius: 25%;
  margin: 0px auto;
}
.my-tier-champion-name {
  text-align: center;
  width: 100%;
  font-size: x-small;
}
.my-tier-APtext {
  width: 25%;
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
