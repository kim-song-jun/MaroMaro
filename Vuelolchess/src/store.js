import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      page: 2,
      name: '',
      matchData: [],
      matchData2: [],
      matchData3: [],
      matchData4: [],
      matchData5: [],
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
  },
});

export default store;
