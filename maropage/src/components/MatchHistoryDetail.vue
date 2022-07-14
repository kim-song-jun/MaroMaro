<template>
<div class="col-container" style="  border-bottom: 1px solid rgb(185, 192, 199);">
  <div class="row-container detail-match-info"> 
    <div class="row-item detail-match-rank">Rank</div>
    <div class="row-item detail-match-summoner">Summoner</div>
    <div class="row-item detail-match-round">Round</div>
    <div class="row-item detail-match-alive">Alive</div>
    <div class="row-item detail-match-traits">Traits</div>
    <div class="row-item detail-match-units">Units</div>
    <div class="row-item detail-match-gold">LeftGold</div>
  </div>
  <div class="row-container detail-match-info-detail" v-for="i in 8" :key="i">
    <div class="row-item detail-match-rank"><strong>1</strong></div>
    <div class="row-container detail-match-summoner" style="justify-content: flex-start;">
      <img src="../assets/logo.png" class="row-item" style="width: 40%;">
      <div class="row-item" style="width: 15%; background-color: aquamarine;">P4</div>
      <div class="row-item" style="width: 60%; font-size: x-small;">삼시열다섯끼</div>
      </div>
    <div class="row-item detail-match-round">6-6</div>
    <div class="row-item detail-match-alive">35:52</div>
    <div class="row-container detail-match-traits" style="justify-content: flex-start; flex-flow: row wrap;">
      <img class="row-item" style="width: 16%" src="https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/augments/choiceui/celestialblessing3.tft_set6.png"/>
      <img class="row-item" style="width: 16%" src="https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/augments/choiceui/celestialblessing3.tft_set6.png"/>
      <img class="row-item" style="width: 16%" src="https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/augments/choiceui/celestialblessing3.tft_set6.png"/>
      <img class="row-item" style="width: 16%" src="https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/augments/choiceui/celestialblessing3.tft_set6.png"/>
      <img class="row-item" style="width: 16%" src="https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/augments/choiceui/celestialblessing3.tft_set6.png"/>
      <img class="row-item" style="width: 16%" src="https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/augments/choiceui/celestialblessing3.tft_set6.png"/>
      <img class="row-item" style="width: 16%" src="https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/augments/choiceui/celestialblessing3.tft_set6.png"/>
      <img class="row-item" style="width: 16%" src="https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/augments/choiceui/celestialblessing3.tft_set6.png"/>
    </div>
    
    <div class="row-container detail-match-units" style="justify-content: flex-start;">
      <div class="detail-match-arg">
        <img style="width:50%" class="col-item" src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_2_mystic.png" >
        <img style="width:50%" class="col-item" src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_2_mystic.png" >
        <img style="width:50%" class="col-item" src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_2_mystic.png" >
      </div>
      <div class="col-container detail-match-units-attribute" v-for="item in 9" :key="item">
        <div class="row-container">
          <img class="row-item detail-match-units-attribute-star" src="https://raw.communitydragon.org/latest/game/assets/ux/tft/notificationicons/silverstar.png">
          <img class="row-item detail-match-units-attribute-star" src="https://raw.communitydragon.org/latest/game/assets/ux/tft/notificationicons/silverstar.png">
        </div>
        <img class="row-item detail-match-units-attribute-img" src="https://raw.communitydragon.org/latest/game/assets/characters/ashe/hud/ashe_square.png">
        <div class="row-container">
          <img class="row-item detail-match-units-attribute-item" src="https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/death_blade.png"/>
        </div>
      </div>
    </div>
    <div class="row-item detail-match-gold">33</div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.detail-match-info {
  margin-top: 1%;
  width: 100%;
  border-left: 1px solid rgb(185, 192, 199);
  border-right: 1px solid rgb(185, 192, 199);
  background-color: rgb(185, 192, 199);
  font-size: small;
  text-align: center;
}
.detail-match-info-detail {
  width: 100%;
  border-left: 1px solid rgb(185, 192, 199);
  border-right: 1px solid rgb(185, 192, 199);
  font-size: small;
  text-align: center;
  padding: 5px;
}
.detail-match-rank {
  width: 6%;
}
.detail-match-summoner {
  width: 16%;
}
.detail-match-round {
  width: 6%;
}
.detail-match-alive {
  width: 6%;
}
.detail-match-traits {
  width: 20%;
}
.detail-match-arg {
  width: 10%;
  flex-direction: column;
  display: flex;
}
.detail-match-units {
  width: 38%;
  justify-content: flex-start;
  margin: 1%;
  align-items: baseline;
}
.detail-match-units-attribute {
  width: 8%;
  margin-left: 10px;
}
.detail-match-units-attribute-img {
  width: 100%;
  border-radius: 20%;
}
.detail-match-units-attribute-star {
  width: 40%;
  margin-bottom: 3px;
}
.detail-match-units-attribute-item {
  width: 33%;
  margin-top: 2px;
  margin-left: 1px;
  margin-right: 1px;
  border-radius: 40%;
}
.detail-match-gold {
  width: 6%;
}
</style>