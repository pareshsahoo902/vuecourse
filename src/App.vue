<!-- If the volume reaches 16 give a warning -->
<template>
  <div>
  <ClickCounter />
  <HoverCounter />
</div>
</template>

<script>
import ClickCounter from './components/ClickCounter.vue';
import HoverCounter from './components/HoverCounter.vue';

export default {
    name: "App",
    components: { ClickCounter, HoverCounter }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }
.centerDiv{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
