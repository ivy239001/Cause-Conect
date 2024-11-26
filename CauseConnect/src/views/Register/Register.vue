<template>
  <div class="register-page">
    <h1>新規登録</h1>
    <form @submit.prevent="registerUser">
      <label for="email">メールアドレス:</label>
      <input type="email" id="email" v-model="email" placeholder="メールアドレスを入力" />

      <label for="password">パスワード:</label>
      <input type="password" id="password" v-model="password" placeholder="パスワードを入力" />

      <label for="password_confirmation">パスワード確認:</label>
      <input type="password" id="password_confirmation" v-model="password_confirmation" placeholder="パスワード確認を入力" />

      <button type="submit">登録</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from '@/axios'; // axios.jsをインポート

// 入力された値を保存するためのref
const email = ref('');
const password = ref('');
const password_confirmation = ref('');  // 新しい変数
const message = ref('');

// 登録処理
const registerUser = async () => {
  try {
    // バックエンドにPOSTリクエストを送信
    const response = await axios.post('/register', {
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value,  // 追加
    });

    // 成功した場合、レスポンスからメッセージを受け取り表示
    message.value = response.data.message;
  } catch (error) {
    // エラーハンドリング
    if (error.response && error.response.data) {
      message.value = error.response.data.message || '登録に失敗しました';
    } else {
      message.value = 'サーバーエラーが発生しました';
    }
  }
};
</script>

<style scoped>
.register-page {
  font-family: "Zen Maru Gothic", serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}
#email,
#password,
#password_confirmation{
  font-family: "Zen Maru Gothic", serif;
}



h1 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input {
  padding: 1px;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  font-family: "Zen Maru Gothic", serif;
  background-color: #ffcb60;
  color: white;
  border: none;
  padding: 20px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  box-shadow: 5px 5px 0 #ff8c00;

}

button::before {
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

button:hover {
  color: #333;
  background-color: #ff8c00;
  box-shadow: 0 0 0;
  transform: translate(5px, 5px);
}

p {
  margin-top: 15px;
  color: green;
  text-align: center;
}
</style>
