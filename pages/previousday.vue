<template>
<v-row dense>

<v-col cols="3">
<v-card>
    <v-card-title>
        睡眠ステージの割合
    </v-card-title>
<doughnutchart/>
</v-card>
</v-col>

<v-col cols="9">
<v-card>
    <v-card-title>
        睡眠グラフ
    </v-card-title>
    <v-card-text>
        2018/12/12 
    </v-card-text>
<sleepstagechart/>
</v-card>
</v-col>
<v-col cols="6">
<v-card height>
<bodychart/>
</v-card>
</v-col>
<v-col cols="6">
<v-card>
<heartratechart/>
</v-card>
</v-col>
</v-row>
</template>

<script>
import sleepstagechart from '../components/sleepstage-chart';
import doughnutchart from '../components/doughnut-chart';
import heartratechart from './heartrate-chart';
import bodychart from './bodytempleturechart';

export default {
    components: {
        sleepstagechart,
        doughnutchart,
        heartratechart,
        bodychart,
    },
}
</script>