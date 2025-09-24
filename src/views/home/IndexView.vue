<template>

  <!--  首页轮播图-->
  <div class="carousel-wrapper">
    <el-carousel :interval="5000" arrow="hover" class="full-width-carousel">
      <el-carousel-item v-for="item in carouselImgArr" :key="item.id" class="carousel-item">
        <img :src="item.imgUrl" alt="" class="carousel-image"/>
      </el-carousel-item>
    </el-carousel>

    <div style="width: 760px;height: 280px;position: absolute">
      <p style="text-align: center;font-size: 22px; font-weight: 700; color: orangered;margin: 0">Sichuan intangible
        cultural heritage</p>
      <h1 style="text-align: center;font-size: 80px; font-family: '华文新魏',serif; font-weight: 700;color: #ffffff;text-transform: capitalize;margin: 0">
        四川非遗
      </h1>
      <p style="text-align: center;color: #ffffff;font-size: 18px;font-weight: 400;margin: 0;padding: 20px">
        四川，这片历史悠久、文化灿烂的土地，孕育了丰富多彩的非物质文化遗产。这些非遗项目不仅是
        四川人民智慧的结晶，也是中华民族文化宝库中的瑰宝。
      </p>
    </div>
  </div>


  <!--  文化代表-->
  <div style="width: 100%;height: auto;text-align: center;display: flex;justify-content: center;margin-top: 50px;">
    <div style="width: 1600px;height: 100%;background-color: #f2f2f4">
      <p style="font-size: 50px;font-weight: bold;margin: 0;padding: 0;color:  #8b4513;">文化代表</p>
      <p style="font-size: 20px;font-weight: bold;margin: 0;padding: 0;color:  #8b4513;">Cultural representation</p>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr);margin: 48px 0 0 80px;gap: 35px;">
        <el-card style="width: 283px;height: 430px;" v-for="item in newsImgArr" :key="item">
          <div style="width: auto;height: 320px;background-color: #ffffff">
            <img :src="item.imgUrl" alt="" style="width: 250px;height: 170px;border-radius: 8px;  /*添加圆角*/">
            <h3 style="float: left;margin: 0;">{{ item.name }}:</h3>
            <p style="font-size: 14px;margin-top: 35px">{{ item.content }}</p>
          </div>
          <template #footer>
            <div
                style="width: 230px;height: 35px;background-color: rgba(255,255,255,0);display: flex;gap: 20px;justify-content: center;align-items: center">
              <div>
                ❤️:{{ item.likeNum }}
              </div>
              <div>
                👁️:{{ item.viewNum }}
              </div>

              <el-button style="width: 80px;height: 30px;" size="small" type="warning" round>了解更多</el-button>
            </div>
          </template>

        </el-card>

      </div>

    </div>

  </div>

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
          <div style="width: 100px;height: 100px;margin: 10px 20px 0 0;">
            <img :src="item.imgUrl" alt="" style="width: 100px;height: 100px;border-radius: 50px;">
          </div>

          <div style="width: 150px;height: 90px;background-color: #ffffff;margin-left: -30px;">
            <p style="margin:0;padding: 10px 0; font-size: 24px;font-weight: bold;">{{ item.name }}</p>
            <p style="margin:0;font-size: 15px">{{ item.age }} 岁</p>
          </div>
        </el-card>
      </div>
      <el-button style="margin-top: 30px;width: 105px;height: 50px;font-size: 18px;" size="large" type="warning">
        了解更多
      </el-button>
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
            每个人都可以成为非遗守护者，通过参观、学习、传播等方式支持四川非遗传承</p>
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
    imgUrl: "imgs/index-img/index-carousel-4.png",

  },
  {
    id: 2,
    imgUrl: "imgs/index-img/index-carousel-2.png",

  },
  {
    id: 3,
    imgUrl: "imgs/index-img/index-carousel-3.png",
  },
  {
    id: 4,
    imgUrl: "imgs/index-img/index-carousel-1.png",
  },
]
const newsImgArr = [
  {
    id: 1,
    name: "川剧",
    parentId : 1,
    imgUrl: "imgs/index-img/index-news-chuanju.png",
    likeNum: 659,
    viewNum: 123,
    content: "川剧是中国戏曲的重要组成部分之一，以其独特的变脸、吐火等绝技闻名于世。它不仅融合了高腔、昆腔、胡琴、弹戏及灯调等多种声腔，还展现了深厚的文化底蕴和艺术魅力。"
  },
  {
    id: 2,
    name: "羌族刺绣",
    parentId : 1,
    imgUrl: "imgs/index-img/index-news-cixiu.png",
    likeNum: 354,
    viewNum: 917,
    content: "羌族是中国最古老的民族之一，其刺绣艺术承载着羌族的历史记忆和文化认同。羌族刺绣图案古朴大方，色彩对比强烈，极具观赏价值。"
  },
  {
    id: 3,
    name: "蜀绣 ",
    parentId : 1,
    imgUrl: "imgs/index-img/index-news-shuxiu.png",
    likeNum: 189,
    viewNum: 278,
    content: "蜀绣与苏绣、湘绣、粤绣并称为中国四大名绣。蜀绣以针法细腻、色彩鲜艳而著称，图案多取材于自然界的花鸟鱼虫，具有浓郁的地方特色。"
  },
  {
    id: 4,
    name: "竹编工艺",
    parentId : 1,
    imgUrl: "imgs/index-img/index-news-zhubian.png",
    likeNum: 610,
    viewNum: 419,
    content: "四川的竹编技艺精湛，产品种类繁多，从日常生活用品到精美的工艺品应有尽有。这项技艺体现了人们对美好生活的向往和追求，同时也展示了竹编艺人的高超技艺。"
  },
  {
    id: 5,
    name: "木偶戏",
    parentId : 1,
    imgUrl: "imgs/index-img/index-news-muouxi.png",
    likeNum: 862,
    viewNum: 918,
    content: "木偶戏是用木偶来表演故事的戏剧。汉族传统艺术之一，是闽南语系的传统地方戏剧之一， [10]在中国古代又称“傀儡戏”。"
  },
  {
    id: 6,
    name: "银花丝",
    parentId : 1,
    imgUrl: "imgs/index-img/index-news-yinhuasi.png",
    likeNum: 354,
    viewNum: 917,
    content: "银花丝，是成都最具特色的汉族传统金银工艺品，这项金属工艺迄今已有1700多年的历史，在中国明清时就已经达到过极高的艺术水平，与蜀绣、竹编、漆器一起更号称成都的“四大名旦”。"
  },
  {
    id: 7,
    name: "自贡灯会 ",
    parentId : 1,
    imgUrl: "imgs/index-img/index-news-zigongdenghui.png",
    likeNum: 189,
    viewNum: 278,
    content: "灯会，四川省自贡市地方传统民俗，国家级非物质文化遗产之一。自贡元宵灯彩主要包括工艺灯、座灯、组灯等几种。多表现民间传统、古典名著、神话故事等题材内容，具有大型、群体、联动的特点。"
  },
  {
    id: 8,
    name: "四川皮影戏",
    parentId : 1,
    imgUrl: "imgs/index-img/index-news-piyin.png",
    likeNum: 610,
    viewNum: 419,
    content: "从明末清初至乾隆末，四川原有的皮影同外来的皮影经过整整一个半世纪的撞击、交流和融合，到清嘉庆以后，逐渐形成三类皮影戏，流传至今。主要包括土皮影、广皮影和阆中皮影戏三类。"
  },

]
const importantPersonArr = [
  {
    id: 1,
    name: "陈智林",
    age: 61,
    imgUrl: "imgs/index-img/index-importPerson-1.jpg",
    Introduction: "川剧”传承人、四川省文联主席",
    achievement: "先后主演《托国入吴》《峨眉山月》《和亲记》《望娘滩》《巴山秀才》等剧目，展示了他的艺术功力和才华，四川省中青年专家突出贡献奖，第四、第八届中国戏剧节优秀表演奖，现任第十届全国人大代表、省川剧院院长。他从艺10年，在名师指导下，加上自己的刻苦钻研，多次在省、市演出比赛中夺魁。1988年，他赴香港演出的《芙蓉花仙》引起轰动，被誉为\"川剧瑰宝\"。",

  },
  {
    id: 2,
    name: "郝淑萍",
    age: 76,
    imgUrl: "imgs/index-img/index-importPerson-2.jpg",
    Introduction: "国家级非物质文化遗产传承人",
    achievement: "1959年9月进入成都工艺美术技校蜀绣班学习，师从乔子平、彭永兴、肖福兴、毛成武、胡云生、张万清、黄炳成、刘绍云等，因聪慧伶俐、勤奋好学深得老师赏识并得真传。几十年来，她积累了丰富的实践经验和理论知识，具有很高的专业技术，绣制了不少优秀作品。",
  },
  {
    id: 3,
    name: "陈云华",
    age: 76,
    imgUrl: "imgs/index-img/index-importPerson-3.jpg",
    Introduction: "中国工艺美术大师",
    achievement: "陈云华从事竹编艺术的开发、研究四十余载，由他独创的\"单色双面隐形\"竹编艺术享誉海内外，被誉为精品中的精品，艺术中的艺术。1984年他将竹编书画艺术由最初的坐标编织法改进深化为看图编织法，为青神竹编的发展作出了杰出的贡献 。",
  },
  {
    id: 4,
    name: "杨华珍",
    age: 63,
    imgUrl: "imgs/index-img/index-importPerson-4.jpg",
    Introduction: "藏族编织、挑花刺绣工艺代表性传承人",
    achievement: "杨华珍是藏羌织绣非遗项目的杰出传承人，她长期致力于藏羌织绣技艺的保护、传承与推广，不仅在国内大力开展教学与培训工作，培养了大批青年传承人，还将这一传统艺术推向国际舞台，其作品在日本、美国等地展出，并与国际品牌如植村秀、星巴克等合作推出联名产品，提升了藏羌织绣的国际影响力。",
  },
]

const positionArr = [
  {
    id: 1,
    name: "成都",
    case: "成都是欣赏川剧的最佳地点之一，这里有许多剧院定期演出川剧，尤其是变脸等特色表演。",
    imgUrl: "imgs/index-img/index-position-1.jpg",


  },
  {
    id: 2,
    name: " 阿坝藏族羌族自治州",
    case: "这里是羌族文化的中心地带，羌族刺绣以其独特的图案和色彩而闻名。",
    imgUrl: "imgs/index-img/index-position-2.jpg",

  },
  {
    id: 3,
    name: "乐山市",
    case: "峨眉山不仅是佛教圣地，也是峨眉武术的发源地。游客可以在峨眉山体验到正宗的武术课程。",
    imgUrl: "imgs/index-img/index-position-3.jpg",
  },
  {
    id: 4,
    name: "绵阳市",
    case: "平武县以其精美的剪纸艺术著称，反映了当地人民的生活习俗和审美情趣。",
    imgUrl: "imgs/index-img/index-position-4.jpg",
  },
  {
    id: 5,
    name: " 德阳市",
    case: "绵竹是中国四大年画产地之一，其年画以鲜艳的颜色和吉祥的图案深受人们喜爱。",
    imgUrl: "imgs/index-img/index-position-5.jpg",
  },
  {
    id: 6,
    name: "凉山彝族自治州",
    case: "这是彝族最重要的传统节日之一，在每年农历六月二十四日举行，活动包括祭祀、歌舞、赛马等丰富多彩的内容。",
    imgUrl: "imgs/index-img/index-position-6.jpg",
  },
]
</script>

<style scoped>

/*首页轮播图样式*/
.carousel-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

}

.full-width-carousel {
  width: 100%;
  height: 780px;
  position: relative;
}

.carousel-item {
  width: 100%;
  height: 820px;
}

.carousel-image {
  width: 100%;
  height: 780px;
  object-fit: cover;
}

/*part3样式*/
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>