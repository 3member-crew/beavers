<template lang="">
    <div class="game" v-if="counter !== 0">
        <div>
            Осталось: {{counter}}
        </div>
        <div>
            Ваш счет: {{currScore}}
        </div>
        <div class="objects">
                <img src="../assets/bountyRune.jpg" class="bounty-rune" v-if="isLeftLog">
                <img src="../assets/noneRune.jpg" class="bounty-rune" v-else>
            <div>
                <img src="../assets/pudge.jpg" v-if="isLeftBeaver">
                <img src="../assets/pudgeRight.jpg" v-else>
            </div>
                <img src="../assets/bountyRune.jpg" class="bounty-rune" v-if="isRightLog">
                <img src="../assets/noneRune.jpg" class="bounty-rune" v-else>
        </div>
        <div class="btn">
            <game-button @click="toLeftBeaver">
                Влево
            </game-button>
            <game-button @click="toRightBeaver">
                Вправо
            </game-button>
        </div>
    </div>
    <div class="game-over" v-else>
        <div> 
            Ваш результат: {{currScore}}
        </div>
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
    import http from "../http_common";

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
                catched: false,
                user: null
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
                }, this.randomNum() * 3 * 1000);
            },
            toRightBounty() {
                setTimeout(() => {
                    this.isLeftLog = false;
                    this.isRightLog = true;
                    this.catched = false;
                }, this.randomNum() * 3 * 1000);
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
        async mounted() {
            this.countDown();
            await http.get('/user/')
            .then((response) => {
                this.user = response.data;
                console.log(response)
            })
            .catch((e) => {
                console.log(e)
            })
        },
        updated() {
            this.increment();
            this.bountyLoop();
        },
        async unmounted() {
            if (this.user.score < this.score) {
                try { 
                    const response = await http.put('/user/update', { 
                            score: this.score 
                            }); 
                }
                catch (error) { 
                    console.error(error); 
                }
            }
        }
    })

</script>

<style lang="css" scoped>
    .hundred {
        width: 100%;
    }

    .objects {
        display: flex;
        justify-content: space-evenly;
        width: 70%;
    }

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
        width: 150px;
    }

    .btn {
        display: flex;
        justify-content: space-evenly;
    }

    .game {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    a {
        text-decoration: none;
    }
</style>