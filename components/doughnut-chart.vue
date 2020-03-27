<template>
  <v-container fluid>
    <doughnut-chart :chart-data="chartData" :options="chartOptions"/>

  </v-container>
</template>

<script>
import colors from 'vuetify/es5/util/colors';

export default {
  data() {
    return {
      chartDataValues: [1.1,9.1,14.2,22.4,53.2],
      chartColors: [
        colors.red.lighten1,
        colors.yellow.lighten2,
        colors.green.lighten4,
        colors.green.lighten3,
        colors.blue.lighten4,
      ],
      chartLabels: ['覚醒','レム','浅い睡眠','少し浅い睡眠','深い睡眠'],
      chartOptions: {
        maintainAspectRatio: false,
        animation: {
          duration: 1500,
          easing: 'easeInOutCubic',
        },
      },
    };
  },
  computed: {
    chartData() {
      return {
        datasets: [
          {
            data: this.chartDataValues,
            backgroundColor: this.chartColors,
          },
        ],
        labels: this.chartLabels,
      };
    },
  },
};
</script>