<template>
  <nav class="navbar navbar-expand-lg navbar-dark my-nav">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">MaroMaro</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item"></li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/deck">Comps</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link active dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Stats
            </a>
            <ul
              class="dropdown-menu disabled"
              aria-labelledby="navbarDropdownMenuLink"
            >
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
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    pageChange() {
      this.emitter.emit("page", 0);
    },
  },
};
</script>

<style scoped>
.my-nav {
  background-color: rgb(10, 10, 30);
}
</style>
