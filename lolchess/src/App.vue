<template>
  <!-- <SearchPage
    v-if="pageChange == 0"
    @inputValue="this.userName = $event"
    @page="this.pageChange = $event"
  ></SearchPage>
  <ResultPage
    v-if="pageChange == 1"
    @inputValue="this.userName = $event"
    @page="this.pageChange = $event"
    :userName="this.userName"
    :matchData="this.More(this.userName)"
  ></ResultPage> -->
  <SearchPage v-if="$store.state.page == 0"></SearchPage>
  <ResultPage v-if="$store.state.page == 1"></ResultPage>
</template>

<script>
import SearchPage from "./components/SearchPage.vue";
import ResultPage from "./components/ResultPage.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      pageChange: 0,
      userName: "",
      matchData: [],
    };
  },
  props: {},
  components: {
    SearchPage,
    ResultPage,
  },
  methods: {
    // GetMatchData(name) {
    //   console.log("App-GetMatchData");
    //   this.More(name);
    //   return this.matchData;
    // },
    RefreshMatchData(bool) {
      if (bool == true) {
        this.GetMatchData(this.userName);
      }
      console.log(bool);
    },
    SearchByHeader(name) {
      this.userName = name;
    },
    More(name) {
      axios
        .get(`/GetMatchHistory/${name}`)
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(result);
          this.matchData = result.data;
          return this.matchData;
        })
        .catch((e) => {
          console.log(e.message);
        });
    },
  },
  mounted() {
    this.emitter.on("inputValue", (e) => {
      this.userName = e;
      console.log(e);
    });
    this.emitter.on("page", (e) => {
      this.pageChange = e;
      console.log(e);
    });
  },
};
</script>

<style></style>
