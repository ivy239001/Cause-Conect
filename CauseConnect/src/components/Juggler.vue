<script>
import image1 from '@/assets/img/Juggler/1.png';
import image2 from '@/assets/img/Juggler/2.png';
import image3 from '@/assets/img/Juggler/3.png';
import image4 from '@/assets/img/Juggler/4.png';
import image5 from '@/assets/img/Juggler/5.png';
import image6 from '@/assets/img/Juggler/6.png';
import image7 from '@/assets/img/Juggler/7.png';

export default {
  data() {
    return {
      images: [image1, image2, image3, image4, image5, image6, image7],
      leftImage: '',
      centerImage: '',
      rightImage: '',
    };
  },
  created() {
    this.setRandomImages();
  },
  methods: {
    setRandomImages() {
      // ランダムに画像を選択して代入
      this.leftImage = this.images[Math.floor(Math.random() * this.images.length)];
      this.centerImage = this.images[Math.floor(Math.random() * this.images.length)];
      this.rightImage = this.images[Math.floor(Math.random() * this.images.length)];
    },
  },
};
</script>

<template>
  <div class="gamen">
    <div class="left">
      <img :src="leftImage" alt="Left Image" />
    </div>
    <div class="center">
      <img :src="centerImage" alt="Center Image" />
    </div>
    <div class="right">
      <img :src="rightImage" alt="Right Image" />
    </div>
  </div>
  <p>保有枚数:</p>
  <p>結果:</p>
</template>

<style scoped>
.gamen {
  display: flex;
  align-items: center;
  margin: 20px;
}
.left, .center, .right {
  width: 100px; /* 画像サイズに応じて調整 */
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
