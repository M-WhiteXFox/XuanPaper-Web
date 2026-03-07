<template>
  <div class="reading-page">
    <!-- 空白内容区域 -->
     
    <div class="reading-content">
      <div class="video-container">
        <video 
          autoplay 
          muted 
          loop 
          playsinline
          class="auto-play-video"
        >
          <source src="/videos/book.mp4" type="video/mp4">
          您的浏览器不支持视频播放。
        </video>
      </div>
    </div>
  </div>
</template>

<script setup>
// 阅读页面组件 - 包含自动播放视频
</script>

<style scoped>
.reading-page {
  width: 100%;
  min-height: 100vh;
  background-color: #f9f4e8;
  padding: 40px 20px;
  box-sizing: border-box;
}

.reading-content {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  height: calc(100vh - 80px); /* 减去上下padding */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.video-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.auto-play-video {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* 完整显示视频内容，不裁剪 */
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}
</style>