<template>
  <div class="created_modal">
    <input v-model="title">
  </div>
</template>

<script>
export default {
  name: "CreatedModal",
  props: {componentData: Object},
  data() {
    return {
      title: this.componentData.title || ''
    }
  }
}
</script>

<style lang="scss">
.created_modal {
  width: 90vw;
  height: 100%;
  padding: 20px;
}
</style>