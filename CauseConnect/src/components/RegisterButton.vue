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
/*.register-button {
  background-color: #f7a400;
  color: rgb(45, 45, 45);
  border: none;
  padding: 15px; /* 適切なパディングを設定 */
/*  font-family: "Zen Maru Gothic", serif;
  font-size: 30px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%; /* ボタンの幅を画面いっぱいに広げる */
/*  box-sizing: border-box; /* パディングやボーダーを含む幅指定 */

.register-button{
  font-family: "Zen Maru Gothic", serif;
  /*border-color: #f7a400;
  background: #fff1d7;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 25px;
  color: #f7a400;
  transition: 0.3s ease-in-out;
  font-size: 30px;
  width: 100%;
  z-index:0;*/

  background: #eee;
  background: #eee;
  border-radius: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px 525px; /* 横幅を適切に調整 */
  color: #313131;
  transition: 0.3s ease-in-out;
  font-size: large;
  font-weight: 800;
  box-shadow: 5px 5px 0 #ff8c00;
    /* 一段落で表示させるスタイル */
  text-align: center;      /* テキストを中央揃え */
  line-height: 1.5;        /* 行間を調整 */
  white-space: normal;     /* 折り返しを有効化 */
  word-break: break-word;  /* 長い単語の折り返し */


}


.register-button::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 0;
  display: block;
  background: #ff8c00;
  transition: 0.3s;
  left: 0;
}

.register-button:hover {
  background-color: #ff8c00;
  box-shadow: 0 0 0;
  transform: translate(5px, 5px);
}

  </style>
