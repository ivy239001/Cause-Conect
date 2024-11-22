<template>
    <button class="register-button" @click="goToRegister">新規登録</button>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  // 新規登録ページへ遷移するためのルーター設定
  const router = useRouter()
  
  // 新規登録ページに遷移するメソッド
  const goToRegister = () => {
    router.push('/register')  // 新規登録ページに遷移
  }
  </script>
  
  <style scoped>
  .register-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .register-button:hover {
    background-color: #45a049;
  }
  </style>
  