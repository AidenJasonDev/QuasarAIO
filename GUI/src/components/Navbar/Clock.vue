<script>
export default {
    name: "clock",
  data() {
    return {
      interval: null,
      time: null
    }
  },
  beforeUnmount() {
    // prevent memory leak
    clearInterval(this.interval)
  },
  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
    }, 1000)
  }
}
</script>

<template>
    <div class="time" v-bind="created()">

    </div>
</template>

<style>
.time {
    background-color:  #2A2838;
    color: #6A6FED;
    font-size: 24px;
    font-weight: none;
    font-family: Roboto, Arial, sans-serif;
}
</style>