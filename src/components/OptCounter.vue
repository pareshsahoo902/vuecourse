<template>
  <div>
    <h3>VUEX Counter Using OPTIONS API</h3>
    <h5>{{counter}} X 2 = {{times2}}</h5>
    <button @click="inc">Increment</button>
  </div>
</template>

<script>

import { mapGetters, mapState, mapMutations } from 'vuex';
export default {
    name:"Opt-Counter",
    computed:{
        ...mapState(['counter']),
        ...mapGetters(['times2'])
    },
    methods:{
        ...mapMutations(['setCounter']),
        inc(){
            this.$store.commit('setCounter',this.counter + 1);
        }
    }

}
</script>

<style>

</style>