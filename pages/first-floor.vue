<template >
<v-container fluid>
  <input type="file" @change="loadCsvFile" />
    <p>{{ message }}</p>

  <v-row dence>
    <v-col
      v-for="user in users"
      :key="user.id"
      :cols=3
    >
    <v-card hover="ture" color="#64FFDA" to="/previousday" >
      <v-card-title v-text="user.name">
      </v-card-title>
      <v-card-text v-text="user.leavingtime">
      </v-card-text>
      <v-card-text v-text="user.bpm">
      </v-card-text>
      <v-card-text v-text="user.bodytempreture">
      </v-card-text>
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
      message: "",
      users: []
    }
  },
  methods:{
    loadCsvFile(e) {
      let vm = this;
      vm.users = [];
      vm.message = "";
      let file = e.target.files[0];
 
      if (!file.type.match("text/csv")) {
        vm.message = "CSVファイルを選択してください";
        return;
      }
 
      let reader = new FileReader();
      reader.readAsText(file, "Shift_JIS");
 
      reader.onload = () => {
        let lines = reader.result.split("\n");
        lines.shift();
        // const usercolor;
        lines.forEach(element => {
          const userData = element.split(",");
          // if(userData[2] >= 5){
          //     usercolor = "yellow"
          //   }else usercolor = "#64FFDA";
          const user = {
            id: userData[0],
            name: userData[1],
            leavingtime: "離床時間："+userData[2]+"分",
            bpm: "心拍数："+userData[3]+"BPM",
            bodytempreture: "体温："+userData[4]+"度",
            // color: userData[5] = usercolor
          };
          vm.users.push(user)
        });
        }
      }
    }
}
</script>