<template>
  <header>
    <img src="/public/favicon.ico" alt="icon">
    <router-link to="/"><h1>Kahoot!</h1></router-link>
    <router-link to="/game">Играть</router-link>
  </header>
</template>

<script>
export default {
  name: "Header"

}
</script>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 1rem;

  & img {
    width: 32px;
  }

  //& .link_wrapper {
  //  display: flex;
  //  justify-content: space-between;
  //  border-bottom: 1px solid;
  //  border-top: 1px solid;
  //  padding: 0.2rem 1rem;
  //  background: #d1f8cc;

  & a {
    background: grey;
    padding: 0.2rem 0.6rem;
    border-radius: var(--border-radius-md);
    color: white;

    &.router-link-active {
      background: firebrick;
      font-weight: 500;
    }
  }

  //}
}
</style>