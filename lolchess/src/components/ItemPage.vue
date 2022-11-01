<template>
  <div class="app_container">
    <div class="header-content">
      <Header></Header>
    </div>
    <div class="sidebar-a"></div>
    <div class="sidebar-b"></div>
    <div class="filter-content">
      <div>
        <span>Filter</span>
      </div>
      <div class="filter1">
        <button
          :class="[isClicked[0] === true ? 'clicked' : 'unclicked']"
          @click="changeState(0, $event)"
        >
          normal(일반)
        </button>
        <button
          :class="[isClicked[1] === true ? 'clicked' : 'unclicked']"
          @click="changeState(1, $event)"
        >
          emblem(상징)
        </button>
        <button
          :class="[isClicked[2] === true ? 'clicked' : 'unclicked']"
          @click="changeState(2, $event)"
        >
          ornn(오른)
        </button>
        <button
          :class="[isClicked[3] === true ? 'clicked' : 'unclicked']"
          @click="changeState(3, $event)"
        >
          radiant(찬란한)
        </button>
        <button
          :class="[isClicked[4] === true ? 'clicked' : 'unclicked']"
          @click="changeState(4, $event)"
        >
          shimmerscale(빛비늘)
        </button>
      </div>
      <div class="filter2">
        <img :src="bfsword[0].icon" alt="B.F. sword" />
        <img src="" alt="recurve bow" />
        <img src="" alt="needlessly large rod" />
        <img src="" alt="tear of the goddess" />
        <img src="" alt="chain vest" />
        <img src="" alt="negatron cloak" />
        <img src="" alt="giant's belt" />
        <img src="" alt="sparring gloves" />
      </div>
      <div class="item-content">
        <div class="container">
          <table>
            <thead>
              <th><div class="table_item">Item</div></th>
              <th><div class="table_tier">Tier</div></th>
              <th><div class="table_avg">Avg Place</div></th>
              <th><div class="table_winrate">Winrate</div></th>
              <th><div class="table_frequency">Frequency</div></th>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.name">
                <td>
                  <div class="table_item">
                    <div class="help-tip">
                      <img
                        :src="item.src"
                        alt="itemImg"
                        @mouseover="isHovering(item.name, $event)"
                      />
                      <p class="changingP">
                        {{ item.name }} <br />
                        X + Y <br />
                        <strong> +ap +hp </strong>
                      </p>
                    </div>
                    <div class="itemName">
                      {{ item.name }}
                    </div>
                  </div>
                </td>
                <td><div class="table_tier">S</div></td>
                <td><div class="table_avg">3.53</div></td>
                <td><div class="table_winrate">22.9%</div></td>
                <td><div class="table_frequency">24,258 (2.5%)</div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="footer-content">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

import itemData from "../assets/data.json";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isClicked: [true, false, false, false, false],
      items: [
        {
          name: "Zeke's Herald",
          src: "https://cdn.metatft.com/file/metatft/set7/items/17.png",
          about:
            "Combat start: Grant 30% Attack Speed to the holder and allies within 1 hex in the same row.​​[Aura item]",
        },
        {
          name: "Protector's Vow",
          src: "https://cdn.metatft.com/file/metatft/set7/items/45.png",
          about:
            "Grant 15 bonus starting Mana. Once per combat: At 50% Health, allies within 3 hexes gain a 20% maximum Health shield that lasts up to 2 seconds. Shielded allies gain 15 Armor and 15 Magic Resist for the rest of combat.​​[Aura item]",
        },
        {
          name: "Shroud of Stillness",
          src: "https://cdn.metatft.com/file/metatft/set7/items/59.png",
          about:
            "Combat start: Shoot a beam that increases the maximum Mana of affected enemies by 35% until they cast.[Unique - only 1 per champion]",
        },
        {
          name: "Sunfire Cape",
          src: "https://cdn.metatft.com/file/metatft/set7/items/57.png",
          about:
            "Grant 150 bonus Health. Every 2 seconds, an enemy within 2 hexes is burned for 10% of their maximum Health as true damage over 10 seconds, and reducing healing by 50% for the duration.[Unique - only 1 per champion]",
        },
        {
          name: "Hand Of Justice",
          src: "https://cdn.metatft.com/file/metatft/set7/items/49.png",
          about:
            "Grant 2 effects: +15 Attack Damage and +15 Ability Power.15% Omnivamp.Each round, randomly double 1 of these effects.",
        },
        {
          name: "Bloodthirster",
          src: "https://cdn.metatft.com/file/metatft/set7/items/16.png",
          about:
            "Grant 25% Omnivamp.Once per combat: At 40% Health, gain a 25% maximum Health shield that lasts up to 5 seconds.",
        },
        {
          name: "Zeke's Herald",
          src: "https://cdn.metatft.com/file/metatft/set7/items/17.png",
          about:
            "Combat start: Grant 30% Attack Speed to the holder and allies within 1 hex in the same row.​​[Aura item]",
        },
        {
          name: "Protector's Vow",
          src: "https://cdn.metatft.com/file/metatft/set7/items/45.png",
          about:
            "Grant 15 bonus starting Mana. Once per combat: At 50% Health, allies within 3 hexes gain a 20% maximum Health shield that lasts up to 2 seconds. Shielded allies gain 15 Armor and 15 Magic Resist for the rest of combat.​​[Aura item]",
        },
        {
          name: "Shroud of Stillness",
          src: "https://cdn.metatft.com/file/metatft/set7/items/59.png",
          about:
            "Combat start: Shoot a beam that increases the maximum Mana of affected enemies by 35% until they cast.[Unique - only 1 per champion]",
        },
        {
          name: "Sunfire Cape",
          src: "https://cdn.metatft.com/file/metatft/set7/items/57.png",
          about:
            "Grant 150 bonus Health. Every 2 seconds, an enemy within 2 hexes is burned for 10% of their maximum Health as true damage over 10 seconds, and reducing healing by 50% for the duration.[Unique - only 1 per champion]",
        },
        {
          name: "Hand Of Justice",
          src: "https://cdn.metatft.com/file/metatft/set7/items/49.png",
          about:
            "Grant 2 effects: +15 Attack Damage and +15 Ability Power.15% Omnivamp.Each round, randomly double 1 of these effects.",
        },
        {
          name: "Bloodthirster",
          src: "https://cdn.metatft.com/file/metatft/set7/items/16.png",
          about:
            "Grant 25% Omnivamp.Once per combat: At 40% Health, gain a 25% maximum Health shield that lasts up to 5 seconds.",
        },
        {
          name: "Zeke's Herald",
          src: "https://cdn.metatft.com/file/metatft/set7/items/17.png",
          about:
            "Combat start: Grant 30% Attack Speed to the holder and allies within 1 hex in the same row.​​[Aura item]",
        },
        {
          name: "Protector's Vow",
          src: "https://cdn.metatft.com/file/metatft/set7/items/45.png",
          about:
            "Grant 15 bonus starting Mana. Once per combat: At 50% Health, allies within 3 hexes gain a 20% maximum Health shield that lasts up to 2 seconds. Shielded allies gain 15 Armor and 15 Magic Resist for the rest of combat.​​[Aura item]",
        },
        {
          name: "Shroud of Stillness",
          src: "https://cdn.metatft.com/file/metatft/set7/items/59.png",
          about:
            "Combat start: Shoot a beam that increases the maximum Mana of affected enemies by 35% until they cast.[Unique - only 1 per champion]",
        },
        {
          name: "Sunfire Cape",
          src: "https://cdn.metatft.com/file/metatft/set7/items/57.png",
          about:
            "Grant 150 bonus Health. Every 2 seconds, an enemy within 2 hexes is burned for 10% of their maximum Health as true damage over 10 seconds, and reducing healing by 50% for the duration.[Unique - only 1 per champion]",
        },
        {
          name: "Hand Of Justice",
          src: "https://cdn.metatft.com/file/metatft/set7/items/49.png",
          about:
            "Grant 2 effects: +15 Attack Damage and +15 Ability Power.15% Omnivamp.Each round, randomly double 1 of these effects.",
        },
        {
          name: "Bloodthirster",
          src: "https://cdn.metatft.com/file/metatft/set7/items/16.png",
          about:
            "Grant 25% Omnivamp.Once per combat: At 40% Health, gain a 25% maximum Health shield that lasts up to 5 seconds.",
        },
        {
          name: "Zeke's Herald",
          src: "https://cdn.metatft.com/file/metatft/set7/items/17.png",
          about:
            "Combat start: Grant 30% Attack Speed to the holder and allies within 1 hex in the same row.​​[Aura item]",
        },
        {
          name: "Protector's Vow",
          src: "https://cdn.metatft.com/file/metatft/set7/items/45.png",
          about:
            "Grant 15 bonus starting Mana. Once per combat: At 50% Health, allies within 3 hexes gain a 20% maximum Health shield that lasts up to 2 seconds. Shielded allies gain 15 Armor and 15 Magic Resist for the rest of combat.​​[Aura item]",
        },
        {
          name: "Shroud of Stillness",
          src: "https://cdn.metatft.com/file/metatft/set7/items/59.png",
          about:
            "Combat start: Shoot a beam that increases the maximum Mana of affected enemies by 35% until they cast.[Unique - only 1 per champion]",
        },
        {
          name: "Sunfire Cape",
          src: "https://cdn.metatft.com/file/metatft/set7/items/57.png",
          about:
            "Grant 150 bonus Health. Every 2 seconds, an enemy within 2 hexes is burned for 10% of their maximum Health as true damage over 10 seconds, and reducing healing by 50% for the duration.[Unique - only 1 per champion]",
        },
        {
          name: "Hand Of Justice",
          src: "https://cdn.metatft.com/file/metatft/set7/items/49.png",
          about:
            "Grant 2 effects: +15 Attack Damage and +15 Ability Power.15% Omnivamp.Each round, randomly double 1 of these effects.",
        },
        {
          name: "Bloodthirster",
          src: "https://cdn.metatft.com/file/metatft/set7/items/16.png",
          about:
            "Grant 25% Omnivamp.Once per combat: At 40% Health, gain a 25% maximum Health shield that lasts up to 5 seconds.",
        },
      ],
    };
  },
  methods: {
    changeState(i) {
      if (this.isClicked[i] === true) {
        this.isClicked[i] = false;
      } else {
        this.isClicked[i] = true;
      }
    },
    isHovering(name) {
      console.log(name);
      // var target = document.getElementsByClassName('changingP');
      // target.style.content = name;
      document.documentElement.style.setProperty("--itemName", name);
    },
  },
  computed: {
    bfsword() {
      return itemData.items.filter((item) => {
        return item.name === "B.F. Sword" && item.id === -2;
      });
    },
  },
};
</script>

<style>
:root {
  --itemName: "bla";
}
.app_container {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-items: stretch;
  grid-template-areas:
    "header header header"
    "a filter b"
    "footer footer footer";
  height: 100vh;
  align-items: stretch;
}
.header-content {
  grid-area: header;
}
.footer-content {
  grid-area: footer;
  height: 30px;
}
.sidebar-a {
  grid-area: a;
}
.sidebar-b {
  grid-area: b;
}
.filter-content {
  grid-area: filter;
  background-color: white;
  height: 94%;
}
.filter1,
.filter2,
span {
  padding: 0.5rem 1.3rem;
  margin: 0.5rem 0rem;
}
span {
  font-size: 20px;
  color: black;
}
.filter1,
.filter2 {
  display: flex;
  justify-content: space-between;
}
.filter2 img {
  cursor: pointer;
}
.clicked {
  color: black;
  border-radius: 10px;
  background-color: white;
  /* background: linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0.22),
    rgba(255, 255, 255, 0.25)
  ); */
  border: none;
  box-shadow: 4px 4px 0px 0 rgba(0, 0, 0, 0.25),
    -5px -7px 1px 0 rgba(255, 255, 255, 0.3);
}
.unclicked {
  color: black;
  border-radius: 10px;
  background-color: white;
  border: none;
  box-shadow: inset 4px 4px 0px 0 rgba(0, 0, 0, 0.2),
    inset -1px -1px 7px 0 rgba(255, 255, 255, 0.5);
}
.item-content {
  background-color: rgb(42, 110, 112);
  padding: 0px 0px 20px;
}
.container {
  overflow: auto;
  height: 590px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
table {
  border-spacing: 0;
  width: 100%;
}
th,
td {
  padding: 0.4rem 0.6rem;
  border-bottom: 1px solid #313236;
  border-left: 0;
  border-right: 0;
  margin: 0;
}
th .table_item {
  min-width: 170px;
  max-width: 170px;
  text-align: left;
}
.table_tier {
  display: flex;
}
.table_frequency {
  text-align: right;
}
td .table_item {
  display: flex;
  align-items: center;
  cursor: pointer;
}
td .table_item img {
  margin: 0px 5px 0px 0px;
  width: 32px;
  height: 32px;
}
td .table_tier {
  background-color: #ff7e83;
  color: #111;
  font-weight: 600;
  font-size: 18px;
  width: 28px;
  height: 28px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
}
td .table_avg {
  font-size: 16px;
  color: rgb(205, 246, 127);
}
td .table_winrate {
  font-size: 14px;
}
td .table_frequency {
  text-align: right;
  font-size: 14px;
}
.changinP {
  z-index: 3;
}
.help-tip {
  font-size: 14px;
  line-height: 26px;
}
.help-tip:hover p {
  display: block;
  transform-origin: 100% 0%;
  -webkit-animation: fadeIn 0.3s ease-in-out;
  animation: fadeIn 0.3s ease-in-out;
}
.help-tip p {
  display: none;
  text-align: left;
  background-color: #1e2021;
  padding: 10px;
  width: 150px;
  position: absolute;
  z-index: 1;
  /* left: -70px; */
  /* bottom: 30px; */
  left: 60px;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 13px;
  line-height: 1.4;
}
.help-tip p::before {
  position: absolute;
  content: var(--itemName);
  font-size: 10px;
  width: auto;
  height: 0;
  border: 6px solid transparent;
  border-bottom-color: #1e2021;
  top: -12px;
}
.help-tip strong {
  color: rgb(205, 246, 127);
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.6);
  }
  100% {
    opacity: 100%;
    transform: scale(1);
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
</style>
