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