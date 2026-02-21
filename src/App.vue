<template>
  <router-view/>
</template>

<script>

</script>

<style>

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden; /* 强制干掉横向滚动条 */
}

/* 针对 WebKit 浏览器 (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  display: none; 
  width: 0;
  background: transparent;
}

/* 针对 Firefox */
html {
  scrollbar-width: none;
}

/* 针对 IE / Edge 老版本 */
body {
  -ms-overflow-style: none;
}
.el-main {
  --el-main-padding: 0px !important;
  padding: var(--el-main-padding);
}

/* 调整 SubMenu 标题区域高度 */
.el-sub-menu__title {
  height: 100px !important; /* 自定义高度 */
  line-height: 100px !important; /* 垂直居中 */
}

/* 调整菜单项高度（包括子菜单项） */
.el-menu-item {
  height: 70px !important;
  line-height: 70px !important;
  font-size: 17px!important;
  font-weight: bold;
}




</style>

