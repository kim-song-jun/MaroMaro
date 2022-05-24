<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="navbar-brand">MaroMaro</div>
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
            <div to="/" class="nav-link active" aria-current="page">Home</div>
          </li>
          <li class="nav-item">
            <div to="/list" class="nav-link">List</div>
          </li>
          <li class="nav-item">
            <div to="/detail/0" class="nav-link">Detail</div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="align-items-center" style="margin-top: 250px">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <div class="card mb-2">
            <div class="card-body p-2">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control form-control-lg rounded"
                  placeholder="소환사 이름"
                  aria-label="소환사 이름"
                  aria-describedby="basic-addon2"
                  v-model="this.inputValue"
                />

                <button
                  type="button"
                  class="btn btn-warning"
                  style="margin-left: 10px; border-radius: 10%"
                  @click="this.onSearch"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
  data() {
    return {
      inputValue: this.name,
      nextStep: 1,
    };
  },
  methods: {
    onSearch() {
      if (this.inputValue.length > 0) {
        this.$emit('name', this.inputValue.trim());
        this.$emit('nextStep', this.nextStep);
      }
    },
  },
};
</script>

<style></style>
