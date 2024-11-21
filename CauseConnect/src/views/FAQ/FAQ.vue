<template>
    <div class="faq-container">
      <h1 class="faq-title">よくある質問</h1>
      <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
        <div class="faq-question" @click="toggleAnswer(index)">
          <span>{{ faq.question }}</span>
          <span>{{ activeIndex === index ? '▲' : '▼' }}</span>
        </div>
        <div class="faq-answer" v-if="activeIndex === index">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: null, // 現在表示されている質問のインデックス
        faqs: [
          { question: '会員登録は無料ですか？', answer: 'はい、会員登録は完全に無料です。' },
          { question: 'パスワードを忘れた場合はどうすればいいですか？', answer: 'ログイン画面の「パスワードを忘れた方」リンクをクリックしてください。' },
          { question: '退会するにはどうしたらいいですか？', answer: '設定ページの「退会する」ボタンから退会手続きができます。' }
        ]
      };
    },
    methods: {
      toggleAnswer(index) {
        this.activeIndex = this.activeIndex === index ? null : index;
      }
    }
  };
  </script>
  
  <style scoped>
  .faq-container {
    max-width: 600px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
  }
  
  .faq-title {
    text-align: center;
    margin: 20px 0;
    font-size: 24px;
    color: #333;
  }
  
  .faq-item {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  
  .faq-question {
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .faq-answer {
    margin-top: 5px;
    padding-left: 10px;
    color: #555;
  }
  </style>
  