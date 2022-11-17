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
// import tierItem from '../../assets/tierItem.json';
import realItem from '../../assets/data/item.json';

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      newdata,
      // tierItem,
      realItem,
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
        colors: ['#056BF6', '#D2376A'],
        xaxis: {
          tickAmount: 10,
          min: 0,
          max: 40,
        },
        yaxis: {
          tickAmount: 10,
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
    GetItemUrl(item) {
      for (let j in this.newdata.items) {
        if (item == this.newdata.items[j].id) {
          let temp = this.newdata.items[j].icon
            .toLowerCase()
            .split('.')
            .slice(0, -1);
          return `https://raw.communitydragon.org/latest/game/${temp.join(
            '.'
          )}.png`;
        }
      }
    },
    getSeries() {
      let items = this.$store.state.filteredItems;
      let temp = [];
      for (let i in items) {
        for (let j in this.realItem.items) {
          if (items[i].id == this.realItem.items[j].itemId) {
            let item = { name: '', data: [] };
            item.name = this.realItem.items[j].name;
            item.data.push([
              this.realItem.items[j].frequency,
              this.realItem.items[j].averagePlacement,
            ]);
            temp.push(item);
          }
        }
      }
      return temp;
    },
    getChartOptions() {
      let items = this.$store.state.filteredItems;
      let option = { ...this.chartOptions };
      let temp = [];
      for (let i in items) {
        for (let j in this.realItem.items) {
          if (items[i].id == this.realItem.items[j].itemId) {
            let url = this.GetItemUrl(this.realItem.items[j].itemId);
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
