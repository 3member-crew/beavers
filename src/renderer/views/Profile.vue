<template lang="">
    <div>
        <div v-if="user">{{user.username}} {{user.score}}</div>
        <router-link to="/">
            <game-button>
                Вернуться назад
            </game-button>
        </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import GameButton from "../components/GameButton.vue";
import axios from "axios";
import http from "../http_common";
export default defineComponent({
    components: {
        GameButton
    },
    data() {
        return {
            user: null,
        };
    },

    async mounted() {
            await http.get('/user/')
            .then((response) => {
                this.user = response.data;
                console.log(response)
            })
            .catch((e) => {
                console.log(e)
            })
    }
    }
)
</script>

<style lang="css" scoped></style>