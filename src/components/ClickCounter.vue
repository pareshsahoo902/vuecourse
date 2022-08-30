<template>
  <div>
    <button @click="incrementCount">CLicked {{count}} Times</button>
  </div>
</template>
<!-- mixins get 2nd priority -->
<script>
import CounterMixin from '../mixins/counter'
export default {
    name: 'Click-Counter',
    mixins:[CounterMixin]
}
</script>

<style>

</style>