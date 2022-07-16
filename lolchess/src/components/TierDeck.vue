<template>
  <div class="my-tier">
    <div class="my-tier-main">
      <img src="../assets/logo.png" class="row-item my-tier-img" />
      <div class="row-item my-tier-deck-name">
        <strong class="my-tier-deck-main">3 Ragewing, 3Guild,</strong>
        2 Tempest
      </div>
      <div class="row-item" style="width: 30%; margin-left: auto">carries</div>
    </div>
    <div class="my-tier-main-info">
      <div class="my-tier-champions" style="margin-top: 10px">
        <div class="my-tier-champion" v-for="i in 8" :key="i">
          <div class="my-tier-champion-stars">
            <img
              src="../assets/logo.png"
              class="my-tier-champion-star"
              v-for="(item, index) in 3"
              :key="index"
            />
          </div>
          <img src="../assets/logo.png" class="my-tier-champion-img" />
          <div class="my-tier-champion-name">2</div>
        </div>
      </div>
      <div class="col-container my-tier-APtext" style="text-align: center">
        <div class="col-item" style="text-align: center; width: 100%">
          Avg Place:
          <strong class="my-tier-Avg">4.14</strong>
        </div>
        <div class="col-item" style="width: 100%; text-align: center">
          Pick Rate:
          <strong class="my-tier-Pick">0.75</strong>
        </div>
      </div>
      <div
        class="my-tier-carries"
        style="justify-items: flex-start; width: 30%"
      >
        <div
          class="my-tier-champion"
          style="width: 15%"
          v-for="i in 4"
          :key="i"
        >
          <img
            src="../assets/logo.png"
            class="my-tier-champion-img"
            style="width: 100%"
          />
          <div class="my-tier-champion-stars" style="width: 100%">
            <img src="../assets/logo.png" class="my-tier-champion-star" />
            <img src="../assets/logo.png" class="my-tier-champion-star" />
            <img src="../assets/logo.png" class="my-tier-champion-star" />
          </div>
        </div>
      </div>
      <div class="col-container my-tier-expands">
        <div class="col-item">b</div>
        <div class="col-item">b</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.my-tier {
  display: flex;
  /* display: inline-flex; */
  flex-direction: column;
}
.my-tier-main {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.my-tier-img {
  width: 3%;
  justify-items: flex-start;
}
.my-tier-deck-name {
}
img {
  display: inline-block;
}
.my-tier-deck-main {
  justify-content: flex-start;
}
.my-tier-carries {
  width: 30%;
}
.my-tier-champions {
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.my-tier-champion {
  display: inline-flex;
  flex-direction: column;
  flex-basis: auto;
  width: 12%;
  block-size: fit-content;
  margin-right: 5px;
  margin-left: 5px;
}
.my-tier-main-info {
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}
.my-tier-champion-stars {
  width: 100%;
  display: flex;
  /* display: inline-flex; */
  flex-direction: row;
  justify-content: space-between;
  justify-self: center;
  height: auto;
}
.my-tier-champion-star {
  width: 30%;
}
.my-tier-champion-img {
  width: 100%;
}
.my-tier-champion-name {
  text-align: center;
  width: 100%;
  font-size: small;
}
.my-tier-APtext {
  width: 30%;
  font-size: small;
  text-align: center;
}
.my-tier-Avg {
  width: 50%;
  text-align: center;
}
.my-tier-Pick {
  width: 50%;
  text-align: center;
}
.my-tier-item-img {
  width: 4%;
}
.my-tier-expands {
  width: 5%;
}
.my-tier-expands-button {
}
</style>
