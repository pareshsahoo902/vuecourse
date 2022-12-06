<template>
    <div id="registrations">
        <div class="summary">
            <h3>My Cart</h3>
            <h5>Total Item: {{ total }}</h5>
        </div>
        <hr>
        <div class="row" v-for="item in cartItems" :key="item.id">
            <h4>{{ item.name }}</h4>
            <div class="price">{{ '$'+ item.price }}</div>
            <span @click="removeFromCart(item)">(remove)</span>
            
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        
        name:'Registrations-Comp',
        
        methods: {
            removeFromCart(item) {
               this.$store.commit('removeFromCart',item);
            }
        },
        computed: {
            
            ...mapGetters({
                total:'totalCartItems',
                cartItems:'cartItems'
            })
           
        }
        
    }
    
</script>

<style scoped>
    #registrations {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
        text-align: left;
    }
    .summary {
        text-align: center;
    }
    .row{
        justify-content: space-between;
        display: flex;
    }
    .row h4 {
        display: inline-block;
        width: 30%;
        margin: 0 0 10px 0;
        box-sizing: border-box;
    }
    .row span {
        width: 30%;
        color: red;
        cursor: pointer;
    }
    .row span:hover {
        color: darkred;
    }
    .price {
        display: inline-block;
        width: 38%;
        text-align: right;
        box-sizing: border-box;
    }
</style>