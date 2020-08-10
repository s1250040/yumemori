<template>
  <section class="container">
    <div>      
      <v-app id="inspire">
        <v-data-table
          :headers="headers"
          :items="lists"
          :items-per-page="10"
          class="elevation-1"
        >
          <template v-slot:item.title="{ item }">
            <p class="font-weight-medium">{{ item.name }}</p>
          </template>
          <template v-slot:item.id="{ item }">
            <nuxt-link :to="`/users/${item.id}`">
              <v-chip :color="getColor(item.state)" dark></v-chip>
            </nuxt-link>
          </template>
          <template v-slot:item.completed="{ item }">
           {{ getFlg(item.completed) }}
          </template>
        </v-data-table>
      </v-app>
    </div>
  </section>
</template>
 
<script>
export default {
  data () {
    return {
      headers: [
        {
          text: '名前',
          align: 'left',
          sortable: false,
          value: 'title',
        },
        { text: 'state', value: 'id' },
        { text: 'メッセージ', value: 'completed' },
      ],
    }
  },
  methods: {
    getColor (state) {
      if (state == 0) return 'yellow'
      return '#64FFDA'
    },
    getFlg (flg) {      
      if (flg) return '完了'
      else return '未完了'
    },
  },
  async asyncData({ app }) {
    // const baseUrl = 'https://jsonplaceholder.typicode.com/todos/';
    const baseUrl = 'http://localhost:8080/users';
    const response = await app.$axios.$get(baseUrl);
    return { lists: response };
  }
}
</script>
 
<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
 
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
 
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
 
.links {
  padding-top: 15px;
}
</style>
 