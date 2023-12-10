<template lang="">
    <div>
        <div>
            Колво: {{clicks}}
        </div>
        Осталось: {{counter}}
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
        },
        data() {
            return {
                clicks: 0,
                counter: 4,
            }
        }
    })
</script>

<style lang="css" scoped>
    
</style>