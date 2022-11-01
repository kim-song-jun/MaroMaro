<template>
  <div class="filter1">
    <button id="1cost" class="cost unclicked" @click="changeCost('1cost')">
      <img class="coin" src="../../assets/coin.png" alt="coin" />
      <span class="coin">1</span>
    </button>
    <button id="2cost" class="cost unclicked" @click="changeCost('2cost')">
      <img class="coin" src="../../assets/coin.png" alt="coin" />
      <span class="coin">2</span>
    </button>
    <button id="3cost" class="cost unclicked" @click="changeCost('3cost')">
      <img class="coin" src="../../assets/coin.png" alt="coin" />
      <span class="coin">3</span>
    </button>
    <button id="4cost" class="cost unclicked" @click="changeCost('4cost')">
      <img class="coin" src="../../assets/coin.png" alt="coin" />
      <span class="coin">4</span>
    </button>
    <button id="5cost" class="cost unclicked" @click="changeCost('5cost')">
      <img class="coin" src="../../assets/coin.png" alt="coin" />
      <span class="coin">5</span>
    </button>
  </div>
</template>

<script>
export default {
  props: ['cost'],
  data() {
    return {
      isClicked: [0, 0, 0, 0, 0],
    };
  },
  methods: {
    reset() {
      for (let i = 0; i < this.isClicked.length; i++) {
        // console.log(item);
        if (this.isClicked[i] === 1) {
          const classList = document.getElementById(`${i + 1}cost`).classList;
          classList.replace('clicked', 'unclicked');
        }
      }
      this.isClicked = this.cost;
    },
    idToIndex(id) {
      return Number(id[0]) - 1;
    },
    changeCost(id) {
      const classList = document.getElementById(id).classList;
      const index = this.idToIndex(id);

      //filter off
      if (classList.contains('clicked')) {
        this.isClicked[index] = 0;
        classList.replace('clicked', 'unclicked');
      } else {
        //filter on
        this.isClicked[index] = 1;
        classList.replace('unclicked', 'clicked');
      }
      this.$emit('cost', this.isClicked);
    },
  },
  updated() {
    this.reset();
  },
};
</script>

<style scoped>
.filter1 {
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.cost {
  display: flex;
  margin-right: 10px;
}
.coin {
  display: flex;
  width: 20px;
  height: 20px;
  margin: 0.1rem 0rem;
  padding: 0.2rem 0rem 0.1rem;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.unclicked {
  color: black;
  border-radius: 10px;
  background-color: #faf8ec;
  border: 0.1px solid #c3936f;
  box-shadow: 4px 4px 0px 0 #c3936f, -5px -7px 1px 0 rgba(255, 255, 255, 0.3);
}
.clicked {
  color: black;
  border-radius: 10px;
  background-color: #faf8ec;
  border: 0.1px solid #eec9ad;
  box-shadow: inset 4px 4px 0px 0 #eec9ad,
    inset -1px -1px 7px 0 rgba(255, 255, 255, 0.5);
}
</style>
