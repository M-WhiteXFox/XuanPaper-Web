<template>

  <!--  首页轮播图-->
  <div class="carousel-wrapper">
    <el-carousel height="100vh" :interval="5000" arrow="hover" class="full-width-carousel">
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
  <div
      style="width: 100%;height: auto;display: flex;justify-content: center;margin-top: 50px;">
    <div style="width: 1800px;height: 970px;text-align: center;">
      <p style="font-size: 50px;font-weight: bold;margin: 0;padding: 0;color:  #8b4513;">代表地点</p>
      <p style="font-size: 20px;font-weight: bold;margin: 0;padding: 0;color:  #8b4513;">Place of Representation</p>

      <div>
        <!-- 轮播图 -->
        <el-carousel
            :interval="5000"
            type="card"
            height="500px"
            @change="handleCarouselChange"
            style="margin-top: 50px"
        >
          <el-carousel-item v-for="(item, index) in positionArr" :key="index">
            <img :src="item.imgUrl" alt="" style="width: 100%; height: 500px;">
          </el-carousel-item>
        </el-carousel>

        <!-- 显示当前活动项 -->
        <div v-if="currentIndex !== null" class="info-container">
          <p style="font-size: 40px;font-weight: bold;margin: 30px 0 0 0;">{{ positionArr[currentIndex].name }}</p>
          <p style="font-size: 22px"> {{ positionArr[currentIndex].case }}</p>
        </div>
      </div>

    </div>


  </div>


  <!-- 非遗保护与传承 -->、
  <div
      style="width: 100%;height: 970px;background-color: #d88989;display: flex;justify-content: center;">
    <!-- 非遗保护与传承 -->
    <div
        style="width: 100%; height: auto; background-color: #ffffff; display: flex; justify-content: center; padding: 80px 0;">
      <div style="width: 1200px; text-align: center;">
        <p style="font-size: 50px; font-weight: bold; margin: 0; padding: 0; color: #8b4513;">非遗保护</p>
        <p style="font-size: 20px; margin: 10px 0 50px; color: #8b4513;">Protection & Inheritance</p>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 60px; margin-bottom: 60px;">
          <!-- 保护措施 -->
          <div
              style="text-align: left; padding: 30px; background: #fff; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            <h3 style="font-size: 24px; color: #d2691e; border-bottom: 2px solid #d2691e; padding-bottom: 10px;">
              保护措施</h3>
            <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
              <li>✅ 建立省级非遗保护名录体系</li>
              <li>✅ 设立专项保护资金</li>
              <li>✅ 培养非遗传承人</li>
              <li>✅ 建设非遗传承基地</li>
              <li>✅ 推动非遗进校园</li>
            </ul>
          </div>

          <!-- 传承成果 -->
          <div
              style="text-align: left; padding: 30px; background: #fff; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            <h3 style="font-size: 24px; color: #d2691e; border-bottom: 2px solid #d2691e; padding-bottom: 10px;">
              传承成果</h3>
            <div style="display: flex; justify-content: center; margin-top: 20px;gap: 70px;">
              <div>
                <p style="font-size: 18px;">省级非遗项目:</p>
                <p style="font-size: 40px; font-weight: bold; color: #8b4513;margin-top: 30px;">238</p>
              </div>
              <div>
                <p style="font-size: 18px;">非遗传承人:</p>
                <p style="font-size: 40px; font-weight: bold; color: #8b4513;margin-top: 30px;">156</p>
              </div>
              <div>
                <p style="font-size: 18px;">非遗工坊:</p>
                <p style="font-size: 40px; font-weight: bold; color: #8b4513;margin-top: 30px;">48</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 行动号召 -->
        <div
            style="background: linear-gradient(135deg, #8b4513, #d2691e); color: white; padding: 40px; border-radius: 8px;">
          <h2 style="font-size: 28px; margin-bottom: 20px;">加入非遗保护行动</h2>
          <p style="font-size: 18px; margin-bottom: 30px;">
            每个人都可以成为非遗守护者，通过参观、学习、传播等方式支持泾县非遗传承</p>
          <el-button type="warning" size="large" style="width: 200px; height: 50px; font-size: 18px;">参与保护行动
          </el-button>
        </div>
      </div>
    </div>


    <!--    <div style="width: 2000px;height: 100%;text-align: center;background-color: orange;">-->
    <!--      <p style="font-size: 50px;font-weight: bold;margin: 0;padding: 0;">节庆活动</p>-->
    <!--      <p style="font-size: 20px;font-weight: bold;margin: 0;padding: 0;">Festival Activities</p>-->
    <!--      -->
    <!--      -->
    <!--    </div>-->


  </div>
</template>

<script setup>
import {ref} from "vue";

const currentIndex = ref(0); // 默认显示第一项
const handleCarouselChange = (index) => {
  currentIndex.value = index;
};

const carouselImgArr = [
  {
    id: 1,
    imgUrl: "imgs/index-img/index-carousel-4.jpg",

  },
  {
    id: 2,
    imgUrl: "imgs/index-img/index-carousel-2.jpg",

  },
  {
    id: 3,
    imgUrl: "imgs/index-img/index-carousel-3.jpg",
  },
  {
    id: 4,
    imgUrl: "imgs/index-img/index-carousel-1.jpg",
  },
]
const newsImgArr = [
  {
    id: 1,
    name: "宣纸制作技艺",
    parentId : 1,
    imgUrl: "imgs/index-img/index-culture-1.jpg",
    likeNum: 859,
    viewNum: 523,
    content: "宣纸是中国文房四宝之一，被誉为'纸中之王'。泾县宣纸制作技艺被列入人类非物质文化遗产代表作名录，是世界造纸技术的杰出代表。"
  },
  {
    id: 2,
    name: "宣笔制作技艺",
    parentId : 1,
    imgUrl: "imgs/index-img/index-culture-2.jpg",
    likeNum: 454,
    viewNum: 317,
    content: "宣笔是中国四大名笔之一，以选料精良、制作精细著称。泾县宣笔具有'尖、齐、圆、健'四德，是书画家的首选工具。"
  },
  {
    id: 3,
    name: "徽墨制作技艺",
    parentId : 1,
    imgUrl: "imgs/index-img/index-culture-3.jpg",
    likeNum: 389,
    viewNum: 478,
    content: "徽墨是中国制墨技艺的杰出代表，以'落纸如漆，万载存真'著称。泾县徽墨制作技艺精湛，传承千年，是书画艺术的重要载体。"
  },
  {
    id: 4,
    name: "木梳制作技艺",
    parentId : 1,
    imgUrl: "imgs/index-img/index-culture-4.png",
    likeNum: 310,
    viewNum: 219,
    content: "泾县木梳制作技艺历史悠久，选用优质黄杨木、枣木等材料，经过数十道工序精心制作，具有养发护发的功效。"
  },
  {
      id: 5,
      name: "皖南花鼓戏",
      parentId : 1,
      imgUrl: "imgs/index-img/index-culture-5.jpg", // 这里的图片名也建议后期更换，因为这是木偶戏的拼音
      likeNum: 862,
      viewNum: 918,
      content: "皖南花鼓戏是安徽省地方传统戏剧，起源于泾县一带。它汲取了当地民歌的精髓，以其独特的唱腔和载歌载舞的表演形式深受群众喜爱，是皖南地区重要的文化名片。"
  },
  {
    id: 6,
    name: "宣砚制作技艺",
    parentId : 1,
    imgUrl: "imgs/index-img/index-culture-6.jpg",
    likeNum: 354,
    viewNum: 917,
    content: "宣砚是中国名砚之一，泾县宣砚以其石质细腻、发墨如油而著称，与宣纸、宣笔、徽墨并称文房四宝。"
  },
  {
    id: 7,
    name: "泾县剪纸",
    parentId : 1,
    imgUrl: "imgs/index-img/index-culture-7.jpg",
    likeNum: 289,
    viewNum: 378,
    content: "泾县剪纸是皖南地区传统民间艺术，图案精美、刀法细腻，内容多取材于民间故事、花鸟鱼虫，具有浓郁的地方特色。"
  },
  {
    id: 8,
    name: "泾县民歌",
    parentId : 1,
    imgUrl: "imgs/index-img/index-culture-8.jpg",
    likeNum: 410,
    viewNum: 319,
    content: "泾县民歌是皖南地区传统音乐的代表，曲调优美、内容丰富，反映了泾县人民的生产生活和精神追求，是地方文化的重要组成部分。"
  },

]
const importantPersonArr = [
  {
    id: 1,
    name: "邢春荣",
    imgUrl: "imgs/index-img/index-importPerson-2.png",
    Introduction: "宣纸传统制作技艺国家级代表性传承人",
    achievement: "邢春荣是泾县宣纸制作技艺的杰出代表，长期从事宣纸生产和技艺传承工作。他精通宣纸制作的各项核心工艺，几十年来培养了大批青年技术人才，为宣纸文化的保护和传承做出了突出贡献。"
  },
  {
    id: 2,
    name: "曹光华",
    imgUrl: "imgs/index-img/index-importPerson-1.png",
    Introduction: "宣纸传统制作技艺国家级代表性传承人",
    achievement: "曹光华从事宣纸制作40余年，精通宣纸生产的各道工序，尤其擅长捞纸技艺。他参与研制的多种特种宣纸获得国家专利，为宣纸制作技艺的传承与创新做出了重要贡献。"
  },
  {
    id: 3,
    name: "郑志香",
    imgUrl: "imgs/index-img/index-importPerson-3.png",
    Introduction: "宣纸传统制作技艺（剪纸）传承人",
    achievement: "1992年嫁入泾县乌溪村的宣纸世家，从此与宣纸结缘。她耳濡目染、潜心钻研，熟练掌握了宣纸剪纸等核心工艺，是当地宣纸传统制作技艺与非遗文化的重要女性传承者。"
  },
  {
    id: 4,
    name: "罗鸣",
    imgUrl: "imgs/index-img/index-importPerson-4.png",
    Introduction: "宣纸传统制作技艺省级代表性传承人",
    achievement: "科班制浆造纸专业出身，1993年进入中国宣纸股份有限公司。他从车间基层干起，熟练掌握了传统手工造纸工序，将现代造纸理论与传统技艺完美结合，在工艺管理与技艺传承方面贡献卓越。"
  }
]

const positionArr = [
  {
    id: 1,
    name: "中国宣纸文化园",
    case: "国家4A级景区，是了解宣纸制作技艺的最佳场所，可以亲身体验宣纸制作的全过程。",
    imgUrl: "imgs/index-img/index-position-1.png",


  },
  {
    id: 2,
    name: "桃花潭景区",
    case: "因李白诗句'桃花潭水深千尺，不及汪伦送我情'而闻名，是皖南著名的文化旅游胜地。",
    imgUrl: "imgs/index-img/index-position-2.png",

  },
  {
    id: 3,
    name: "查济古村",
    case: "中国历史文化名村，保存有大量明清古建筑，是徽派建筑的杰出代表。",
    imgUrl: "imgs/index-img/index-position-3.png",
  },
  {
    id: 4,
    name: "黄田古村",
    case: "国家级历史文化名村，以其独特的徽派建筑和深厚的文化底蕴著称。",
    imgUrl: "imgs/index-img/index-position-4.png",
  },
  {
    id: 5,
    name: "宣笔制作基地",
    case: "泾县宣笔制作技艺的传承地，可以观摩宣笔制作工艺，体验文房四宝文化。",
    imgUrl: "imgs/index-img/index-position-5.png",
  },
  {
    id: 6,
    name: "月亮湾景区",
    case: "皖南著名的自然风景区，山水相依、风光旖旎，是体验泾县自然风光的绝佳去处。",
    imgUrl: "imgs/index-img/index-position-6.png",
  },
]
</script>

<style scoped>

/*首页轮播图样式*/
.carousel-wrapper {
  width: 100%;
  overflow: hidden; /* 防止任何子元素溢出 */
}

.full-width-carousel {
  width: 100%;
}

.carousel-image {
  display: block; /* 去除 img 标签底部的默认几像素留白 */
  width: 100%;
  height: 100%; /* 跟随 el-carousel 的 780px 高度 */
  object-fit: cover; /* 保证图片铺满不留白 */
}

.carousel-item {
  width: 100%;
  height: 820px;
}

/* 文化代表 */
.cultural-reps-section {
  padding: 60px 24px;
  background-color: #fdfaf8; /* A slightly warmer paper-like texture */
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 3rem; /* 48px */
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: var(--ink-main);
  font-family: '华文新魏', 'STXinwei', serif;
}

.section-subtitle {
  font-size: 1.25rem; /* 20px */
  font-weight: bold;
  margin: 0 0 48px 0;
  padding: 0;
  color: var(--ink-light);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.reps-grid {
  justify-content: center;
}

.rep-card {
  --el-card-padding: 0;
  border: 1px solid #eee;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--paper-bg);
}

.rep-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.08);
}

.rep-card-image-container {
  width: 100%;
  padding-top: 66.66%; /* 3:2 Aspect Ratio */
  position: relative;
  overflow: hidden;
}

.rep-card-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rep-card .el-card__body {
  padding: 20px;
  flex-grow: 1;
  text-align: left;
}

.rep-card-title {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--ink-main);
}

.rep-card-content {
  font-size: 0.9rem;
  color: var(--ink-light);
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 52px; /* Approx 3 lines */
}

.rep-card .el-card__footer {
  padding: 15px 20px;
  border-top: 1px solid #f0f0f0;
  background-color: #fff;
}

.rep-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-stats {
  font-size: 0.85rem;
  color: var(--ink-light);
  display: flex;
  gap: 15px;
}

.rep-card .el-button--warning.is-plain {
  color: var(--stamp-red);
  border-color: var(--stamp-red);
  background: transparent;
}

.rep-card .el-button--warning.is-plain:hover {
  background: var(--stamp-red);
  color: white;
}


/*part3样式*/
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/* --- 重要人物模块样式 --- */

.important-persons-section {
  width: 100%;
  padding: 80px 0; /* 用 padding 替代固定的 height，自适应内容高度 */
  background-color: #ffffff;
  display: flex;
  justify-content: center;
}

.persons-container {
  width: 100%;
  max-width: 1200px; /* 限制最大宽度，防止大屏变形 */
  text-align: center;
}

.section-header {
  margin-bottom: 40px;
}

.main-title {
  font-size: 50px;
  font-weight: bold;
  margin: 0;
  color: #8b4513; /* 主色调：棕色 */
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

/* 采用现代 Grid 布局代替原来的强行定宽 */
.persons-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 稳定的一排两列 */
  gap: 40px; /* 卡片之间的间距 */
  justify-items: center;
}

/* 独立卡片样式 */
.person-card {
  width: 100%;
  max-width: 540px;
  height: 240px; /* 稍微增加高度以容纳文字 */
  border-bottom: 4px solid #f6661e; /* 底部橙色强调线 */
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.person-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(139, 69, 19, 0.12); /* 悬浮时带一点棕色阴影 */
}

/* 卡片内部 Flexbox 布局 */
.person-card-inner {
  display: flex;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
  gap: 24px; /* 左右分栏的间距 */
}

/* 左侧信息区 */
.person-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 128px;
}

.person-image-wrapper {
  width: 200px;
  height: auto;
  border-radius: 8px;
  overflow: hidden;
}

.person-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.person-name {
  margin-top: 16px;
  font-size: 22px;
  font-weight: bold;
  color: #8b4513;
}

/* 右侧文本区 */
.person-right {
  flex: 1; /* 占据剩余的所有空间 */
  display: flex;
  flex-direction: column;
  text-align: left;
}

.person-title {
  margin: 0 0 12px 0;
  font-size: 16px;
  color: #d2691e; /* 稍浅的强调色 */
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
  /* 多行文本省略号处理（防溢出神器） */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5; /* 最多显示5行，多余的变成... */
  overflow: hidden;
}
/* --- 文化代表模块样式 --- */
.cultural-reps-section {
  padding: 80px 0;
  background-color: var(--paper-bg); /* 统一使用宣纸底色 */
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.rep-col {
  margin-bottom: 24px; /* 保证上下行之间的间距 */
}

.rep-card {
  border: none;
  border-radius: 8px; /* 统一的圆角 */
  background: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); /* 更平滑的过渡动画 */
}

.rep-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(43, 43, 43, 0.08) !important;
}

/* 统一图片容器比例为 4:3，绝不拉伸变形 */
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
  transition: transform 0.6s ease; /* 图片缩放动画 */
}

/* 鼠标悬浮在卡片上时，内部图片轻微放大 */
.rep-card:hover .cover-image {
  transform: scale(1.08);
}

.tag-overlay {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(184, 41, 47, 0.9); /* 朱砂红 */
  color: white;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  letter-spacing: 1px;
}

/* 文本区 Flex 占位，保证底部 footer 对齐 */
.content-wrapper {
  padding: 20px;
  flex: 1; 
}

.title {
  font-size: 18px;
  color: var(--ink-main);
  margin: 0 0 12px 0;
  font-weight: 600;
}

.desc {
  font-size: 13px;
  color: var(--ink-light);
  line-height: 1.6;
  margin: 0;
  text-align: justify;
  /* 严格控制文本显示 3 行，多余省略号 */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 底部区域 */
.card-footer {
  padding: 12px 20px;
  border-top: 1px dashed rgba(43, 43, 43, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa; /* 底部使用极浅的灰底以作区分 */
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
  color: var(--ink-main) !important;
  font-weight: 600;
  transition: color 0.3s;
}

.detail-btn:hover {
  color: var(--stamp-red) !important;
}
</style>
