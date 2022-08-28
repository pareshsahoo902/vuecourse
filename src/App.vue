<!-- This set of code is a simple example of todo app -->
<!-- <template>
  <div>
      <h1 v-if="1==0">True statement</h1>
      <h1 v-else-if="10>6">Else True statement</h1>
      <h1 v-else>False statement</h1>




      
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
</script> -->


<template>
  <div class="container">
      <h3 class="p-3 text-center">Vue 3 - Display a list of items with v-for</h3>
      <table class="table table-striped table-bordered">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="user in users" :key="user.id">
                  <td>{{user.firstName}} {{user.lastName}}</td>
                  <td>{{user.email}}</td>
                  <td>{{user.role}}</td>
              </tr>
          </tbody>
      </table>
  </div>    
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
      // make users variable reactive with the ref() function
      const users = ref([
          { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User' },
          { firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin' },
          { firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' },
          { firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User' },
          { firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User' }
      ]);

      return {
          users
      };
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
