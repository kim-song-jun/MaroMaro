<template>
  <div class="my-tier">
    <div class="my-tier-main">
      <img src="../assets/logo.png" class="row-item my-tier-img">
      <div class="row-item my-tier-deck-name">
        <strong class="my-tier-deck-main">3 Ragewing, 3Guild,</strong>
        2 Tempest
      </div>
      <div class="row-item">button</div>
    </div>
    <div class="my-tier-main-info">
      <div class="my-tier-champions" style="margin-top: 10px;">
        <div class="my-tier-champion">
          <div class="my-tier-champion-stars">
            <img src="../assets/logo.png" class="my-tier-champion-star">
            <img src="../assets/logo.png" class="my-tier-champion-star">
            <img src="../assets/logo.png" class="my-tier-champion-star">
          </div>
          <img src="../assets/logo.png" class="my-tier-champion-img">
          <div class="my-tier-champion-name">2</div>
        </div>
      </div>
      <div class="row-item">
        <div class="col-container my-tier-APtext">
          <div class="col-item" style="white-space: nowrap;">
            Avg Place:
            <strong class="my-tier-Avg">4.14</strong>
          </div>
          <div class="col-item" style="white-space: nowrap;">
            Pick Rate:
            <strong class="my-tier-Pick">0.75</strong>
          </div>
        </div>
      </div>
      <div class="row-item my-tier-carries">
        <div class="col-container">
          <div class="row-container" style="justify-items: flex-start;">
            <img src="../assets/logo.png" class="my-tier-champion-img" style="width: 25%">
          </div>
        </div>
      </div>
      <div class="col-container my-tier-expands">
        <div class="col-item">button</div>
        <div class="col-item">button</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.my-tier{
  display: flex;
  /* display: inline-flex; */
  flex-direction: column;
}
.my-tier-main{
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.my-tier-img{
  width: 3%;
  justify-items: flex-start;
}
.my-tier-deck-name{

}
img{
  display: inline-block;
}
.my-tier-deck-main{
  justify-content: flex-start;
}
.my-tier-carries{
  widows: 30%;
}
.my-tier-champions{
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap; 
  justify-content: flex-start;
}
.my-tier-champion{
  display: inline-flex; 
  flex-direction: column;
  flex-basis: content
}
.my-tier-main-info{
  width: 100%;
  display: flex;
  /* display: inline-flex;  */
  flex-direction: row;
  flex-wrap: nowrap; 
  justify-content: flex-start;
  align-items: center;
}
.my-tier-champion-stars{
  width: 10%;
  display: flex;
  /* display: inline-flex; */
  flex-direction: row;
  justify-content: space-between;
  justify-self: center;
}
.my-tier-champion-star{
  width: 30%;
}
.my-tier-champion-img{
  width: 10%;
}
.my-tier-champion-name{
  text-align: center;
  width: 10%;
  font-size: small;
}
.my-tier-APtext{
  width: 30%;
}
.my-tier-Avg{
  width: 50%;
}
.my-tier-Pick{
  width: 50%;
}
.my-tier-item-img{
  width: 4%;
}
.my-tier-expands{
  width: 5%
}
.my-tier-expands-button{
  
}

</style>
