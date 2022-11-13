<template>
  <div class="app_container_result">
    <div class="header-content">
      <ResultHeader></ResultHeader>
    </div>
    <div class="sidebar-a"></div>
    <div class="sidebar-b"></div>
    <div class="search-content">
      <UserInfo style="padding-top: 5%"></UserInfo>
    </div>
    <div class="card-content"></div>
    <div class="tier-content">
      <MatchHistory></MatchHistory>
    </div>
    <div class="footer-content">
      <div
        style="
          padding-top: 3%;
          padding-bottom: 3%;
          background-color: rgb(10, 10, 26);
        "
      >
        <nav
          class="pagination is-centered"
          role="navigation"
          aria-label="pagination"
        >
          <ul class="pagination-list">
            <li>
              <a
                class="pagination-link"
                aria-label="Goto page 1"
                style="color: white"
                >1</a
              >
            </li>
            <li><span class="pagination-ellipsis">&hellip;</span></li>
            <li>
              <a
                class="pagination-link"
                aria-label="Goto page 45"
                style="color: white"
                >45</a
              >
            </li>
            <li>
              <a
                class="pagination-link is-current"
                aria-label="Page 46"
                aria-current="page"
                >46</a
              >
            </li>
            <li>
              <a
                class="pagination-link"
                aria-label="Goto page 47"
                style="color: white"
                >47</a
              >
            </li>
            <li><span class="pagination-ellipsis">&hellip;</span></li>
            <li>
              <a
                class="pagination-link"
                aria-label="Goto page 86"
                style="color: white"
                >86</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import ResultHeader from "./ResultHeader.vue";
import Footer from "./Footer.vue";
import MatchHistory from "./MatchHistory.vue";
import UserInfo from "./UserInfo.vue";
export default {
  name: "resultpage",
  props: {
    userName: String,
    matchData: Array,
  },
  components: {
    ResultHeader,
    Footer,
    MatchHistory,
    UserInfo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.app_container_result {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-items: stretch;
  grid-template-areas:
    "header header header"
    "a search b"
    "a card b"
    "a tier b"
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
  background-color: rgb(10, 10, 26);
}
.sidebar-a {
  grid-area: a;
  background-color: rgb(10, 10, 26);
}
.sidebar-b {
  grid-area: b;
  background-color: rgb(10, 10, 26);
}
.search-content {
  grid-area: search;
}
.card-content {
  grid-area: card;
}
.tier-content {
  grid-area: tier;
}
</style>
