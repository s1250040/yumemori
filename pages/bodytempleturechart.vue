<template>
  <v-container fluid>
    <line-chart :height="155" :chart-data="chartData" :options="chartOptions"/>
  </v-container>
</template>

<script>
import colors from 'vuetify/es5/util/colors';

export default {
  data() {
    return {
      chartDataValues: [36.0,36.7,36.5],
      chartColor: [colors.red.lighten1],
      chartLabels: ['朝食時', '昼食時', '夜食時'],
      chartOptions: {
        title: {
        display: true,
        text: '体温'
        },
      },
      chartScals: {
        yAxes: [{
        ticks: {
        suggestedMax: 40,
        suggestedMin: 30,
        stepSize: 10,
        callback: function(value, index, values){
        return  value +  '度'
      }
    }
  }]
      }
    };
  },
  computed: {
    chartData() {
      return {
        datasets: [
          {
            data: this.chartDataValues,
            borderColor: this.chartColor,
            backgroundColor: this.chartbackground,
            scals: this.chartScals,
          },
        ],
        labels: this.chartLabels,
        
      };
    },
  },
};
</script>