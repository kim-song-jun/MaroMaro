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
                {{ this.inputValue.length }}
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
import axios from 'axios';
export default {
  data() {
    return {
      inputValue: '',
      nextPage: 1,
    };
  },
  props: {},
  methods: {
    onSearch() {
      if (this.inputValue.length > 0) {
        this.$emit('inputValue', this.inputValue);
        this.pageChange();
      }
    },
    pageChange() {
      this.emitter.emit('page', this.nextPage);
    },
    More(name) {
      axios
        .get(
          // name: 병그니, 액정깨기장인, ..
          `/GetMatchHistory/${name}`
        )
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(result);
          return result.data;
        })
        .catch(() => {
          console.log('error');
        });
    },
  },
};
</script>

<style></style>
