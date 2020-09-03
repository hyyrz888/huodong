<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
@import 'assets/css/base.css';
@import 'assets/css/style.css';
body, html {
  width: 100%;
  height: 100%;
}
body{
  font-size: 14px;

  min-width: 1280px;
  font-family: "Microsoft YaHei", 微软雅黑, Arial, Helvetica, sans-serif;
  color: rgb(0, 0, 0);
  background-color: rgb(248, 249, 250);
  transform: translateZ(0px);
}

/*滚动条*/
::-webkit-scrollbar{
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-thumb {
  background: #c9c9c9;
  border-radius: 2px;
}
</style>
