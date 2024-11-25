<template>
  <div class="slide-container">
    <!-- スライド表示のための画像のラッパー -->
    <div class="image-wrapper" :style="imageWrapperStyle">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt="スライド画像"
        class="slide-image"
        :style="{ width: slideWidth + 'px' }" /> <!-- 画像の幅をスライド幅に合わせる -->
    </div>

    <!-- 左右スクロールボタン -->
    <button class="prev" @click="prevSlide">←</button>
    <button class="next" @click="nextSlide">→</button>
  </div>
</template>

<script>
import sample1 from '@/assets/img/sample1.jpg'; // 画像1をインポート
import sample2 from '@/assets/img/sample2.jpg'; // 画像2をインポート
import sample3 from '@/assets/img/sample3.jpg'; // 画像3をインポート
import sample4 from '@/assets/img/sample4.jpg'; // 画像4をインポート
import sample5 from '@/assets/img/sample5.jpg'; // 画像5をインポート

export default {
  name: "ImageSlide",
  data() {
    return {
      images: [sample1, sample2, sample3, sample4, sample5], // 5枚の画像を配列に追加
      currentSlide: 0, // 最初のスライドを0（最初の画像）に設定
      slideWidth: 600, // 画像の幅（初期値）
      imageGap: 30, // 画像間の隙間
    };
  },
  computed: {
    // 画像をスライドさせるためのスタイル
    imageWrapperStyle() {
      const slideWidthWithGap = this.slideWidth + this.imageGap; // 画像の幅と隙間を合計
      return {
        transform: `translateX(-${this.currentSlide * slideWidthWithGap}px)`, // 現在のスライド位置を反映
        transition: 'transform 0.5s ease-in-out', // スライドの移動を滑らかに
      };
    },
  },
  methods: {
    // 左へスライド
    prevSlide() {
      // 現在のスライドを減算し、循環させる
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
    // 右へスライド
    nextSlide() {
      // 現在のスライドを加算し、循環させる
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    // 画像のサイズを動的に設定
    setImageWidth() {
      // 画面の幅に合わせて画像の幅を設定（例えば、600pxが基準）
      this.slideWidth = window.innerWidth < 600 ? window.innerWidth - 40 : 600; // 画面幅が600pxより小さければ自動調整
    },
  },
  mounted() {
    // コンポーネントがマウントされたときに画像の幅を設定
    this.setImageWidth();
    // ウィンドウリサイズ時にも画像の幅を更新
    window.addEventListener('resize', this.setImageWidth);
  },
  beforeDestroy() {
    // リサイズイベントの解除
    window.removeEventListener('resize', this.setImageWidth);
  }
};
</script>

<style scoped>
.slide-container {
  position: relative;
  width: 100%;
  /* max-width: 600px; */
  margin: 0 auto;
  overflow: hidden;
}

.image-wrapper {
  display: flex;
  width: 100%;
  transition: transform 0.5s ease-in-out;
}

.slide-image {
  height: auto; /* 画像の高さは自動調整 */
  margin-right: 50px; /* 画像間の隙間 */
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>
