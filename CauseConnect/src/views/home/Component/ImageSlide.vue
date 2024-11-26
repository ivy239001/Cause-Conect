<script>
import { onMounted, onBeforeUnmount } from 'vue';
import sample1 from '@/assets/img/sample1.jpg';
import sample2 from '@/assets/img/sample1.jpg';
import sample3 from '@/assets/img/sample1.jpg';
import sample4 from '@/assets/img/sample1.jpg';
import sample5 from '@/assets/img/sample2.jpg';

export default {
  name: "ImageSlide",
  data() {
    return {
      images: [sample1, sample2, sample3, sample4, sample5],
      currentSlide: 0,
      slideWidth: 600,
      imageGap: 300,
      slideWidthWithGap: 900,
      intervalId: null, // スライドの自動進行ID
    };
  },

  computed: {
    imageWrapperStyle() {
      return {
        transform: `translateX(-${this.currentSlide * this.slideWidthWithGap}px)`,
        transition: 'transform 0.5s ease-in-out',
      };
    },
  },
  methods: {
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    setImageWidth() {
      this.slideWidth = window.innerWidth < 600 ? window.innerWidth - 40 : 600;
      this.slideWidthWithGap = this.slideWidth + this.imageGap;
    },
    autoSlide() {
      this.intervalId = setInterval(this.nextSlide, 3000);
    },
    stopAutoSlide() {
      clearInterval(this.intervalId);
    },
  },
  watch: {
    slideWidth(newWidth) {
      this.slideWidthWithGap = newWidth + this.imageGap;
    },
  },
  onMounted() {
    this.setImageWidth();
    window.addEventListener('resize', this.setImageWidth);
    this.autoSlide();
  },
  onBeforeUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    window.removeEventListener('resize', this.setImageWidth);
  },
};
</script>

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
    <button class="prev" @click="prevSlide" aria-label="Previous Slide">←</button>
    <button class="next" @click="nextSlide" aria-label="Next Slide">→</button>
  </div>
</template>


<style scoped>
.slide-container {
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}

.image-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide-image {
  width: 600px;
  height: 400px;
  object-fit: cover;
  margin-right: 30px;
  border-radius: 10px;
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
  z-index: 2;
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
