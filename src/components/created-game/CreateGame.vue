<template>
  <div>Создать</div>
  <button @click="openCreateModal" class="created_game">Создать</button>
  <div class="games mt-5">
    <div class="games_one" :key="game.id" v-for="game in gameLists">
      <p>{{ game.title }}</p>
      <p class="question_count">{{ game.questions.length }} {{ wordDeclensionFunc(game.questions.length) }}</p>
      <p @click="editModal(game.id)">edit</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {wordDeclension} from "@/utils/function/wordDeclension";
import createdModal from "@/components/modals/CreatedModal.vue";

export default {
  name: "CreatedGame",
  computed: {
    ...mapGetters({
      gameLists: 'gameLists/getAllGameLists',
      gameListFromId: 'gameLists/getAllGameLists',

    })
  },
  methods: {
    wordDeclensionFunc(num) {
      return wordDeclension(num, 'вопрос', 'вопросов', 'вопросов')
    },
    openCreateModal() {
      this.$store.dispatch('modal/showVModal', {component: createdModal})
    },
    editModal(id) {
      this.$store.dispatch('modal/showVModal', {
        component: createdModal,
        data: this.$store.getters['gameLists/getGameListFromId'](id)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.created_game {
  width: 150px;
  height: 60px;
  box-shadow: 0 5px 10px 1px rgba(34, 60, 80, 30%);
}

.games {
  display: flex;
  gap: 20px;

  &_one {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 100px;
    background: white;
    border-radius: var(--border-radius-md);
    padding: 16px;

    & .question_count {
      background: rgba(34, 34, 34, 0.8);
      color: white;
      border-radius: 4px;
      padding: 8px 16px;
    }
  }
}
</style>