<template>
<div class="top-timer">
  <div class="item">
    <div class="stats">
      <div class="stats-title pts-title-bg">
        <h2>Счет: </h2>
      </div>
      <div class="stats-score pts-bg">
        <h2 >{{points}}</h2>
      </div>
    </div>
  </div>
  <div class="item time">
    <h1>0:{{timer}}</h1>
  </div>
  <div class="item">
    <div class="stats">
      <div class="stats-score acc-bg">
        <h2 >{{accuracy}}</h2>
      </div>
      <div class="stats-title acc-title-bg">
        <h2 >%</h2>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "TopScoreBoard",
  props: ["accuracy","points","time"],
  data(){
    return {
      timer: 30,
      startTimer: true,

    }
  },
  methods: {
    countDown(){
      if(this.startTimer && this.timer>-1){
        setTimeout(()=>{
          this.timer -= 1
          this.countDown()
        },1000)
      }
      else{
        this.startTimer = false
        this.$emit("endGame")
        this.timer = 30
      }
    }
  },
  created() {
    this.timer = this.time
    this.countDown()
  }
}
</script>

<style scoped>
.top-timer{
  margin: 10px auto 0 auto;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  /*justify-content: center;*/
  justify-content: space-evenly;
  color: white;

}

h1{
  margin: 15px 0;
}

h2{
  padding: 5px;
  margin: 5px 0;
}

.stats{
  display: flex;

}

.item{
  width: 100%;
  margin: auto;
  opacity: 0.9;
}

.time{
  background-color: rgba(0, 0, 0, 0.9);
  opacity: 0.8;
  width: 100%;
  max-width: 110px;
}

.stats-title{
  width: 100%;
  max-width: 100px;
}

.stats-score{
  width: 100%;
}

.pts-title-bg{
  background-color: rgba(139, 64, 0, 0.9);
}

.pts-bg{
  background-color: rgba(204, 85, 0, 0.9);
}

.acc-title-bg{
  background-color: rgba(37, 54, 92, 0.9);

}
.acc-bg{
  background-color: rgba(64, 92, 148, 0.9);
}

</style>