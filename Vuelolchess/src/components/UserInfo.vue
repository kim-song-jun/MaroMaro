<template>
  <!-- <button @click="this.onSearch">name: {{ userName }}</button>
  <div>hello</div> -->
  <div class="app-container-userInfo">
    <div class="user-content" style="text-align: center">
      <img class="userInfo-icon" src="../assets/gold_base2.webp" />
      <div>
        <strong style="font-size: x-large; color: #f8f7f6">
          {{ $route.params.name }}
        </strong>
      </div>

      <div>
        {{ this.userInfo.tier }} {{ this.userInfo.tierDetail }}
        {{ this.userInfo.leaguePoint }}
      </div>
      <div>Top 20.4% KR</div>
    </div>
    <div class="matches-content">
      <div class="userInfo-recentMatches-container">
        <div class="recent-content">
          <strong style="color: #f8f7f6">Recent 20 Matches(Ranked)</strong>
        </div>
        <div class="recentMatches-content">
          <div
            class="recent-match-item"
            v-for="(item, index) in this.setRecentPlacement(
              $store.state.matchData
            )"
            :key="index"
            :style="setStyleRecentMatches(item)"
          >
            {{ item }}
          </div>
        </div>
        <div class="matchesDetail-content">
          <div class="matches-detail-item">
            <h4>{{ this.result.top4 }}</h4>
            <h6>Top 4</h6>
          </div>
          <div class="matches-detail-item">
            <h4>{{ this.result.won }}</h4>
            <h6>Won</h6>
          </div>
          <div class="matches-detail-item">
            <h4>{{ this.result.steak }}</h4>
            <h6>Steak</h6>
          </div>
          <div class="matches-detail-item">
            <h4>+{{ this.result.LP }}</h4>
            <h6>LP</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="status-content">
      <Tabs></Tabs>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Tabs from "./Tabs.vue";

export default {
  data() {
    return {
      nextPage: 1,
      result: {
        top4: 0,
        won: 0,
        steak: 1,
        LP: 0,
      },
      userInfo: {},
    };
  },
  props: {
    userName: String,
  },
  methods: {
    setRecentPlacement(data) {
      let placement = [];
      for (let i in data) {
        placement.push(data[i].placement);
      }
      if (placement.length < 20) {
        let temp = 20 - placement.length;
        var i = 0;
        for (;;) {
          if (i >= temp) break;
          placement.push("-");
          i++;
        }
      }
      this.checkTop4();
      return placement;
    },
    setStyleRecentMatches(item) {
      let styles = {
        gray: {
          border: "solid 2px gray",
          color: "gray",
        },
        wheat: {
          border: "solid 2px red",
          color: "red",
        },
        lightskyblue: {
          border: "solid 2px blue",
          color: "blue",
        },
      };
      if (item == 1) {
        return styles.wheat;
      } else if (item < 5) {
        return styles.lightskyblue;
      } else {
        return styles.gray;
      }
    },
    checkTop4() {
      let result = {
        top4: 0,
        won: 0,
        steak: 0,
        LP: 0,
      };
      let check = true;
      for (let i in this.$store.state.matchData) {
        if (this.$store.state.matchData[i].placement < 5) {
          result.top4++;
        }
        if (this.$store.state.matchData[i].placement == 1) {
          result.won++;
        }
        result.LP = result.LP + this.$store.state.matchData[i].placement;
        if (i < this.$store.state.matchData.length - 2 && check) {
          if (this.$store.state.matchData[i].placement < 5 && i == 0) {
            result.steak++;
          }
          if (
            this.$store.state.matchData[i].placement < 5 &&
            this.$store.state.matchData[Number(i) + 1].placement < 5
          ) {
            result.steak++;
          } else {
            check = false;
          }
        }
      }
      this.result = result;
    },
    GetUserInfo() {
      axios
        .get(
          // cafe24에서 데이터 가져오기
          `/${this.$route.params.name}`,
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
          console.log(result.data);
          this.userInfo = result.data;
        })
        .catch(() => {
          console.log("error-GetUserInfo");
        });
    },
  },
  components: { Tabs },
  created() {
    this.GetUserInfo();
  },
};
</script>

<style>
.userInfo-recentMatches-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  grid-template-areas:
    "recent recent"
    "recentMatches matchesDetail";
  align-items: stretch;
}

.recent-content {
  grid-area: recent;
}

.recentMatches-content {
  grid-area: recentMatches;
}

.matchesDetail-content {
  grid-area: matchesDetail;
  margin-left: 4%;
}

.recent-match-item {
  text-align: center;
  border: solid 2px red;
  color: red;
  border-radius: 30%;
  width: 8%;
  display: inline-block;
  /* height: 120 */
  margin: 1%;
}

.matches-detail-item {
  text-align: center;
  border: solid rgb(11, 8, 68) 3px;
  background-color: rgb(11, 8, 68);
  width: 23%;
  display: inline-block;
  height: 100%;
  margin-left: 1%;
  margin-right: 1%;
  border-radius: 10%;
  padding-top: 1%;
}

.app-container-userInfo {
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-items: stretch;
  grid-template-areas:
    "user matches"
    "user status";
  align-items: stretch;
  background-color: rgb(10, 10, 26);
}

.user-content {
  grid-area: user;
  padding: 3%;
  border: solid 10px rgb(10, 10, 26);
  background-color: rgb(10, 10, 26);
  border-radius: 20% 20% 20% 20% / 15% 15% 15% 15%;
  color: #f8f7f6;
}

.matches-content {
  grid-area: matches;
  padding: 3%;
  border: solid 10px rgb(10, 10, 26);
  background-color: rgb(10, 10, 26);
  border-radius: 5% 5% 5% 5% / 20% 20% 20% 20%;
  color: #f8f7f6;
}

.status-content {
  grid-area: status;
  padding: 3%;
  border: solid 10px rgb(10, 10, 26);
  background-color: rgb(10, 10, 26);
  border-radius: 5% 5% 5% 5% / 20% 20% 20% 20%;
  color: #f8f7f6;
}

.userInfo-icon {
  background-image: url("../assets/icon2.png");
  background-size: 50%;
  background-repeat: no-repeat;
  border-radius: 50%;
  background-position: center center;
  object-fit: cover;
}
</style>
