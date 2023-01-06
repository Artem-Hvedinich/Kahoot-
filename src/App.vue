<template>
  <Header/>
  <RouterView></RouterView>
</template>

<script>
import {RouterView} from 'vue-router'
import Header from "@/components/Header.vue";

export default {
  name: 'app',
  components: {
    Header,
    RouterView
  },
}
</script>
<style lang="scss">
@for $i from 1 through 20 {
  .mt-#{$i} {
    margin-top: 4px * $i !important;
  }
  .mb-#{$i} {
    margin-bottom: 4px * $i !important;
  }
  .mr-#{$i} {
    margin-right: 4px * $i !important;
  }
  .ml-#{$i} {
    margin-left: 4px * $i !important;
  }
  .pt-#{$i} {
    padding-top: 4px * $i !important;
  }
  .pb-#{$i} {
    padding-bottom: 4px * $i !important;
  }
  .pr-#{$i} {
    padding-right: 4px * $i !important;
  }
  .pl-#{$i} {
    padding-left: 4px * $i !important;
  }
}
</style>