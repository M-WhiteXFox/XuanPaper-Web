<template>
  <!--  头-->
  <!--  <div>-->
  <!--    &lt;!&ndash; 头部 &ndash;&gt;-->
  <!--    <div-->
  <!--        ref="headerRef"-->
  <!--        class="header"-->
  <!--        :class="{ 'hidden': isHeaderHidden }"-->
  <!--    >-->
  <!--      &lt;!&ndash; 你的头部内容 &ndash;&gt;-->
  <!--      <div-->
  <!--          style="width: 100%;height: 90px;background-color: rgb(52, 52, 52); border-bottom: 1px solid #dcd3d3;display: flex;align-items: center;justify-content: center">-->
  <!--        <div>-->
  <!--          <a href="/">-->
  <!--            <img style="width: 92px;height: 92px;background-color:  #343434;margin-right: 300px"-->
  <!--                 src="imgs/home_img/R-C.png" alt="">-->
  <!--          </a>-->
  <!--        </div>-->

  <!--        <div>-->
  <!--          <el-link type="warning">-->
  <!--            <router-link to="/" class="top-guide">首页</router-link>-->
  <!--          </el-link>-->
  <!--          <el-link type="warning">-->
  <!--            <router-link to="/find" class="top-guide">发现</router-link>-->
  <!--          </el-link>-->
  <!--          <el-link type="warning">-->
  <!--            <router-link to="/scenic_spot_introduction" class="top-guide">景点介绍</router-link>-->
  <!--          </el-link>-->
  <!--          <el-link type="warning">-->
  <!--            <router-link to="/cultural_experience" class="top-guide">文化体验</router-link>-->
  <!--          </el-link>-->
  <!--          <el-link type="warning">-->
  <!--            <router-link to="/travel_guide" class="top-guide">旅游指南</router-link>-->
  <!--          </el-link>-->
  <!--          <el-link type="warning">-->
  <!--            <router-link to="/about_us" class="top-guide">关于我们</router-link>-->
  <!--          </el-link>-->
  <!--          <el-link type="warning">-->
  <!--            <router-link to="/connect_us" class="top-guide">联系我们</router-link>-->
  <!--          </el-link>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <div
      style="width: 100%;height: 100px;background-color: rgb(255,255,255); border-bottom: 1px solid #dcd3d3;display: flex;align-items: center;justify-content: center">
    <div>
      <!--      <p style="margin-top: 20px">导航条图片位置</p>-->
      <a href="/">
        <img style="width: 92px;height: 92px;background-color:  #ffffff;margin-right: 170px"
             src="imgs/home_img/logo.png"
             alt="">
      </a>

    </div>

    <div style="width: 700px;height: 100%;background-color: #ffffff;display: flex;align-items: center;gap: 25px;">

      <div class="top-guide-1" style="border-right: 1px dashed rgba(170,160,160,0.8);">
        <div class="top-guide-1-div-1">
          <el-icon color="#f6661e" size="large">
            <Comment/>
          </el-icon>
        </div>
        <div class="top-guide-1-div-2">
          <h3 class="top-h3">发送邮箱:</h3>
          <p class="top-p">1528027618@163.com</p>
        </div>
      </div>

      <div class="top-guide-1" style="border-right: 1px dashed rgba(170,160,160,0.8);">
        <div class="top-guide-1-div-1">
          <el-icon color="#f6661e" size="large">
            <LocationFilled/>
          </el-icon>
        </div>
        <div class="top-guide-1-div-2">
          <h3 class="top-h3">电话:</h3>
          <p class="top-p">028-12345678</p>
        </div>
      </div>

      <div class="top-guide-1">
        <div class="top-guide-1-div-1">
          <el-icon color="#f6661e" size="large">
            <Comment/>
          </el-icon>
        </div>
        <div class="top-guide-1-div-2">
          <h3 class="top-h3">地点:</h3>
          <p class="top-p">光华大道二段601号</p>
        </div>

      </div>

    </div>


  </div>


  <div
      style="width: 100%;height: 80px;background-color: rgb(0,0,0); border-bottom: 1px solid #dcd3d3;display: flex;align-items: center;justify-content: center">
    <div style="width: 962px;height: 100%;background-color: rgb(0,0,0);display: flex;align-items: center;">
      <div style="width: 837px;">

        <router-link to="/" class="top-guide">首页</router-link>

        <router-link to="/travel_guide" class="top-guide">旅游指南</router-link>

        <router-link to="/cultural_experience" class="top-guide">文化体验</router-link>

        <router-link to="/about_us" class="top-guide">关于我们</router-link>

        <router-link to="/connect_us" class="top-guide">联系我们</router-link>

      </div>
      <div style="width: 200px;height: 100%;background-color: #000000;display: flex;align-items: center;">
        <el-icon size="large" color="#f6661e">
          <UserFilled/>
        </el-icon>
        <el-divider direction="vertical" border-style="dashed"/>
        <router-link to="/connect_us">
          <el-button color="#f6661e" :dark="isDark" round style="width: 110px;height: 35px;color: white;">
            立即联系我们
          </el-button>
        </router-link>

      </div>


    </div>


  </div>

  <!--  身-->
  <router-view/>

  <!--  脚-->
  <div style="width: 100%;height: 420px;">
    <div style="width: 100%;height: 350px;background-color:#000a1f;display: flex;justify-content: center">

      <div
          style="width: 1000px;height: 50px;background-color: #000a1f;margin-top: 50px;display: flex;align-items: center;justify-content: center">

        <div class="bottom-top">
          <h6>联系我们</h6>
        </div>

        <div class="bottom-top">
          <h6>版权说明</h6>
        </div>

        <div class="bottom-top">
          <h6>友情链接</h6>
        </div>

        <div class="bottom-top">
          <h6>订阅我们</h6>
        </div>
      </div>

      <div
          style="width: 1000px;height: 180px;position: absolute;background-color: #000a1f;margin-top: 100px;display: flex">
        <div class="bottom-middle" style="background-color: #000a1f">
          <p class="bottom-fourOnOne">
            <el-icon>
              <PhoneFilled/>
            </el-icon>
            :19722768288
          </p>
          <p class="bottom-fourOnOne">
            <el-icon>
              <el-icon>
                <Comment/>
              </el-icon>
            </el-icon>
            :1528027618@163.com
          </p>
          <p class="bottom-fourOnOne">
            <el-icon>
              <LocationFilled/>
            </el-icon>
            :光华大道二段601号附1号国际非物质文化遗产博览园内
          </p>
        </div>

        <div class="bottom-middle" style="background-color: #000a1f">
          <p class="bottom-fourOnOne">
            本网站所有内容（包括但不限于文字、图片、音视频资料、网页设计等），均属于[网站名称]或其合作单位所有，受《中华人民共和国著作权法》及相关国际版权条约的保护。
            未经版权所有者书面许可，任何单位或个人不得以任何形式复制、传播、改编、展示或用于其他商业用途。如有侵权行为，请及时联系我们删除或更正。
            <br>联系邮箱：copyright@example.com
          </p>
        </div>

        <div class="bottom-middle" style="background-color: #000a1f;">
          <p class="bottom-fourOnOne">
            本网站致力于非物质文化遗产的保护与传播，以下为与我们合作或推荐的相关机构与平台，欢迎访问了解更多非遗相关内容。</p>
          <ul style="padding: 0">
            <li class="bottom-ul-li"><span>四川非遗:</span> <a href="https://ichsc.tsichuan.com/">
              https://ichsc.tsichuan.com/</a></li>
            <li class="bottom-ul-li"><span>中国非物质文化遗产网:</span> <a href=" https://www.ihchina.cn/">
              https://www.ihchina.cn/</a></li>
            <li class="bottom-ul-li"><span>四川省文化和旅游厅:</span> <a href="https://wlt.sc.gov.cn/">
              https://wlt.sc.gov.cn/</a></li>
            <li class="bottom-ul-li"><span>成都国际非遗博览园:</span> <a href="https://www.ichfunny.com/">
              https://www.ichfunny.com/</a></li>
          </ul>

        </div>

        <div class="bottom-middle" style="background-color: #000a1f;">
          <div style="width: 227px;height: 140px;display: flex;">
            <div style="width: 113.5px;height: 140px;background-color: #000a1f;text-align: center">
              <img style="height: 95px;width: 95px" src="/imgs/home_img/footer-wx-qrcode.png" alt="">
              <p style="margin: 0;color: white;font-size: 12px">四川非遗微信</p>
            </div>

            <div style="width: 113.5px;height: 140px;background-color: #000a1f;text-align: center">
              <img style="height: 95px;width: 95px" src="/imgs/home_img/footer-wb-qrcode.png" alt="">
              <p style="margin: 0;color: white;font-size: 12px">四川非遗微博</p>
            </div>

            <div>

            </div>

          </div>

        </div>

      </div>

    </div>
    <div style="width: 100%;height: 70px;background-color: #ffffff;text-align: center;">
      <p style="margin: 0;padding: 0;line-height: 70px;color: #000000;font-size: 17px;font-weight: bold;">Copyright @
        2025
        ALL Rights Reserved. 四川非遗文化</p>
    </div>


  </div>


</template>

<script setup>

// import {ref, onMounted, onUnmounted} from 'vue';
//
// const headerRef = ref(null);
// const isHeaderHidden = ref(false);
// let lastScrollTop = 0;
//
// const handleScroll = () => {
//   const scrollTop = window.scrollY || document.documentElement.scrollTop;
//
//   if (scrollTop > lastScrollTop) {
//     // 向下滑动，隐藏头部
//     isHeaderHidden.value = true;
//   } else if (scrollTop <= 0) {
//     // 向上滑动并且滑到了顶部，显示头部
//     isHeaderHidden.value = false;
//   }
//   // 其他情况（向上滑但没到顶部）不改变 isHeaderHidden 的值
//   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
// };
//
// onMounted(() => {
//   window.addEventListener('scroll', handleScroll);
// });
//
// onUnmounted(() => {
//   window.removeEventListener('scroll', handleScroll);
// });

import {Comment, Location} from "@element-plus/icons-vue";
</script>

<style>
/* 重置默认边距和内边距 */
html, body {
  margin: 0;
  padding: 0;
  background-color: #f2f2f4;
}


.top-guide {
  padding: 0 20px;
  margin: 0;
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
}

.top-guide:hover {
  color: #f6661e; /* 悬停时字体颜色变为红色（你可以换成任意颜色） */
}

.top-guide-1 {
  width: 240px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
}

.top-guide-1-div-1 {
  width: 50px;
  height: 50px;
  background-color: rgb(245 245 245 / 86%);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-guide-1-div-2 {
  margin-left: 10px;
}

.bottom-top {
  width: 222px;
  height: 32px;
  background-color: #000a1f;
  margin-right: 28px;
  border-bottom: 1px solid #dcd3d3;
  display: flex;
  justify-content: left;
  align-items: center;
}

.bottom-middle {
  width: 227px;
  height: 180px;
  margin-right: 23px;
}

.bottom-fourOnOne {
  padding: 0;
  color: #A6A6A6;
  font-size: 13px;
  margin-bottom: 13px;
}

.bottom-ul-li {
  color: #A6A6A6;
  font-size: 10px;
  list-style-type: none;
}

h6 {
  font-size: 17px;
  color: white;
}

.top-p {
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #A6A6A6;
}

h3 {
  margin: 0;
  color: #3d404c;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  z-index: 9999;
}

.header.hidden {
  transform: translateY(-100%);
}


</style>