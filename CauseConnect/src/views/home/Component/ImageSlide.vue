<script>
import { onMounted, onBeforeUnmount } from 'vue';
import RequestItem from '@/views/List/components/RequestItem.vue'; // RequestItemコンポーネントをインポート
export default {
  name: "ImageSlide",
  components: {
    RequestItem, // コンポーネントを登録
  },
  data() {
    return {
      // サンプルの依頼データ
      requests: [
        {
          id: 1,
          name: "地域美化活動",
          description: "地域の公園を掃除する活動です。",
          date: "2024-12-01",
          location: "東京都渋谷区",
        },
        {
          id: 2,
          name: "川の清掃",
          description: "河川敷のゴミ拾い活動を行います。",
          date: "2024-12-15",
          location: "神奈川県横浜市",
        },
        {
          id: 3,
          name: "山のトレイル整備",
          description: "登山道の整備活動です。",
          date: "2024-12-20",
          location: "長野県松本市",
        },
      ],
      currentSlide: 0,
      slideWidth: 600,
      imageGap: 30,
      slideWidthWithGap: 630,
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
      this.currentSlide = (this.currentSlide - 1 + this.requests.length) % this.requests.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.requests.length;
    },
    setSlideWidth() {
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
    this.setSlideWidth();
    window.addEventListener('resize', this.setSlideWidth);
    this.autoSlide();
  },
  onBeforeUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    window.removeEventListener('resize', this.setSlideWidth);
  },
};
</script>

<template>
  <div class="slide-container">
    <!-- スライド表示のためのコンポーネントのラッパー -->
    <div class="request-wrapper" :style="imageWrapperStyle">
      <RequestItem
        v-for="(request, index) in requests"
        :key="index"
        :request="request"
        :style="{ width: slideWidth + 'px' }" 
      />
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

.request-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
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
