<script>
import {mapGetters} from "vuex";

export default {
  name: "modal_mixin",
  computed: {
    ...mapGetters({
      isShowVModal: 'modal/isShowVModal',
      component: 'modal/getComponent',
      componentData: 'modal/getComponentData',
    })
  }
}
</script>