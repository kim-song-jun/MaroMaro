<template>
  <ItemInfo
    v-if="modalOpen"
    @close="modalOpen = 0"
    :itemID="this.itemID"
  ></ItemInfo>
  <div class="item_container">
    <div class="header-content">
      <Header></Header>
    </div>
    <div class="sidebar-a"></div>
    <div class="sidebar-b"></div>
    <div class="filter-content">
      <Filter @reset="reset" @content="changeContent"></Filter>
      <div class="item-content">
        <ItemTable v-if="container === 0" @open="showModal"></ItemTable>
        <ItemApex v-if="container === 1"></ItemApex>
      </div>
    </div>
    <div class="footer-content">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '../Header.vue';
import Filter from '../Filter/ItemFilterContainer.vue';
import ItemTable from './ItemTable.vue';
import ItemApex from './ItemApex.vue';
import ItemInfo from './ItemInfo.vue';
import Footer from '../Footer.vue';
import newdata from '../../assets/newdata.json';
import tierItem from '../../assets/tierItem.json';

export default {
  components: {
    Header,
    Footer,
    ItemTable,
    ItemApex,
    ItemInfo,
    Filter,
  },
  data() {
    return {
      modalOpen: 0,
      itemID: 0,
      container: 0,
      newdata,
      tierItem,
    };
  },
  methods: {
    showModal(modalOpen, id) {
      this.modalOpen = modalOpen;
      this.itemID = id;
    },
    reset() {
      console.log('reset');
    },
    changeContent(content) {
      this.container = content;
    },
    GetItems() {
      const temp = [];
      for (let j = 0; j < this.tierItem.items.length; j++) {
        for (let i = 0; i < this.newdata.items.length; i++) {
          if (this.tierItem.items[j].ID == this.newdata.items[i].id)
            temp.push(this.newdata.items[i]);
        }
      }
      return temp;
    },
    initItems() {
      this.$store.commit('SetFilteredItems', this.GetItems());
    },
    excute() {
      this.$store.commit('SetItems', this.GetItems());
    },
  },
  created() {
    this.initItems();
    this.excute();
  },
};
</script>

<style>
.item_container {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-items: stretch;
  grid-template-areas:
    'header header header'
    'a filter b'
    'footer footer footer';
  height: 100vh;
  align-items: stretch;
  background-color: rgb(10, 10, 26);
}
.header-content {
  grid-area: header;
}
.footer-content {
  grid-area: footer;
  height: 30px;
}
.sidebar-a {
  grid-area: a;
}
.sidebar-b {
  grid-area: b;
}
.filter-content {
  grid-area: filter;
  height: 94%;
}
.item-content {
  background-color: rgb(10, 10, 26);
  padding: 0px 0px 20px;
}
</style>
