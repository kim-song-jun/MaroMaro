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
        <button
          id="tableBtn"
          @click="changeTable('tableBtn', 'filter-change-button clicked')"
          class="filter-change-button clicked"
        >
          table
        </button>
        <button
          id="graphBtn"
          @click="changeTable('graphBtn', 'filter-change-button clicked')"
          class="filter-change-button unclicked"
        >
          graph
        </button>
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
        <img
          id="swordFilter"
          class="filter-item-img unclicked"
          @click="changeButton('swordFilter')"
          :src="this.GetItem(1)"
          alt="B.F. sword"
        />
        <img
          id="bowFilter"
          class="filter-item-img unclicked"
          @click="changeButton('bowFilter')"
          :src="this.GetItem(2)"
          alt="recurve bow"
        />
        <img
          id="rodFilter"
          class="filter-item-img unclicked"
          @click="changeButton('rodFilter')"
          :src="this.GetItem(3)"
          alt="needlessly large rod"
        />
        <img
          id="tearFilter"
          class="filter-item-img unclicked"
          @click="changeButton('tearFilter')"
          :src="this.GetItem(4)"
          alt="tear of the goddess"
        />
        <img
          id="vestFilter"
          class="filter-item-img unclicked"
          @click="changeButton('vestFilter')"
          :src="this.GetItem(5)"
          alt="chain vest"
        />
        <img
          id="cloakFilter"
          class="filter-item-img unclicked"
          @click="changeButton('cloakFilter')"
          :src="this.GetItem(6)"
          alt="negatron cloak"
        />
        <img
          id="beltFilter"
          class="filter-item-img unclicked"
          @click="changeButton('beltFilter')"
          :src="this.GetItem(7)"
          alt="giant's belt"
        />
        <img
          id="glovesFilter"
          class="filter-item-img unclicked"
          @click="changeButton('glovesFilter')"
          :src="this.GetItem(9)"
          alt="sparring gloves"
        />
      </div>
      <div class="item-content">
        <div v-if="container === 0" class="table-container">
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
                      <a><img :src="item.src" alt="itemImg" /></a>
                      <div class="tip-container">
                        <div class="tip-name-container">
                          <p class="tip-name">{{ item.name }}</p>
                        </div>
                        <p class="tip-detail">
                          <br />
                          <strong> +200ap +200hp </strong>
                          <img
                            :src="this.GetItem(1)"
                            alt="recipeitem1"
                            width="20px"
                            height="20px"
                          />
                          +
                          <img
                            :src="this.GetItem(7)"
                            alt="recipeitem2"
                            width="20px"
                            height="20px"
                          />
                        </p>
                      </div>
                    </div>
                    <div class="itemName">
                      <a>{{ item.name }}</a>
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
        <ItemApex v-if="container === 1"></ItemApex>
      </div>
    </div>
    <div class="footer-content">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import alldata from '../assets/data.json';

import Header from './Header.vue';
import Footer from './Footer.vue';
import ItemApex from './Item/ItemApex.vue';

export default {
  components: {
    Header,
    Footer,
    ItemApex,
  },
  data() {
    return {
      alldata,
      container: 0,
      isClicked: [true, false, false, false, false],
      items: [
        {
          name: "Zeke's Herald",
          src: 'https://cdn.metatft.com/file/metatft/set7/items/17.png',
          about:
            'Combat start: Grant 30% Attack Speed to the holder and allies within 1 hex in the same row.​​[Aura item]',
        },
        {
          name: "Protector's Vow",
          src: 'https://cdn.metatft.com/file/metatft/set7/items/45.png',
          about:
            'Grant 15 bonus starting Mana. Once per combat: At 50% Health, allies within 3 hexes gain a 20% maximum Health shield that lasts up to 2 seconds. Shielded allies gain 15 Armor and 15 Magic Resist for the rest of combat.​​[Aura item]',
        },
        {
          name: 'Shroud of Stillness',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/59.png',
          about:
            'Combat start: Shoot a beam that increases the maximum Mana of affected enemies by 35% until they cast.[Unique - only 1 per champion]',
        },
        {
          name: 'Sunfire Cape',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/57.png',
          about:
            'Grant 150 bonus Health. Every 2 seconds, an enemy within 2 hexes is burned for 10% of their maximum Health as true damage over 10 seconds, and reducing healing by 50% for the duration.[Unique - only 1 per champion]',
        },
        {
          name: 'Hand Of Justice',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/49.png',
          about:
            'Grant 2 effects: +15 Attack Damage and +15 Ability Power.15% Omnivamp.Each round, randomly double 1 of these effects.',
        },
        {
          name: 'Bloodthirster',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/16.png',
          about:
            'Grant 25% Omnivamp.Once per combat: At 40% Health, gain a 25% maximum Health shield that lasts up to 5 seconds.',
        },
        {
          name: "Zeke's Herald",
          src: 'https://cdn.metatft.com/file/metatft/set7/items/17.png',
          about:
            'Combat start: Grant 30% Attack Speed to the holder and allies within 1 hex in the same row.​​[Aura item]',
        },
        {
          name: "Protector's Vow",
          src: 'https://cdn.metatft.com/file/metatft/set7/items/45.png',
          about:
            'Grant 15 bonus starting Mana. Once per combat: At 50% Health, allies within 3 hexes gain a 20% maximum Health shield that lasts up to 2 seconds. Shielded allies gain 15 Armor and 15 Magic Resist for the rest of combat.​​[Aura item]',
        },
        {
          name: 'Shroud of Stillness',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/59.png',
          about:
            'Combat start: Shoot a beam that increases the maximum Mana of affected enemies by 35% until they cast.[Unique - only 1 per champion]',
        },
        {
          name: 'Sunfire Cape',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/57.png',
          about:
            'Grant 150 bonus Health. Every 2 seconds, an enemy within 2 hexes is burned for 10% of their maximum Health as true damage over 10 seconds, and reducing healing by 50% for the duration.[Unique - only 1 per champion]',
        },
        {
          name: 'Hand Of Justice',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/49.png',
          about:
            'Grant 2 effects: +15 Attack Damage and +15 Ability Power.15% Omnivamp.Each round, randomly double 1 of these effects.',
        },
        {
          name: 'Bloodthirster',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/16.png',
          about:
            'Grant 25% Omnivamp.Once per combat: At 40% Health, gain a 25% maximum Health shield that lasts up to 5 seconds.',
        },
        {
          name: "Zeke's Herald",
          src: 'https://cdn.metatft.com/file/metatft/set7/items/17.png',
          about:
            'Combat start: Grant 30% Attack Speed to the holder and allies within 1 hex in the same row.​​[Aura item]',
        },
        {
          name: "Protector's Vow",
          src: 'https://cdn.metatft.com/file/metatft/set7/items/45.png',
          about:
            'Grant 15 bonus starting Mana. Once per combat: At 50% Health, allies within 3 hexes gain a 20% maximum Health shield that lasts up to 2 seconds. Shielded allies gain 15 Armor and 15 Magic Resist for the rest of combat.​​[Aura item]',
        },
        {
          name: 'Shroud of Stillness',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/59.png',
          about:
            'Combat start: Shoot a beam that increases the maximum Mana of affected enemies by 35% until they cast.[Unique - only 1 per champion]',
        },
        {
          name: 'Sunfire Cape',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/57.png',
          about:
            'Grant 150 bonus Health. Every 2 seconds, an enemy within 2 hexes is burned for 10% of their maximum Health as true damage over 10 seconds, and reducing healing by 50% for the duration.[Unique - only 1 per champion]',
        },
        {
          name: 'Hand Of Justice',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/49.png',
          about:
            'Grant 2 effects: +15 Attack Damage and +15 Ability Power.15% Omnivamp.Each round, randomly double 1 of these effects.',
        },
        {
          name: 'Bloodthirster',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/16.png',
          about:
            'Grant 25% Omnivamp.Once per combat: At 40% Health, gain a 25% maximum Health shield that lasts up to 5 seconds.',
        },
        {
          name: "Zeke's Herald",
          src: 'https://cdn.metatft.com/file/metatft/set7/items/17.png',
          about:
            'Combat start: Grant 30% Attack Speed to the holder and allies within 1 hex in the same row.​​[Aura item]',
        },
        {
          name: "Protector's Vow",
          src: 'https://cdn.metatft.com/file/metatft/set7/items/45.png',
          about:
            'Grant 15 bonus starting Mana. Once per combat: At 50% Health, allies within 3 hexes gain a 20% maximum Health shield that lasts up to 2 seconds. Shielded allies gain 15 Armor and 15 Magic Resist for the rest of combat.​​[Aura item]',
        },
        {
          name: 'Shroud of Stillness',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/59.png',
          about:
            'Combat start: Shoot a beam that increases the maximum Mana of affected enemies by 35% until they cast.[Unique - only 1 per champion]',
        },
        {
          name: 'Sunfire Cape',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/57.png',
          about:
            'Grant 150 bonus Health. Every 2 seconds, an enemy within 2 hexes is burned for 10% of their maximum Health as true damage over 10 seconds, and reducing healing by 50% for the duration.[Unique - only 1 per champion]',
        },
        {
          name: 'Hand Of Justice',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/49.png',
          about:
            'Grant 2 effects: +15 Attack Damage and +15 Ability Power.15% Omnivamp.Each round, randomly double 1 of these effects.',
        },
        {
          name: 'Bloodthirster',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/16.png',
          about:
            'Grant 25% Omnivamp.Once per combat: At 40% Health, gain a 25% maximum Health shield that lasts up to 5 seconds.',
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
    changeTable(id, class_name) {
      const classList = document.getElementById(id).classList;
      const isExist = document.getElementsByClassName(class_name);
      //checked filter off
      isExist.item(0).classList.replace('clicked', 'unclicked');
      //checked filter on
      classList.replace('unclicked', 'clicked');
      if (id === 'tableBtn') this.container = 0;
      else this.container = 1;
    },
    changeButton(id) {
      const classList = document.getElementById(id).classList;
      const isExist = document.getElementsByClassName(
        'filter-item-img clicked'
      );
      if (isExist.length === 0) {
        //선택된 필터가 없는 경우
        classList.replace('unclicked', 'clicked');
      } else {
        //선택된 필터가 이미 있는 경우

        //이미 선택된 것을 끄고 싶을 경우
        if (classList.contains('clicked')) {
          classList.replace('clicked', 'unclicked');
        } else {
          //다른 것을 선택한 경우
          //선택된 필터를 끄기
          isExist.item(0).classList.replace('clicked', 'unclicked');
          //선택한 필터 켜기
          classList.replace('unclicked', 'clicked');
        }
      }
    },
    GetItem(item) {
      // console.log(item);
      for (let j in this.alldata.items) {
        if (item == this.alldata.items[j].id) {
          return `https://raw.communitydragon.org/latest/game/${this.alldata.items[
            j
          ].icon
            .toLowerCase()
            .slice(0, -4)}.png`;
        }
      }
    },
  },
};
</script>

<style>
.app_container {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-items: stretch;
  grid-template-areas:
    'header header header'
    'a filter b'
    'footer footer footer';
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
  background-color: #faf8ec;
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
  margin-right: 10px;
}
.filter2 .filter-item-img {
  cursor: pointer;
  width: 50px;
  height: 50px;
}
.clicked {
  color: black;
  border-radius: 10px;
  background-color: #faf8ec;
  /* background: linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0.22),
    rgba(255, 255, 255, 0.25)
  ); */
  border: 0.1px solid #c3936f;
  box-shadow: 4px 4px 0px 0 #c3936f, -5px -7px 1px 0 rgba(255, 255, 255, 0.3);
}
.unclicked {
  color: black;
  border-radius: 10px;
  background-color: #faf8ec;
  border: 0.1px solid #eec9ad;
  box-shadow: inset 4px 4px 0px 0 #eec9ad,
    inset -1px -1px 7px 0 rgba(255, 255, 255, 0.5);
}
.item-content {
  background-color: rgb(172, 225, 227);
  padding: 0px 0px 20px;
}
.table-container {
  overflow: auto;
  height: 590px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.table-container::-webkit-scrollbar {
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
  color: rgb(15, 67, 73);
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
.help-tip .tip-container {
  position: relative;
  top: -70px;
  left: 40px;
}
.help-tip .tip-name-container {
  position: relative;
  top: -3px;
  left: 5px;
}
.help-tip {
  font-size: 14px;
  line-height: 26px;
}
.help-tip:hover .tip-detail,
.help-tip:hover .tip-name {
  display: block;
  transform-origin: 100% 0%;
  -webkit-animation: fadeIn 0.3s ease-in-out;
  animation: fadeIn 0.3s ease-in-out;
}
.help-tip .tip-detail,
.help-tip .tip-name {
  display: none;
  text-align: left;
  background-color: #1e2021;
  padding: 10px;
  width: 150px;
  position: absolute;
  z-index: 1;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 13px;
  line-height: 1;
}
.help-tip .tip-detail::before {
  position: absolute;
  content: '';
  font-size: 10px;
  width: auto;
  height: 0;
  border: 6px solid transparent;
  border-bottom-color: #1e2021;
  top: 40px;
  left: -12px;
  rotate: -90deg;
}
.help-tip .tip-detail img {
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  border-radius: 50%;
}
.help-tip strong {
  color: rgb(31, 132, 144);
}
.help-tip .tip-name {
  font-size: 8px;
  width: auto;
  white-space: nowrap;
  position: absolute;
  z-index: 2;
  padding: 5px;
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
.filter-change-button {
  margin-right: 10px;
}
</style>
