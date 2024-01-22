<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <img v-if="firstGame" class="game-preview" src="../assets/preview.jpg">
      <div v-else class="last-game-details">
        <div class="game-details">
          <h1 class="game-title">Предыдущая игра:</h1>
          <h2 class="game-mode">Счет: <span class="score">{{points}} </span></h2>
          <h2 class="game-mode">Точность: <span class="score">{{accuracy}} %</span></h2>
        </div>
      </div>
      <div class="game-details">
        <label >Номер шариков:</label>
        <input type="number" @change="checkNumber('balloons')" v-model="balloons">
        <label >Время:</label>
        <input type="number" @change="checkNumber('time')" v-model="time">
      </div>
      <button class="start-game" @click="startGame">

        {{playGameText}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["accuracy","points"],
  data(){
    return{
      time: 60,
      balloons: 3,
      firstGame: true
    }
  },
  methods: {
    startGame(){
      this.firstGame = false
      this.$emit("startGame",{time: this.time,balloons: this.balloons})
    },
    checkNumber(type){
      if(type==="balloons"){
        if(this.balloons<3 || this.balloons>6){
          this.balloons = 3
        }
      }
      else{
        if(this.time<10 || this.time>60){
          this.time = 30
        }
      }
    }
  },
  computed: {
    playGameText(){
      if(this.firstGame){
        return "Play Game"
      }
      else{
        return "Play Again"
      }
    }
  }
}
</script>

<style scoped>
.backdrop{
  z-index: 10;
  top: 0;
  position: fixed;
  display: flex;
  background-size: cover;
  background: url("../assets/bg0.jpg") no-repeat fixed center center;
  width: 100%;
  height: 100%;
}
.modal{
  width: 100%;
  max-width: 500px;
  margin: auto auto;
  background: rgba(0,0,0,0.4);
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
}

.start-game{
  background-color: #60949c;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px;
  font-size: 1.5em;
  width: 100%;
  cursor: pointer;
  border: 0;
}

.game-details{
  display: flex;
  flex-direction: column;
  font-family: Arial;
  padding: 30px 20px;
}

.game-preview{
  width: 100%;
  max-height: 250px;
}

.game-title{
  margin: 0;
  text-transform: uppercase;
}

.game-mode{
  margin: 5px 0;
  text-transform: uppercase;
  color: #54649c  ;
}

label{
  display: inline-block;
  margin: 25px 0 15px;
  /*font-size: 0.6em;*/
  text-transform: uppercase;
  font-weight: bold;
}
input{
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  background: none;
  font-size: 1.2em;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #42b983;
}

input:focus{
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

.last-game-details{
  border-bottom: 3px solid #54649c;
}

.score{
  color: #42b983;
}
</style>