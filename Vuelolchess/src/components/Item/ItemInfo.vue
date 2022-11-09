<template>
  <div class="blackBG">
    <div class="info-container">
      <div class="info-title">
        <h5>Item Info</h5>
        <button class="btn-close" @click="this.$emit('close', 0)"></button>
      </div>
      <hr />
      <div class="item-container">
        <div class="item-detail-header">
          <img
            :src="GetItemUrl(itemID)"
            alt="item-img"
            width="60"
            height="60"
          />
          <div class="item-detail-sub">
            <div class="item-detail-name">{{ this.item.name }}</div>
            <div v-if="isEmptyArr(this.item.from)" class="item-detail-effect">
              <div class="item-detail-effect-box">
                <img
                  class="item-detail-effect-image"
                  :src="
                    require(`../../assets/stats/${
                      Object.entries(this.item.effects)[0][0]
                    }.png`)
                  "
                  alt="effect-image"
                  width="20"
                  height="20"
                />
                +{{ Object.entries(this.item.effects)[0][1] }}
              </div>
            </div>
            <div
              v-if="!isEmptyArr(Object.entries(this.item.effects)[0])"
              class="item-detail-effect"
            >
              <div
                class="item-detail-effect-box"
                v-for="(baseID, i) in this.item.from"
                :key="i"
              >
                <img
                  class="item-detail-effect-image"
                  :src="
                    require(`../../assets/stats/${this.GetEffectUrl(
                      baseID
                    )}.png`)
                  "
                  alt="effect-image"
                  width="20"
                  height="20"
                />
                +{{ Object.entries(this.GetItem(baseID).effects)[0][1] }}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="item-detail-skill-desc">{{ this.item.desc }}</div>
        <hr />
        <div class="item-detail-mix" v-if="!isEmptyArr(this.item.from)">
          <img
            class="item-detail-cost-image"
            :src="GetItemUrl(this.item.from[0])"
            alt="coin-img"
            width="35"
            height="35"
          />
          +
          <img
            class="item-detail-cost-image"
            :src="GetItemUrl(this.item.from[1])"
            alt="coin-img"
            width="35"
            height="35"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newdata from '../../assets/newdata.json';

export default {
  props: ['itemID'],
  data() {
    return {
      newdata,
      item: {},
    };
  },
  methods: {
    GetItem(itemID) {
      let temp = {};
      for (let i = 0; i < this.newdata.items.length; i++) {
        let id = this.newdata.items[i].id;
        if (id === itemID) {
          temp = this.newdata.items[i];
        }
      }
      return temp;
    },
    GetItemUrl(item) {
      for (let j in this.newdata.items) {
        if (item == this.newdata.items[j].id) {
          let temp = this.newdata.items[j].icon
            .toLowerCase()
            .split('.')
            .slice(0, -1);
          return `https://raw.communitydragon.org/latest/game/${temp.join(
            '.'
          )}.png`;
        }
      }
    },
    isEmptyArr(arr) {
      if (Array.isArray(arr) && arr.length === 0) return true;
      return false;
    },
    GetEffectUrl(baseID) {
      const baseItem = this.GetItem(baseID);
      let effect = Object.entries(baseItem.effects);
      return effect[0][0];
    },
  },
  created() {
    this.item = this.GetItem(this.itemID);
  },
};
</script>

<style>
.blackBG {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  padding: 60px;
  z-index: 1;
}
.btn-close {
  display: flex;
  margin-left: auto;
}
.info-container {
  box-sizing: border-box;
  max-width: 800px;
  background: white;
  border-radius: 8px;
  padding: 8px 20px 15px;
  margin: 0px auto;
}
.info-title {
  display: flex;
}
.item-container {
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem;
}
.info-container hr {
  margin-top: 0px;
}
.info-title h5 {
  margin-bottom: 0px;
}
.item-detail-name {
  align-self: flex-start;
  font-weight: 700;
  font-size: 1.5rem;
}
.item-detail-header {
  display: flex;
  margin-bottom: 8px;
}
.item-detail-sub {
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;
}
.item-detail-effect {
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
}
.item-detail-mix {
  display: flex;
  margin-left: auto;
  align-items: center;
  margin-right: 1rem;
}
.item-detail-effect-box {
  display: flex;
  margin-right: 1rem;
  align-items: center;
}
.item-detail-effect-image {
  padding: 2px 0px;
}
</style>
