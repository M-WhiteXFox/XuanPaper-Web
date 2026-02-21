<template>
  <div class="page-container">
    <!-- 首页轮播图 -->
    <div class="carousel-wrapper">
      <el-carousel :interval="5000" arrow="hover" class="full-width-carousel">
        <el-carousel-item v-for="item in carouselImgArr" :key="item.id">
          <img :src="item.imgUrl" alt="" class="carousel-image"/>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 文化代表 -->
    <section class="cultural-reps-section">
      <div class="container">
        <div class="section-header">
          <h2 class="main-title">文化代表</h2>
          <p class="sub-title">Cultural Representation</p>
        </div>
        
        <el-row :gutter="24" class="reps-grid">
          <el-col
            v-for="item in newsImgArr"
            :key="item.id"
            :xs="24" :sm="12" :md="8" :lg="6"
            class="rep-col"
          >
            <el-card class="rep-card" shadow="hover" :body-style="{ padding: '0px' }">
              <div class="image-wrapper">
                <img :src="item.imgUrl" :alt="item.name" class="cover-image">
                <div class="tag-overlay">非遗名录</div>
              </div>

              <div class="content-wrapper">
                <h3 class="title">{{ item.name }}</h3>
                <p class="desc">{{ item.content }}</p>
              </div>

              <div class="card-footer">
                <div class="stats">
                  <span class="stat-item"><el-icon><View /></el-icon> {{ item.viewNum }}</span>
                  <span class="stat-item"><el-icon><Star /></el-icon> {{ item.likeNum }}</span>
                </div>
                <el-button link class="detail-btn">
                  详情 <el-icon class="el-icon--right"><ArrowRight /></el-icon>
                </el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>

    <!-- 重要人物 -->
    <div class="important-persons-section">
      <div class="persons-container">
        <div class="section-header">
          <h2 class="main-title">重要人物</h2>
          <p class="sub-title">Important Person</p>
        </div>

        <div class="persons-grid">
          <el-card 
            class="person-card" 
            v-for="item in importantPersonArr" 
            :key="item.name"
            :body-style="{ padding: '0px', height: '100%' }"
            shadow="hover"
          >
            <div class="person-card-inner">
              <div class="person-left">
                <div class="person-image-wrapper">
                  <img :src="item.imgUrl" :alt="item.name" class="person-image">
                </div>
                <div class="person-name">{{ item.name }}</div>
              </div>

              <div class="person-right">
                <h4 class="person-title">{{ item.Introduction }}</h4>
                <p class="person-desc">{{ item.achievement }}</p>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>

    <!-- 代表地点 -->
    <div class="places-section">
      <div class="places-container">
        <div class="section-header">
          <h2 class="main-title">代表地点</h2>
          <p class="sub-title">Place of Representation</p>
        </div>

        <div class="places-carousel-wrapper">
          <!-- 轮播图 -->
          <el-carousel
            :interval="5000"
            type="card"
            @change="handleCarouselChange"
            class="places-carousel"
          >
            <el-carousel-item v-for="(item, index) in positionArr" :key="index">
              <img :src="item.imgUrl" alt="" class="places-carousel-img">
            </el-carousel-item>
          </el-carousel>

          <!-- 显示当前活动项 -->
          <div v-if="currentIndex !== null" class="places-info-container">
            <p class="places-info-title">{{ positionArr[currentIndex].name }}</p>
            <p class="places-info-desc">{{ positionArr[currentIndex].case }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 非遗保护与传承 -->
    <div class="protection-wrapper">
      <div class="protection-inner">
        <div class="protection-container">
          <div class="section-header">
            <h2 class="main-title">非遗保护</h2>
            <p class="sub-title">Protection & Inheritance</p>
          </div>

          <div class="protection-grid">
            <!-- 保护措施 -->
            <div class="protection-card">
              <h3 class="protection-card-title">保护措施</h3>
              <ul class="protection-list">
                <li>✅ 建立省级非遗保护名录体系</li>
                <li>✅ 设立专项保护资金</li>
                <li>✅ 培养非遗传承人</li>
                <li>✅ 建设非遗传承基地</li>
                <li>✅ 推动非遗进校园</li>
              </ul>
            </div>

            <!-- 传承成果 -->
            <div class="protection-card">
              <h3 class="protection-card-title">传承成果</h3>
              <div class="stats-flex">
                <div class="stat-box">
                  <p class="stat-label">省级非遗项目:</p>
                  <p class="stat-value">238</p>
                </div>
                <div class="stat-box">
                  <p class="stat-label">非遗传承人:</p>
                  <p class="stat-value">156</p>
                </div>
                <div class="stat-box">
                  <p class="stat-label">非遗工坊:</p>
                  <p class="stat-value">48</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 行动号召 -->
          <div class="cta-box">
            <h2 class="cta-title">加入非遗保护行动</h2>
            <p class="cta-desc">每个人都可以成为非遗守护者，通过参观、学习、传播等方式支持泾县非遗传承</p>
            <el-button type="warning" size="large" class="cta-btn">参与保护行动</el-button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { View, Star, ArrowRight } from '@element-plus/icons-vue';

const currentIndex = ref(0); 
const handleCarouselChange = (index) => {
  currentIndex.value = index;
};

const carouselImgArr = [
  { id: 1, imgUrl: "imgs/index-img/index-carousel-4.jpg" },
  { id: 2, imgUrl: "imgs/index-img/index-carousel-2.jpg" },
  { id: 3, imgUrl: "imgs/index-img/index-carousel-3.jpg" },
  { id: 4, imgUrl: "imgs/index-img/index-carousel-1.jpg" },
]

const newsImgArr = [
  { id: 1, name: "宣纸制作技艺", parentId : 1, imgUrl: "imgs/index-img/index-culture-1.jpg", likeNum: 859, viewNum: 523, content: "宣纸是中国文房四宝之一，被誉为'纸中之王'。泾县宣纸制作技艺被列入人类非物质文化遗产代表作名录，是世界造纸技术的杰出代表。" },
  { id: 2, name: "宣笔制作技艺", parentId : 1, imgUrl: "imgs/index-img/index-culture-2.jpg", likeNum: 454, viewNum: 317, content: "宣笔是中国四大名笔之一，以选料精良、制作精细著称。泾县宣笔具有'尖、齐、圆、健'四德，是书画家的首选工具。" },
  { id: 3, name: "徽墨制作技艺", parentId : 1, imgUrl: "imgs/index-img/index-culture-3.jpg", likeNum: 389, viewNum: 478, content: "徽墨是中国制墨技艺的杰出代表，以'落纸如漆，万载存真'著称。泾县徽墨制作技艺精湛，传承千年，是书画艺术的重要载体。" },
  { id: 4, name: "木梳制作技艺", parentId : 1, imgUrl: "imgs/index-img/index-culture-4.png", likeNum: 310, viewNum: 219, content: "泾县木梳制作技艺历史悠久，选用优质黄杨木、枣木等材料，经过数十道工序精心制作，具有养发护发的功效。" },
  { id: 5, name: "皖南花鼓戏", parentId : 1, imgUrl: "imgs/index-img/index-culture-5.jpg", likeNum: 862, viewNum: 918, content: "皖南花鼓戏是安徽省地方传统戏剧，起源于泾县一带。它汲取了当地民歌的精髓，以其独特的唱腔和载歌载舞的表演形式深受群众喜爱，是皖南地区重要的文化名片。" },
  { id: 6, name: "宣砚制作技艺", parentId : 1, imgUrl: "imgs/index-img/index-culture-6.jpg", likeNum: 354, viewNum: 917, content: "宣砚是中国名砚之一，泾县宣砚以其石质细腻、发墨如油而著称，与宣纸、宣笔、徽墨并称文房四宝。" },
  { id: 7, name: "泾县剪纸", parentId : 1, imgUrl: "imgs/index-img/index-culture-7.jpg", likeNum: 289, viewNum: 378, content: "泾县剪纸是皖南地区传统民间艺术，图案精美、刀法细腻，内容多取材于民间故事、花鸟鱼虫，具有浓郁的地方特色。" },
  { id: 8, name: "泾县民歌", parentId : 1, imgUrl: "imgs/index-img/index-culture-8.jpg", likeNum: 410, viewNum: 319, content: "泾县民歌是皖南地区传统音乐的代表，曲调优美、内容丰富，反映了泾县人民的生产生活和精神追求，是地方文化的重要组成部分。" },
]

const importantPersonArr = [
  { id: 1, name: "邢春荣", imgUrl: "imgs/index-img/index-importPerson-2.png", Introduction: "宣纸传统制作技艺国家级代表性传承人", achievement: "邢春荣是泾县宣纸制作技艺的杰出代表，长期从事宣纸生产和技艺传承工作。他精通宣纸制作的各项核心工艺，几十年来培养了大批青年技术人才，为宣纸文化的保护和传承做出了突出贡献。" },
  { id: 2, name: "曹光华", imgUrl: "imgs/index-img/index-importPerson-1.png", Introduction: "宣纸传统制作技艺国家级代表性传承人", achievement: "曹光华从事宣纸制作40余年，精通宣纸生产的各道工序，尤其擅长捞纸技艺。他参与研制的多种特种宣纸获得国家专利，为宣纸制作技艺的传承与创新做出了重要贡献。" },
  { id: 3, name: "郑志香", imgUrl: "imgs/index-img/index-importPerson-3.png", Introduction: "宣纸传统制作技艺（剪纸）传承人", achievement: "1992年嫁入泾县乌溪村的宣纸世家，从此与宣纸结缘。她耳濡目染、潜心钻研，熟练掌握了宣纸剪纸等核心工艺，是当地宣纸传统制作技艺与非遗文化的重要女性传承者。" },
  { id: 4, name: "罗鸣", imgUrl: "imgs/index-img/index-importPerson-4.png", Introduction: "宣纸传统制作技艺省级代表性传承人", achievement: "科班制浆造纸专业出身，1993年进入中国宣纸股份有限公司。他从车间基层干起，熟练掌握了传统手工造纸工序，将现代造纸理论与传统技艺完美结合，在工艺管理与技艺传承方面贡献卓越。" }
]

const positionArr = [
  { id: 1, name: "中国宣纸文化园", case: "国家4A级景区，是了解宣纸制作技艺的最佳场所，可以亲身体验宣纸制作的全过程。", imgUrl: "imgs/index-img/index-position-1.png" },
  { id: 2, name: "桃花潭景区", case: "因李白诗句'桃花潭水深千尺，不及汪伦送我情'而闻名，是皖南著名的文化旅游胜地。", imgUrl: "imgs/index-img/index-position-2.png" },
  { id: 3, name: "查济古村", case: "中国历史文化名村，保存有大量明清古建筑，是徽派建筑的杰出代表。", imgUrl: "imgs/index-img/index-position-3.png" },
  { id: 4, name: "黄田古村", case: "国家级历史文化名村，以其独特的徽派建筑和深厚的文化底蕴著称。", imgUrl: "imgs/index-img/index-position-4.png" },
  { id: 5, name: "宣笔制作基地", case: "泾县宣笔制作技艺的传承地，可以观摩宣笔制作工艺，体验文房四宝文化。", imgUrl: "imgs/index-img/index-position-5.png" },
  { id: 6, name: "月亮湾景区", case: "皖南著名的自然风景区，山水相依、风光旖旎，是体验泾县自然风光的绝佳去处。", imgUrl: "imgs/index-img/index-position-6.png" },
]
</script>

<style scoped>
/* 全局变量 (如果你有全局变量定义，这里保留) */
:root {
  --ink-main: #333;
  --ink-light: #666;
  --stamp-red: #b8292f;
  --paper-bg: #fdfaf8;
}

/* 基础重置与容器限制 */
.page-container {
  width: 100%;
  overflow-x: hidden;
}

/* ================= 1. 首页轮播图 ================= */
.carousel-wrapper {
  width: 100%;
  overflow: hidden;
}

.full-width-carousel {
  width: 100%;
}

/* 抛弃行内属性height，使用CSS深度选择器控制响应式高度 */
.full-width-carousel :deep(.el-carousel__container) {
  height: 100vh;
}

.carousel-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


/* ================= 2. 全局通用标题 ================= */
.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.main-title {
  font-size: 50px;
  font-weight: bold;
  margin: 0;
  color: #8b4513;
  font-family: '华文新魏', 'STXinwei', serif;
}

.sub-title {
  font-size: 20px;
  font-weight: bold;
  margin: 8px 0 0 0;
  color: #8b4513;
  text-transform: uppercase;
  letter-spacing: 1px;
}


/* ================= 3. 文化代表 ================= */
.cultural-reps-section {
  padding: 80px 24px;
  background-color: #fdfaf8;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.rep-col {
  margin-bottom: 24px;
}

.rep-card {
  border: none;
  border-radius: 8px;
  background: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.rep-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(43, 43, 43, 0.08) !important;
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  position: relative;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.rep-card:hover .cover-image {
  transform: scale(1.08);
}

.tag-overlay {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(184, 41, 47, 0.9);
  color: white;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  letter-spacing: 1px;
}

.content-wrapper {
  padding: 20px;
  flex: 1;
}

.title {
  font-size: 18px;
  color: #333;
  margin: 0 0 12px 0;
  font-weight: 600;
}

.desc {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
  margin: 0;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  padding: 12px 20px;
  border-top: 1px dashed rgba(43, 43, 43, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
}

.stats {
  display: flex;
  gap: 16px;
  color: #999;
  font-size: 13px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.detail-btn {
  color: #333 !important;
  font-weight: 600;
  transition: color 0.3s;
}
.detail-btn:hover {
  color: #b8292f !important;
}


/* ================= 4. 重要人物 ================= */
.important-persons-section {
  width: 100%;
  padding: 80px 24px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
}

.persons-container {
  width: 100%;
  max-width: 1200px;
  text-align: center;
}

.persons-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  justify-items: center;
}

.person-card {
  width: 100%;
  max-width: 540px;
  height: 240px;
  border-bottom: 4px solid #f6661e;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.person-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(139, 69, 19, 0.12);
}

.person-card-inner {
  display: flex;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
  gap: 24px;
}

.person-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 128px;
}

.person-image-wrapper {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.person-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.person-name {
  margin-top: 16px;
  font-size: 22px;
  font-weight: bold;
  color: #8b4513;
}

.person-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.person-title {
  margin: 0 0 12px 0;
  font-size: 16px;
  color: #d2691e;
  font-weight: 700;
  border-bottom: 1px dashed rgba(210, 105, 30, 0.3);
  padding-bottom: 8px;
}

.person-desc {
  margin: 0;
  font-size: 13px;
  line-height: 1.8;
  color: #555;
  text-align: justify;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
}


/* ================= 5. 代表地点 ================= */
.places-section {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding: 0 24px;
  box-sizing: border-box;
}

.places-container {
  width: 100%;
  max-width: 1800px;
  text-align: center;
}

.places-carousel-wrapper {
  width: 100%;
}

.places-carousel {
  margin-top: 50px;
}

.places-carousel :deep(.el-carousel__container) {
  height: 500px;
}

.places-carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.places-info-container {
  margin-top: 30px;
}

.places-info-title {
  font-size: 40px;
  font-weight: bold;
  margin: 0 0 10px 0;
  color: #333;
}

.places-info-desc {
  font-size: 22px;
  color: #666;
  margin: 0;
}


/* ================= 6. 非遗保护与传承 ================= */
.protection-wrapper {
  width: 100%;
  background-color: #d88989;
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.protection-inner {
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 80px 24px;
  box-sizing: border-box;
}

.protection-container {
  width: 100%;
  max-width: 1200px;
  text-align: center;
}

.protection-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  margin-bottom: 60px;
}

.protection-card {
  text-align: left;
  padding: 30px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.protection-card-title {
  font-size: 24px;
  color: #d2691e;
  border-bottom: 2px solid #d2691e;
  padding-bottom: 10px;
  margin-top: 0;
}

.protection-list {
  list-style-type: none;
  padding-left: 0;
  line-height: 2;
  color: #555;
}

.stats-flex {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 70px;
}

.stat-box {
  text-align: center;
}

.stat-label {
  font-size: 18px;
  margin: 0;
  color: #555;
}

.stat-value {
  font-size: 40px;
  font-weight: bold;
  color: #8b4513;
  margin: 20px 0 0 0;
}

.cta-box {
  background: linear-gradient(135deg, #8b4513, #d2691e);
  color: white;
  padding: 40px;
  border-radius: 8px;
}

.cta-title {
  font-size: 28px;
  margin: 0 0 20px 0;
}

.cta-desc {
  font-size: 18px;
  margin: 0 0 30px 0;
}

.cta-btn {
  width: 200px;
  height: 50px;
  font-size: 18px;
}


/* ===================== 响应式适配 (手机端) ===================== */
@media screen and (max-width: 768px) {
  /* 标题缩放 */
  .main-title { font-size: 32px; }
  .sub-title { font-size: 14px; margin-top: 4px; }
  .section-header { margin-bottom: 30px; }

  /* 首页轮播图高度自适应 */
  .full-width-carousel :deep(.el-carousel__container) {
    height: 60vh; /* 手机端避免图片拉得太长 */
  }

  /* 文化代表 */
  .cultural-reps-section { padding: 40px 15px; }

  /* 重要人物单列显示 */
  .important-persons-section { padding: 40px 15px; }
  .persons-grid { grid-template-columns: 1fr; gap: 20px; }
  .person-card { height: auto; }
  
  .person-card-inner {
    flex-direction: column; /* 上下图文结构 */
    align-items: center;
    text-align: center;
    padding: 20px;
  }
  
  .person-left { width: 100%; margin-bottom: 10px; }
  .person-image-wrapper { width: 120px; height: 120px; border-radius: 50%; margin: 0 auto; }
  .person-image { height: 100%; }
  
  .person-right { text-align: center; }
  .person-title { margin-top: 10px; border-bottom: none; }
  .person-desc { text-align: center; -webkit-line-clamp: 4; }

  /* 代表地点缩放 */
  .places-section { margin-top: 30px; padding: 0 10px; }
  .places-carousel { margin-top: 30px; }
  .places-carousel :deep(.el-carousel__container) { height: 200px; }
  .places-info-title { font-size: 24px; }
  .places-info-desc { font-size: 16px; }

  /* 非遗保护与传承单列显示 */
  .protection-wrapper { margin-top: 40px; }
  .protection-inner { padding: 40px 15px; }
  .protection-grid { grid-template-columns: 1fr; gap: 25px; margin-bottom: 30px; }
  .protection-card { padding: 20px; }
  
  .stats-flex { flex-direction: column; gap: 20px; }
  .stat-value { margin-top: 5px; font-size: 32px; }
  
  .cta-box { padding: 30px 20px; }
  .cta-title { font-size: 22px; }
  .cta-desc { font-size: 15px; }
}
</style>