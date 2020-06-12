<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" />

      <v-btn icon to="/preparation" class="pa-6"><v-icon >mdi-calendar-month</v-icon></v-btn>

      <v-spacer></v-spacer>
      

       <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(memu, index) in memus"
          :key="index"
          :to="memu.to"
          nuxt=ture
        >
          <v-list-item-title>{{ memu.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>



    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: '離床時間超過者',
          to: '/test'
        },
        {
          icon: 'mdi-stairs-box',
          title: '1F',
          to: '/firstfloor'
        },
        {
          icon: 'mdi-stairs-box',
          title: '2F',
          to: '/secondfloor'
        }
      ],
      memus: [
          {
            icon: '',
            title: 'ログアウト',
            to: '/'
          }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '夢護'
    }
  }
}
</script>
