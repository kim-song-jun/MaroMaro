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
            <div class="nav-link active" aria-current="page" @click="this.pageChange"> Home</div>
          </li>
          <li class="nav-item">
            <div class="nav-link">List</div>
          </li>
          <li class="nav-item">
            <div class="nav-link">Detail</div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" >Action</a></li>
              <li><a class="dropdown-item" >Another action</a></li>
              <li><a class="dropdown-item" >Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return {inputValue:''}
  },
  methods:{
      pageChange(){
      this.emitter.emit('page',0)
    },
    onSearch() {
      if (this.inputValue.length > 0) {
        this.emitter.emit('name', this.inputValue.trim());
      }
    },
  }
}
</script>

<style>

</style>