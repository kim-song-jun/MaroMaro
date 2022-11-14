<template>
  <div class="base-filter">
    <img
      v-for="(item, index) in items"
      :key="index"
      :class="baseChange(item.id)"
      @click="changeBase(item.id)"
      :src="this.GetItemUrl(item.id)"
      :alt="item.name"
    />
  </div>
</template>

<script>
import newdata from '../../assets/newdata.json';

export default {
  data() {
    return {
      newdata,
      items: [
        { name: 'swordFilter', id: 1 },
        { name: 'bowFilter', id: 2 },
        { name: 'rodFilter', id: 3 },
        { name: 'tearFilter', id: 4 },
        { name: 'vestFilter', id: 5 },
        { name: 'cloakFilter', id: 6 },
        { name: 'beltFilter', id: 7 },
        { name: 'glovesFilter', id: 9 },
        { name: 'spatula', id: 8 },
      ],
      baseItemID: 0,
    };
  },
  methods: {
    reset() {
      this.baseItemID = 0;
    },
    baseChange(id) {
      return this.baseItemID === id
        ? 'filter-item-img clicked'
        : 'filter-item-img unclicked-img';
    },
    changeBase(id) {
      if (id == this.baseItemID) {
        this.baseItemID = 0;
      } else {
        this.baseItemID = id;
      }
      this.$store.commit('SetItemFilterBase', this.baseItemID);
      this.$store.dispatch('filterItems', this.$store.state.itemFilter);
    },
    GetItemUrl(itemID) {
      for (let j in this.newdata.items) {
        if (itemID == this.newdata.items[j].id) {
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
  },
  mounted() {
    this.emitter.on('resetButton', this.reset);
  },
};
</script>

<style>
.base-filter {
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
  display: flex;
}
.unclicked-img {
  color: black;
  border-radius: 10px;
  background-color: #c3936f;
  border: 0.1px solid #c3936f;
  filter: grayscale(90%);
}
.clicked {
  color: #c3936f;
  border-radius: 10px;
  background-color: black;
  box-shadow: inset 4px 4px 0px 0 black,
    inset -1px -1px 7px 0 rgba(255, 255, 255, 0.5);
}
.filter-item-img {
  display: flex;
  margin-right: 10px;
  cursor: pointer;
  width: 50px;
  height: 50px;
}
</style>
