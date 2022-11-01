<template>
  <div class="align-items-center" style="margin-block: 10%">
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
                  aria-describedby="basic-addon2"
                  v-model="this.inputValue"
                />
                <!-- aria-label="소환사 이름" -->
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
  data() {
    return {
      inputValue: "",
    };
  },
  props: {},
  methods: {
    onSearch() {
      if (this.inputValue.length > 0) {
        this.$store.commit("SetName", this.inputValue);
        this.$store.dispatch("GetMatchHistory", this.inputValue);
        this.$store.dispatch("GetMatchHistory2", this.inputValue);
        this.$store.dispatch("GetMatchHistory3", this.inputValue);
        this.$store.dispatch("GetMatchHistory4", this.inputValue);
        this.$store.dispatch("GetMatchHistory5", this.inputValue);
        // this.$store.commit("SetPage", 1);
        this.$router.push(`/result/${this.inputValue}`);
      }
    },
  },
};
</script>

<style></style>
