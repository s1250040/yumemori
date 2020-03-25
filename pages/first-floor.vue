<template >
  <v-layout>
    <v-flex class="text-center">
      <v-card hover="ture" to="/previousday" color="yellow" max-width="350">
       
          <v-card-title>
              101 千葉照子さん 
          </v-card-title>
          <v-card-subtitle>
             離席時間60分
          </v-card-subtitle>
          <v-card-actions>
          <v-card-text>
            100BPM：36.5
          </v-card-text>
          <v-btn
            color="primary"
            to="/preparation"
          >
            詳細
          </v-btn>
        </v-card-actions>

      </v-card>
      <v-card hover="ture" to="/preparation" color="#64FFDA" max-width="350">
          <v-card-title>
              102 山内智恵子さん 
          </v-card-title>
          <v-card-subtitle>
             離席時間0分
          </v-card-subtitle>
          <v-card-actions>
          <v-card-text>
            105BPM：36.0
          </v-card-text>
          <v-btn
            color="primary"
            to="/preparation"
          >
            詳細
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card hover="ture" to="/preparation" color="yellow" max-width="350">
          <v-card-title>
              103 宮内考子さん
          </v-card-title>
          <v-card-subtitle>
             離席時間25分
          </v-card-subtitle>
          <v-card-actions>
          <v-card-text>
            90BPM：36.2
          </v-card-text>
          <v-btn
            color="primary"
            to="/preparation"
          >
            詳細
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>