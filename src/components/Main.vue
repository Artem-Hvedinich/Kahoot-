<template>
  <main>
    <h2>Добро пожаловать</h2>
    <div class="main_link mt-5">
      <router-link to="/game">Начать</router-link>
      <router-link to="/new_game">Создать игру</router-link>
    </div>
  </main>
</template>

<script>

export default {
  name: "Main",
}
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .main_link {
    display: flex;
    gap: 20px;
    //flex-direction: column;
    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 100px;
      border-radius: var(--border-radius-md);
      background: rgba(255, 255, 255, 0.5);
      //transition-delay: 0.1s;
      //transition-duration: 0.3s;

      &:hover {
        background: rgba(255, 255, 255, 0.7);
      }
    }
  }
}
</style>