<script>
export default {
  name: "modal_mixin",
  data() {
    return {show: false}
  },
  methods: {
    openModal() {
      this.show = true
    },
    closeModal() {
      this.show = false
    }
  }
}
</script>