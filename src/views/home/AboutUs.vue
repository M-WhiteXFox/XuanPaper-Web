<template>
  <!-- 页面顶部图片 -->
  <div style="width: 100%;height: 650px;background-color: #784444;position: relative;">
    <img src="imgs/about-img/top.jpg" alt="关于我们" style="width: 100%;height: 100%;object-fit: cover;">
    <div>
      <!-- 文字-->
      <div style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      ">
        <h1 style="text-align: center; font-size: 90px; font-family: '华文隶书', serif;letter-spacing: 30px; font-weight: 700; color: #ffffff; text-transform: capitalize; margin: 0;">
          关于我们
        </h1>
        <p style="text-align: center; color: #ffffff; font-size:22px;font-family: '华文新魏', serif; font-weight: bold; margin: 0; padding: 20px; max-width: 760px;">
          About Us
        </p>
      </div>
    </div>
  </div>

  <!-- 公司简介部分 -->
  <div style="width: 100%;height: auto; display: flex;justify-content: center;background-color: #f8f8f8;padding: 80px 0;">
    <div style="width: 1500px;height: 100%;display: flex;gap: 60px;">
      <div style="flex: 1;">
        <h2 style="font-size: 36px;color: #784444;margin-bottom: 30px;">关于我们</h2>
        <p style="font-size: 18px;line-height: 1.8;color: #666;">
          我们是一家专注于泾县非遗文化传承与推广的文化机构，致力于让更多人了解和体验泾县丰富的非物质文化遗产。泾县被誉为"中国宣纸之乡"，拥有宣纸、宣笔、徽墨等众多国家级非遗项目。
        </p>
        <p style="font-size: 18px;line-height: 1.8;color: #666;margin-top: 20px;">
          多年来，我们致力于非遗文化的保护、传承与创新，通过文化展示、体验活动、研学旅行等多种形式，让传统文化焕发新的生机。我们的使命是让每一位来访者都能感受到泾县非遗文化的独特魅力。
        </p>
        <el-button type="warning" size="large" style="margin-top: 40px;height: 50px;width: 200px;font-size: 18px;">
          了解更多
        </el-button>
      </div>
      <div style="flex: 1;border-radius: 12px;overflow: hidden;box-shadow: 0 4px 30px rgba(0,0,0,0.1);">
        <img src="imgs/about-img/team.jpg" alt="公司团队" style="width: 100%;height: 100%;object-fit: cover;">
      </div>
    </div>
  </div>

  <!-- 我们的优势 -->
  <div style="width: 100%;height: auto; display: flex;justify-content: center;padding: 80px 0;">
    <div style="width: 1500px;height: 100%;">
      <h2 style="font-size: 36px;color: #784444;text-align: center;margin-bottom: 60px;">我们的优势</h2>

      <div style="display: grid; grid-template-columns: repeat(3,1fr); gap: 40px;">
        <el-card shadow="hover" style="border-radius: 12px;">
          <template #header>
            <div style="display: flex;align-items: center;gap: 15px;">
              <el-icon size="30px" color="#F6661EFF"><User /></el-icon>
              <span style="font-size: 22px;font-weight: bold;">专业团队</span>
            </div>
          </template>
          <p style="font-size: 16px;line-height: 1.7;color: #666;">
            我们拥有10年以上非遗文化研究与推广经验的专家团队，深入了解泾县的文化遗产，能为您提供最专业的文化体验服务。
          </p>
        </el-card>

        <el-card shadow="hover" style="border-radius: 12px;">
          <template #header>
            <div style="display: flex;align-items: center;gap: 15px;">
              <el-icon size="30px" color="#F6661EFF"><Star /></el-icon>
              <span style="font-size: 22px;font-weight: bold;">定制服务</span>
            </div>
          </template>
          <p style="font-size: 16px;line-height: 1.7;color: #666;">
            我们提供个性化的非遗文化体验方案，根据您的兴趣和需求量身定制，确保每一次体验都独一无二。
          </p>
        </el-card>

        <el-card shadow="hover" style="border-radius: 12px;">
          <template #header>
            <div style="display: flex;align-items: center;gap: 15px;">
              <el-icon size="30px" color="#F6661EFF"><Checked /></el-icon>
              <span style="font-size: 22px;font-weight: bold;">品质保障</span>
            </div>
          </template>
          <p style="font-size: 16px;line-height: 1.7;color: #666;">
            我们与泾县各非遗传承基地、文化场馆建立长期合作关系，严格把控服务质量，确保您的文化体验品质。
          </p>
        </el-card>
      </div>
    </div>
  </div>

  <!-- 团队成员 -->
  <div style="width: 100%;height: auto; display: flex;justify-content: center;background-color: #f8f8f8;padding: 80px 0;">
    <div style="width: 1500px;height: 100%;">
      <h2 style="font-size: 36px;color: #784444;text-align: center;margin-bottom: 60px;">我们的团队</h2>

      <div style="display: grid; grid-template-columns: repeat(4,1fr); gap: 30px;">
        <div v-for="member in teamMembers" :key="member.id" style="text-align: center;">
          <div style="width: 100%;height: 350px;border-radius: 12px;overflow: hidden;margin-bottom: 20px;box-shadow: 0 4px 30px rgba(0,0,0,0.1);display: flex;align-items: center;justify-content: center;">
            <img :src="member.avatar" :alt="member.name" style="width: 30%;height: 30%;object-fit: cover;">
          </div>
          <h3 style="font-size: 22px;margin: 0 0 10px 0;">{{ member.name }}</h3>
          <p style="font-size: 16px;color: #F6661EFF;margin: 0 0 15px 0;">{{ member.position }}</p>
          <p style="font-size: 14px;color: #666;line-height: 1.6;">{{ member.description }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 联系我们 -->
  <div style="width: 100%;height: auto; display: flex;justify-content: center;padding: 80px 0;">
    <div style="width: 1500px;height: 100%;">
      <h2 style="font-size: 36px;color: #784444;text-align: center;margin-bottom: 60px;">联系我们</h2>

      <div style="display: flex;gap: 60px;">
        <div style="flex: 1;">
          <el-form :model="contactForm" label-width="100px" label-position="top" size="large">
            <el-form-item label="您的姓名">
              <el-input v-model="contactForm.name" placeholder="请输入您的姓名" />
            </el-form-item>
            <el-form-item label="电子邮箱">
              <el-input v-model="contactForm.email" placeholder="请输入您的电子邮箱" />
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="contactForm.phone" placeholder="请输入您的联系电话" />
            </el-form-item>
            <el-form-item label="留言内容">
              <el-input
                  v-model="contactForm.message"
                  type="textarea"
                  :rows="5"
                  placeholder="请输入您的留言内容"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="warning" size="large" style="width: 200px;height: 50px;">提交留言</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div style="flex: 1;">
          <div style="background-color: #f5f5f5;border-radius: 12px;padding: 40px;height: 100%;">
            <h3 style="font-size: 24px;margin-top: 0;color: #784444;">联系方式</h3>

            <div style="margin-top: 30px;display: flex;align-items: center;gap: 15px;margin-bottom: 25px;">
              <el-icon size="24px" color="#F6661EFF"><Location /></el-icon>
              <span style="font-size: 16px;">:安徽省宣城市泾县泾川镇文化路88号</span>
            </div>

            <div style="display: flex;align-items: center;gap: 15px;margin-bottom: 25px;">
              <el-icon size="24px" color="#F6661EFF"><Phone /></el-icon>
              <span style="font-size: 16px;">0563-5022666</span>
            </div>

            <div style="display: flex;align-items: center;gap: 15px;margin-bottom: 25px;">
              <el-icon size="24px" color="#F6661EFF"><Message /></el-icon>
              <span style="font-size: 16px;">jingxianfeiyi@163.com</span>
            </div>

            <div style="display: flex;align-items: center;gap: 15px;margin-bottom: 25px;">
              <el-icon size="24px" color="#F6661EFF"><Clock /></el-icon>
              <span style="font-size: 16px;">周一至周五 9:00-18:00</span>
            </div>

            <div style="margin-top: 40px;">
              <h3 style="font-size: 24px;margin-top: 0;color: #784444;">关注我们</h3>
              <div style="display: flex;gap: 20px;margin-top: 20px;">
                <el-button circle size="large">
                  <el-icon size="24px"><ChatDotRound /></el-icon>
                </el-button>
                <el-button circle size="large">
                  <el-icon size="24px"><Link /></el-icon>
                </el-button>
                <el-button circle size="large">
                  <el-icon size="24px"><VideoCamera /></el-icon>
                </el-button>
                <el-button circle size="large">
                  <el-icon size="24px"><Headset /></el-icon>
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  User,
  Star,
  Checked,
  Location,
  Phone,
  Message,
  Clock,
  ChatDotRound,
  Wechat,
  VideoCamera,
  Headset
} from '@element-plus/icons-vue'

// 团队成员数据
const teamMembers = ref([
  {
    id: 1,
    name: '李文华',
    position: '创始人兼馆长',
    description: '非遗文化研究专家，拥有20年文化遗产保护经验，致力于泾县非遗文化的传承与推广。',
    avatar: 'imgs/about-img/user.jpg'
  },
  {
    id: 2,
    name: '王雪梅',
    position: '文化体验总监',
    description: '精通宣纸、宣笔等非遗技艺，擅长设计沉浸式文化体验项目，让传统文化触手可及。',
    avatar: 'imgs/about-img/user.jpg'
  },
  {
    id: 3,
    name: '张建国',
    position: '研学项目经理',
    description: '10年研学教育经验，专注于非遗文化教育课程开发，深受学校和家长好评。',
    avatar: 'imgs/about-img/user.jpg'
  },
  {
    id: 4,
    name: '刘小燕',
    position: '市场推广总监',
    description: '文化传播专家，擅长非遗文化品牌推广和新媒体营销，让更多人了解泾县非遗。',
    avatar: 'imgs/about-img/user.jpg'
  }
])

// 联系表单数据
const contactForm = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})
</script>

<style scoped>
.el-card {
  transition: transform 0.3s;
}

.el-card:hover {
  transform: translateY(-5px);
}
</style>