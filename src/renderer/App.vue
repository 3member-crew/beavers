<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {useRoute} from "vue-router";
window.electronAPI.sendMessage('Hello from App.vue!');

const route = useRoute()
</script>

<template>
  
  <div class="menu">
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
</style>
