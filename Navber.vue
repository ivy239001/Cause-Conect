<script setup></script>

<template>
  <head> </head>

  <header>
    <div class="container flex header_inner">
      <p class="logo"><span>Cause </span> Connect</p>
      <nav>
        <ul class="header_menu flex">
          <li><a href="site">当サイトについて</a></li>
          <li><a href="like">お気に入り</a></li>
          <li><a href="history">履歴</a></li>
          <li><a href="mypage">マイページ</a></li>
          <li><a href="FandQ">FandQ</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=Zen+Maru+Gothic&display=swap');

template {
  font-family: 'Zen Maru Gothic', serif;
}

.container {
  width: 90%;
  max-width: 1120px;
  margin: 0 auto;
}

.flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

header .header_inner {
  padding: 20px 0;
  margin: 0 auto;
  padding: 0 3.125rem;
  box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.5);
  border-radius: 0 0 35px 35px;
  height: 6.125rem;
}

.logo {
  font-size: 24px;
  font-weight: 700px;
  letter-spacing: -0.04em;
  text-decoration: none;
}

.logo span {
  color: #f7a400;
}

/* #back_logo { */
/* background-image: url(../assets/CC_logo.png); */
/* background-position: right; */
/* background-size: cover; */
/* } */

/* .logo_img {
  transform: scale(0.2);
} */

.header_menu li {
  margin-left: 20px;
  list-style: none;
}

.header_menu li a:hover {
  color: #f7a400;
  transition: 0.3s;
  text-decoration: none;
}

.header_menu li a {
  transition: 0.3s;
  text-decoration: none;
}
</style>
