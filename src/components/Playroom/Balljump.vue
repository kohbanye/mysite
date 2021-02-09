<template>
  <div :class="$style.container" ref="divRef">
    <canvas ref="canvasRef" :class="$style.canvas"></canvas>
    <div v-if="isGameOver" :class="$style.gameover">
      <div :class="$style.text">
        <div :class="$style.gameover_text">Game Over</div>
      </div>
      <div :class="$style.text">
        <div :class="$style.score_text">
          Your record is <span :class="$style.score">{{ score }}</span>
        </div>
      </div>
      <div :class="$style.text">
        <div :class="$style.replay_text" @click="restart">replay</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { game } from './Balljump'

export default defineComponent({
  name: 'balljump',
  components: {},
  setup() {
    const canvasRef = ref<HTMLCanvasElement>()
    const divRef = ref<HTMLDivElement>()

    const isGameOver = ref(false)
    const score = ref('')

    onMounted(() => {
      game(canvasRef, divRef, isGameOver, score)
    })

    const restart = () => {
      isGameOver.value = false
      game(canvasRef, divRef, isGameOver, score)
    }

    return { canvasRef, divRef, isGameOver, restart, score }
  }
})
</script>

<style lang="scss" module>
.container {
  touch-action: manipulation;
  width: 100vw;
  max-width: 800px;
  height: 100vh;
  margin: auto;
  padding-top: calc((100vh - min(100vh - 6px, 700px)) / 2);
}
.canvas {
  background-image: url('../../assets/brick.png');
}
.gameover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 70vw;
  max-width: 500px;
  height: 45vw;
  max-height: 300px;
  font-family: sans-serif;
  background: #000000;
  .text {
    text-align: center;
    color: #ffffff;
    .gameover_text {
      font-size: 40px;
      padding-top: 8%;
      padding-bottom: 8%;
    }
    .score_text {
      font-size: 20px;
      padding-bottom: 5%;
      .score {
        color: #00ff55;
      }
    }
    .replay_text {
      display: inline;
      font-size: 25px;
      border: solid 2px #ffffff;
      padding: 2px 6px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
