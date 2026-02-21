<template>
  <div class="home-container">
    <header class="main-header" :class="{ 'is-scrolled': isScrolled }">
      <div class="container">
        <div class="logo-container">
          <router-link to="/" class="logo-link">
            <img src="/imgs/home_img/logo.png" alt="泾县非遗" class="logo-image" />
            <span class="logo-text">泾县宣纸</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="desktop-nav">
          <el-menu
              :default-active="$route.path"
              class="main-nav"
              mode="horizontal"
              :ellipsis="false"
              router
          >
            <el-menu-item index="/">首 页</el-menu-item>
            <el-menu-item index="/travel_guide">旅游指南</el-menu-item>
            <el-menu-item index="/cultural_experience">文化体验</el-menu-item>
            <el-menu-item index="/about_us">关于我们</el-menu-item>
            <el-menu-item index="/connect_us">联系我们</el-menu-item>
          </el-menu>

          <div class="action-container">
            <el-icon size="20" class="ink-icon"><UserFilled/></el-icon>
            <el-divider direction="vertical" class="custom-divider"/>
            <router-link to="/connect_us">
              <el-button class="stamp-btn" round>立即联系</el-button>
            </router-link>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div class="mobile-nav">
          <el-button class="hamburger-btn" @click="drawerVisible = true" text>
            <el-icon size="24"><Menu /></el-icon>
          </el-button>
        </div>

      </div>
    </header>

    <!-- Mobile Drawer -->
    <el-drawer v-model="drawerVisible" title="导航" direction="rtl" size="280px" class="mobile-drawer">
      <el-menu
          :default-active="$route.path"
          class="mobile-menu"
          @select="drawerVisible = false"
          router
      >
        <el-menu-item index="/">首 页</el-menu-item>
        <el-menu-item index="/travel_guide">旅游指南</el-menu-item>
        <el-menu-item index="/cultural_experience">文化体验</el-menu-item>
        <el-menu-item index="/about_us">关于我们</el-menu-item>
        <el-menu-item index="/connect_us">联系我们</el-menu-item>
      </el-menu>
    </el-drawer>

    <main class="main-content">
      <router-view/>
    </main>

    <footer class="main-footer">
      <div class="container footer-top">
        <div class="footer-grid">
          <div class="footer-section">
            <h4 class="footer-title">联系我们</h4>
            <div class="footer-contact">
              <p class="footer-text"><el-icon><PhoneFilled/></el-icon>0563-5022666</p>
              <p class="footer-text"><el-icon><Comment/></el-icon>jingxianfeiyi@163.com</p>
              <p class="footer-text"><el-icon><LocationFilled/></el-icon>安徽省宣城市泾县泾川镇文化路88号</p>
            </div>
          </div>

          <div class="footer-section">
            <h4 class="footer-title">版权说明</h4>
            <p class="footer-text copyright-desc">
              本网站内容受《著作权法》保护。记录与传承泾县非遗文化，未经书面许可，不得擅自用于商业用途。如有侵权，请及时联系邮箱：copyright@example.com
            </p>
          </div>

          <div class="footer-section">
            <h4 class="footer-title">友情链接</h4>
            <ul class="footer-links">
              <li><a href="http://www.ahjx.gov.cn/" target="_blank">泾县人民政府</a></li>
              <li><a href="https://www.ihchina.cn/" target="_blank">中国非物质文化遗产网</a></li>
              <li><a href="https://www.zgxzsc.com/" target="_blank">中国宣纸博物馆</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-title">关注我们</h4>
            <div class="social-qrcodes">
              <div class="qrcode-item">
                <img src="/imgs/home_img/footer-wx-qrcode.png" alt="微信" class="qrcode-image"/>
                <p>微信公众号</p>
              </div>
              <div class="qrcode-item">
                <img src="/imgs/home_img/footer-wb-qrcode.png" alt="微博" class="qrcode-image"/>
                <p>官方微博</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p>Copyright © 2026 泾县非遗文化 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Comment, LocationFilled, UserFilled, PhoneFilled, Menu } from "@element-plus/icons-vue";

const drawerVisible = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  isScrolled.value = scrollTop > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background-color: var(--paper-bg);
  font-family: 'PingFang SC', 'Microsoft YaHei', serif;
}

/* Header */
.main-header {
  background: rgba(253, 250, 245, 0.2);
  backdrop-filter: blur(5px);
  border-bottom: 1px solid rgba(43, 43, 43, 0.08);
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  
  z-index: 1000;
  height: 72px;
  display: flex;
  align-items: center;
  transition: all 0.4s ease-in-out;
}

/* 滚动状态下的样式 */
.main-header.is-scrolled {
  background: rgba(43, 43, 43, 0.5);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: color 0.4s ease-in-out;
}

.logo-link,
.logo-text {
  color: var(--ink-main);
  transition: color 0.4s ease-in-out;
}

.main-header.is-scrolled .logo-link,
.main-header.is-scrolled .logo-text {
  color: #ffffff;
}

.logo-image {
  height: 44px;
  width: auto;
  transition: transform 0.4s ease;
}

.logo-image:hover {
  transform: rotate(-3deg) scale(1.05);
}

.logo-text {
  font-family: '华文新魏', 'STXinwei', serif;
  font-size: 1.5rem;
  letter-spacing: 2px;
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 16px;
}

.main-nav.el-menu--horizontal {
  background-color: transparent;
  border-bottom: none;
  height: 100%;
  display: flex;
  align-items: center;
}

.main-nav .el-menu-item {
  font-size: 1.05rem;
  color: #8f1818;
  background-color: transparent !important;
  padding: 0 8px;
  margin: 0 12px;
  height: auto;
  line-height: normal;
  border-bottom: 2px solid transparent;
  transition: color 0.4s ease-in-out, border-color 0.4s ease-in-out;
}

.main-header.is-scrolled .main-nav .el-menu-item {
  color: rgba(255, 255, 255, 0.9);
}

.main-nav .el-menu-item:hover {
  color: var(--ink-main);
}

.main-header.is-scrolled .main-nav .el-menu-item:hover {
  color: #ffffff;
}

.main-nav .el-menu-item.is-active {
  color: var(--ink-main);
  font-weight: 600;
  border-bottom-color: var(--stamp-red);
}

.main-header.is-scrolled .main-nav .el-menu-item.is-active {
  color: #ffffff;
}

.action-container {
  display: flex;
  align-items: center;
  gap: 16px;
}

.ink-icon {
  color: var(--ink-main);
  transition: color 0.4s ease-in-out;
}

.main-header.is-scrolled .ink-icon {
  color: #ffffff;
}

.ink-icon:hover {
  color: var(--stamp-red);
}

.custom-divider {
  border-color: rgba(43, 43, 43, 0.2);
  transition: border-color 0.4s ease-in-out;
}

.main-header.is-scrolled .custom-divider {
  border-color: rgba(255, 255, 255, 0.3);
}

.stamp-btn {
  background-color: transparent;
  border: 1px solid var(--stamp-red);
  color: var(--stamp-red);
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.4s ease-in-out;
}

.main-header.is-scrolled .stamp-btn {
  border-color: #ffffff;
  color: #ffffff;
}

.stamp-btn:hover {
  background-color: var(--stamp-red);
  color: white;
  box-shadow: 2px 4px 12px rgba(184, 41, 47, 0.2);
}

/* Mobile Navigation */
.mobile-nav {
  display: none;
}

.hamburger-btn {
  color: var(--ink-main);
  transition: color 0.4s ease-in-out;
}

.main-header.is-scrolled .hamburger-btn {
  color: #ffffff;
}

.mobile-drawer .mobile-menu {
  border-right: none;
}

.mobile-drawer .el-menu-item {
  font-size: 1rem;
  padding: 16px 24px;
}

.mobile-drawer .el-menu-item.is-active {
  color: var(--stamp-red);
  font-weight: 600;
}

/* Footer */
.main-footer {
  background-color: var(--dark-bg);
  color: rgba(255, 255, 255, 0.7);
  margin-top: 80px;
}

.footer-top {
  padding: 60px 24px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 40px;
}

.footer-title {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 24px;
  font-family: '华文新魏', 'STXinwei', serif;
  letter-spacing: 1px;
}

.footer-text, .footer-links a {
  font-size: 0.9rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-text {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.copyright-desc {
  text-align: justify;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a:hover {
  color: var(--stamp-red);
}

.social-qrcodes {
  display: flex;
  gap: 20px;
}

.qrcode-item {
  text-align: center;
  font-size: 0.8rem;
}

.qrcode-image {
  width: 80px;
  height: 80px;
  border-radius: 4px;
  margin-bottom: 8px;
  background: white;
  padding: 4px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 0;
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}

/* Responsive Breakpoint */
@media (max-width: 992px) { /* Changed to 992px for better tablet handling */
  .desktop-nav {
    display: none;
  }
  .mobile-nav {
    display: block;
  }
}
</style>