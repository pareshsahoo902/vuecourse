<template>
    <div>
      <h1 @mouseover="incrementCount">CLicked {{count}} Times</h1>
    </div>
  </template>
  
  <script>
  export default {
      name: 'Hover-Counter',
      methods:{
          incrementCount : function(){
              this.count += 1
          }
      },
      data(){
          return{
              count: 0
          }
      }
  }
  </script>
  
  <style>
  
  </style>