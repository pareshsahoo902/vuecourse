<template>
    <div id="registration">
        <h3>WishList</h3>
        <hr>
        <div class="row" v-for="item in Items" :key="item.id">
            <h4>{{ item.name }}</h4>
            <button @click="addToCart(item)">Add</button>
        </div>
    </div>
</template>

<script>
    export default {
        computed:{
            Items(){
                return this.$store.getters.wishlistItems;
            }
        },
        name:'regist-comp',
        methods: {
            addToCart(item){
               this.$store.commit('addToCart',item);
                
            }
        }
    }
</script>

<style scoped>
    #registration {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
    }
    .row h4 {
        display: inline-block;
        width: 70%;
        text-align: left;
        margin: 0 0 10px 0;
    }
    button {
        background-color: rgb(33, 199, 12);
        border: none;
        box-shadow: 1px 1px 1px black;
        font-size: inherit;
        text-align: right;
        cursor: pointer;
    }
    button:hover {
        background-color: rgb(175, 243, 239);
    }
</style>