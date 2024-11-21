<!-- JavaScriptのコードを書きます-->
<!-- データやアプリケーションの動作を定義します -->

<script setup lang="ts">
import {ref} from "vue"

const explanation = ref("ここにサイトの説明文入る")

import LoginView from './views/LoginForm/LoginView.vue';

import webFontLoader from 'webfontloader';

export default defineNuxtPlugin( nuxtApp => {
  webFontLoader.load({
    google: {
      families: [
        'Roboto:100,300,400,500,700,900',
        'Lato:100,300,400,700,900',
        'Rubik+Microbe:400',
        'Patrick+Hand:400',
        'Noto+Sans+JP:400,700'
      ],
    },
  })
});

</script>


<!-- HTMLのようなマークアップを記述します -->
<!-- 画面に表示される内容を定義します-->

<template>
    <div id="app">
        <!-- ここに他のコンポーネントやHTMLを追加します -->
    </div>

    <v-container>
    <p class="default-font">Roboto</p>
    <p class="default-font">日本語はこんな感じ</p>
    <p class="extra-font">Rubik Microbe</p>
    <p class="extra-font2">Patrick Hand</p>
    <p class="extra-font3">Lato</p>
    <p class="extra-font4">日本語はこんな感じ</p>
    </v-container>

    <main>
        <!--<LoginView/>-->
        <QandA/>
    </main>

</template>


<!-- CSSのコードを書きます。アプリケーションの見た目を整えます。-->

<style>
.default-font {
  font-size: xx-large;
}
.extra-font {
  font-family: 'Rubik Microbe';
  font-size: xx-large;
}
.extra-font2 {
  font-family: 'Patrick Hand';
  font-size: xx-large;
}
.extra-font3 {
  font-family: 'Lato', sans-serif !important;
  font-size: xx-large;
}
.extra-font4 {
  font-family: 'Noto Sans JP', sans-serif !important;
  font-size: xx-large;
}
</style>
