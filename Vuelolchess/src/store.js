import { createStore } from 'vuex';
import axios from 'axios';
// import TierUnit from './assets/tierUnit.json';
// import Newdata from './assets/newdata.json';

const store = createStore({
  state() {
    return {
      page: 0,
      name: '',
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
    };
  },
  mutations: {
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
          `http://localhost:8659/GetMatchHistory/${name}`,
          {
            transformRequest: [
              (data, headers) => {
                delete headers.common['X-Requested-With'];
                return data;
              },
            ],
          }
        )
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(`GetMatchHistory8659: ${result.data}`);
          console.log(result.data);
          console.log(result);
          context.commit('SetMatchData', result.data);
        })
        .catch((e) => {
          console.log('error-GetMatchhistory8659');
          console.log(e);
        });
    },
    GetMatchHistory2(context, name) {
      console.log(`/GetMatchHistory/${name}`);
      axios
        .get(
          // name: 병그니, 액정깨기장인, ..
          `http://localhost:8660/GetMatchHistory/${name}`,
          {
            transformRequest: [
              (data, headers) => {
                delete headers.common['X-Requested-With'];
                return data;
              },
            ],
          }
        )
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(`GetMatchHistory8660: ${result.data}`);
          console.log(result.data);
          console.log(result);
          context.commit('SetMatchData2', result.data);
        })
        .catch((e) => {
          console.log('error-GetMatchhistory8660');
          console.log(e);
        });
    },
    GetMatchHistory3(context, name) {
      console.log(`/GetMatchHistory/${name}`);
      axios
        .get(
          // name: 병그니, 액정깨기장인, ..
          `http://localhost:8080/GetMatchHistory/${name}`,
          {
            transformRequest: [
              (data, headers) => {
                delete headers.common['X-Requested-With'];
                return data;
              },
            ],
          }
        )
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(`GetMatchHistory8080: ${result.data}`);
          console.log(result.data);
          console.log(result);
          context.commit('SetMatchData3', result.data);
        })
        .catch((e) => {
          console.log('error-GetMatchhistory8080');
          console.log(e);
        });
    },
    GetMatchHistory4(context, name) {
      console.log(`/GetMatchHistory/${name}`);
      axios
        .get(
          // name: 병그니, 액정깨기장인, ..
          `http://localhost/GetMatchHistory/${name}`,
          {
            transformRequest: [
              (data, headers) => {
                delete headers.common['X-Requested-With'];
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
          context.commit('SetMatchData4', result.data);
        })
        .catch((e) => {
          console.log('error-GetMatchhistory');
          console.log(e);
        });
    },
    GetMatchHistory5(context, name) {
      console.log(`/GetMatchHistory/${name}`);
      axios
        .get(
          // name: 병그니, 액정깨기장인, ..
          `/GetMatchHistory/${name}`,
          {
            transformRequest: [
              (data, headers) => {
                delete headers.common['X-Requested-With'];
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
          context.commit('SetMatchData5', result.data);
        })
        .catch((e) => {
          console.log('error-GetMatchhistory');
          console.log(e);
        });
    },
    initDecks(context, origin) {
      context.commit('SetFilteredDecks', origin);
    },
    filterDecks(context, filter) {
      this.dispatch('initDecks', this.state.tierDeck);
      this.dispatch('rankFilter', filter.rank);
      this.dispatch('DeckTraitsFilter', filter.trait);
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
      this.commit('SetFilteredDecks', temp);
    },
    DeckTraitsFilter(context, traits) {
      if (traits.length === 0) {
        return;
      }
      for (let i = 0; i < traits.length; i++) {
        this.dispatch('DeckTraitFilter', traits[i]);
      }
    },
    DeckTraitFilter(context, trait) {
      let temp = this.state.filteredDecks.filter((deck) =>
        deck.mainDeckName.includes(trait)
      );
      context.commit('SetFilteredDecks', temp);
    },
    initUnits(context, origin) {
      context.commit('SetFilteredUnits', origin);
    },
    filterUnits(context, filter) {
      this.dispatch('initUnits', this.state.tierUnit.units);
      this.dispatch('costsFilter', filter.cost);
      this.dispatch('ChampTraitsFilter', filter.trait);
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
      this.commit('SetFilteredUnits', temp);
    },
    ChampTraitsFilter(context, traits) {
      if (traits.length === 0) {
        return;
      }
      for (let i = 0; i < traits.length; i++) {
        this.dispatch('ChampTraitFilter', traits[i]);
      }
    },
    ChampTraitFilter(context, trait) {
      let temp = this.state.filteredUnits.filter((unit) =>
        unit.traits.includes(trait)
      );
      context.commit('SetFilteredUnits', temp);
    },
    initItems(context, origin) {
      context.commit('SetFilteredItems', origin);
    },
    filterItems(context, filter) {
      this.dispatch('initItems', this.state.items);
      this.dispatch('typesFilter', filter.type);
      this.dispatch('baseFilter', filter.base);
    },
    baseFilter(context, base) {
      if (base == 0) {
        return;
      }
      context.commit(
        'SetFilteredItems',
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
      this.commit('SetFilteredItems', temp);
    },
  },
});

export default store;
