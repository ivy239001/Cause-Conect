<!-- JavaScriptのコードを書きます-->
<!-- データやアプリケーションの動作を定義します -->

<script setup lang="ts">
import {ref} from "vue"
const setsu1 = ref("ここに説明を入れます1")
const setsu2 = ref("ここに説明を入れます2")

import Nav from './components/Nav.vue'
import FAQ from './views/FAQ/FAQ.vue'


</script>


<!-- HTMLのようなマークアップを記述します -->
<!-- 画面に表示される内容を定義します-->

<template>
    <h2>
      <!--<LoginView/>-->
      <FAQ/>
  </h2>

  <h1>{{ setsu1 }}</h1>

  <div id="app">
      <!-- ここに他のコンポーネントやHTMLを追加します -->
  </div>

  <h1>{{ setsu2 }}</h1>

</template>


<!-- CSSのコードを書きます。アプリケーションの見た目を整えます。-->

<style>
</style>
