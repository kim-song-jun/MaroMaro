<template>
  <!-- <button @click="this.onSearch">name: {{ userName }}</button>
  <div>hello</div> -->
  <div class="app-container-userInfo">
    <div class="user-content" style="text-align: center">
      <img
        class="userInfo-icon"
        src="../assets/icon.webp"
        style="padding: 23%; padding-top: 30%"
      />
      <strong style="font-size: x-large">{{ this.userName }}</strong>
      <div>Gold III 30 LP</div>
      <div>Top 20.4% KR</div>
    </div>
    <div class="matches-content">
      <div class="userInfo-recentMatches-container">
        <div class="recent-content">
          <strong>Recent 20 Matches(Ranked)</strong>
        </div>
        <div class="recentMatches-content">
          <div
            class="recent-match-item"
            v-for="(item, index) in this.setRecentPlacement(this.userMatchData)"
            :key="index"
            :style="setStyleRecentMatches(item)"
          >
            {{ item }}
          </div>
        </div>
        <div class="matchesDetail-content">
          <div class="matches-detail-item">
            <h4>{{ this.checkTop4().top4 }}</h4>
            <h6>Top 4</h6>
          </div>
          <div class="matches-detail-item">
            <h4>{{ this.checkTop4().won }}</h4>
            <h6>Won</h6>
          </div>
          <div class="matches-detail-item">
            <h4>{{ this.checkTop4().steak }}</h4>
            <h6>Steak</h6>
          </div>
          <div class="matches-detail-item">
            <h4>+{{ this.checkTop4().LP }}</h4>
            <h6>LP</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="status-content"><Tabs></Tabs></div>
  </div>
</template>

<script>
import axios from 'axios';
import Tabs from './Tabs.vue';
import userMatchData from '../assets/UserMatchData.json';

export default {
  data() {
    return {
      nextPage: 1,
      userMatchData,
    };
  },
  props: {
    userName: String,
  },
  methods: {
    onSearch() {
      this.$emit('userName', true);
    },
    setRecentPlacement(data) {
      let placement = [];
      for (let i in data) {
        placement.push(data[i].placement);
        // console.log(i);
      }
      // console.log(placement.length);
      if (placement.length < 20) {
        let temp = 20 - placement.length;
        // console.log(temp);
        var i = 0;
        for (;;) {
          if (i >= temp) break;
          placement.push('-');
          // console.log(i);
          i++;
        }
      }
      return placement;
    },
    setStyleRecentMatches(item) {
      let styles = {
        gray: {
          border: 'solid 2px gray',
          color: 'gray',
        },
        wheat: {
          border: 'solid 2px wheat',
          color: 'wheat',
        },
        lightskyblue: {
          border: 'solid 2px lightskyblue',
          color: 'lightskyblue',
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
      for (let i in this.userMatchData) {
        if (this.userMatchData[i].placement < 5) {
          result.top4++;
        }
        if (this.userMatchData[i].placement == 1) {
          result.won++;
        }
        // if (i < this.userMatchData.length - 2) {
        //   if (i == 0 && this.userMatchData[i].placement < 5) {
        //     result.steak = 1;
        //   }
        //   if (
        //     this.userMatchData[i].placement < 5 &&
        //     this.userMatchData[i + 1].placement
        //   ) {
        //     result.steak++;
        //   } else {
        //     result.steak = 0;
        //   }
        // }
        result.LP = result.LP + this.userMatchData[i].placement;
      }
      return result;
    },
    More(name) {
      axios
        .get(
          // KR_11232322
          `/GetMatchHistroy/${name}`
        )
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(result);
          return result.data;
        })
        .catch(() => {
          console.log('error');
        });
    },
  },
  components: { Tabs },
};
</script>

<style>
.userInfo-recentMatches-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  grid-template-areas:
    'recent recent'
    'recentMatches matchesDetail';
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
  border: solid wheat 3px;
  background-color: wheat;
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
    'user matches'
    'user status';
  align-items: stretch;
}
.user-content {
  grid-area: user;
  padding: 3%;
  border: solid 10px white;
  background-color: whitesmoke;
  border-radius: 20% 20% 20% 20% / 15% 15% 15% 15%;
}
.matches-content {
  grid-area: matches;
  padding: 3%;
  border: solid 10px white;
  background-color: whitesmoke;
  border-radius: 5% 5% 5% 5% / 20% 20% 20% 20%;
}
.status-content {
  grid-area: status;
  padding: 3%;
  border: solid 10px white;
  background-color: whitesmoke;
  border-radius: 5% 5% 5% 5% / 20% 20% 20% 20%;
}
.userInfo-icon {
  background-image: url('../assets/gold_base2.webp');
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 50%;
}
</style>
