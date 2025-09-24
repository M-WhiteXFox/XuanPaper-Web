<template>
  <!--页面顶部图片-->
  <div style="width: 100%;height: 650px;background-color: #784444;position: relative;">
    <img src="imgs/guide-img/top.jpg" alt="" style="width: 100%;height: 100%;object-fit: cover;">
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
          旅游指南
        </h1>
        <p style="text-align: center; color: #ffffff; font-size:22px;font-family: '华文新魏', serif; font-weight: bold; margin: 0; padding: 20px; max-width: 760px;">
          guide book
        </p>
      </div>
    </div>
  </div>

  <!--part2-->
  <div style="width: 100%;height: auto; display: flex;justify-content: center;">
    <div style="width: 1500px;height: 100%;">

      <div
          style="width: 100%;height: 100px;background-color: #ffffff;display: flex;align-items: center;margin-top: 80px;">
          <h1 style="margin: 0 0 0 20px;">
            旅游地点列表
          </h1>

        <el-input v-model="input" style="height: 55px;;width: 600px;margin-left: 527px;" placeholder="请输入您要搜索的内容"></el-input>
        <el-button style="height: 55px;;width: 150px;" type="warning">
          <el-icon size="large">
            <Search/>
          </el-icon>
        </el-button>
      </div>

      <div
          style="display: grid; grid-template-columns: repeat(3,1fr); gap: 40px;margin: 30px 0 30px 0;">
        <div
            v-for="o in copyGuideArr"
            :key="o"
            style=" width: 473px; height: 570px;  border-radius: 12px; box-shadow: 0 4px 30px rgba(0,0,0,0.1);display: grid;justify-items: center;"
        >
          <div style="width: 440px;height: 270px;background-color: #95e1bf;border-radius: 12px;margin-top: 20px;">
            <img :src="o.imgUrl" alt="" style="width: 100%;height: 100%;">
          </div>

          <div style="width: 440px;height: 160px;border-bottom: 1px solid #a3a3a5">
            <p style="font-size: 18px;margin: 9px 0 0 0;display: inline-block;">
              大约花费:
            </p>
            <span style=" font-size: 26px;font-weight: bold;float: right;margin-right: 15px;">
              ￥{{o.price}}
            </span>


            <h2 style="font-size: 26px;margin: 20px 0 0 0">{{o.name}}</h2>
            <ul style="list-style-type: none;display: flex;padding: 0;margin: 19px 0 0 0;gap: 20px;">
              <li>
                <span><el-icon color="#F6661EFF"><Clock /></el-icon> {{o.timeCost}} min</span>
              </li>
              <li>
                <span><el-icon color="#F6661EFF"><Location /></el-icon> {{o.location}}</span>
              </li>
            </ul>

          </div>
          <div style="width: 440px;height: 90px;">
            <el-rate
                size="large"
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value} points"
                style="margin-top: 10px;"
            />
            <el-button  :icon="Right" circle type="warning" style="width: 45px;height:45px;float: right;margin: 20px 20px 0 0" />
            <p style="margin: 0;display: block;">(12 人看过) </p>

          </div>


        </div>
      </div>

      <div style="display: flex;justify-content: center;align-items: center;margin-bottom: 40px;">
        <el-pagination
            size="large"
            background
            layout="prev, pager, next"
            :total="50"
            class="mt-4"
        />

      </div>



    </div>


  </div>


</template>


<script setup>
import {ref} from 'vue'
import {Right} from "@element-plus/icons-vue";
import {guideArr} from "@/data/globelData";

// 评分数值
const value = ref(3.7)
//拷贝数组数据
const copyGuideArr = [...guideArr]


const input = ref('')
</script>


<style scoped>

</style>