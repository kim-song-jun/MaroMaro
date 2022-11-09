<template>
  <div class="filter-container">
    <Header @reset="reset"></Header>
    <Content @content="changeContent"></Content>
    <Type></Type>
    <Base></Base>
  </div>
</template>

<script>
import Header from './FilterHeader.vue';
import Content from './ContentFilter.vue';
import Type from './ItemTypeFilter.vue';
import Base from './BaseItemFilter.vue';

export default {
  components: {
    Header,
    Content,
    Type,
    Base,
  },
  data() {
    return {};
  },
  methods: {
    reset() {
      this.$emit('reset');
    },
    changeContent(content) {
      this.$emit('content', content);
    },
  },
};
</script>

<style>
.filter-container {
  padding: 0.5rem;
}
</style>
