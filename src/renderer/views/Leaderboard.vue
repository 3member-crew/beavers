<template lang="">
    <div v-for="score in scores">
        Счет: {{ score }}
    </div>
    <router-link to="/">
        <game-button>
            Вернуться назад
        </game-button>
    </router-link>
</template>
<script lang="ts">
    import { defineComponent, PropType } from "vue"
    import GameButton from "../components/GameButton.vue";

    export default defineComponent({
        components: {
            GameButton
        },
        props: {
            scores: {
                type: Array,
                required: true
            }
        }
    })
</script>
<style lang="">
    
</style>