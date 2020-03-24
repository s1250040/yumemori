<template>
  <v-layout>
    <v-flex class="text-center">
      <v-card hover="ture" to="/chart">

       <v-img
      class="white--text align-end"
      height="200px"
      src="~/assets/images/tanu.jpg"
    >
    </v-img>

          <v-card-title>
              201 森一樹さん
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