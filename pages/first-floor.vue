<template >
  <v-layout>
    <v-flex class="text-center">
      <v-card hover="ture" to="/chart" color="red" max-width="350">
       
          <v-card-title>
              101 千葉照子さん 100BPM/36.5
          </v-card-title>
          <v-card-actions>
          <!-- <v-spacer /> -->
          <v-btn
            color="primary"
            to="/details"
          >
            詳細情報
          </v-btn>
        </v-card-actions>

      </v-card>
      <v-card hover="ture" to="/inspire" color="#64FFDA" max-width="350">
          <v-card-title>
              102 山内智恵子さん 110BPM/36.0
          </v-card-title>
          <v-card-actions>
          <v-btn
            color="primary"
            to="/inspire"
          >
            詳細情報
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card hover="ture" to="/inspire" color="yellow" max-width="350">
          <v-card-title>
              103 宮内考子さん 90BPM/36.2
          </v-card-title>
          <v-card-actions>
          <v-btn
            color="primary"
            to="/inspire"
          >
            詳細情報
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>