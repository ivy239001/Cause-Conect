<script>
import RealTimeClock from './RealTimeClock.vue';


export default {
  name: "Navi",
  methods: {
    // ロゴをクリックした時にトップページに遷移
    goToHome() {
      this.$router.push("/");
    },

    // 依頼するボタンをクリックした時にTokoページに遷移
    goToToko() {
      this.$router.push("/Toko");
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
      <img src="../assets/CC_logo.png"/>
    </div>

    <!-- ナビゲーションメニュー -->
    <nav class="nav-links">
      <router-link to="/">
        <button class="btn1">Home</button>
      </router-link>

      <router-link to="/list">
        <button class="btn1">依頼一覧</button>
      </router-link>

      <router-link to="/Register">
        <button class="btn1">新規登録</button>
      </router-link>

      <router-link to="/login">
        <button class="btn1">ログイン</button>
      </router-link>

      <router-link to="/mypage">
        <button class="btn1">マイページ</button>
      </router-link>


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
}

/* ロゴのスタイル */
.logo img {
  height: 40px;
  cursor: pointer;
}

/* ナビゲーションリンクのスタイル */
.nav-links button {
  font-family: "Zen Maru Gothic", serif;

  background: none;
  border: none;
  color: white;
  margin: 0 0.5rem;
  font-size: 1rem;
  cursor: pointer;
}

.nav-links button:hover {
  text-decoration: underline;
}

/* 依頼するボタンのスタイル */
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

/* レスポンシブデザイン */
@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
