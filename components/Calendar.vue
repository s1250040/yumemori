<template > 
  <FullCalendar
    default-view="dayGridMonth"
    :locale="locale"
    :header="calendarHeader"
    :weekends="calendarWeekends"
    :plugins="calendarPlugins"
    :events="events"
    @eventClick="eventClick"
    @dateClick="handleDateClick"
    
  />
 <!-- :events="calendarEvents" -->
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import jaLocale from "@fullcalendar/core/locales/ja"; // 日本語化用

export default {
  eventSources:{
    url:'http://localhost:8080/users',
    method: 'POST',
    dataType: 'json',
  },
  // props: ['hoge'],

  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  computed: {},
  data() {
    return {
      locale: jaLocale, // 日本語化
      // カレンダーヘッダーのデザイン
      calendarHeader: {
        left: " ",
        center: "title",
        right: "prev,next today"
      },
      calendarWeekends: true, // 土日を表示するか
      // カレンダーで使用するプラグイン
      calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],

      events:  [
        {
          start: "2018-11-14",
          // end : "",
          // rendering: 'background', 
        },
      ],
      backgroundColor: 'black',
    };
  },
  methods: {
    eventClick: function(info) {
     window.location.href = "./previousday";
  }
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
@import "~/node_modules/@fullcalendar/core/main.css";
@import "~/node_modules/@fullcalendar/daygrid/main.css";
@import "~/node_modules/@fullcalendar/timegrid/main.css";

.fc-sun {
  /* 日曜日 */
  color: red;
}
.fc-sat {
  /* 土曜日 */
  color: blue;
}
.fc-body {
  color: black; /* 日付の色 */
}
.fc-widget-header th {
  background-color: #eff0ff;
}
.fc-event {
  color: palevioletred;
}
.fc-day {
  border-color: black;
  background-color: #cacaca;
}

/* .fc-day:hover {
  background-color: #e6e6fa;
}
*/

.fc-bgevent {
  background-color: #ffffff;
  opacity: 1;
}

.fc-bgevent:hover {
  background-color: #e6e6fa!important;
}


/* .fc-today:hover {
  background-color: #e6e6fa!important;
}
*/


</style>
