<template>
    <div class="slideshow">
      <!-- 画像の表示 -->
      <img :src="currentImage" alt="スライド画像" class="slide-image" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'Slide', // コンポーネント名を Slide に変更
    data() {
      return {
        images: [require('@/assets/sample1.jpg'), require('@/assets/sample2.jpg')], // スライド画像
        currentIndex: 0, // 現在の表示インデックス
      };
    },
    computed: {
      currentImage() {
        return this.images[this.currentIndex]; // 現在の画像
      },
    },
    mounted() {
      // 3秒ごとにスライドを切り替える
      this.startSlideshow();
    },
    methods: {
      startSlideshow() {
        setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.images.length; // 次の画像に切り替え
        }, 3000); // 3000ミリ秒（3秒）
      },
    },
  };
  </script>
  
  <style scoped>
  .slideshow {
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .slide-image {
    width: 100%;
    max-width: 800px; /* 必要に応じてサイズを調整 */
    height: auto;
    object-fit: cover;
  }
  </style>
  