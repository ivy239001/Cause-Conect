<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import PhotoUploader from "./Component/PhotoUploader.vue";
import CheckLoginStatus from "@/components/CheckLoginStatus.vue";

// 登録または更新モードの切り替えフラグ
const isRegistrationMode = ref(true); // 初期値: 新規登録モード

// ユーザー情報
const user = reactive({
  password: "",
  confirmPassword: "", // 新規登録用: パスワード確認
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

// ログイン状態の確認結果を受け取る
const handleLoginStatusChecked = (isLoggedIn) => {
  isRegistrationMode.value = !isLoggedIn; // ログインしていれば更新モード、未ログインなら登録モード
};

// フォーム送信処理
const submitForm = async () => {
  try {
    const payload = { ...user };

    const endpoint = isRegistrationMode.value ? "/register" : "/mypage/update";
    const response = await axios.post(endpoint, payload);

    message.value =
      response.data.message ||
      (isRegistrationMode.value
        ? "新規登録が完了しました。"
        : "プロフィールを更新しました。");
  } catch (error) {
    console.error(
      isRegistrationMode.value ? "新規登録失敗" : "プロフィール更新失敗",
      error
    );
    message.value =
      isRegistrationMode.value
        ? "新規登録に失敗しました。"
        : "プロフィールの更新に失敗しました。";
  }
};
</script>

<template>
  <!-- ログイン状態確認 -->
  <CheckLoginStatus @login-status-checked="handleLoginStatusChecked" />

  <PhotoUploader />
  <div class="mypage-container">
    <h1>{{ isRegistrationMode ? "新規登録" : "マイページ - 会員情報編集" }}</h1>
    <form @submit.prevent="submitForm">
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

      <!-- パスワード -->
      <div class="form-group">
        <label for="password">パスワード</label>
        <input
          type="password"
          id="password"
          v-model="user.password"
          placeholder="パスワードを入力してください"
        />
      </div>

      <!-- 新規登録専用フィールド -->
      <div class="form-group" v-if="isRegistrationMode">
        <label for="confirm-password">パスワード確認</label>
        <input
          type="password"
          id="confirm-password"
          v-model="user.confirmPassword"
          placeholder="確認用パスワードを入力してください"
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

      <!-- 送信ボタン -->
      <button type="submit">
        {{ isRegistrationMode ? "登録する" : "更新する" }}
      </button>
    </form>
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<style scoped>
.mypage-container {
  font-family: "Zen Maru Gothic", serif;
  max-width: auto;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
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
  font-family: "Zen Maru Gothic", serif;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  font-family: "Zen Maru Gothic", serif;
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
