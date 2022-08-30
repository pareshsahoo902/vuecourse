<!-- If the volume reaches 16 give a warning -->
<template>
  <div>
    <Greet name="John" />
    <Greet name="Emily" />
    <Greet name="James" />
</div>
</template>

<script>
import Greet from './components/Greet.vue';

export default {
    name: "App",
    components: { Greet }
}
</script>

