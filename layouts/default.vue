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

<!-- カレンダーのアイコンのところ -->
      <v-btn icon center @click="showContent = !showContent" class="pa-6"><v-icon >mdi-calendar-month</v-icon></v-btn>
      

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
        <!-- モーダルウインドウ -->
        <div id = "overlay" v-if="showContent">
        <div id="content">
           <p><button id = "closeButton" v-on:click="closeModal">close</button></p>
       <full-calendar 
      @dateClick="handleDateClick" :plugins="calendarPlugins" 
      />
    </div>
      </div>
       
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {

    return {
      showContent: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: '離床時間超過者',
          to: '/takeoff'
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
  },
   methods:{
    openModal: function(){
      this.showContent = true
    },
    closeModal: function(){
      this.showContent = false
    }
  }
}
</script>

<style>
#overlay{
  /*　要素を重ねた時の順番　*/
  z-index:1;

  /*　画面全体を覆う設定　*/
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  /*　画面の中央に要素を表示させる設定　*/
  display: flex;
  align-items: center;
  justify-content: center;

}
#content{
  z-index:2;
  width:50%;
  padding: 1em;
  background:#fff;
}

#closeButton {
  margin-top: 10px;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;/*ボタン色*/
  color: #FFF;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
}
#closeButton:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  border-bottom: none;/*線を消す*/
  outline:0;
}
#closeButton:hover {
  /*ボタンを押したとき*/
  background: #8ca3d4;/*ボタン色*/
}



</style>
