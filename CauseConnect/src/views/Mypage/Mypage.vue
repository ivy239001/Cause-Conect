<script setup>
// `reactive` や `ref` はリアクティブなデータ管理に使用する
// `inject` は親コンポーネントから提供されたデータを受け取る
import { reactive, ref, inject } from "vue";

// `axios` を使ってHTTPリクエストを送信
import axios from "axios";

// コンポーネントのインポート（写真アップロード、ログイン状態確認用）
import PhotoUploader from "./Component/PhotoUploader.vue";
import CheckLoginStatus from "@/components/CheckLoginStatus.vue";

// ログイン状態を親コンポーネントから受け取る（`provide/inject` 機能を利用）
const isLoggedIn = inject("isLoggedIn"); // ログイン状態を共有

// ユーザー情報を管理するリアクティブなオブジェクト
const user = reactive({
  password: "",          // パスワード
  confirmPassword: "",   // 確認用パスワード（新規登録用）
  nickname: "",          // ニックネーム
  name: "",              // 名前
  kana: "",              // カナ
  birth: "",             // 生年月日
  sex: "",               // 性別
  tel: "",               // 電話番号
  email: "",             // メールアドレス
  prefecture: "",        // 都道府県
  address1: "",          // 住所1: 市町村
  address2: "",          // 住所2: 番地・建物名
  intro: "",             // 自己紹介
});

// 都道府県のリストを定義（プルダウンメニューで使用）
const prefectures = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県",
  "岐阜県", "静岡県", "愛知県", "三重県",
  "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
  "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県",
  "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
];

// フィードバックメッセージ（登録や更新の結果を表示）
const message = ref("");

// フォーム送信処理
const submitForm = async () => {
  console.log(user);
  // try {
  //   // ユーザー情報をコピーしてリクエストペイロードに設定
  //   const payload = { ...user };

  //   // ログイン状態によって送信先エンドポイントを切り替え
  //   const endpoint = isLoggedIn.value ? "/mypage/update" : "/register";

  //   // サーバーにHTTP POSTリクエストを送信
  //   const response = await axios.post(endpoint, payload);

  //   // サーバーからのレスポンスメッセージを設定
  //   message.value =
  //     response.data.message ||
  //     (isLoggedIn.value
  //       ? "プロフィールを更新しました。"
  //       : "新規登録が完了しました。");
  // } catch (error) {
  //   // エラー時の処理
  //   console.error(
  //     isLoggedIn.value ? "プロフィール更新失敗" : "新規登録失敗",
  //     error
  //   );
  //   message.value =
  //     isLoggedIn.value
  //       ? "プロフィールの更新に失敗しました。"
  //       : "新規登録に失敗しました。";
  // }
};
</script>

<template>
  <!-- ログイン状態確認コンポーネント -->
  <CheckLoginStatus />

  <!-- 写真アップロードコンポーネント -->
  <PhotoUploader />

  <div class="mypage-container">
    <!-- ページタイトルをログイン状態によって切り替え -->
    <h1>{{ isLoggedIn ? "マイページ - 会員情報編集" : "新規登録" }}</h1>

    <!-- フォーム開始 -->
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

      <!-- 確認用パスワード（新規登録時のみ表示） -->
      <div class="form-group" v-if="!isLoggedIn">
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

      <!-- 住所 -->
      <div class="form-group">
        <label for="prefecture">都道府県</label>
        <select id="prefecture" v-model="user.prefecture">
          <option value="" disabled>都道府県を選択してください</option>
          <option v-for="pref in prefectures" :key="pref" :value="pref">
            {{ pref }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="address1">住所1（市町村）</label>
        <input
          type="text"
          id="address1"
          v-model="user.address1"
          placeholder="市町村を入力してください"
        />
      </div>
      <div class="form-group">
        <label for="address2">住所2（番地・建物名）</label>
        <input
          type="text"
          id="address2"
          v-model="user.address2"
          placeholder="番地や建物名を入力してください"
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
        {{ isLoggedIn ? "更新する" : "登録する" }}
      </button>
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
