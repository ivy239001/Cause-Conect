<!-- JavaScriptのコードを書きます-->
<!-- データやアプリケーションの動作を定義します -->

<script setup lang="ts">
import {ref} from "vue"
const setsu1 = ref("ここに説明を入れます1")
const setsu2 = ref("ここに説明を入れます2")

import Navi from './components/Nav.vue'
import FAQ from './views/FAQ/FAQ.vue'


</script>


<!-- HTMLのようなマークアップを記述します -->
<!-- 画面に表示される内容を定義します-->

<template>
  <body>
    <h1 class="kosugi-maru-regular">
      <Navi/>
    </h1>
    <h1 class="kosugi-maru-regular">{{ setsu1 }}</h1>

    <h2 class="kosugi-maru-regular">
        <!--<LoginView/>-->

        <FAQ/>
    </h2>


  <div id="app">
    <!-- ここに他のコンポーネントやHTMLを追加します -->
    <h1 class="kosugi-maru-regular">{{ setsu2 }}</h1>
  </div>


</body>

</template>


<!-- CSSのコードを書きます。アプリケーションの見た目を整えます。-->

<style>
/* Google Fontsの読み込み */
@import url('https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap');

/* フォントスタイルの適用 */
.kosugi-maru-regular {
  font-family: "Kosugi Maru", sans-serif;
}
</style>
