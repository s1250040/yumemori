<template>


  <v-row>
    <!--
    <Form/>
    -->
      
    <v-col cols="4">
      <v-card class="form">
        <v-form ref="form">
          <v-container>
            <v-row> 
              <vue-timepicker
                hour-label="時"
                minute-label="分"
                v-model="newTime"
                close-on-complete
                format="HH:mm"
                id="time"
              ></vue-timepicker>
            </v-row>
            <v-row>
              <v-text-field 
              placeholder 
              v-model="newMaxPressure" 
              label="収縮期血圧" 
              outlined="true" 
              class="pressure" 
              clearable
              counter="3"
              ></v-text-field>
              <v-text-field 
              placeholder 
              v-model="newMinPressure" 
              label="拡張期血圧" 
              outlined="true" 
              class="pressure" 
              clearable
              counter="3"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field 
              placeholder 
              v-model="newHeart" 
              label="心拍数" 
              outlined="true" 
              clearable
              counter="3"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field 
              placeholder 
              v-model="newTemp" 
              label="体温" 
              outlined="true" 
              clearable
              counter="4"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                placeholder="特記事項があれば入力してください"
                v-model="newNote"
                label="特記事項"
                outlined="true"
                clearable
              ></v-text-field>
            </v-row>
            <v-btn color="primary" @click="add">確定</v-btn>
          </v-container>
        </v-form>
      </v-card>
    </v-col>

    <ol>
      <li v-for="item in data" :key="item.time">
        {{item.time}}
      </li>
    </ol>


   <v-col>
    <v-card v-for="item in data" :key="item.time">
      <v-row>
        <v-col>
          <div class="title">
            name
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-card class="infocard">
        <v-col>
          <div class="title">
          収縮期血圧
          </div>
          <div class="data">
          <br>{{item.maxPressure}}
          </div>
          </v-col>
        </v-card>
        <v-card class="infocard">
        <v-col>
          <div class="title">
          拡張期血圧
          </div>
          <div class="data">
            <br>{{item.minPressure}}
          </div>
          </v-col>
        </v-card>
         <v-card class="infocard">
        <v-col>
          <div class="title">
          心拍数
          </div>
          <div class="data">
            <br>{{item.heart}}
          </div>
          </v-col>
        </v-card>
         <v-card class="infocard">
        <v-col>
          <div class="title">
          体温
          </div>
          <div class="data">
            <br>{{item.temp}}
          </div>
          </v-col>
        </v-card>
      </v-row>
      <v-row>
        <v-card id="notes">
          <div id="note_title">
            特記事項
          </div>
          <div id="note_text">
            {{item.note}}
          </div>
        </v-card>
      </v-row>
    </v-card>
     </v-col>
  </v-row>
  
</template>

<script>
import VueTimepicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";
import Form from '../components/Form.vue';

export default {
  data() {
    return {
      newMaxPressure: "",
      newMinPressure: "",
      newTemp: "",
      newHeart: "",
      newNote: "",
      newTime: "",
      data: [
        {
          maxPressure: "130",
          minPressure: "65",
          temp: "36.5",
          heart: "100",
          note: "あああああ",
          time: "01:11"
        },
        {
          maxPressure: "135",
          minPressure: "70",
          temp: "36.8",
          heart: "111",
          note: "あaあああ",
          time: "02:00"
        }
      ]
    };
  },
  methods: {
    add: function() {
      if (confirm("確定してもよろしいですか？")) {
        this.data.push({
          maxPressure: this.newMaxPressure,
          minPressure: this.newMinPressure,
          temp: this.newTemp,
          heart: this.newHeart,
          note: this.newNote,
          time: this.newTime
        });
        this.newMaxPressure = "";
        this.newMinPressure = "";
        this.newHeart = "";
        this.newTemp = "";
        this.newNote = "";
      }
    }
  },

  components: {
    "vue-timepicker": VueTimepicker,
    Form
  }
};
</script>

<style>
.form {
  padding: 30px;
}
.pressure {
  padding: 10px;
}

#time {
  margin: 20px;
}
.data {
  text-align: center;
  font-size: 25px;
}

.title {
  text-align: center;
}

.infocard {
  height: 130px;
  width: 160px;
  padding: 10px;
  margin: 15px;
}

#notes {
  height: 200px;
  width: 730px;
  margin: 15px;
}

#note_title {
  margin: 10px;
  font-size: 20px;

}

#note_text {
  font-size: 20px;
  margin-left: 10px;
}


</style>

