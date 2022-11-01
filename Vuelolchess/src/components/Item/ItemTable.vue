<template>
  <div class="table-container">
    <table>
      <thead>
        <th><div class="table-item">Item</div></th>
        <th><div class="table-tier">Tier</div></th>
        <th><div class="table-avg">Avg Place</div></th>
        <th><div class="table-winrate">Winrate</div></th>
        <th><div class="table-frequency">Frequency</div></th>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item">
          <td>
            <div class="table-item">
              <div class="help-tip">
                <a>
                  <img
                    :src="GetItemUrl(item.id)"
                    alt="itemImg"
                    width="28"
                    height="28"
                    @click="showModal(item.id)"
                  />
                </a>
                <div class="tip-container">
                  <div class="tip-name-container">
                    <p class="tip-name">
                      {{ item.name }}
                    </p>
                  </div>
                  <p class="tip-detail">
                    <br />
                    <strong v-for="(effect, name) in item.effects" :key="name">
                      {{ name }}+{{ effect }}
                    </strong>
                    <span
                      v-if="!isEmptyArr(item.from)"
                      class="tip-detail-image"
                    >
                      <img
                        :src="this.GetItemUrl(item.from[0])"
                        alt="recipeitem1"
                        width="15"
                        height="15" />
                      +
                      <img
                        :src="this.GetItemUrl(item.from[1])"
                        alt="recipeitem2"
                        width="15"
                        height="15"
                    /></span>
                  </p>
                </div>
              </div>
              <div class="itemName">
                <a>{{ item.name }}</a>
              </div>
            </div>
          </td>
          <td><div class="table-tier">S</div></td>
          <td><div class="table-avg">3.53</div></td>
          <td><div class="table-winrate">22.9%</div></td>
          <td><div class="table-frequency">24,258 (2.5%)</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import alldata from '../../assets/data.json';
import newdata from '../../assets/newdata.json';

export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    showModal(id) {
      // console.log(`emit:${name}`);
      this.$emit('open', 1, id);
    },
    GetItemUrl(item) {
      // console.log(item);
      // for (let j in newdata.items) {
      //   if (item == newdata.items[j].id) {
      //     console.log(
      //       `https://raw.communitydragon.org/latest/game/${newdata.items[j].icon
      //         .toLowerCase()
      //         .slice(0, -4)}.png`
      //     );
      //     return `https://raw.communitydragon.org/latest/game/${newdata.items[
      //       j
      //     ].icon
      //       .toLowerCase()
      //       .slice(0, -4)}.png`;
      //   }
      // }
      // console.log(item)
      for (let j in newdata.items) {
        if (item == newdata.items[j].id) {
          // console.log(newdata.items[j].icon.toLowerCase().split('.'));
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
    GetItems() {
      //tierItem is server data
      // for (let i = 0; i < newdata.items.length; i++) {
      //   let id = newdata.items[i].id;
      //   const filter1 = 'tft7_item';
      //   if (id == tierItem.items[i].id) this.items.push(newdata.items[i]);
      // }
      for (let i = 0; i < newdata.items.length; i++) {
        // let name = newdata.items[i].apiName.toLowerCase().replace(/ /g, '');
        // const filter1 = 'tft7_item';
        // if (name.includes(filter1)) this.items.push(newdata.items[i]);
        this.items.push(newdata.items[i]);
      }
    },
    isEmptyArr(arr) {
      if (Array.isArray(arr) && arr.length === 0) {
        return true;
      }

      return false;
    },
  },
  created() {
    this.GetItems();
  },
};
</script>

<style scoped>
table {
  border-spacing: 0;
  width: 100%;
}
th,
td {
  padding: 0.4rem 0.6rem;
  border-bottom: 1px solid #313236;
  border-left: 0;
  border-right: 0;
  margin: 0;
}
.table-container {
  overflow: auto;
  height: 590px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.table-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
th .table-item {
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
td .table-item {
  display: flex;
  align-items: center;
}
td .table-item img {
  margin: 0px 5px 0px 0px;
  width: 32px;
  height: 32px;
}
td .table-tier {
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
td .table-avg {
  font-size: 16px;
  color: rgb(15, 67, 73);
}
td .table-winrate {
  font-size: 14px;
}
td .table-frequency {
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
  width: 150px;
  position: absolute;
  z-index: 1;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 13px;
  line-height: 1;
}
.tip-detail img {
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  border-radius: 50%;
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
</style>
