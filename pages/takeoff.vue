<template >
<v-container fluid>
  <v-row dence>
    <v-col
      v-for="user in users"
      :key="user.id"
      :cols=4
    >
    
    <v-card hover=ture :color="user.state" :to="user.chart" class="text-center" nuxt=ture>
    <v-row dence>
      <v-col cols=12 ><v-card-title v-text="user.name" ></v-card-title></v-col>
      <v-col cols=6><v-icon x-large class="pa-1">{{user.icon}}</v-icon></v-col>
      <v-col cols=6>
      <v-card-text v-text="user.leaving">
      </v-card-text>
      </v-col>
      
      <!-- <v-col cols=6>
      <v-card-text v-text="user.bpm">
      </v-card-text>
      </v-col>
      <v-col cols=6>
      <v-card-text v-text="user.bodytempreture">
      </v-card-text>
      </v-col> -->
      </v-row>
    </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
export default {
  data (){
    return {
      users: [
        {
          id: '1',
          name: '101会津太郎',
          leaving: "離床時間"+'60'+"分",
          bpm: "心拍数"+'100'+"bpm",
          bodytempreture: "体温"+'36.2'+"度",
          chart: '/previousday',
          state: 'yellow',
          icon: 'mdi-airplane-takeoff'
        },
        {
          id: '4',
          name: '201森一樹',
          leaving: "離床時間"+'60'+"分",
          bpm: "心拍数"+'110'+"bpm",
          bodytempreture: "体温"+'36.9'+"度",
          chart: '',
          state: 'yellow',
          icon: 'mdi-airplane-takeoff'
        },
      ]
    }
  },
}
</script>