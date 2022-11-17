import { createStore } from "vuex";
import axios from "axios";
// import TierUnit from './assets/tierUnit.json';
// import Newdata from './assets/newdata.json';

const store = createStore({
  state() {
    return {
      page: 0,
      name: "",
      matchData: [],
      matchData2: [],
      matchData3: [],
      matchData4: [],
      matchData5: [],
      tierDeck: [],
      filteredDecks: [],
      deckFilter: { rank: [], trait: [] },
      tierUnit: {},
      filteredUnits: [],
      unitFilter: { cost: [], trait: [] },
      items: [],
      filteredItems: [],
      itemFilter: { base: 0, type: [] },
      units: [],
    };
  },
  mutations: {
    SetUnits(state, inputValue) {
      state.page = inputValue;
    },
    SetPage(state, inputValue) {
      state.page = inputValue;
    },
    SetName(state, inputValue) {
      state.name = inputValue;
    },
    SetMatchData(state, inputValue) {
      state.matchData = inputValue;
    },
    SetMatchData2(state, inputValue) {
      state.matchData2 = inputValue;
    },
    SetMatchData3(state, inputValue) {
      state.SetMatchData3 = inputValue;
    },
    SetMatchData4(state, inputValue) {
      state.SetMatchData4 = inputValue;
    },
    SetMatchData5(state, inputValue) {
      state.SetMatchData5 = inputValue;
    },
    SetTierDeck(state, inputValue) {
      state.tierDeck = inputValue;
    },
    SetFilteredDecks(state, inputValue) {
      state.filteredDecks = inputValue;
    },
    SetDeckFilterRank(state, inputValue) {
      state.deckFilter.rank = inputValue;
    },
    SetDeckFilterTrait(state, inputValue) {
      state.deckFilter.trait = inputValue;
    },
    SetTierUnit(state, inputValue) {
      state.tierUnit = inputValue;
    },
    SetFilteredUnits(state, inputValue) {
      state.filteredUnits = inputValue;
    },
    SetUnitFilterCost(state, inputValue) {
      state.unitFilter.cost = inputValue;
    },
    SetUnitFilterTrait(state, inputValue) {
      state.unitFilter.trait = inputValue;
    },
    SetItems(state, inputValue) {
      state.items = inputValue;
    },
    SetFilteredItems(state, inputValue) {
      state.filteredItems = inputValue;
    },
    SetItemFilterBase(state, inputValue) {
      state.itemFilter.base = inputValue;
    },
    SetItemFilterType(state, inputValue) {
      state.itemFilter.type = inputValue;
    },
  },
  // ajax 요청 받는거
  actions: {
    GetMatchHistory(context, name) {
      console.log(`/GetMatchHistory/${name}`);
      axios
        .get(
          // name: 병그니, 액정깨기장인, ..
          `/GetMatchHistory/${name}`,
          {
            transformRequest: [
              (data, headers) => {
                delete headers.common["X-Requested-With"];
                return data;
              },
            ],
          }
        )
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(`GetMatchHistory: ${result.data}`);
          console.log(result.data);
          console.log(result);
          context.commit("SetMatchData5", result.data);
        })
        .catch((e) => {
          console.log("error-GetMatchhistory");
          console.log(e);
        });
    },
    // cafe24에서 데이터 가져오기
    GetMatchHistoryDev(context, name) {
      console.log(`https://yukmaro.cafe24.com/his/GetMatchHistory/${name}`);
      axios
        .get(
          // name: 병그니, 액정깨기장인, ..
          `/GetMatchHistory/${name}`,
          {
            transformRequest: [
              (data, headers) => {
                delete headers.common["X-Requested-With"];
                return data;
              },
            ],
          }
        )
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(`GetMatchHistory: ${result.data}`);
          console.log(result.data);
          console.log(result);
          context.commit("SetMatchData5", result.data);
        })
        .catch((e) => {
          console.log("error-GetMatchhistory");
          console.log(e);
        });
    },
    // Cafe24에서 UnitData 가져오기
    StatUnitDev(context) {
      console.log(`/stat/unit`);
      axios
        .get(`http://yukmaro.cafe24.com/stat/unit`, {
          transformRequest: [
            (data, headers) => {
              delete headers.common["X-Requested-With"];
              return data;
            },
          ],
        })
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(
            `/stat/unit : ${result.data.sort(function (a, b) {
              // averagePlacement 별로 오름차순 정렬
              if (a.averagePlacement > b.averagePlacement) return 1;
              if (a.averagePlacement < b.averagePlacement) return -1;

              // averagePlacement 내림차순 정렬된 상태에서 frequency별로 내림차순 정렬
              if (a.frequency > b.frequency) return -1;
              if (a.frequency < b.frequency) return 1;
            })}`
          );
          // let S = dataLength * 0.11; // 11%
          // let A = dataLength * 0.23; // 23%
          // let B = dataLength * 0.4; // 40%
          // let C = dataLength * 0.6; // 60%
          // let D = dataLength * 0.77; // 77%
          // let F = dataLength; // 100%

          context.commit("SetUnits", result.data);
        })
        .catch((e) => {
          console.log("error-SetUnits");
          console.log(e);
        });
    },
    // Cafe24에서 UnitData 가져오기
    StatItemDev(context) {
      console.log(`/stat/item`);
      axios
        .get(`http://yukmaro.cafe24.com/stat/item`, {
          transformRequest: [
            (data, headers) => {
              delete headers.common["X-Requested-With"];
              return data;
            },
          ],
        })
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(
            `/stat/item : ${result.data.sort(function (a, b) {
              // averagePlacement 별로 오름차순 정렬
              if (a.averagePlacement > b.averagePlacement) return 1;
              if (a.averagePlacement < b.averagePlacement) return -1;

              // averagePlacement 내림차순 정렬된 상태에서 frequency별로 내림차순 정렬
              if (a.frequency > b.frequency) return -1;
              if (a.frequency < b.frequency) return 1;
            })}`
          );
          // let S = dataLength * 0.11; // 11%
          // let A = dataLength * 0.23; // 23%
          // let B = dataLength * 0.4; // 40%
          // let C = dataLength * 0.6; // 60%
          // let D = dataLength * 0.77; // 77%
          // let F = dataLength; // 100%

          context.commit("SetItems", result.data);
        })
        .catch((e) => {
          console.log("error-SetItems");
          console.log(e);
        });
    },
    StatDeckDev(context) {
      console.log(`/stat/deck`);
      axios
        .get(`http://yukmaro.cafe24.com/stat/deck`, {
          transformRequest: [
            (data, headers) => {
              delete headers.common["X-Requested-With"];
              return data;
            },
          ],
        })
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(
            `/stat/deck : ${result.data.sort(function (a, b) {
              // averagePlacement 별로 오름차순 정렬
              if (a.averagePlacement > b.averagePlacement) return 1;
              if (a.averagePlacement < b.averagePlacement) return -1;

              // averagePlacement 내림차순 정렬된 상태에서 frequency별로 내림차순 정렬
              if (a.frequency > b.frequency) return -1;
              if (a.frequency < b.frequency) return 1;
            })}`
          );
          // let S = dataLength * 0.11; // 11%
          // let A = dataLength * 0.23; // 23%
          // let B = dataLength * 0.4; // 40%
          // let C = dataLength * 0.6; // 60%
          // let D = dataLength * 0.77; // 77%
          // let F = dataLength; // 100%

          context.commit("SetTierDeck", result.data);
        })
        .catch((e) => {
          console.log("error-SetTierDeck");
          console.log(e);
        });
    },
    initDecks(context, origin) {
      context.commit("SetFilteredDecks", origin);
    },
    filterDecks(context, filter) {
      this.dispatch("initDecks", this.state.tierDeck);
      this.dispatch("rankFilter", filter.rank);
      this.dispatch("DeckTraitsFilter", filter.trait);
    },
    rankFilter(context, ranks) {
      if (ranks.length == 0) {
        return;
      }
      let temp = [];
      for (let i = 0; i < ranks.length; i++) {
        temp = temp.concat(
          this.state.tierDeck.filter((deck) => deck.rank == ranks[i])
        );
      }
      this.commit("SetFilteredDecks", temp);
    },
    DeckTraitsFilter(context, traits) {
      if (traits.length === 0) {
        return;
      }
      for (let i = 0; i < traits.length; i++) {
        this.dispatch("DeckTraitFilter", traits[i]);
      }
    },
    DeckTraitFilter(context, trait) {
      let temp = this.state.filteredDecks.filter((deck) =>
        deck.mainDeckName.includes(trait)
      );
      context.commit("SetFilteredDecks", temp);
    },
    initUnits(context, origin) {
      context.commit("SetFilteredUnits", origin);
    },
    filterUnits(context, filter) {
      this.dispatch("initUnits", this.state.tierUnit.units);
      this.dispatch("costsFilter", filter.cost);
      this.dispatch("ChampTraitsFilter", filter.trait);
    },
    costsFilter(context, costs) {
      if (costs.length == 0) {
        return;
      }
      let temp = [];
      for (let i = 0; i < costs.length; i++) {
        temp = temp.concat(
          this.state.tierUnit.units.filter((unit) => unit.rarity == costs[i])
        );
      }
      this.commit("SetFilteredUnits", temp);
    },
    ChampTraitsFilter(context, traits) {
      if (traits.length === 0) {
        return;
      }
      for (let i = 0; i < traits.length; i++) {
        this.dispatch("ChampTraitFilter", traits[i]);
      }
    },
    ChampTraitFilter(context, trait) {
      let temp = this.state.filteredUnits.filter((unit) =>
        unit.traits.includes(trait)
      );
      context.commit("SetFilteredUnits", temp);
    },
    initItems(context, origin) {
      context.commit("SetFilteredItems", origin);
    },
    filterItems(context, filter) {
      this.dispatch("initItems", this.state.items);
      this.dispatch("typesFilter", filter.type);
      this.dispatch("baseFilter", filter.base);
    },
    baseFilter(context, base) {
      if (base == 0) {
        return;
      }
      context.commit(
        "SetFilteredItems",
        this.state.filteredItems.filter(
          (item) => item.from.includes(base) || item.id == base
        )
      );
    },
    typesFilter(context, types) {
      if (types.length === 0) {
        return;
      }
      let temp = [];
      for (let i in types) {
        temp = temp.concat(
          this.state.items.filter((item) => item.icon.includes(types[i]))
        );
      }
      this.commit("SetFilteredItems", temp);
    },
  },
});

export default store;
