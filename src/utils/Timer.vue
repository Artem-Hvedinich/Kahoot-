<template>
  <div style="position:relative; width: 100%; height: 20px; background: grey;overflow: hidden">
    <div style="position: absolute; top: 50%;  background: red; height: 16px; width: 100%; transition-delay: 10ms"
         :style="{transform: `translate(${(readyTime*100/time)}%, -50%)`}"></div>
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
  mounted() {
    this.addTimer()
  },
  methods: {
    addTimer() {
      setTimeout(() => {
        this.readyTime = this.readyTime - 0.007
        if (this.readyTime > 0) this.addTimer()
      }, 1)
    }
  },
  name: "Timer"
}
</script>

<style scoped>

</style>