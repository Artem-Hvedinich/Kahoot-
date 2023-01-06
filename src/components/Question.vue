<template>
  <div class="game_wrapper pb-10">
    <h2> {{ items.question }}</h2>
    <div class="answer mt-3">
      <p v-for="{answer} in items.answers">{{ answer }}</p>
    </div>

    <Timer :time="10"></Timer>

  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Timer from "@/utils/Timer.vue";

export default {
  name: "Question",
  components: {Timer},
  data(){
    return{
    }
  },
  computed: {
    ...mapGetters({
      items: 'question/getQuestionItems',
    })
  },
}
</script>

<style lang="scss">
.game_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  & .answer {
    display: grid;
    grid-template-columns: repeat(2, 40vw);
    grid-template-rows: repeat(2, 20vw);
    gap: 20px;

    & p {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;

      &:nth-child(1) {

        background: linear-gradient(135deg, #fdd819 0%, #e80505 120%);
      }

      &:nth-child(2) {
        background: linear-gradient(#52e5e7, #130c87);
      }

      &:nth-child(3) {
        background: linear-gradient(#f0ffc0, #58cffb);
      }

      &:nth-child(4) {
        background: linear-gradient(#92ffc0, #002661);
      }
    }
  }
}
</style>