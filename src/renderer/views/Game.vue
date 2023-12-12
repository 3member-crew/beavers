<template lang="">
    <div>
        <div v-if="counter !== 0">
            <div>
                Осталось: {{counter}}
            </div>
            <div>
                Ваш счет: {{currScore}}
            </div>
            <div class="game">
                <div>
                    <img 
                        src="../assets/bountyRune.jpg"
                        class="bounty-rune"
                        v-if="isLeftLog">
                    <img src="../assets/noneRune.jpg" class="bounty-rune" v-else>
                </div>
                <div>
                    <img src="../assets/pudge.jpg" v-if="isLeftBeaver">
                    <img src="../assets/pudgeRight.jpg" v-else>
                </div>
                <div>
                    <img 
                        src="../assets/bountyRune.jpg"
                        class="bounty-rune"
                        v-if="isRightLog">
                    <img src="../assets/noneRune.jpg" class="bounty-rune" v-else>
                </div>
            </div>
            <div>
                <game-button @click="toLeftBeaver">
                    Влево
                </game-button>
                <game-button @click="toRightBeaver">
                    Вправо
                </game-button>
            </div>
        </div>
        <div 
            class="game-over"
            v-if="counter === 0"
            >
            <div> 
                Ваш результат: {{currScore}}
            </div>
            <router-link to="/">
                <game-button>
                    Вернуться назад
                </game-button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType } from "vue"
    import GameButton from "C:/Users/Huawei1/projects/mesen_labs/vue-ts-game/src/components/UI/GameButton.vue";

    export default defineComponent({
        components: {
            GameButton
        },
        data() {
            return {
                currScore: 0,
                counter: 10,
                score: 0,
                isLeftBeaver: true,
                isRightBeaver: false,
                isRightLog: true,
                isLeftLog: false,
                catched: false
            }
        },
        methods: 
        {
            increment() {
                if (this.isRightBeaver && this.isRightLog && !this.catched) {
                    this.catched = true;
                    this.currScore++;
                }
                else {
                    if (this.isLeftBeaver && this.isLeftLog && !this.catched) {
                        this.catched = true;
                        this.currScore++;
                    }
                }
            },
            countDown() {
                if (this.counter) {
                    return setTimeout(() => {
                    --this.counter
                    this.countDown()
                    }, 1000)
                }

                this.score = this.currScore;
            },
            toLeftBeaver() {
                this.isRightBeaver = false;
                this.isLeftBeaver = true;
            },
            toRightBeaver() {
                this.isLeftBeaver = false;
                this.isRightBeaver = true;
            },
            toLeftBounty() {
                setTimeout(() => {
                    this.isLeftLog = true;
                    this.isRightLog = false;
                    this.catched = false;
                }, 1000);
            },
            toRightBounty() {
                setTimeout(() => {
                    this.isLeftLog = false;
                    this.isRightLog = true;
                    this.catched = false;
                }, 1000);
            },
            bountyLoop() {
                if (this.isRightLog) {
                    this.toLeftBounty();
                }
                else {
                    this.toRightBounty();
                }
            },
            randomNum() {
                var random = Math.random();

                if (random < 0.34)
                    return 1;

                return random;
            }
        },
        mounted() {
            this.countDown();
        },
        beforeUpdate() {
            this.increment();
        },
        updated() {
            this.bountyLoop();
        }
    })
</script>

<style lang="css" scoped>
    .game-over {
        display: flex;
        flex-direction: column;
        color: white;
        background-color: #7e727e;
        border-radius: 5px;
        font-size: 26px;
        padding: 40px;
    }

    .bounty-rune {
        width: 40%;
    }

    .game {
        display: flex;
    }

</style>