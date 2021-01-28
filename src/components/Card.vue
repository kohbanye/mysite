<template>
  <div :class="$style.container">
    <div :class="$style.me">
      <img src="../assets/monar.png" :class="$style.icon" />
      <p :class="$style.name">Koh Sakano</p>
    </div>
    <p :class="$style.introduce">
      こんにちは。
      <br />
      楽しく生きてます。
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Card',
  setup() {
    return {}
  }
})
</script>

<style lang="scss" module>
.container {
  background-color: #0095a8;
  text-align: center;
  border-radius: 0.5rem;
  padding: 1rem;
}
.me {
  display: flex;
  justify-content: left;
  margin-left: 1rem;
  .icon {
    height: 4rem;
    border-radius: 2rem;
  }
  .name {
    color: #ffffff;
    font-family: 'Varela Round', sans-serif;
    font-size: 1.5rem;
    margin: auto 0 auto 1rem;
  }
}
.introduce {
  color: #ffffff;
}

@media screen and (min-width: 960px) {
  br {
    display: none;
  }
}

@media screen and (max-width: 480px) {
  .me {
    margin-left: 0;
    .icon {
      max-height: 3rem;
    }
  }
}
</style>
