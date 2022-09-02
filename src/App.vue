<template>
  <div>
  <OptCounter />
  <ComCounter />
</div>
</template>

<script>
import OptCounter from './components/OptCounter.vue';
import ComCounter from './components/ComCounter.vue';

export default {
    name: "App",
    components: { OptCounter, ComCounter }
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
