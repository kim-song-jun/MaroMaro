<template>
  <div class="row-container">
    <div class="row-item" @click="this.onSearch">{{this.name2}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name2: "액정깨기장인",
      nextPage: 1 ,
    }
  },
  methods:{
    onSearch() {
      if (this.name2.length > 0) {
        this.emitter.emit('name', this.name2.trim());
        this.pageChange();
      }
    },
    pageChange(){
      this.emitter.emit('page',this.nextPage)
    },
  },
  mounted() {
    this.emitter.on('name',(e)=>{
      console.log(e)
      this.name2 = e;
      console.log(this.name2)
    })
  },
}
</script>

<style>

</style>