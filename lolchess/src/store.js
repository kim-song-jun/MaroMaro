import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      page: 0,
      name: "",
      matchData: [],
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
  },
  // ajax 요청 받는거
  actions: {
    GetMatchHistory(context, name) {
      axios
        .get(
          // name: 병그니, 액정깨기장인, ..
          `/GetMatchHistory/${name}`
        )
        .then((result) => {
          //요청 성공시 가져오는 코드
          context.commit("SetMatchData", result.data);
        })
        .catch(() => {
          console.log("error");
        });
    },
  },
});

export default store;
