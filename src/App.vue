<!-- THIS set of code will hide and unhide the text -->
<!-- <template>
  <div>
      <button @click='show = !show'>Show/Hide</button>
      <span v-show="show">Click to hide this text</span>
  </div>
</template>
<script>
export default {
  name: 'toggle-button',
   data:  function(){
    return {
      show: true
    }
   }
}
</script> -->

<!-- 
This set of code is to check if the age is more than 18 then enable the button
<template>
  <div>
      <input v-model.number="age" type="number" placeholder="Age" />
      <button :disabled="underAge" id="btn" onclick="alert('Buy stuff')">Buy stuff</button>
  </div>
</template>
<script>
export default {
  name: 'conditional-disabling',
   data: function () {
    return {
      age: null
    };
   },
  computed: {
    underAge: function () {
      return this.age < 18;
    }
  }
}
</script> -->

<!-- This set of code is a simple example of todo app -->
<template>
  <div>
      <input v-model="item" type="text" placeholder="item" />
      <button @click="addItem">Add</button>
      <ul>
         <li v-for="todo in todos" :key="todo">
           {{ todo }}
         </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'to-do',
   data: function () {
    return {
      todos: [],
      item: ""
    };
   },
   methods: {
     addItem() {
       this.todos.push(this.item);
       this.item = "";
     }
   }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
