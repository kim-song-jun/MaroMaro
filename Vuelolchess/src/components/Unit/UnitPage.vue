<template>
  <!-- <UnitInfo
    v-if="modalOpen"
    @close="modalOpen = 0"
    :champName="this.champName"
  ></UnitInfo> -->
  <div class="app_container">
    <div class="header-content">
      <Header></Header>
    </div>
    <UnitInfo
      class="modal-content"
      v-if="modalOpen"
      @close="modalOpen = 0"
      :champName="this.champName"
    ></UnitInfo>
    <div class="sidebar-a"></div>
    <div class="sidebar-b"></div>
    <div class="filter-content">
      <Filter
        :content="this.container"
        :cost="this.cost"
        :traits="this.traits"
        @reset="reset"
        @content="changeContent"
        @cost="changeCost"
        @traits="changeTrait"
      ></Filter>
      <div class="unit-content">
        <NewUnitTableVue></NewUnitTableVue>
        <UnitTable
          :cost="this.cost"
          :traits="this.traits"
          v-if="container === 0"
          @open="showModal"
        ></UnitTable>
        <UnitApex v-if="container === 1"></UnitApex>
      </div>
    </div>
    <div class="footer-content">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '../Header.vue';
import Filter from '../Filter/UnitFilterContainer.vue';
import UnitTable from './UnitTable.vue';
import UnitApex from './UnitApex.vue';
import UnitInfo from './UnitInfo.vue';
import Footer from '../Footer.vue';
import newdata from '../../assets/newdata.json';

export default {
  components: {
    Header,
    Filter,
    UnitTable,
    UnitApex,
    UnitInfo,
    Footer,
  },
  data() {
    return {
      newdata,
      modalOpen: 0,
      container: 0,
      champName: '',
      cost: [0, 0, 0, 0, 0],
      traits: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0,
      ],
    };
  },
  methods: {
    showModal(modalOpen, name) {
      this.modalOpen = modalOpen;
      this.champName = name;
      // console.log(`champName: ${this.champName}`);
    },
    reset() {
      console.log('reset');
      this.container = 0;
      this.cost = [0, 0, 0, 0, 0];
      this.traits = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0,
      ];
    },
    changeContent(content) {
      console.log(`content${content}`);
      this.container = content;
    },
    changeCost(cost) {
      console.log(`cost${cost}`);
      this.cost[cost - 1] = 1;
    },
    changeTrait(traits) {
      console.log(`traits${traits}`);
      this.traits = traits;
    },
  },
};
</script>

<style>
.app_container {
  background-color: #cdbba7;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-items: stretch;
  grid-template-areas:
    'header header header'
    'a modal b'
    'a filter b'
    'footer footer footer';
  height: 100vh;
  align-items: stretch;
}
.header-content {
  grid-area: header;
}
.footer-content {
  grid-area: footer;
}
.sidebar-a {
  background-color: #cdbba7;
  grid-area: a;
  /* border-right: 2px solid #dad0c2; */
}
.sidebar-b {
  background-color: #cdbba7;
  grid-area: b;
  /* border-left: 2px solid #dad0c2; */
}
.modal-content {
  grid-area: modal, filter;
}
.filter-content {
  grid-area: filter;
  background-color: #cdbba7;
  height: 94%;
}
.unit-content {
  background-color: #cdbba7;
  /* padding: 0px 0px 20px; */
}
</style>
