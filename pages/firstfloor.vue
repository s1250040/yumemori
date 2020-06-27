<template >
<v-container fluid>
  <!-- <input type="file" @change="loadCsvFile" />
    <p>{{ message }}</p> -->

  <v-row dence>
    <v-col
      v-for="user in users"
      :key="user.id"
      :cols=4
    >
    
    <v-card hover=ture :color="user.state" :to="user.chart" class="text-center" nuxt=ture>
    <v-row dence>
      <v-col cols=12 ><v-card-title v-text="user.name" ></v-card-title></v-col>
      <!-- <v-col cols=6 ><v-card-actions><v-btn icon to="/preparation" class="pa-6"><v-icon >mdi-calendar-month</v-icon></v-btn></v-card-actions></v-col> -->
      
      <v-col cols=6><v-icon x-large class="pa-1">{{user.icon}}</v-icon></v-col>
      <v-col cols=6>
      <v-card-text v-text="user.leaving">
      </v-card-text>
      </v-col>
      <!-- <v-col cols=6>
      <v-card-text v-text="user.bpm">
      </v-card-text>
      </v-col> -->
      <!-- <v-col cols=6>
      <v-card-text v-text="user.bodytempreture">
      </v-card-text>
      </v-col> -->
      </v-row>
    </v-card>
    

    </v-col>
  </v-row>
 
  <!-- <v-layout> -->
    <!-- <v-flex class="text-center"> -->
      <!-- <v-card hover="ture" to="/previousday" color="yellow" max-width="350">
       
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

      </v-card> -->
      <!-- <v-card hover="ture" to="/preparation" color="#64FFDA" max-width="350">
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
      </v-card> -->
    <!-- </v-flex> -->
  <!-- </v-layout> -->
  </v-container>
</template>

<script>
export default {
  data (){
    return {
      // svgPath: mdiBed,
      // svgPath2: mdiAirplaneTakeoff,
      // message: "",
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
          id: '2',
          name: '102会津花子',
          leaving: "離床時間"+'0'+"分",
          bpm: "心拍数"+'105'+"bpm",
          bodytempreture: "体温"+'36.6'+"度",
          chart: '/yamauchi',
          state: '#64FFDA',
          icon: 'mdi-bed' 
        },
        {
          id: '3',
          name: '103会津一郎',
          leaving: "離床時間"+'3'+"分",
          bpm: "心拍数"+'99'+"bpm",
          bodytempreture: "体温"+'36.8'+"度",
          chart: '/miyauchi',
          state: '#64FFDA',
          icon: 'mdi-airplane-takeoff'
        }
      ]
    }
  },
  // methods:{
  //   loadCsvFile(e) {
  //     let vm = this;
  //     vm.users = [];
  //     vm.message = "";
  //     let file = e.target.files[0];
 
  //     if (!file.type.match("text/csv")) {
  //       vm.message = "CSVファイルを選択してください";
  //       return;
  //     }
 
  //     let reader = new FileReader();
  //     reader.readAsText(file, "Shift_JIS");
 
  //     reader.onload = () => {
  //       let lines = reader.result.split("\n");
  //       lines.shift();
  //       // const usercolor;
  //       lines.forEach(element => {
  //         const userData = element.split(",");
  //         // if(userData[2] >= 5){
  //         //     usercolor = "yellow"
  //         //   }else usercolor = "#64FFDA";
  //         const user = {
  //           id: userData[0],
  //           name: userData[1],
  //           leavingtime: "離床時間："+userData[2]+"分",
  //           bpm: "心拍数："+userData[3]+"BPM",
  //           bodytempreture: "体温："+userData[4]+"度",
  //           // color: userData[5] = usercolor
  //         };
  //         vm.users.push(user)
  //       });
  //       }
  //     }
  //   }
}
</script>