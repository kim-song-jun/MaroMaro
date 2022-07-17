<template>
  <SearchPage
    v-if="pageChange == 0"
    @inputValue="this.userName = $event"
  ></SearchPage>
  <ResultPage
    v-if="pageChange == 1"
    @inputValue2="SearchByHeader($event)"
    :userName="this.userName"
    :matchData="GetMatchData(name)"
  ></ResultPage>
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
    GetMatchData(name) {
      console.log("App-GetMatchData");
      this.More(name);
    },
    RefreshMatchData(bool) {
      if (bool == true) {
        this.GetMatchData(this.userName);
      }
      console.log(bool);
    },
    SearchByHeader(name) {
      this.pageChange = 1;
      this.userName = name;
    },
    More(name) {
      axios
        .get(
          // KR_11232322
          `/GetMatchHistory/${name}`
        )
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(result);
          this.matchData = result.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
  },
  mounted() {
    this.emitter.on("page", (e) => {
      this.pageChange = e;
      console.log(e);
    });
  },
};
</script>

<style></style>
