<template>
  <div :class="$style.container">
    <h1 :class="$style.hello">Hello.</h1>
    <card :class="$style.card" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from './components/Card.vue'

export default defineComponent({
  name: 'App',
  components: {
    Card
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" module>
@import url('https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

html {
  background-color: #fef8ec;
}
.container {
  padding: 10rem 0;
}
.hello {
  color: #0095a8;
  text-align: center;
  font-family: 'Varela Round', sans-serif;
  font-size: 4rem;
  margin: 0;
  margin-bottom: 18rem;
}
.card {
  width: 50%;
  margin: 0 auto;
}
</style>
