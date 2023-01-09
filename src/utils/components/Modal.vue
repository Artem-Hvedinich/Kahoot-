<template>
  <div class="modal"/>
  <div class="modal_wrapper">

  </div>
</template>

<script>
export default {
  props: {
    width: String,
    height: String,
    padding: String
  },
  name: "Modal"
}
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.4;

  &_wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(50%, 50%);
    background: white;
    width: 600px;
    height: 300px;
    opacity: 1;
  }
}
</style>