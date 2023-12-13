<template lang="">
    <router-link to="/">
        <game-button>
            Вернуться назад
        </game-button>
    </router-link>
    <div>
        <div v-for="user in info" :key="username">
            <game-button>{{user.username}}
            {{user.score}}</game-button>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, defineComponent } from "vue";
import GameButton from "../components/GameButton.vue";
import User from "../typings/User"
import http from "../http_common";
export default defineComponent({
    components: {
        GameButton
    },

    data() {
        const info: User[] = []
        return { info };
    },
    async mounted() {
            await http.get('/users/')
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