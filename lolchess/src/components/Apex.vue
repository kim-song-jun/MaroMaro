<template>
  <div id="chart">
    <apexchart
      type="scatter"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import { isFlowBaseAnnotation } from '@babel/types';
import VueApexCharts from 'vue3-apexcharts';
export default {
  name: 'apex',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [
        {
          name: 'item1',
          data: [[16.4, 3.2]],
        },
        {
          name: 'item2',
          data: [[6.4, 5.4]],
        },
      ],
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
            src: [
              'https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft6_amumu_mobile.tft_set6.png',
              'https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft6_amumu_mobile.tft_set6.png',
            ],
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
};
</script>

<style></style>
