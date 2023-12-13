<script setup lang="ts">
</script>

<template>
  <div class="main">
    <router-view>
    </router-view>
  </div>
</template>

<style lang="css">
  body {
    margin: 0;
    padding: 0;
    font-family: 'Kanit', sans-serif;

  }
  .main {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  #app {
    display: flex;
    align-items: center;
    height: 100vh;
  }
</style>
