<template>
  <v-container>
    <!-- カレンダーアイコン -->
    <v-btn icon center @click="showContent = !showContent" class="pa-6">
      <v-icon>mdi-calendar-month</v-icon>
    </v-btn>
    <toggle-button
      @change="changeDisplay = !changeDisplay"
      :labels="{checked: ' ', unchecked: ' '}"
    />
    <div v-if="changeDisplay">
      <v-container>
        <v-row dense>
          <v-col cols="8">
            <v-card>
              <!--
              <div>
              <p>・最高血圧</p>
              {{ maxlist }}
              </div>
              <div>
                <br>
                <p>・最低血圧</p>
              {{ minlist }}
              </div>
              <div>
              <p>・体温</p>
              {{ templist }}
              </div>
              -->
              <p>入力した血圧、体温の表示をここでする予定です</p>
              <p>(作成中)</p>
            </v-card>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="3">
            <v-card>
              <v-container>
                <v-row dense>
                    <v-form ref="form">
                      <v-text-field placeholder="最高血圧" v-model="maxPressure"></v-text-field>
                      <v-text-field placeholder="最低血圧" v-model="minPressure"></v-text-field>
                      <v-btn color="primary" @click="addPress">確定</v-btn>
                    </v-form>
                </v-row>
                <v-row dense>
                  <v-form ref="form">
                    <v-text-field placeholder="体温" v-model="temp"></v-text-field>
                    <v-btn color="primary" @click.prevent="addTemp">確定</v-btn>
                  </v-form>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
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

    <div id="overlay" v-if="showContent">
      <div id="content">
        <p>
          <button id="closeButton" v-on:click="closeModal">close</button>
        </p>
        <full-calendar @dateClick="handleDateClick" :plugins="calendarPlugins" />
      </div>
    </div>
  </v-container>
</template>

<script>
import sleepstagechart from "../components/sleepstage-chart";
import doughnutchart from "../components/doughnut-chart";
import heartratechart from "./heartrate-chart";
import bodychart from "./bodytempleturechart";

export default {
  data() {
    return {
      showContent: false,
      changeDisplay: false,
      maxPressure: "",
      minPressure: "",
      temp: "",
      maxlist: [],
      minlist: [],
      templist: [],
      viewmax: "",
      viewmin: "",
    };
  },
  methods: {
    openModal: function() {
      this.showContent = true;
    },
    closeModal: function() {
      this.showContent = false;
    },
    addMaxPress: function() {
      //maxlist.push(this.maxPressure);
      this.viewmax = this.maxPressure ;
      this.maxPressure = "";
    },
    addMinPress: function() {
     // this.minlist.push(this.minPressure);
     this.viewmin = this.minPressure;
      this.minPressure = "";
    },
    addTemp: function() {
      this.templist.push(temp);
      this.temp = "";
    },
    addPress: function() {
      this.addMinPress();
      this.addMaxPress();
    }
  },
  components: {
    sleepstagechart,
    doughnutchart,
    heartratechart,
    bodychart
  }
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


</style>