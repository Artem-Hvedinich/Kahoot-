<template>
  <div class="modal" @click="closeModal"/>
  <div class="modal_wrapper">
    <div :style="{borderRadius: borderRad}" class="close_wrapper" @click="closeModal">
      <div class="close"/>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    componentData: Object,
    borderRad: {type: String, default: 'none'}
  },
  name: "Modal",
  methods: {
    closeModal() {
      this.$store.dispatch('modal/closeVModal')
    }
  }
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
    transform: translate(-50%, -50%);
    background: white;
    //width: 600px;
    //height: 300px;
    opacity: 1;

    & .close_wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      cursor: pointer;
      position: absolute;
      right: -20px;
      top: -20px;

      &:hover {
        background: rgba(203, 203, 203, 0.44);
      }

      & .close {
        background: #cbcbcb;
        width: 15px;
        height: 15px;
      }
    }

  }
}
</style>