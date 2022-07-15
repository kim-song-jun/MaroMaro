<template>
  <button @click="this.onSearch">name: {{ userName }}</button>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      nextPage: 1,
    };
  },
  props: {
    userName: String,
  },
  methods: {
    onSearch() {
      this.$emit('userName', true);
    },
    More(name) {
      axios
        .get(
          // KR_11232322
          `/GetMatchHistroy/${name}`
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
