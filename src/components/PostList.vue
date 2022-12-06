<template>
    <div>
    <button @click="getPosts">Load Posts</button>
    <div v-for="post in posts" :key="post.id">
        <h3>{{post.id}} . {{post.title}}</h3>
        <p>{{post.body}}</p>
        <hr />
    </div>
    </div>
</template>

<script>

import axios from 'axios';
export default {
    name:'Post-List',
    data(){
        return{
            posts:[],
        }
    },
    methods:{
        getPosts(){
            axios.get('/posts')
            .then(res=>{
                console.log("object",res.data);
                this.posts = res.data;
            }).catch(err=>{
                console.error("Error",err)
            })
        }
    }
}
</script>

<style>

</style>