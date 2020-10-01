<template>
  <v-container>
    <!-- カレンダーアイコン -->
    <v-btn icon center @click="showCalendar = !showCalendar" class="pa-6">
      <v-icon>mdi-calendar-month</v-icon>
    </v-btn>
    <toggle-button
      @change="changeDisplay = !changeDisplay"
      :labels="{checked: ' ', unchecked: ' '}"
    />
    <v-btn @click="showForm=!showForm" id="form_button">
      入力画面
    </v-btn>
    <div v-if="changeDisplay">
       <v-col> 
    <v-card id="main_panel" raised color="#90ee90" v-for="item in data" :key="item.time">
      <div id="main">
      <v-row>
        <v-col>
          <div class="top">
            name
          </div>
        </v-col>
        <v-col>
         <div class="top">
            day
          </div>
        </v-col>
        <v-col id="input_time">
            入力時刻
            {{item.time}}
        </v-col>
      </v-row>
      <v-card outlined id="info_panel">
      <v-row>
        <v-card outlined class="small_card" color="#ffebcd">
        <v-col>
          <div class="title">
          収縮期血圧
          </div>
          <div class="data">
          <br>{{item.maxPressure}}
          </div>
          </v-col>
        </v-card>
        <v-card outlined class="small_card" color="#ffebcd">
        <v-col>
          <div class="title">
          拡張期血圧
          </div>
          <div class="data">
            <br>{{item.minPressure}}
          </div>
          </v-col>
        </v-card>
         <v-card outlined class="small_card" color="#ffebcd">
        <v-col>
          <div class="title">
          心拍数
          </div>
          <div class="data">
            <br>{{item.heart}}
          </div>
          </v-col>
        </v-card>
         <v-card outlined class="small_card" color="#ffebcd">
        <v-col>
          <div class="title">
          体温
          </div>
          <div class="data">
            <br>{{item.temp}}
          </div>
          </v-col>
        </v-card>
         <v-card outlined class="small_card" color="#ffebcd">
        <v-col>
          <div class="title">
          SpO2
          </div>
          <div class="data">
            <br>{{item.SpO2}}
          </div>
          </v-col>
        </v-card>
      </v-row>
      <v-row>
        <v-card outlined id="notes" color="#ffebcd">
          <div id="note_title">
            特記事項
          </div>
          <div id="note_text">
            {{item.note}}
          </div>
        </v-card>
      </v-row>
      </v-card>
      </div>
    </v-card>
     </v-col>

    </div>

    <div v-else>
      <v-row dense>
        <v-col cols="3">
          <v-card>
            <v-card-title>睡眠ステージの割合</v-card-title>
            <doughnutchart />
          </v-card>
        </v-col>

        <v-col cols="9">
          <v-card>
            <v-card-title>睡眠グラフ</v-card-title>
            <v-card-text>2018/12/12</v-card-text>
            <sleepstagechart />
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card height>
            <bodychart />
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <heartratechart />
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div id="overlay" v-if="showCalendar" >
      <div id="content">
        <p>
          <button id="closeButton" v-on:click="closeCalendar">close</button>
        </p>
        <full-calendar @dateClick="handleDateClick" :plugins="calendarPlugins"/>
        <!-- <full-calendar @dateClick="handleDateClick" :plugins="calendarPlugins" :hoge="calendarEvents"/> -->
      </div>
    </div>

     <div id="overlay" v-if="showForm" >
      <div id="content">
        <Form/>
        <p>
          <button id="closeButton" v-on:click="closeForm">close</button>
        </p>
      </div>
    </div>
  </v-container>
</template>

<script>
import sleepstagechart from "../components/sleepstage-chart";
import doughnutchart from "../components/doughnut-chart";
import heartratechart from "./heartrate-chart";
import bodychart from "./bodytempleturechart";
import Form from '../components/Form.vue';

export default {
  data() {
    return {
      showCalendar: false,
      changeDisplay: false,
      showForm: false,
     
      // calendarEvents: [
      //   {
      //     start: "2018-11-14",
      //     // end : "2018-11-14",
      //     rendering: 'background', 
      //   },
      // ],
       newMaxPressure: "",
      newMinPressure: "",
      newTemp: "",
      newHeart: "",
      newSpO2: "",
      newNote: "",
      newTime: "",
      data: [
        {
          maxPressure: "130",
          minPressure: "65",
          temp: "36.5",
          heart: "100",
          SpO2: "99",
          note: "あああああ",
          time: "01:11"
        },
        {
          maxPressure: "135",
          minPressure: "70",
          temp: "36.8",
          heart: "111",
          SpO2: "99",
          note: "あaあああ",
          time: "02:00"
        }
      ],
    };
  },
  methods: {
    closeCalendar: function() {
      this.showCalendar = false;
    },
      closeForm: function() {
      this.showForm = false;
    },
  },
  components: {
    sleepstagechart,
    doughnutchart,
    heartratechart,
    bodychart,
    Form,
  },
  // async asyncData({ app }) {
  //   // const baseUrl = 'https://jsonplaceholder.typicode.com/todos/';
  //   const baseUrl = 'http://localhost:8080/users';
  //   const response = await app.$axios.$get(baseUrl);
  //   return { lists: response };
  // }
};
</script>

<style>
#overlay {
  /*　要素を重ねた時の順番　*/
  z-index: 1;

  /*　画面全体を覆う設定　*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /*　画面の中央に要素を表示させる設定　*/
  display: flex;
  align-items: center;
  justify-content: center;
}
#content {
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: #fff;
}

#closeButton {
  margin-top: 10px;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8; /*ボタン色*/
  color: #fff;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
}
#closeButton:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px); /*下に動く*/
  border-bottom: none; /*線を消す*/
  outline: 0;
}
#closeButton:hover {
  /*ボタンを押したとき*/
  background: #8ca3d4; /*ボタン色*/
}

#form {
  background-color: cornflowerblue;
}

.data {
  text-align: center;
  font-size: 30px;
  margin-top:-30px;
}

.title {
  text-align: center;
}

.small_card {
  height: 150px;
  width: 178px;
  padding: 10px;
  margin: 15px;
}

#notes {
  height: 200px;
  width: 1010px;
  margin: 15px;
}

#note_title {
  margin: 10px;
  font-size: 20px;

}

#note_text {
  font-size: 30px;
  margin-left: 10px;
}

#main {
  margin-left: 50px;
}

.top {
  font-size: 25px;
}

#input_time {
  font-size: 20px;
  margin-top: 10px;
}

#info_panel {
  padding-left: 20px;
  margin-left: -20px;
  margin-right: 20px;
  height: 450px;
}

#main_panel {
  padding-bottom: 20px;
  margin-bottom: 20px;
  height: 560px;
}

#form_button {
  margin: 10px;
}


</style>