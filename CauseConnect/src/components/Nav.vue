<template>
  <header class="nav">
    <!-- サイトロゴ（クリックでトップページへ遷移） -->
    <div class="logo" @click="goToHome">
      <img src="" alt="サイトロゴ" />
    </div>

    <!-- ナビゲーションメニュー -->
    <nav class="nav-links">
      <button @click="goToFAQ">FAQ</button>
      <button @click="goToLogin">ログイン</button>
      <button @click="goToInfo">当サイトについて</button>
    </nav>

  </header>
  <div>
    <button @click="goToFAQ">FAQ</button>
  </div>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    // トップページに遷移
    goToHome() {
      this.$router.push("/");
    },
    // FAQページに遷移
    goToFAQ() {
      this.$router.push("/FAQ");
    },
    // ログインページに遷移
    goToLogin() {
      this.$router.push("/login");
    },
    // 当サイトについてページに遷移
    goToInfo() {
      this.$router.push("/info");  // 当サイトについてのページに遷移
    },
  },
};
</script>

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

/* レスポンシブデザイン */
@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
