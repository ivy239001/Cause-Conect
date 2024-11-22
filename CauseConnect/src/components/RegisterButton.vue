<script setup>
import { useRouter } from 'vue-router'

// 新規登録ページへ遷移するためのルーター設定
const router = useRouter()

// 新規登録ページに遷移するメソッド
const goToRegister = () => {
  router.push('/register')  // 新規登録ページに遷移
}
</script>

<template>
    <button class="register-button" @click="goToRegister">新 規 登 録</button>
  </template>


  <style scoped>
  .register-button {
    background-color: #FCAF17;
    color: white;
    border: none;
    padding: auto ;
    font-size: 30px;
    cursor: pointer;
    border-radius: 5px;
  }

  .register-button:hover {
    background-color: #e29e14;
  }
  </style>
