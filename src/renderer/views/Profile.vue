<template lang="">
    <div>
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

    export default defineComponent({
        components: {
            GameButton
        }
    })
</script>

<style lang="css" scoped>
    
</style>