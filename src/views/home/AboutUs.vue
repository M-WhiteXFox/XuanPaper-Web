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
        <h2 style="font-size: 36px;color: #784444;margin-bottom: 30px;">公司简介</h2>
        <p style="font-size: 18px;line-height: 1.8;color: #666;">
          我们是一家专注于旅游服务的专业公司，成立于2010年，致力于为全球旅行者提供最优质的旅游体验。我们的团队由经验丰富的旅游专家组成，他们精通各地文化、历史和风土人情。
        </p>
        <p style="font-size: 18px;line-height: 1.8;color: #666;margin-top: 20px;">
          多年来，我们已成功为数万名旅客提供了个性化的旅游方案，覆盖全球50多个国家和地区的300多个旅游目的地。我们的使命是让每一次旅行都成为难忘的回忆。
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
            我们拥有10年以上经验的旅游专家团队，精通多国语言，深入了解各地文化习俗，能为您的旅行提供最专业的建议和服务。
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
            我们提供完全个性化的旅游方案，根据您的兴趣、预算和时间安排量身定制，确保每一次旅行都独一无二。
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
            我们与全球优质酒店、航空公司和地接社建立长期合作关系，严格筛选合作伙伴，确保您的旅行品质。
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
              <span style="font-size: 16px;">:光华大道二段601号附1号国际非物质文化遗产博览园内</span>
            </div>

            <div style="display: flex;align-items: center;gap: 15px;margin-bottom: 25px;">
              <el-icon size="24px" color="#F6661EFF"><Phone /></el-icon>
              <span style="font-size: 16px;">400-888-9999</span>
            </div>

            <div style="display: flex;align-items: center;gap: 15px;margin-bottom: 25px;">
              <el-icon size="24px" color="#F6661EFF"><Message /></el-icon>
              <span style="font-size: 16px;">example123.com</span>
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
    name: '张明',
    position: '创始人兼CEO',
    description: '旅游行业资深专家，拥有20年旅游规划经验，曾为多位名人设计私人旅行方案。',
    avatar: 'imgs/about-img/user.jpg'
  },
  {
    id: 2,
    name: '李华',
    position: '旅游规划总监',
    description: '精通欧洲和东南亚旅游线路，擅长文化深度游设计，能说5国语言。',
    avatar: 'imgs/about-img/user.jpg'
  },
  {
    id: 3,
    name: '王芳',
    position: '客户服务经理',
    description: '10年客户服务经验，耐心细致，致力于为每位客户提供最贴心的服务。',
    avatar: 'imgs/about-img/user.jpg'
  },
  {
    id: 4,
    name: '赵强',
    position: '市场营销总监',
    description: '数字营销专家，擅长旅游品牌推广和社交媒体营销，让更多人发现旅行的美好。',
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