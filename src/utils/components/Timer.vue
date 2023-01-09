<template>
  <div class="timer_wrapper">
    <div class="progressbar"
         :style="{transform: `translate(${(readyTime*100/time)-100}%, -50%)`}"></div>
  </div>
</template>

<script>
export default {
  props: {
    time: Number
  },
  data() {
    return {
      readyTime: this.time
    }
  },
  watch: {
    readyTime() {
      if (this.readyTime <= 0) this.finishTime()
    }
  },
  mounted() {
    this.addTimer()
  },
  methods: {
    addTimer() {
      setTimeout(() => {
        this.readyTime = this.readyTime - 0.023
        if (this.readyTime > 0) this.addTimer()
      }, 10)
    },
    finishTime() {
      this.$emit('finishTime', true)
    }
  },
  name: "Timer"
}
</script>
<style lang="scss">
.timer_wrapper {
  position: relative;
  width: 100%;
  height: 20px;
  background: rgba(255, 255, 255, 0.25);
  overflow: hidden;
  border-radius: var(--border-radius-md);

  & .progressbar {
    position: absolute;
    top: 50%;
    background: red;
    height: 16px;
    width: 100%;
    padding: 0 20px;
    transition-delay: 10ms;
    border-radius: var(--border-radius-md);
  }
}
</style>