<template>
  <div class="filter-container">
    <Header @reset="reset"></Header>
    <Content :content="content" @content="changeContent"></Content>
    <Type :type="type" @type="changeType"></Type>
    <Base :base="base" @base="changeBase"></Base>
    <!-- {{ `${content}, ${type}, ${base}` }} -->
  </div>
</template>

<script>
import Header from './FilterHeader.vue';
import Content from './ContentFilter.vue';
import Type from './ItemTypeFilter.vue';
import Base from './BaseItemFilter.vue';

export default {
  props: ['content', 'type', 'base'],
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
      // console.log('reset');
      this.$emit('reset');
    },
    changeContent(content) {
      // console.log(`fileter: ${content}`);
      this.$emit('content', content);
    },
    changeType(type) {
      // console.log(`fileter: ${content}`);
      this.$emit('type', type);
    },
    changeBase(itemID) {
      // console.log(`fileter: ${itemID}`);
      this.$emit('base', itemID);
    },
  },
};
</script>

<style scoped>
.filter-container {
  padding: 0.5rem;
}
</style>
