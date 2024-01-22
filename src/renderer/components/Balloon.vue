<template>
  <img src="../assets/log.png" alt="balloon" class="balloon" ref="balloon" @click="popBalloon" draggable="false">
</template>

<script>
export default {
  name: "Balloon",
  props: ['balloon'],
  mounted() {
    const img = this.$refs.balloon;
    img.style.left = this.balloon.x + 'px';
    img.style.top = this.balloon.y + 'px';
  },
  methods: {
    popBalloon(){
      this.$emit('pop', this.balloon.id)
    }
  }
}
</script>

<style scoped>
.balloon{
  height: 104px;
  width: 106px;
  position: absolute;
}
</style>