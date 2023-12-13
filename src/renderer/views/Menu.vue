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
        <div v-if="!isAuth">
            <router-link to="/login">
                <game-button>
                    Логин
                </game-button>
            </router-link>
            <router-link to="/register">
                <game-button>
                    Регистрация
                </game-button>
            </router-link>
            </div>
        <game-button>
            <p @click="handleExit">Выход</p>
        </game-button>
    </div>
  </template>
  
<script lang="ts">
import { defineComponent, PropType } from "vue"
import GameButton from "../components/GameButton.vue"
export default defineComponent({
    components: {
        GameButton
    },
    data() {
        let isAuth: Boolean = false 
        return {       
            isAuth
        };
    },
    async mounted() {
        this.checkAuth()
    },

    methods: {
        handleExit() {
            localStorage.removeItem('token');
        },
        async checkAuth() {
        if (localStorage.getItem('token'))
        this.isAuth = true
        }
    }
})
</script>
  
<style lang="css" scoped>
.buttons {
    display: flex;
    justify-content: center;
    width: 70%;
}
</style>