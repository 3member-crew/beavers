<template lang="">
    <div class="menu">
        <div class="leftSide">
            <div class="about">
                About
            </div>
            <div class="game-route">
                <div class="buttons">
                    <router-link to="/game">
                        <game-button class="btns">
                            Играть
                        </game-button>
                    </router-link>
                    <router-link to="/profile">
                        <game-button class="btns">
                            Профиль
                        </game-button>
                    </router-link>
                    <router-link to="/leaderboard">
                        <game-button class="btns">
                            Лидерборд
                        </game-button>
                    </router-link>
                    <div class="exit">
                        <game-button class="btns">
                            Выйти
                        </game-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="info">
            <img src="../assets/pudge.jpg">
            <div>
                
            </div>
        </div>
    </div>
  </template>
  
<script lang="ts">
    import { defineComponent, PropType } from "vue"
    import GameButton from "../components/GameButton.vue"
    import User from "../typings/User"
    import http from "../http_common";

    export default defineComponent({
        components: {
            GameButton
        },
        data() {
            let isAuth: Boolean = false;

            return {       
                isAuth
            };
        },
        async mounted() {
            
        },
        methods: {
            handleExit() {
                localStorage.removeItem('token');
            },
            async checkAuth() {
            if (localStorage.getItem('token') )
                this.isAuth = true
            }
        }
    })
</script>
  
<style lang="css" scoped>
    .menu {
        display: flex;
        justify-self: flex-start;
        align-self: flex-start;
        width: 100%;
    }
    .leftSide {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40%;
    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60%;
    }

    .about {
        height: 45vh;
    }

    .game-route {
        height: 55vh;
        align-self: flex-start;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        margin-left: 5em;
    }

    .exit {
        position: absolute;
        bottom: 2em;
    }

    .btns {
        width: 9em;
        font-size: 4cqmin;
        margin-bottom: 0.5em;
    }
</style>