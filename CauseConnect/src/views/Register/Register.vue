<template>
  <div class="register-page">
    <h1>新規登録</h1>
    <form @submit.prevent="registerUser">

      <label for="email">メールアドレス:</label>
      <input type="email" id="email" v-model="email" placeholder="メールアドレスを入力" />

      <label for="password">パスワード:</label>
      <input type="password" id="password" v-model="password" placeholder="パスワードを入力" />

      <button type="submit">登録</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const password = ref('')
const message = ref('')

const registerUser = async () => {
  try {
    const response = await axios.post('/register', {
      email: email.value,
      password: password.value
    })

    message.value = response.data.message
  } catch (error) {
    if (error.response && error.response.data) {
      message.value = error.response.data.message || '登録に失敗しました'
    } else {
      message.value = 'サーバーエラーが発生しました'
    }
  }
}
</script>

<style scoped>
.register-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
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
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  background-color: #ffcb60;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #feb626;
}

p {
  margin-top: 15px;
  color: green;
  text-align: center;
}
</style>
