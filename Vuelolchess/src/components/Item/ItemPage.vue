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
import Header from "../Header.vue";
import Filter from "../Filter/ItemFilterContainer.vue";
import ItemTable from "./ItemTable.vue";
import ItemApex from "./ItemApex.vue";
import ItemInfo from "./ItemInfo.vue";
import Footer from "../Footer.vue";

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
    };
  },
  methods: {
    showModal(modalOpen, id) {
      this.modalOpen = modalOpen;
      this.itemID = id;
    },
    reset() {
      console.log("reset");
      this.container = 0;
      this.$store.commit("SetItemFilterType", []);
      this.$store.commit("SetItemFilterBase", []);
      this.$store.dispatch("filterItems", this.$store.state.itemFilter);
    },
    changeContent(content) {
      this.container = content;
    },
    excute() {
      this.$store.dispatch("StatItem");
    },
  },
  created() {
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
    "header header header"
    "a filter b"
    "footer footer footer";
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
