<template>
  <div class="game_wrapper">
    <h2> {{ items.question }}</h2>
    <div class="answer mt2">
      <p v-for="{answer} in items.answers">{{ answer }}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Question",
  computed: {
    ...mapGetters({
      items: 'question/getQuestionItems',
    })
  },
}
</script>

<style scoped lang="scss">
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
        background: red;
      }

      &:nth-child(2) {
        background: blue;
      }

      &:nth-child(3) {
        background: yellow;
      }

      &:nth-child(4) {
        background: green;
      }
    }
  }
}
</style>