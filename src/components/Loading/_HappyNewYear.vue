<template>
  <div class="welcome" v-show="start">
    <div @click="start=false" class="skip">クリックでスキップ>></div>
    <br>
    <h1 class="ml2">
      <span class="letter colorRed">H</span>
      <span class="letter colorRed">a</span>
      <span class="letter colorRed">p</span>
      <span class="letter colorRed">p</span>
      <span class="letter colorRed">y</span>
      <span class="letter colorRed">N</span>
      <span class="letter colorRed">e</span>
      <span class="letter colorRed">w</span>
      <span class="letter colorRed">Y</span>
      <span class="letter colorRed">e</span>
      <span class="letter colorRed">a</span>
      <span class="letter colorRed">r</span>
    </h1>
    <h1 class="ml4">
      <span class="letters letters-1">3</span>
      <span class="letters letters-2">2</span>
      <span class="letters letters-3">1</span>
    </h1>
  </div>
</template>

<script>
import anime from 'animejs'
var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 600;
ml4.durationOut = 500;
ml4.delay = 50;

export default {
  data() {
    return {
      start: true
    }
  },
  methods: {
    welcomeAnime(){
      let animation = anime.timeline()
      .add({
        targets: '.ml4 .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4 .letters-2',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-2',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4 .letters-3',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-3',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4',
        opacity: 0,
        duration: 500,
        delay: 500
      }).add({
        targets: '.ml2 .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70*i
      }).add({
        targets: '.ml2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 500
      })
      animation.finished.then(()=>{
        this.start= false
      })
    },
    async doAnime() {
      this.welcomeAnime()
    }
  },
  mounted(){
    this.doAnime()
  }
}
</script>

<style scoped>
.skip{
  position: absolute;
  top: 10px;
  right: 10px;
  color: rgb(161, 161, 161);
  cursor: pointer;
}
.skip:hover{
  color: black;
}
.welcome{
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  display: flex;
}
.ml2 {
  z-index: 3;
  font-weight: 900;
  font-size: 3.5em;
}
.ml2 .letter {
  display: inline-block;
  line-height: 1em;
  font-size: 10vw;
}
.ml4 {
  position: absolute;
  font-weight: 900;
  font-size: 4.5em;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
.ml4 .letters {
  position: absolute;
  margin: auto;
  text-align: center;
  opacity: 0;
  font-size: 20vw;
}
.colorRed{
  color: rgba(218, 35, 22);
}
</style>
