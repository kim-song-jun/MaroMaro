<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="First" active><p>I'm the first tab</p></b-tab>
      <b-tab title="Second"><p>I'm the second tab</p></b-tab>
      <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: 0,
    };
  },
  methods: {
    // ChangeTabs(tab) {
    //   if(tab == 1){
    //     return Active
    //   }
    // }
  },
};
</script>

<style></style>
