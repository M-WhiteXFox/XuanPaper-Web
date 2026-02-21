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
      <h2 class="section-title">文化代表</h2>
      <p class="section-subtitle">Cultural Representation</p>
      <el-row :gutter="30" class="reps-grid">
        <el-col
            v-for="item in newsImgArr"
            :key="item.id"
            :xs="24" :sm="12" :md="8" :lg="6"
        >
          <el-card class="rep-card" shadow="hover">
            <div class="rep-card-image-container">
              <img :src="item.imgUrl" :alt="item.name" class="rep-card-image">
            </div>
            <div class="el-card__body">
              <h3 class="rep-card-title">{{ item.name }}</h3>
              <p class="rep-card-content">{{ item.content }}</p>
            </div>
            <template #footer>
              <div class="rep-card-footer">
              <span class="footer-stats">
                <span>❤️ {{ item.likeNum }}</span>
                <span>👁️ {{ item.viewNum }}</span>
              </span>
                <el-button type="warning" size="small" round plain>了解更多</el-button>
              </div>
            </template>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </section>

  <!-- 重要人物 -->
  <div
      style="width: 100%;height: 790px;background-color: #fff;display: flex;justify-content: center;align-items: center;text-align: center;margin-top: 50px;">
    <div style="width: 1200px;height: 700px;background-color: #fff;margin-top: 30px;">
      <p style="font-size: 50px;font-weight: bold;margin: 0;padding: 0;color:  #8b4513;">重要人物</p>
      <p style="font-size: 20px;font-weight: bold;margin: 0;padding: 0;color:  #8b4513;">Important person</p>
      <div
          style="width: 1160px; height: 500px; background-color: #fff; display: grid; grid-template-columns: 600px 1fr; gap: 10px; padding: 0;justify-items: center;align-items: center;margin-top: 20px;">
        <el-card style="width: 500px;height: 222px;border-bottom: 4px solid #f6661e;;"
                 v-for="item in importantPersonArr" :key="item">
          <div style="width: 300px;height: 280px;background-color: #ffffff;float: right;">
            <h4 style="margin: 13px 0 0 0;">{{ item.Introduction }}</h4>
            <p style="float: left;font-size: 12px;line-height: 22px;">{{ item.achievement }}</p>
          </div>
          <div style="width: 128px;height: 100px;margin: 10px 15px 0 0;">
            <img :src="item.imgUrl" alt="" style="width: 100%;height: 100%;border-radius: 8px;object-fit: cover;">
          </div>

          <div style="width: 150px;height: 90px;background-color: #ffffff;margin-left: -30px;">
            <p style="margin:0;padding: 10px 0; font-size: 24px;font-weight: bold;">{{ item.name }}</p>
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
    imgUrl: "imgs/index-img/index-news-chuanju.png",
    likeNum: 859,
    viewNum: 523,
    content: "宣纸是中国文房四宝之一，被誉为'纸中之王'。泾县宣纸制作技艺被列入人类非物质文化遗产代表作名录，是世界造纸技术的杰出代表。"
  },
  {
    id: 2,
    name: "宣笔制作技艺",
    parentId : 1,
    imgUrl: "imgs/index-img/index-news-cixiu.png",
    likeNum: 454,
    viewNum: 317,
    content: "宣笔是中国四大名笔之一，以选料精良、制作精细著称。泾县宣笔具有'尖、齐、圆、健'四德，是书画家的首选工具。"
  },
  {
    id: 3,
    name: "徽墨制作技艺",
    parentId : 1,
    imgUrl: "imgs/index-img/index-news-shuxiu.png",
    likeNum: 389,
    viewNum: 478,
    content: "徽墨是中国制墨技艺的杰出代表，以'落纸如漆，万载存真'著称。泾县徽墨制作技艺精湛，传承千年，是书画艺术的重要载体。"
  },
  {
    id: 4,
    name: "木梳制作技艺",
    parentId : 1,
    imgUrl: "imgs/index-img/index-news-zhubian.png",
    likeNum: 310,
    viewNum: 219,
    content: "泾县木梳制作技艺历史悠久，选用优质黄杨木、枣木等材料，经过数十道工序精心制作，具有养发护发的功效。"
  },
  {
    id: 5,
    name: "皖南花鼓戏",
    parentId : 1,
    imgUrl: "imgs/index-img/index-news-muouxi.png",
    likeNum: 862,
    viewNum: 918,
    content: "皖南花鼓戏是安徽省地方传统戏剧，起源于泾县一带，以其独特的唱腔和丰富的表演形式深受群众喜爱。 [10]在中国古代又称“傀儡戏”。"
  },
  {
    id: 6,
    name: "宣砚制作技艺",
    parentId : 1,
    imgUrl: "imgs/index-img/index-news-yinhuasi.png",
    likeNum: 354,
    viewNum: 917,
    content: "宣砚是中国名砚之一，泾县宣砚以其石质细腻、发墨如油而著称，与宣纸、宣笔、徽墨并称文房四宝。"
  },
  {
    id: 7,
    name: "泾县剪纸",
    parentId : 1,
    imgUrl: "imgs/index-img/index-news-zigongdenghui.png",
    likeNum: 289,
    viewNum: 378,
    content: "泾县剪纸是皖南地区传统民间艺术，图案精美、刀法细腻，内容多取材于民间故事、花鸟鱼虫，具有浓郁的地方特色。"
  },
  {
    id: 8,
    name: "泾县民歌",
    parentId : 1,
    imgUrl: "imgs/index-img/index-news-piyin.png",
    likeNum: 410,
    viewNum: 319,
    content: "泾县民歌是皖南地区传统音乐的代表，曲调优美、内容丰富，反映了泾县人民的生产生活和精神追求，是地方文化的重要组成部分。"
  },

]
const importantPersonArr = [
  {
    id: 1,
    name: "邢春荣",
    age: 62,
    imgUrl: "imgs/index-img/index-importPerson-2.png",
    Introduction: "宣纸制作技艺国家级传承人",
    achievement: "邢春荣是泾县宣纸制作技艺的杰出代表，长期从事宣纸生产和技艺传承工作。她精通晒纸、剪纸等核心工艺，培养了大批青年技术人才，为宣纸文化的保护和传承做出了突出贡献。",
    achievement: "1959年9月进入成都工艺美术技校蜀绣班学习，师从乔子平、彭永兴、肖福兴、毛成武、胡云生、张万清、黄炳成、刘绍云等，因聪慧伶俐、勤奋好学深得老师赏识并得真传。几十年来，她积累了丰富的实践经验和理论知识，具有很高的专业技术，绣制了不少优秀作品。",
  },
  {
    id: 2,
    name: "曹光华",
    age: 68,
    imgUrl: "imgs/index-img/index-importPerson-1.png",
    Introduction: "宣纸制作技艺国家级传承人",
    achievement: "曹光华是中国宣纸股份有限公司的技术骨干，从事宣纸制作40余年，精通宣纸生产的各道工序，尤其擅长捞纸技艺。他参与研制的多种特种宣纸获得国家专利，为宣纸制作技艺的传承与创新做出了重要贡献。",

  },

  {
    id: 3,
    name: "郑志香",
    age: 70,
    imgUrl: "imgs/index-img/index-importPerson-3.png",
    Introduction: "宣笔制作技艺省级传承人",
    achievement: "周美洪是泾县宣笔制作的代表性人物，从事宣笔制作50余年，精通选毫、配料、制杆等全部工序。他制作的宣笔具有尖、齐、圆、健四德，深受书画家青睐，多次在全国工艺美术展览中获奖。",
    achievement: "陈云华从事竹编艺术的开发、研究四十余载，由他独创的\"单色双面隐形\"竹编艺术享誉海内外，被誉为精品中的精品，艺术中的艺术。1984年他将竹编书画艺术由最初的坐标编织法改进深化为看图编织法，为青神竹编的发展作出了杰出的贡献 。",
  },
  {
    id: 4,
    name: "罗鸣",
    age: 55,
    imgUrl: "imgs/index-img/index-importPerson-4.png",
    Introduction: "徽墨制作技艺省级传承人",
    achievement: "汪爱军是泾县徽墨制作技艺的传承人，师从多位制墨名师，精通配方、和料、压模、晾干、描金等全套工艺。他创作的徽墨作品色泽乌黑、质地细腻，多次获得省级工艺美术大奖。",
  },
]

const positionArr = [
  {
    id: 1,
    name: "中国宣纸文化园",
    case: "国家4A级景区，是了解宣纸制作技艺的最佳场所，可以亲身体验宣纸制作的全过程。",
    imgUrl: "imgs/index-img/index-position-1.jpg",


  },
  {
    id: 2,
    name: "桃花潭景区",
    case: "因李白诗句'桃花潭水深千尺，不及汪伦送我情'而闻名，是皖南著名的文化旅游胜地。",
    imgUrl: "imgs/index-img/index-position-2.jpg",

  },
  {
    id: 3,
    name: "查济古村",
    case: "中国历史文化名村，保存有大量明清古建筑，是徽派建筑的杰出代表。",
    imgUrl: "imgs/index-img/index-position-3.jpg",
  },
  {
    id: 4,
    name: "黄田古村",
    case: "国家级历史文化名村，以其独特的徽派建筑和深厚的文化底蕴著称。",
    imgUrl: "imgs/index-img/index-position-4.jpg",
  },
  {
    id: 5,
    name: "宣笔制作基地",
    case: "泾县宣笔制作技艺的传承地，可以观摩宣笔制作工艺，体验文房四宝文化。",
    imgUrl: "imgs/index-img/index-position-5.jpg",
  },
  {
    id: 6,
    name: "月亮湾景区",
    case: "皖南著名的自然风景区，山水相依、风光旖旎，是体验泾县自然风光的绝佳去处。",
    imgUrl: "imgs/index-img/index-position-6.jpg",
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

</style>
