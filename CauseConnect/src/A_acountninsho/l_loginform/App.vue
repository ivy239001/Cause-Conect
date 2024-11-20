<template>
    <div id="app">
      <LoginForm />
    </div>
  </template>
  
  <script>
  import LoginForm from "./components/LoginForm.vue";
  
  export default {
    components: {
      LoginForm,
    },
  };
  </script>
  
  <style>
  body {
    font-family: Arial, sans-serif;
    background: #f5f5f5;
    margin: 0;
    padding: 0;
  }
  </style>
  