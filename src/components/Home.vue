<!-- DISPLAY NORMAL PROP -->
<!-- 
    <template>
    <div>
        <h1>Template in Vue.js</h1>
        <h1>{{name}}</h1>
    </div>
</template>

<script>
export default {
    name:"Home-Vue",
    data(){
        return{
            name:"JOHN DOE"
        }
        
    }
};
</script> -->


<!-- MAKE BUTTON CLICK -->

<template>
    <div>
        <h1>Template in Vue.js</h1>
        <h1>{{name}}</h1>
        <button v-on:click="greet">Greet</button>
    </div>
</template>

<script>
export default {
    name:"Home-Vue",
    data(){
        return{
            name:"JOHN DOE"
        }
        
    },
    methods:{
        greet()
        {
            alert("Hello "+this.name);
            this.name = this.name.split(" ")[0]
        }
    }
};
</script>
