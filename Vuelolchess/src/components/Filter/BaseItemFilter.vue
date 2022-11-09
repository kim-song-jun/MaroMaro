<template>
  <div class="base-filter">
    <img
      v-for="item in items"
      :key="item"
      :id="item.name"
      class="filter-item-img unclicked-img"
      @click="changeBase(item)"
      :src="this.GetItem(item.id)"
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
      ],
      baseItemID: 0,
    };
  },
  methods: {
    reset(base) {
      if (base == 0) {
        for (let item of this.items) {
          if (this.baseItemID === item.id) {
            const classList = document.getElementById(item.name).classList;
            classList.replace('clicked', 'unclicked-img');
          }
        }
      }
      this.baseItemID = base;
    },
    changeBase(item) {
      const classList = document.getElementById(item.name).classList;
      const isExist = document.getElementsByClassName(
        'filter-item-img clicked'
      );

      if (isExist.length === 0) {
        this.baseItemID = item.id;
        classList.replace('unclicked-img', 'clicked');
      } else {
        if (classList.contains('clicked')) {
          this.baseItemID = 0;
          classList.replace('clicked', 'unclicked-img');
        } else {
          isExist.item(0).classList.replace('clicked', 'unclicked-img');
          this.baseItemID = item.id;
          classList.replace('unclicked-img', 'clicked');
        }
      }
    },
    GetItem(item) {
      for (let j in this.newdata.items) {
        if (item == this.newdata.items[j].id) {
          return `https://raw.communitydragon.org/latest/game/${this.newdata.items[
            j
          ].icon
            .toLowerCase()
            .slice(0, -4)}.png`;
        }
      }
    },
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
