<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand">MaroMaro</a>
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
          <l i class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              @click="this.pageChange"
              >Home</a
            >
          </l>
          <li class="nav-item">
            <a class="nav-link">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarScrollingDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item">Action</a></li>
              <li><a class="dropdown-item">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item">Something else here</a></li>
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
            v-model="this.inputValue"
          />
          <button @click="this.onSearch" class="btn btn-warning">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    pageChange() {
      this.emitter.emit('page', 0);
    },
    onSearch() {
      if (this.inputValue.length > 0) {
        this.$emit('inputValue2', this.inputValue);
        // this.pageChange();
      }
    },
  },
};
</script>

<style></style>
