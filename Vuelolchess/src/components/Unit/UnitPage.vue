<template>
  <UnitInfo
    v-if="modalOpen"
    @close="modalOpen = 0"
    :champName="this.champName"
  ></UnitInfo>
  <div class="unit_container">
    <div class="header-content">
      <Header></Header>
    </div>
    <div class="sidebar-a"></div>
    <div class="sidebar-b"></div>
    <div class="filter-content">
      <Filter @reset="reset" @content="changeContent"></Filter>
      <div class="unit-content">
        <UnitTable v-if="container === 0" @open="showModal"></UnitTable>
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
import tierUnit from '../../assets/tierUnit.json';

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
      tierUnit,
      newdata,
      modalOpen: 0,
      container: 0,
      champName: "",
    };
  },
  methods: {
    showModal(modalOpen, name) {
      this.modalOpen = modalOpen;
      this.champName = name;
    },
    reset() {
      console.log("reset");
      this.container = 0;
    },
    changeContent(content) {
      this.container = content;
    },
    GetChamp(champName) {
      var temp = {};
      for (let i = 0; i < this.newdata.setData[0].champions.length; i++) {
        let name = this.newdata.setData[0].champions[i].apiName.replace(
          / /g,
          ''
        );
        if (name === champName) temp = this.newdata.setData[0].champions[i];
      }
      return temp;
    },
    AddTraits() {
      for (let i = 0; i < this.tierUnit.units.length; i++) {
        this.GetChamp(this.tierUnit.units[i].ID);
        this.tierUnit.units[i].traits = this.GetChamp(
          this.tierUnit.units[i].ID
        ).traits;
      }
    },
    initTierUnits() {
      this.$store.commit('SetFilteredUnits', { ...this.tierUnit.units });
    },
    excute() {
      this.$store.commit('SetTierUnit', { ...this.tierUnit });
    },
  },
  created() {
    this.AddTraits();
    this.initTierUnits();
    this.excute();
  },
};
</script>

<style>
.unit_container {
  background-color: rgb(10, 10, 26);
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-items: stretch;
  grid-template-areas:
    "header header header"
    "a filter b"
    "footer footer footer";
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
  grid-area: a;
  /* border-right: 2px solid #dad0c2; */
}
.sidebar-b {
  grid-area: b;
  /* border-left: 2px solid #dad0c2; */
}
.modal-content {
  grid-area: modal;
  display: none;
}
.filter-content {
  grid-area: filter;
  height: 94%;
}
.unit-content {
}
</style>
