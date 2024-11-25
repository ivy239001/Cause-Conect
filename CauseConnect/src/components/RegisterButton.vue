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
    <button class="register-button" @click="goToRegister">新 規 登 録 は こ ち ら</button>
  </template>


  <style scoped>
  .register-button {
    background-color: #f7a400;
    color: rgb(45, 45, 45);
    border: none;
    padding: 15px; /* 適切なパディングを設定 */
    font-family: "Zen Maru Gothic", serif;
    font-size: 30px;
    cursor: pointer;
    border-radius: 5px;
    width: 100%; /* ボタンの幅を画面いっぱいに広げる */
    box-sizing: border-box; /* パディングやボーダーを含む幅指定 */
}

  .register-button:hover {
    background-color: #ff8c00;
  }
  </style>
