<template>
  <div>
    <!--    页面顶部图片-->
    <div style="width: 100%;height: 560px;background-color: #f6661e;">
      <!-- part1 图片 -->
      <div style="position: relative; width: 100%; height: 100%;">
        <img src="imgs/connect-img/top.jpg" alt="" style="width: 100%; height: 100%; object-fit: cover;">
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
            联系我们
          </h1>
          <p style="text-align: center; color: #ffffff; font-size:22px;font-family: '华文新魏', serif; font-weight: bold; margin: 0; padding: 20px; max-width: 760px;">
           connect us
          </p>
        </div>
      </div>

    </div>

    <!--    页面part2-->
    <div style="display: flex;gap: 60px;justify-content: center;margin-top: 80px;">
      <div
          style="width: 360px;height: 215px;border-radius: 30px;box-shadow: 0 4px 30px rgba(0,0,0,0.1);display: flex;align-items: center;">
        <div style="width: 95px;height: 95px;border-radius: 100px;background-color: #f48453;margin-left: 15px">
          <div style="width: 35px;height: 35px;margin: 29px 0 0 29px;">
            <LocationFilled/>
          </div>
        </div>

        <div style="margin: 33px 0 0 20px;width: 240px;height: 100%;">
          <h2>
            地址:
          </h2>
          <p>光华大道二段601号附1号国际非物质文化遗产博览园内</p>
        </div>
      </div>

      <div
          style="width: 360px;height: 215px;border-radius: 30px;box-shadow: 0 4px 30px rgba(0,0,0,0.1);display: flex;align-items: center;">
        <div style="width: 95px;height: 95px;border-radius: 100px;background-color: #f48453;margin-left: 15px">
          <div style="width: 35px;height: 35px;margin: 29px 0 0 29px;">
            <Comment/>
          </div>

        </div>

        <div style="margin: 33px 0 0 20px;width: 240px;height: 100%;">
          <h2>
            邮箱:
          </h2>
          <p style="line-height:  27px;">
            1528027618@163.com<br>
            1528027618@163.com
          </p>
        </div>
      </div>

      <div
          style="width: 360px;height: 215px;border-radius: 30px;box-shadow: 0 4px 30px rgba(0,0,0,0.1);display: flex;align-items: center;">
        <div style="width: 95px;height: 95px;border-radius: 100px;background-color:#f48453;margin-left: 15px">
          <div style="width: 35px;height: 35px;margin: 29px 0 0 29px;">
            <PhoneFilled/>
          </div>


        </div>

        <div style="margin: 33px 0 0 20px;width: 240px;height: 100%;">
          <h2>
            电话:
          </h2>
          <p>光华大道二段601号附1号国际非物质文化遗产博览园内</p>
        </div>
      </div>

    </div>

    <!--    页面part3-->
    <div style="height: auto;display: flex;justify-content: center;margin-top: 80px;">
      <div style="text-align: center;width: 1220px;height: auto;background-color: #ffffff;box-shadow: 0 8px 20px rgba(0,0,0,0.5);border-radius: 10px;">
        <h1 style="font-size: 45px;margin: 0;">
          留言给我们
        </h1>
        <div style="width: 100%;height: auto;background-color: #ffffff;gap: 20px;">
          <div style="width: 100%;height: 45px;background-color: #ffffff;display: flex;gap: 54px;justify-content: center;margin-top: 20PX;">
            <el-input v-model="input" style="width: 330px" placeholder="地址" />
            <el-input v-model="input" style="width: 330px" placeholder="邮箱" />
            <el-input v-model="input" style="width: 330px" placeholder="电话" />
          </div>
          <el-input
              v-model="textarea"
              style="width: 1100px;margin-top: 20px;"
              :rows="15"
              type="textarea"
              placeholder="请留言"
          />
          <br>
          <el-button color="#f6661e" :dark="isDark"  style="width: 1100px;height: 50px;margin: 40px 0 30px 0;color: white;">
            发送
          </el-button>
        </div>
      </div>
    </div>

    <!--    页面part4-->
    <div style="height: auto;display: flex;justify-content: center;margin-top: 80px;margin-bottom: 30px;">
      <div style="text-align: center;width: 1220px;height: auto;background-color: #ffffff;box-shadow: 0 8px 20px rgba(0,0,0,0.5);border-radius: 10px;">
        <h1 style="font-size: 45px;margin: 0;">
          我们的位置
        </h1>

        <div style="width: 1150px;height: 500px;background-color: #784444;margin: 20px 0 30px 38px;">
          <img style="width: 1150px;height: 500px;" src="imgs/connect-img/map.jpg" alt="">
        </div>
      </div>
    </div>


  </div>


</template>

<script>

</script>


<style scoped>

h2 {
  font-size: 27px;
  margin: 27px 0 0 0;

}

p {
  font-size: 17px;
  color: #555353;
}

</style>