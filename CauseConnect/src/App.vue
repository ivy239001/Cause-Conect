<!-- JavaScriptのコードを書きます-->
<!-- データやアプリケーションの動作を定義します -->

<script setup lang="ts">
import {ref} from "vue"

import QandA from './views/QandA/QandA.vue'
import Nav from './components/Nav.vue'


</script>


<!-- HTMLのようなマークアップを記述します -->
<!-- 画面に表示される内容を定義します-->

<template>
  <head>
    <Nav/>
  </head>
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
</style>
