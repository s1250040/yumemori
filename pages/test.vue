<template>
  <section class="section">
    <div class="columns is-mobile">
      <full-calendar 
      @dateClick="handleDateClick" :plugins="calendarPlugins" 
      />
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style>

</style>