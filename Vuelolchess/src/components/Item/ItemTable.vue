<template>
  <div class="table-container">
    <table class="item-table">
      <thead>
        <th class="table-th"><div class="table-item">Item</div></th>
        <th class="table-th"><div class="table-tier">Tier</div></th>
        <th class="table-th"><div class="table-avg">Avg Place</div></th>
        <!-- <th class="table-th"><div class="table-winrate">Winrate</div></th> -->
        <th class="table-th">
          <div class="table-frequency">Frequency</div>
        </th>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in this.$store.state.filteredItems"
          :key="index"
        >
          <td class="table-td">
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
          <td class="table-td">
            <div class="table-tier">{{ this.realItem.items[index].tier }}</div>
          </td>
          <td class="table-td">
            <div class="table-avg">
              {{ this.realItem.items[index].averagePlacement }}
            </div>
          </td>
          <!-- <td class="table-td"><div class="table-winrate">22.9%</div></td> -->
          <td class="table-td">
            <div class="table-frequency">
              {{ this.realItem.items[index].frequency }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import newdata from '../../assets/newdata.json';
// import tierItem from '../../assets/tierItem.json';
import realItem from '../../assets/data/item.json';

export default {
  data() {
    return {
      newdata,
      // tierItem,
      realItem,
    };
  },
  methods: {
    showModal(id) {
      this.$emit('open', 1, id);
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
  },
};
</script>

<style>
.item-table {
  border-spacing: 0;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  padding: 10px;
  background-color: rgb(10, 10, 26);
}
.item-table-th,
.item-table-td {
  padding: 0.4rem 0.6rem;
  border-bottom: 1px solid #313236;
  border-left: 0;
  border-right: 0;
  margin: 0;
}
.table-container {
  /* overflow: auto; */
  /* height: 590px; */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.table-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.item-table-th .table-item {
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
.item-table-td .table-item {
  display: flex;
  align-items: center;
}
.item-table-td .table-item img {
  margin: 0px 5px 0px 0px;
  width: 32px;
  height: 32px;
}
.item-table-td .table-tier {
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
.item-table-td .table-avg {
  font-size: 16px;
  color: rgb(15, 67, 73);
}
.item-table-td .table-winrate {
  font-size: 14px;
}
.item-table-td .table-frequency {
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
