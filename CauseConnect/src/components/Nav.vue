<script>
import RealTimeClock from './RealTimeClock.vue';

export default {
  name: "Navi",
  data() {
    return {
      isLoggedIn: false, // 仮のログイン状態。テスト用に切り替え可能
    };
  },
  methods: {
    // ロゴをクリックした時にトップページに遷移
    goToHome() {
      this.$router.push("/");
    },

    // 依頼するボタンをクリックした時にTokoページに遷移
    goToToko() {
      this.$router.push("/Toko");
    },

    // ログイン状態を切り替える
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn;
    },

    // ログアウト処理（仮の処理）
    logout() {
      this.isLoggedIn = false;
      alert("ログアウトしました");
      this.$router.push("/");
    },
  },
  components: {
    RealTimeClock,
  },
};
</script>


<template>
  <header class="nav">
    <!-- サイトロゴ（クリックでトップページへ遷移） -->
    <div class="logo" @click="goToHome">
      <img src="../assets/CC_logo.png" />
    </div>

    <!-- ナビゲーションメニュー -->
    <nav class="nav-links">
      <router-link to="/">
        <button class="btn1">Home</button>
      </router-link>

      <router-link to="/list">
        <button class="btn1">依頼一覧</button>
      </router-link>

      <!-- ログイン状態に応じて表示切り替え -->
      <div v-if="isLoggedIn">
        <router-link to="/mypage">
          <button class="btn1">マイページ</button>
        </router-link>
        <button class="btn1" @click="logout">ログアウト</button>
      </div>
      <div v-else>
        <router-link to="/login">
          <button class="btn1">ログイン</button>
        </router-link>
        <router-link to="/register">
          <button class="btn1">新規登録</button>
        </router-link>
      </div>

      <router-link to="/info">
        <button class="btn1">当サイトについて</button>
      </router-link>

      <router-link to="/FAQ">
        <button class="btn1">FAQ</button>
      </router-link>
    </nav>

    <RealTimeClock />


    <!-- 依頼するボタン -->
    <div>
      <button class="btn1" @click="goToToko">依頼する</button>
    </div>
  </header>
      <!-- テスト用のログイン切り替えボタン -->

  <div>
      <button class="btn2" @click="toggleLogin">
        {{ isLoggedIn ? "ログイン状態をオフにする" : "ログイン状態をオンにする" }}
      </button>
    </div>

</template>

<style scoped>
/* ナビバー全体のスタイル */
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: white;
  padding: 0.5rem 1rem;
  flex-wrap: wrap; /* 必要に応じて折り返しを許容 */
}

/* ロゴのスタイル */
.logo img {
  height: 40px;
  cursor: pointer;
}

/* ナビゲーションリンクのスタイル */
.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-links button {
  font-family: "Zen Maru Gothic", serif;
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

.nav-links button:hover {
  text-decoration: underline;
}

/* 依頼するボタンのスタイル */
div {
  display: inline-flex; /* ボタンが横に並ぶように変更 */
  align-items: center;
  gap: 10px; /* ボタン間の余白を調整 */
}

div button {
  font-family: "Zen Maru Gothic", serif;
  background-color: #f7a400;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}

div button:hover {
  background-color: #ff8c00;
}

/* テスト用ボタンのスタイル */
.btn2 {
  font-family: "Zen Maru Gothic", serif;
  background-color: #007bff;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.btn2:hover {
  background-color: #0056b3;
}

/* レスポンシブデザイン */
@media (max-width: 768px) {
  .nav {
    flex-direction: column; /* 狭い画面では縦並び */
    align-items: flex-start;
  }

  .nav-links {
    flex-direction: column;
    gap: 0.5rem;
  }

  div {
    flex-direction: column; /* ボタンも縦に並ぶ */
  }
}
</style>
