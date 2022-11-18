<template>
  <div id="chart">
    <apexchart
      type="scatter"
      height="350"
      :options="this.getChartOptions()"
      :series="this.getSeries()"
    ></apexchart>
  </div>
</template>

<script>
import { isFlowBaseAnnotation } from '@babel/types';
import VueApexCharts from 'vue3-apexcharts';
import newdata from '../../assets/newdata.json';
import tierUnit from '../../assets/tierUnit.json';
import realUnit from '../../assets/data/unit.json';

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      newdata,
      tierUnit,
      realUnit,
      series: [],
      chartOptions: {
        chart: {
          height: 350,
          type: 'scatter',
          animations: {
            enabled: isFlowBaseAnnotation,
          },
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ['#ffffff', '#ffffff'],
        xaxis: {
          tickAmount: 10,
          min: 0,
          labels: {
            formatter: function (val) {
              return val.toFixed(2);
            },
            style: {
              colors: '#ffffff',
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
        },
        yaxis: {
          tickAmount: 10,
          labels: {
            style: {
              colors: '#ffffff',
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
        },
        markers: {
          size: 15,
        },
        fill: {
          type: 'image',
          opacity: 1,
          image: {
            src: [],
            width: 30,
            height: 30,
          },
        },
        legend: {
          show: false,
          labels: {
            useSeriesColors: false,
          },
          markers: {
            customHTML: [
              function () {
                return '';
              },
              function () {
                return '';
              },
            ],
          },
        },
      },
    };
  },
  methods: {
    GetChampionUrl(championID) {
      // get url by champion ID
      // ex) TFT7_NomsyCannonee
      for (let i in this.newdata.setData) {
        for (let j in this.newdata.setData[i].champions) {
          if (this.newdata.setData[i].champions[j].apiName == championID) {
            let temp = this.newdata.setData[i].champions[j].icon
              .toLowerCase()
              .split('/');
            // console.log(temp);
            // let newUrl = temp.slice(0, -1);
            let newUrl2 = temp.slice(-1)[0].split('.');
            // console.log(newUrl);
            // console.log(newUrl2);
            if (newUrl2[0] == 'tft7_volibear') {
              return `https://raw.communitydragon.org/latest/game/assets/characters/${championID.toLowerCase()}/hud/${
                newUrl2[0]
              }_square.${newUrl2[1].slice(0, 8)}.png`;
            } else if (newUrl2[0] == 'tft7_zippy') {
              return `https://raw.communitydragon.org/latest/game/assets/characters/${championID.toLowerCase()}/hud/icons2d/${
                newUrl2[0]
              }_square.${newUrl2[1]}.png`;
            } else if (newUrl2[0] == 'tft7_dragongreen') {
              return `https://raw.communitydragon.org/latest/game/assets/characters/${championID.toLowerCase()}/hud/tft7_jadedragon_square.${newUrl2[1].slice(
                0,
                8
              )}.png`;
            } else {
              return `https://raw.communitydragon.org/latest/game/assets/characters/${championID.toLowerCase()}/hud/${
                newUrl2[0]
              }_square.${newUrl2[1]}.png`;
            }
          }
        }
      }
    },
    getSeries() {
      let units = this.$store.state.filteredUnits;
      let temp = [];
      for (let i in units) {
        for (let j in this.realUnit) {
          if (units[i].apiName == this.realUnit[j].championId) {
            let unit = { name: '', data: [] };
            unit.name = units[i].name;
            unit.data.push([
              this.realUnit[j].frequency,
              this.realUnit[j].averagePlacement,
            ]);
            temp.push(unit);
          }
        }
      }
      return temp;
    },
    getChartOptions() {
      let units = this.$store.state.filteredUnits;
      let option = { ...this.chartOptions };
      let temp = [];
      for (let i in units) {
        for (let j in this.realUnit) {
          if (units[i].apiName == this.realUnit[j].championId) {
            let url = this.GetChampionUrl(units[i].apiName);
            temp.push(url);
          }
        }
      }
      option.fill.image.src = temp;
      return option;
    },
  },
};
</script>

<style></style>
