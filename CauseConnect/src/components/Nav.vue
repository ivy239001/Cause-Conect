<template>
  <header class="nav">
    <!-- サイトロゴ -->
    <div class="logo" @click="goToHome">
      <img src="" alt="サイトロゴ" />
    </div>

    <!-- ナビゲーションメニュー -->
    <nav class="nav-links">
      <button @click="goToFAQ">FAQ</button>
      <button @click="goToLogin">ログイン</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    // トップページに遷移
    goToApp() {
      this.$router.push("/");
    },
    // FAQページに遷移
    goToFAQ() {
      this.$router.push("/qanda");
    },
    // ログインページに遷移
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
/* ナビバー全体のスタイル */
.navbar {
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
