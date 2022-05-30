<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" @click="$emit('nextStep', this.nextStep)"
        >MaroMaro</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarScrollingDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Link</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="소환사 이름"
            :aria-label="`${name}`"
            v-model="this.inputValue"
          />
          <button class="btn btn-warning" type="submit" @click="this.onSearch">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  <MatchHistory
    v-for="item in this.MatchData"
    :key="item.key"
    :match="item"
    :ItemName = "ItemName"
    :ChampionName = "ChampionName"
  ></MatchHistory>
</template>

<script>
import MatchHistory from "./MatchHistory.vue";
export default {
  name: "resultpage",
  props: {
    name: String,
    UserData: Array,
    MatchData: Array,
    ItemName: Object,
    ChampionName: Object,
  },
  components: {
    MatchHistory,
  },
  data() {
    return {
      inputValue: this.name,
      nextStep: 0,
    };
  },
  methods: {
    onSearch() {
      if (this.inputValue.length > 0) {
        this.$emit("name", this.inputValue.trim());
      }
    },
  },
};
</script>

<style></style>
