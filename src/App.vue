<template>
  <div class="wrapper">
    <Header/>
    <RouterView/>
  </div>
  <Modal v-if="isShowVModal" class="modal">
    <component v-bind:is="component" v-bind:componentData="componentData">

    </component>
  </Modal>
</template>

<script>
import {RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
import Modal from "@/utils/components/Modal.vue";
import modal_mixin from "@/utils/mixin/modal_mixin.vue";

export default {
  name: 'app',
  mixins: [modal_mixin],
  components: {
    Header,
    RouterView,
    Modal
  },
}
</script>
<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;
}


.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;

  &.right {
    transform: rotate(-45deg);
  }

  &.left {
    transform: rotate(135deg);
  }

  &.up {
    transform: rotate(-135deg);
  }

  &.down {
    transform: rotate(45deg);
  }
}

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