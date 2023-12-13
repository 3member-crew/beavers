<template lang="">
    <div class="buttons">
        <router-link to="/profile">
            <game-button>
                Профиль
            </game-button>
        </router-link>
        <router-link to="/game">
            <game-button>
                Играть
            </game-button>
        </router-link>
        <router-link to="/leaderboard">
            <game-button>
                Лидерборд
            </game-button>
        </router-link>
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent, PropType } from "vue"
    import GameButton from "../components/GameButton.vue"
  
    export default defineComponent({
        components: {
            GameButton
        },
    })
  </script>
  
  <style lang="css" scoped>
    .buttons {
      display: flex;
      justify-content: space-evenly;
      width: 70%;
    }
  </style>