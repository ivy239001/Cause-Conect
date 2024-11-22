<template>
    <div class="info-page">
      <h1>当サイトについて</h1>
  
      <!-- 説明文1 -->
      <section class="info-section">
        <p>
          当サイトは、あなたのために様々なサービスを提供しています。簡単に情報を得られるよう、直感的に使えるインターフェースを心掛けています。
        </p>
        <!-- 新規登録ボタン -->
        <RegisterButton />
      </section>
  
      <!-- 説明文2 -->
      <section class="info-section">
        <p>
          新規登録を行うことで、さらに多くの機能にアクセスできるようになります。あなたに最適な情報を提供するため、是非ご登録ください。
        </p>
        <!-- 新規登録ボタン -->
        <RegisterButton />
      </section>
    </div>
  </template>
  
  <script setup>
  // RegisterButtonコンポーネントをインポート
  import RegisterButton from '@/components/RegisterButton.vue'
  </script>
  
  <style scoped>
  .info-page {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  
  .info-section {
    margin-bottom: 20px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  </style>
  