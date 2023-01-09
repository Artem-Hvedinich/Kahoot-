<template>
  <div class="game pb-10">
    <div class="game_wrapper">
      <h2> {{ items.question }}</h2>

      <Timer v-if="!finishTimer" :time="items.question.split(' ').length / 1.5" @finishTime="finishTime" class="mt-5"/>

      <Answers v-if="finishTimer"/>

    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Timer from "@/utils/components/Timer.vue";
import Answers from "@/components/game/Answers.vue";

export default {
  name: "Question",
  components: {
    Timer,
    Answers
  },
  data() {
    return {
      finishTimer: false
    }
  },
  methods: {
    finishTime(e) {
      this.finishTimer = e
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
.game {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    margin-top: 20px;
  }
}
</style>