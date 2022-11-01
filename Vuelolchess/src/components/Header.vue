<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">MaroMaro</a>
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
          <li class="nav-item">
            <a href="/" class="nav-link active" aria-current="page">
              <!-- @click="this.pageChange" -->
              Home
            </a>
          </li>
          <li class="nav-item">
            <div class="nav-link">Comps</div>
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
              <li><a class="dropdown-item">Items</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item">Units</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item">Traits</a></li>
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

<style></style>
