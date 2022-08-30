<!-- If the volume reaches 16 give a warning -->
<template>
  <div>
    <PostList />
</div>
</template>

<script>
import PostList from './components/PostList.vue';

export default {
    name: "App",
    components: { PostList }
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
