<template lang="">
    <div>
        <div>
            Miron
            999
        </div>
        <div class="back-btn">
            <router-link to="/">
                <game-button>
                    Вернуться назад
                </game-button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import UserService from "../services/UserService";
    import { Component, defineComponent } from "vue";
    import User from "../typings/User"
    import GameButton from "../components/GameButton.vue"

    export default defineComponent({
        components: {
            GameButton
        },
        data() {
            const info: User[] = []
            return {info};
        },
        mounted() {
            UserService.getAll()
            .then((response) => {
                this.info = response.data;
                console.log(response)
            })
            .catch((e) => {
                console.log(e)
            })
        }
    })
</script>

<style scoped>
    .leaderboard {
        display: flex;
        flex-direction: column;
    }
    .back-btn {
        margin-top: 50px;
    }
</style>