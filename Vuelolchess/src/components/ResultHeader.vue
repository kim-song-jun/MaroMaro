<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">MaroMaro</router-link>
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
            <router-link class="nav-link" to="/deck">Comps</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarScrollingDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Stats
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li>
                <router-link class="dropdown-item" to="/stats/items"
                  >Items</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link class="dropdown-item" to="/stats/units"
                  >Units</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="소환사 이름"
            v-model="this.inputValue"
          />
          <button class="btn btn-warning">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    onSearch() {
      if (this.inputValue.length > 0) {
        this.$store.commit("SetName", this.inputValue);
        this.$store.dispatch("GetMatchHistory", this.inputValue);
      }
    },
  },
};
</script>

<style></style>
