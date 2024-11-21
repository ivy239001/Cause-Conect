<!-- JavaScriptのコードを書きます-->
<!-- データやアプリケーションの動作を定義します -->

<script setup>
    import LoginView from './views/LoginForm/LoginView.vue';

    export default {
        name: 'App',
        components: {
        // ここに他のコンポーネントをインポートします
    }
    }

</script>


<!-- HTMLのようなマークアップを記述します -->
<!-- 画面に表示される内容を定義します-->

<template>
    <div id="app">
        <!-- ここに他のコンポーネントやHTMLを追加します -->
    </div>

    <main>
        <LoginView/>
    </main>

</template>
  
  
<!-- CSSのコードを書きます。アプリケーションの見た目を整えます。-->

<style>
    #app {
        /* スタイルをここに追加します */
    }
</style>
  