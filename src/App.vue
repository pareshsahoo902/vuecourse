<!-- If the volume reaches 16 give a warning -->
<template>
  <div>
    <h2>Volume Tracker (0 - 20)</h2>
    <h3>Current Volume: {{volume}}</h3>
    <button @click="volume = volume + 2" >Increase</button>
    <button  @click="volume = volume - 2" >Decrease</button>
</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      volume : 0,
    }
  },
  watch:{
    volume(newVal,oldVal){
      newVal == 16  && newVal > oldVal?alert('High Volume Warning!'):null
    }
  }
}
</script>

