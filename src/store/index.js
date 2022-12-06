import {createStore } from 'vuex';

export default createStore(
    {
        state:{
            cartList: [],
            wishList: [
                {id: 1, name: 'IPod',price:300, registered: false},
                {id: 2, name: 'Watch-Apple',price:350, registered: false},
                {id: 3, name: 'Iphone14',price:920, registered: false},
                {id: 4, name: 'Mac-Mini',price:799, registered: false}
            ]
        },
        getters:{
            wishlistItems(state){
                return state.wishList.filter(user=>{
                    return !user.registered;
                })
            },
            cartItems(state){
                return state.cartList;
            },
            totalCartItems(state){
                return state.cartList.length;
            }
            
        },
        mutations:{
            addToCart(state,item){
                const newItem = state.wishList.find(e => e.id == item.id);

                newItem.registered = true;
                state.cartList.push(newItem);
            },
            removeFromCart(state,item){
                const currentItem = state.wishList.find(e => {
                    return e.id == item.id;
                });
                currentItem.registered = false;
                state.cartList.splice(state.cartList.indexOf(item), 1);
            
            }
        }
    }
)