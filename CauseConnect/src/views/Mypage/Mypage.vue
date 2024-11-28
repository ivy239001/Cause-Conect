<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import PhotoUploader from "./Component/PhotoUploader.vue";

// ユーザー情報を管理するリアクティブなオブジェクト
const user = reactive({
  confirmPassword: "1234",
  nickname: "ニックネーム",
  name: "ネーム",
  kana: "カナ",
  birth: "",
  sex: "",
  tel: "09012345678",
  email: "sample@ivy.co.jp",
  prefecture_id: null,  // 都道府県ID（nullからスタート）
  address1: "住所１",
  address2: "住所２",
  intro: "これはサンプルデータであらかじめ入力しています",
});

// 都道府県のリスト（IDと都道府県名のペア）
const prefectures = [
  { id: 1, name: "北海道" },
  { id: 2, name: "青森県" },
  { id: 3, name: "岩手県" },
  { id: 4, name: "宮城県" },
  { id: 5, name: "秋田県" },
  { id: 6, name: "山形県" },
  { id: 7, name: "福島県" },
  { id: 8, name: "茨城県" },
  { id: 9, name: "栃木県" },
  { id: 10, name: "群馬県" },
  { id: 11, name: "埼玉県" },
  { id: 12, name: "千葉県" },
  { id: 13, name: "東京都" },
  { id: 14, name: "神奈川県" },
  { id: 15, name: "新潟県" },
  { id: 16, name: "富山県" },
  { id: 17, name: "石川県" },
  { id: 18, name: "福井県" },
  { id: 19, name: "山梨県" },
  { id: 20, name: "長野県" },
  { id: 21, name: "岐阜県" },
  { id: 22, name: "静岡県" },
  { id: 23, name: "愛知県" },
  { id: 24, name: "三重県" },
  { id: 25, name: "滋賀県" },
  { id: 26, name: "京都府" },
  { id: 27, name: "大阪府" },
  { id: 28, name: "兵庫県" },
  { id: 29, name: "奈良県" },
  { id: 30, name: "和歌山県" },
  { id: 31, name: "鳥取県" },
  { id: 32, name: "島根県" },
  { id: 33, name: "岡山県" },
  { id: 34, name: "広島県" },
  { id: 35, name: "山口県" },
  { id: 36, name: "徳島県" },
  { id: 37, name: "香川県" },
  { id: 38, name: "愛媛県" },
  { id: 39, name: "高知県" },
  { id: 40, name: "福岡県" },
  { id: 41, name: "佐賀県" },
  { id: 42, name: "長崎県" },
  { id: 43, name: "熊本県" },
  { id: 44, name: "大分県" },
  { id: 45, name: "宮崎県" },
  { id: 46, name: "鹿児島県" },
  { id: 47, name: "沖縄県" },
];

// フィードバックメッセージ（登録や更新の結果を表示）
const message = ref("");

// フォーム送信処理
const submitForm = async () => {
  console.log(user); // 送信するデータの確認
  try {
    const payload = { ...user };
    const endpoint = 'http://172.16.3.136:8000/api/register'; // サーバーのフルURLを指定
    const response = await axios.post(endpoint, payload);  // サーバーにHTTP POSTリクエストを送信
    message.value = response.data.message || "新規登録が完了しました。";
  } catch (error) {
    // エラー時にレスポンスエラーの詳細をログに出力
    if (error.response) {
      console.error("APIエラーの詳細:", error.response.data);
      console.error("ステータスコード:", error.response.status);
      console.error("ヘッダー:", error.response.headers);
    } else {
      console.error("リクエストエラー:", error.message);
    }
    message.value = "新規登録に失敗しました。";
  }
};
</script>

<template>
  <!-- 写真アップロードコンポーネント -->
  <PhotoUploader />

  <div class="mypage-container">
    <!-- ページタイトルをログイン状態によって切り替え -->
    <h1>新規登録</h1>

    <!-- フォーム開始 -->
    <form @submit.prevent="submitForm">
      <!-- メールアドレス -->
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="user.email" placeholder="メールアドレスを入力してください" />
      </div>

      <!-- パスワード -->
      <div class="form-group">
        <label for="password">パスワード</label>
        <input type="password" id="password" v-model="user.password" placeholder="パスワードを入力してください" />
      </div>

      <!-- 確認用パスワード -->
      <div class="form-group">
        <label for="confirm-password">パスワード確認</label>
        <input type="password" id="confirm-password" v-model="user.confirmPassword" placeholder="確認用パスワードを入力してください" />
      </div>

      <!-- ニックネーム -->
      <div class="form-group">
        <label for="nickname">ニックネーム</label>
        <input type="text" id="nickname" v-model="user.nickname" placeholder="ニックネームを入力してください" />
      </div>

      <!-- 名前 -->
      <div class="form-group">
        <label for="name">名前</label>
        <input type="text" id="name" v-model="user.name" placeholder="名前を入力してください" />
      </div>

      <!-- カナ -->
      <div class="form-group">
        <label for="kana">カナ</label>
        <input type="text" id="kana" v-model="user.kana" placeholder="カナを入力してください" />
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
        <input type="tel" id="tel" v-model="user.tel" placeholder="電話番号を入力してください" />
      </div>

      <!-- 住所 -->
      <div class="form-group">
        <label for="prefecture_id">都道府県</label>
        <select id="prefecture_id" v-model="user.prefecture_id">
          <option value="" disabled>都道府県を選択してください</option>
          <option v-for="pref in prefectures" :key="pref.id" :value="pref.id">
            {{ pref.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="address1">住所1（市町村）</label>
        <input type="text" id="address1" v-model="user.address1" placeholder="市町村を入力してください" />
      </div>

      <div class="form-group">
        <label for="address2">住所2（番地・建物名）</label>
        <input type="text" id="address2" v-model="user.address2" placeholder="番地や建物名を入力してください" />
      </div>

      <!-- 自己紹介 -->
      <div class="form-group">
        <label for="intro">自己紹介</label>
        <textarea id="intro" v-model="user.intro" placeholder="自己紹介を記入してください" rows="5"></textarea>
      </div>

      <!-- 送信ボタン -->
      <button type="submit">登録する</button>
    </form>

    <!-- メッセージを表示 -->
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
