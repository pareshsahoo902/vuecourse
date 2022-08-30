<template>
  <div>
  <Home v-bind:title="title" />
  
  <button @click="showPopup = true">Open Popup</button>

  <Popup v-show="showPopup" 
  @submit="submitPopup" 
  @closePopup="showPopup = false"
  />
</div>
</template>

<script>
import Home from './components/Home.vue';
import Popup from './components/Popup.vue';
export default {
  name: 'App',
  components: {
    Home,
    Popup
},
  data(){
    return{
      title:"MainPage",
      showPopup:false
    }
  },
  methods:{
    submitPopup:function(text){
      this.title = text;
      this.showPopup = false;
    }
  }
}
</script>

