<template>
  <div
      style="width: 100%; height: auto;  display: grid; grid-template-columns: repeat(1, 1fr); position: relative; justify-items: center;">
    <!-- part1 图片 -->
    <div style="position: relative; width: 1200px; height: 500px;">
      <img src="/imgs/culture-img/top.jpg" alt="" style="width: 100%; height: 100%; object-fit: cover;">
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
      align-items: center;"
      >
        <h1 style="text-align: center; font-size: 70px; font-family: '华文新魏', serif;letter-spacing: 30px; font-weight: 700; color: #ffffff; text-transform: capitalize; margin: 0;">
          文化体验
        </h1>
        <p style="text-align: center; color: #ffffff; font-size:20px;font-family: '华文新魏', serif; font-weight: bold; margin: 0; padding: 20px; max-width: 760px;">
          Cultural Experience
        </p>
      </div>
    </div>


    <!--  part2-->
    <div style="width: 1200px;height:100%;display: flex;">
      <div style="width: 420px;height: 100%;background-color: #ffffff;">
        <el-menu
            default-active="2"
            @open="handleOpen"
            @close="handleClose"
        >
          <el-sub-menu
              v-for="o in copyKindArr"
              :key="o.id"
              :index="String(o.id)"
          >
            <template #title>
              <el-icon>
                <location/>
              </el-icon>
              <span class="menu-span">{{ o.name }}</span>
            </template>
            <el-menu-item
                v-for="i in o.data"
                :key="i.id"
                @click="handleCarouselChange(i.id)"
            >
              {{ i.name }}
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>


      <div style="width: 1650px;height: 100%;background-color: #ffffff;">
        <div style="width: 100%;height: 300px;display: flex;margin-top: 20px;">
          <div style="width: 50%;height: 100%;display: flex;justify-content: center;">
            <img :src="currentItem.imgUrl" alt=""
                 style="width: 378px;height: 300px;border-radius: 25px;box-shadow: 0 4px 15px;">
          </div>
          <div style="width: 50%;height: 100%;position: relative;">
            <p style="font-size: 50px;font-weight: bold;text-align:center;margin-top: 20px;color: #000a1f;">{{ currentItem.name }}</p>
            <p style="font-size: 16px;margin-left: 15px;">
              {{ currentItem.introduce }}
            </p>

            <div
                v-if="currentItem.parentId === 1"
                style="height: 35%;width: 100%;display: flex;bottom: 0;justify-content: center;position: absolute;">
              <div style="font-size: 30px;float: left;width: 50%;height: 100%;">
                ❤️ 点赞数:
                <p style="text-align: center;font-weight: bold;font-size: 36px;">{{ currentItem.likeNum }}</p>
              </div>
              <div style="font-size: 30px;float: left;;width: 50%;height: 100%">
                👁️ 浏览量:
                <p style="text-align: center;font-weight: bold;font-size: 36px;">{{ currentItem.viewNum }}</p>
              </div>
            </div>


          </div>

        </div>

        <div style="width: 100%;height: auto;background-color: #ffffff;margin-top: 40px;">
          <!--          子标题-->
          <h2 style="font-size: 40px;text-align: center;">{{currentItem.subName}}</h2>
          <p style="text-indent: 2em;font-size: 22px;letter-spacing: 5px;">
            {{currentItem.content}}
          </p>
          <div
              v-if="currentItem.parentId === 1"
              style="width: 100%;height: 100px;background-color: #ffffff;display: flex;justify-content: center;align-items: center;gap: 50px;border-top: 1px solid #bab6b6;">
            <el-button class="bottle-button" type="warning" round>喜欢</el-button>
            <el-button class="bottle-button" type="info" round>不喜欢</el-button>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import {ref} from 'vue'
import {kindArr} from '@/data/globelData.js'

// 拷贝数据
const copyKindArr = [...kindArr]

// 当前激活的菜单项 ID
const activeId = ref(1)

// 当前展示的内容项
const currentItem = ref(copyKindArr[0]?.data[0] || {})

// 点击菜单项时触发
const handleCarouselChange = (id) => {
  activeId.value = id

  // 遍历查找对应项
  for (const category of copyKindArr) {
    const found = category.data.find(item => item.id === id)
    if (found) {
      currentItem.value = found
      break
    }
  }
}

</script>

<style scoped>
.menu-span {
  font-size: 24px;
  font-weight: bold;
}

p {
  margin: 0;
  padding: 0;
}

.bottle-button {
  width: 110px;
  height: 50px;
  font-size: 15px;
}
/* 在包含 scoped 的 style 标签中使用 :deep() */
:deep(.el-menu) {
  border-right: none;
}



</style>