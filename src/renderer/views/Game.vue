<template >
    <Modal @startGame="startGame" :accuracy="calcAccuracy" :points="calcPoints" v-show="gameEnd"></Modal>
    <div class="playground" @click="addClick" v-if="!gameEnd">
      <TopScoreBoard :accuracy="calcAccuracy" :points="calcPoints" :time="timer" @endGame="endGame"></TopScoreBoard>
      <Balloon v-for="balloon in balloons" :key="balloon.id"
               :balloon="balloon" @pop="removeBalloon"
      ></Balloon>
    </div>
  
  </template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import GameButton from "../components/GameButton.vue";
import http from "../http_common";
import Balloon from "../components/Balloon.vue";
import TopScoreBoard from "../components/TopScoreBoard.vue";
import Modal from "../components/Modal.vue";

export default defineComponent({
    name: 'App',
    components: {
        Modal,
        Balloon, TopScoreBoard
    },
    data(){
        return{
            maxWidth: 0,
            maxHeight: 0,
            balloons: Array(),
            lastId: 0,
            numBalloons: 5,
            timer: 30,
            hits: 0,
            clicks: 0,
            gameEnd: true,
        }
    },
    methods: {
        removeBalloon(id){
            this.balloons = this.balloons.filter(balloon=> balloon.id !== id)
            this.generateNewBalloon()
            this.hits += 1
        },
        removeAllBalloons(){
            this.balloons = []
        },
        endGame(){
            this.removeAllBalloons()
            this.gameEnd = true
        },
        addClick(){
            this.clicks += 1
        },
        generateNewBalloon(){
            let generateDistance = true
            let newX = 0
            let newY = 0
            const widthRange = this.maxWidth * 0.5;
            const heightRange = this.maxHeight * 0.5;
            while(generateDistance){
                newX = (Math.random() * widthRange) + (this.maxWidth * 0.25);
                newY = (Math.random() * heightRange) + (this.maxHeight * 0.25);
                generateDistance = this.checkDistance(newX, newY)
        }
            this.lastId += 1
            let balloon = {
                id: this.lastId,
                x: newX,
                y: newY
        }
            this.balloons.push(balloon)
        },
        checkDistance(x,y){
            for(let ball of this.balloons){
                let distance = this.distanceBetweenPoints(x,ball.x, y, ball.y)
                if(distance<150){
                    return true
                }
            }
            return false
        },
        distanceBetweenPoints(x1,x2,y1,y2){
            let a = x1 - x2;
            let b = y1 - y2;
            let c = Math.sqrt( a*a + b*b );
            return c
        },
        startGame(data){
            this.numBalloons = data.balloons
            this.timer = data.time
            this.gameEnd = false
            this.hits = 0
            this.clicks = 0
            for(let i = 0; i<this.numBalloons; i++){
                this.generateNewBalloon()
            }
        }
    },
    computed: {
        calcAccuracy(){
            if(this.clicks===0){
                return 100
            }
            let acc = this.hits * 100 / this.clicks
            return acc.toFixed(2)
        },
        calcPoints(){
            let positivePoints = this.hits * 10
            let negativePoints = (this.clicks-this.hits) * 5
            return positivePoints - negativePoints
        }
    },
    beforeMount() {
        const body = document.querySelector('body');

        const bodyHeight = body!.offsetHeight;
        const bodyWidth = body!.offsetWidth;

        this.maxHeight = bodyHeight
        this.maxWidth = bodyWidth
    }
})
</script>

<style lang="css" scoped>
body{
  background-image: url("assets/bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

}
.playground{
  cursor: crosshair;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.objects {
    display: flex;
    justify-content: space-evenly;
    width: 70%;
}

.game-over {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #2f1e1e;
    background-color: #b8cece;
    border-radius: 5px;
    font-size: 26px;
    padding: 40px;
    font-weight: 700;
}

.bounty-rune {
    width: 20%;
}

.btn {
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    margin-top: 30px;
}

.game {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    z-index: 2;
    position: relative;
}

a {
    text-decoration: none;
}

.beaver-img {
    width: 50%;
}

.bg {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.logs-img {
    width: 96%;
    z-index: 1;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: scale(1.08, 1);
}

.header {
    background-color: #060223;
    font-size: 30px;
    text-align: center;
    padding: 20px;
    color: #7f9e9f;
    font-weight: 700;
    z-index: 2;
}

.timer {
    font-size: 26px;
    padding: 30px;
    font-weight: 700;
}

.score-info {
    font-size: 22px;
    font-size: 26px;
    margin-bottom: 60px;
    font-weight: 700;
}
</style>
