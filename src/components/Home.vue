<template>
    <div>
        <h1 v-on:click="changeTitle">{{title}}</h1>
        
    </div>
</template>

<script>
export default {
    name:"Home-Vue",
    props:{
        title:{
            type:String
        }
    }
};
</script>
