<template>
  <div class="filter2">
    <img
      v-for="item in items"
      :key="item"
      :id="item.name"
      class="filter-item-img unclicked"
      @click="changeBase(item)"
      :src="this.GetItem(item.id)"
      :alt="item.name"
    />
  </div>
</template>

<script>
import alldata from '../../assets/data.json';

export default {
  props: ['base'],
  data() {
    return {
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
      isClicked: 0,
    };
  },
  methods: {
    reset(base) {
      if (base == 0) {
        // console.log('reset');
        for (let item of this.items) {
          // console.log(item);
          if (this.isClicked === item.id) {
            const classList = document.getElementById(item.name).classList;
            classList.replace('clicked', 'unclicked');
          }
        }
      }
      this.isClicked = base;
    },
    changeBase(item) {
      const classList = document.getElementById(item.name).classList;
      const isExist = document.getElementsByClassName(
        'filter-item-img clicked'
      );

      if (isExist.length === 0) {
        //선택된 필터가 없는 경우
        this.isClicked = item.id;
        classList.replace('unclicked', 'clicked');
      } else {
        //선택된 필터가 이미 있는 경우

        //이미 선택된 것을 끄고 싶을 경우
        if (classList.contains('clicked')) {
          this.isClicked = 0;
          classList.replace('clicked', 'unclicked');
        } else {
          //다른 것을 선택한 경우
          //선택된 필터를 끄기
          isExist.item(0).classList.replace('clicked', 'unclicked');
          //선택한 필터 켜기
          this.isClicked = item.id;
          classList.replace('unclicked', 'clicked');
        }
      }
      // console.log(this.isClicked);
      this.$emit('base', this.isClicked);
    },
    GetItem(item) {
      // console.log(item);
      for (let j in alldata.items) {
        if (item == alldata.items[j].id) {
          return `https://raw.communitydragon.org/latest/game/${alldata.items[
            j
          ].icon
            .toLowerCase()
            .slice(0, -4)}.png`;
        }
      }
    },
  },
  updated() {
    this.reset(this.base);
  },
};
</script>

<style scoped>
.filter2 {
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
  display: flex;
}
.unclicked {
  color: black;
  border-radius: 10px;
  background-color: #faf8ec;
  border: 0.1px solid #c3936f;
  box-shadow: 4px 4px 0px 0 #c3936f, -5px -7px 1px 0 rgba(255, 255, 255, 0.3);
}
.clicked {
  color: black;
  border-radius: 10px;
  background-color: #faf8ec;
  border: 0.1px solid #eec9ad;
  box-shadow: inset 4px 4px 0px 0 #eec9ad,
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
