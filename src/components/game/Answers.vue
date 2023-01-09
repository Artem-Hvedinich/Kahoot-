<template>
  <Timer v-if="!finishTimer" :time="12" @finishTime="finishTime" class="mt-5"/>
  <div class="answer mt-3">
    <div :class="!checked && finishTimer && 'is_false'"
         v-for="{answer, checked} in items.answers">
      {{ answer }}
      <span></span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Timer from "@/utils/components/Timer.vue";

export default {
  name: "Answers",
  data() {
    return {
      finishTimer: false
    }
  },
  components: {Timer},
  computed: {
    ...mapGetters({
      items: 'question/getQuestionItems',
    })
  },
  methods: {
    finishTime(e) {
      this.finishTimer = e
    }
  }
}
</script>

<style lang="scss">
.answer {
  display: grid;
  grid-template-columns: repeat(2, 400px);
  grid-template-rows: repeat(2, 200px);
  background: rgba(255, 255, 255, 0.4);
  padding: 20px;
  border-radius: var(--border-radius-md);
  gap: 20px;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: var(--border-radius-md);

    &.is_false {
      opacity: 0.6;
    }

    & span {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 50px;
      height: 50px;
      background-size: 50px;
      z-index: 1;
    }

    &:nth-child(1) {
      background: linear-gradient(135deg, #fdd819 0%, #e80505 120%);

      & span {
        background-image: url("/public/img/circle.svg");
      }
    }

    &:nth-child(2) {
      background: linear-gradient(15deg, #120c87 0%, #52e5e7 120%);

      & span {
        background-image: url("/public/img/square.svg");
      }
    }

    &:nth-child(3) {
      background: linear-gradient(235deg, #429421 0%, #b3eb50 120%);

      & span {
        background-image: url("/public/img/triangle.svg");
      }
    }

    &:nth-child(4) {
      background: linear-gradient(115deg, #a1051d 0%, #f5525f 120%);

      & span {
        background-image: url("/public/img/diamond.svg");
      }
    }
  }
}
</style>