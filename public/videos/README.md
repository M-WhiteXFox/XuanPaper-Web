# 视频文件目录

## 当前状态
阅读页面目前使用在线测试视频进行功能验证。要使用您自己的视频，请按以下步骤操作：

## 替换为自定义视频的步骤

1. **准备您的视频文件**
   - 格式：MP4 (H.264编码)
   - 建议尺寸：1920x1080 或 1280x720
   - 建议时长：30-60秒
   - 内容：与阅读主题相关的视频内容

2. **将视频文件放入此目录**
   - 将您的视频文件重命名为 `book.mp4`
   - 放置在此 `videos` 目录中

3. **修改ReadingView.vue文件**
   - 打开 `src/views/home/ReadingView.vue`
   - 将视频源路径从在线URL改为本地路径：
     ```html
     <!-- 从这个 -->
     <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4">
     
     <!-- 改为这个 -->
     <source src="/videos/book.mp4" type="video/mp4">
     ```

## 视频要求
- 文件名：`book.mp4`
- 格式：MP4 (H.264编码)
- 建议尺寸：1920x1080 或 1280x720
- 建议时长：30-60秒
- 内容：与阅读主题相关的视频内容

## 注意事项
- 视频将自动播放、静音、循环播放
- 确保视频文件大小适中，避免影响页面加载速度
- 视频内容应符合新中式设计风格
- 现代浏览器要求自动播放视频必须是静音的（已添加muted属性）