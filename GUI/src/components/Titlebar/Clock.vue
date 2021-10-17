<script>
export default {
    name: 'Clock',
  props: {
    color: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  methods: {
    setTime () {
      setInterval(() => {
        const date = new Date()
        this.hours;
        if(date.getHours() > 12) {
          this.hours = date.getHours() - 12
        }
        else {
          this.hours = date.getHours()

        }
        this.minutes = this.checkSingleDigit(date.getMinutes())
        this.seconds = this.checkSingleDigit(date.getSeconds())
      }, 1000)
    },
    checkSingleDigit (digit) {
      return ('0' + digit).slice(-2)
    }
  },
  mounted () {
    this.setTime()
  }
}
</script>

<template>
    <div>{{hours}}:{{minutes}}:{{seconds}}</div>
</template>