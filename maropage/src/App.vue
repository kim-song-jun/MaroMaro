<template>
  <SearchPage
    v-if="step == 0"
    :name="this.name"
    @name="search"
    @nextStep="nextStep"
  ></SearchPage>
  <ResultPage
    v-if="step == 1"
    :name="this.name"
    @name="search"
    @nextStep="nextStep"
  ></ResultPage>
  <!-- <router-view :name="this.name" @name="search"></router-view> -->
</template>

<script>
import ResultPage from './components/ResultPage.vue';
import SearchPage from './components/SearchPage.vue';
export default {
  name: 'App',
  data() {
    return {
      step: 0,
      name: '',
    };
  },
  components: { ResultPage, SearchPage },
  methods: {
    search(name) {
      this.name = name;
    },
    nextStep(next) {
      this.step = next;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
