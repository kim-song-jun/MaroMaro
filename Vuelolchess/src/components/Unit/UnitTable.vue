<template>
  <div class="table-container">
    <table class="unit-table">
      <thead>
        <th class="table-th"><div class="table-item">Unit</div></th>
        <th class="table-th"><div class="table-tier">Tier</div></th>
        <th class="table-th"><div class="table-avg">Avg Place</div></th>
        <th class="table-th"><div class="table-winrate">Winrate</div></th>
        <th class="table-th">
          <div class="table-frequency">Frequency</div>
        </th>
      </thead>
      <tbody>
        <tr
          v-for="(unit, index) in $store.state.filteredUnits"
          :key="index"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <td class="table-td">
            <div class="table-item">
              <div class="help-tip">
                <a>
                  <img
                    class="unit-img"
                    :src="GetChampionUrl(unit.ID)"
                    :style="GetChampBorderByCost(unit.rarity)"
                    alt="itemImg"
                    @click="showModal(unit.ID)"
                  />
                </a>
                <div class="tip-container">
                  <div class="tip-name-container">
                    <p class="tip-name">
                      {{ unit.name }}
                    </p>
                  </div>
                  <p class="tip-detail">
                    <br />
                    traits:<img
                      v-for="(trait, i) in GetChamp(unit.ID).traits"
                      :key="i"
                      class="tip-detail-image"
                      :src="GetTraitUrl(trait)"
                      alt="coin-img"
                    />

                    <br />
                    items:<img
                      v-for="(item, index) in unit.items"
                      :key="index"
                      class="tip-detail-image"
                      :src="this.GetItemUrl(item)"
                      alt="recommanditem1"
                    />
                  </p>
                </div>
              </div>
              <div class="itemName">
                <a>{{ unit.name }}</a>
              </div>
            </div>
          </td>
          <td class="table-td"><div class="table-tier">S</div></td>
          <td class="table-td"><div class="table-avg">3.53</div></td>
          <td class="table-td"><div class="table-winrate">22.9%</div></td>
          <td class="table-td">
            <div class="table-frequency">24,258 (2.5%)</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import newdata from '../../assets/newdata.json';

export default {
  props: ["cost", "traits"],
  data() {
    return {
      newdata,
      championBorderStyle: [
        "border:solid 2px gray;",
        "border:solid 2px green;",
        "border:solid 2px blue;",
        "border:solid 2px purple;",
        "border:solid 2px #ffd700;",
      ],
    };
  },
  methods: {
    showModal(name) {
      this.$emit("open", 1, name);
    },
    GetItemUrl(item) {
      for (let j in this.newdata.items) {
        if (item == this.newdata.items[j].id) {
          let temp = this.newdata.items[j].icon
            .toLowerCase()
            .split(".")
            .slice(0, -1);
          return `https://raw.communitydragon.org/latest/game/${temp.join(
            "."
          )}.png`;
        }
      }
    },
    GetChamp(champName) {
      var temp = {};
      for (let i = 0; i < this.newdata.setData[0].champions.length; i++) {
        let name = this.newdata.setData[0].champions[i].apiName.replace(
          / /g,
          ""
        );
        if (name === champName) temp = this.newdata.setData[0].champions[i];
      }
      return temp;
    },
    GetTraitUrl(traitName) {
      for (let i in this.newdata.setData[0].traits) {
        if (this.newdata.setData[0].traits[i].name == traitName) {
          let temp = this.newdata.setData[0].traits[i].icon
            .toLowerCase()
            .split(".")
            .slice(0, -1);
          return `https://raw.communitydragon.org/latest/game/${temp.join(
            "."
          )}.png`;
        }
      }
    },
    GetChampBorderByCost(champCost) {
      //return border style each cost
      if (champCost === 1) {
        return this.championBorderStyle[0];
      } else if (champCost === 2) {
        return this.championBorderStyle[1];
      } else if (champCost === 3) {
        return this.championBorderStyle[2];
      } else if (champCost === 4) {
        return this.championBorderStyle[3];
      } else if (champCost === 5) {
        return this.championBorderStyle[4];
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
              .split("/");
            // console.log(temp);
            // let newUrl = temp.slice(0, -1);
            let newUrl2 = temp.slice(-1)[0].split(".");
            // console.log(newUrl);
            // console.log(newUrl2);
            if (newUrl2[0] == "tft7_volibear") {
              return `https://raw.communitydragon.org/latest/game/assets/characters/${championID.toLowerCase()}/hud/${
                newUrl2[0]
              }_square.${newUrl2[1].slice(0, 8)}.png`;
            } else if (newUrl2[0] == "tft7_zippy") {
              return `https://raw.communitydragon.org/latest/game/assets/characters/${championID.toLowerCase()}/hud/icons2d/${
                newUrl2[0]
              }_square.${newUrl2[1]}.png`;
            } else if (newUrl2[0] == "tft7_dragongreen") {
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
  },
  mounted() {
    // this.animate();
  },
};
</script>

<style>
.unit-table {
  border-spacing: 0;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  padding: 10px;
  /* border: none; */
}
.table-th {
  padding: 0.4rem 0.6rem;
  /* border-bottom: 2px solid #313236; */
  border-left: 0;
  border-right: 0;
  margin: 0;
  background-color: black;
  color: #f8f7f6;
}
.table-td {
  padding: 0.4rem 0.6rem;
  /* border-bottom: 2px solid #313236; */
  border-left: 0;
  border-right: 0;
  margin: 0;
  /* background-color: aliceblue; */
}

table tr:nth-child(odd) {
  background: linear-gradient(
    to right,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 1) 60%,
    rgba(2, 0, 36, 1) 80%
  );
  color: white;
}
table tr:nth-child(even) {
  background: linear-gradient(
    to right,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 1) 60%,
    rgba(2, 0, 36, 1) 80%
  );
  color: white;
}

table tr:hover {
  background: linear-gradient(
    to right,
    rgb(11, 8, 68) 0%,
    rgb(43, 43, 43) 60%,
    rgb(11, 8, 68) 80%
  );
}

.table-td:first-child,
.table-th:first-child {
  border-radius: 10px 0 0 10px;
}
.table-td:last-child,
.table-th:last-child {
  border-radius: 0 10px 10px 0;
}
.table-container {
  /* overflow: auto;
  height: 590px; */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.table-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.table-th .table-item {
  min-width: 170px;
  max-width: 170px;
  text-align: left;
}
.table-tier {
  display: flex;
}
.table-frequency {
  text-align: right;
}
.table-td .table-item {
  display: flex;
  align-items: center;
}
.table-td .table-tier {
  background-color: #ff7e83;
  color: #111;
  font-weight: 600;
  font-size: 18px;
  width: 28px;
  height: 28px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
}
.table-td .table-avg {
  font-size: 16px;
  color: rgb(15, 67, 73);
}
.table-td .table-winrate {
  font-size: 14px;
}
.table-td .table-frequency {
  text-align: right;
  font-size: 14px;
}
.tip-container {
  position: relative;
  top: -70px;
  left: 40px;
}
.tip-name-container {
  position: relative;
  top: -3px;
  left: 5px;
}
.help-tip {
  font-size: 14px;
  line-height: 26px;
}
.help-tip:hover .tip-detail,
.help-tip:hover .tip-name {
  display: block;
  transform-origin: 100% 0%;
  -webkit-animation: fadeIn 0.3s ease-in-out;
  animation: fadeIn 0.3s ease-in-out;
}
.tip-detail,
.tip-name {
  display: none;
  text-align: left;
  background-color: #1e2021;
  padding: 10px;
  /* detail window width */
  width: 200px;
  position: absolute;
  z-index: 1;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 13px;
  line-height: 1;
}
.tip-detail-image {
  margin-bottom: 0.2rem;
  margin-left: 0.2rem;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
.help-tip strong {
  color: rgb(31, 132, 144);
}
.tip-name {
  font-size: 8px;
  width: auto;
  white-space: nowrap;
  position: absolute;
  z-index: 2;
  padding: 5px;
}
.unit-img {
  border-radius: 5px;
  margin: 0px 5px 0px 0px;
  width: 32px;
  height: 32px;
}
</style>
