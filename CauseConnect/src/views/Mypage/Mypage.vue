<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import PhotoUploader from './Component/PhotoUploader.vue';
// ユーザー情報を保持
const user = reactive({
  password: "",
  nickname: "",
  name: "",
  kana: "",
  birth: "",
  sex: "",
  tel: "",
  email: "",
  intro: "",
});

// フィードバック用メッセージ
const message = ref("");

// フォーム送信処理
const updateProfile = async () => {
  try {
    // サーバーに送信するデータ
    const payload = { ...user };

    // API リクエスト送信
    const response = await axios.post("/mypage/update", payload);

    // 成功時のメッセージ
    message.value = response.data.message || "プロフィールを更新しました。";
  } catch (error) {
    console.error("プロフィールの更新に失敗しました", error);
    message.value = "プロフィールの更新に失敗しました。";
  }
};
</script>

<template>
    <PhotoUploader/>
    <div class="mypage-container">
      <h1>マイページ - 会員情報編集</h1>
      <form @submit.prevent="updateProfile">
        <!-- パスワード -->
        <div class="form-group">
          <label for="password">パスワード</label>
          <input
            type="password"
            id="password"
            v-model="user.password"
            placeholder="新しいパスワードを入力してください"
          />
        </div>
  
        <!-- ニックネーム -->
        <div class="form-group">
          <label for="nickname">ニックネーム</label>
          <input
            type="text"
            id="nickname"
            v-model="user.nickname"
            placeholder="ニックネームを入力してください"
          />
        </div>
  
        <!-- 名前 -->
        <div class="form-group">
          <label for="name">名前</label>
          <input
            type="text"
            id="name"
            v-model="user.name"
            placeholder="名前を入力してください"
          />
        </div>
  
        <!-- カナ -->
        <div class="form-group">
          <label for="kana">カナ</label>
          <input
            type="text"
            id="kana"
            v-model="user.kana"
            placeholder="カナを入力してください"
          />
        </div>
  
        <!-- 生年月日 -->
        <div class="form-group">
          <label for="birth">生年月日</label>
          <input type="date" id="birth" v-model="user.birth" />
        </div>
  
        <!-- 性別 -->
        <div class="form-group">
          <label for="sex">性別</label>
          <select id="sex" v-model="user.sex">
            <option value="" disabled>性別を選択してください</option>
            <option value="男性">男性</option>
            <option value="女性">女性</option>
            <option value="その他">その他</option>
          </select>
        </div>
  
        <!-- 電話番号 -->
        <div class="form-group">
          <label for="tel">電話番号</label>
          <input
            type="tel"
            id="tel"
            v-model="user.tel"
            placeholder="電話番号を入力してください"
          />
        </div>
  
        <!-- メールアドレス -->
        <div class="form-group">
          <label for="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            v-model="user.email"
            placeholder="メールアドレスを入力してください"
          />
        </div>
  
        <!-- 自己紹介 -->
        <div class="form-group">
          <label for="intro">自己紹介</label>
          <textarea
            id="intro"
            v-model="user.intro"
            placeholder="自己紹介を記入してください"
            rows="5"
          ></textarea>
        </div>
  
        <!-- 更新ボタン -->
        <button type="submit">更新する</button>
      </form>
      <p v-if="message" class="message">{{ message }}</p>
    </div>
  </template>
  <style scoped>
  .mypage-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input,
  select,
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #f7a400;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #ff8c00;
  }
  
  .message {
    margin-top: 15px;
    color: green;
    text-align: center;
  }
  </style>
  