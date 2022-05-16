<template>
  <div class="header relative">
    <div class="relative flex flex-justify-between">
      <div class="left flex flex-align-center c5aaafb">
        <div class="home flex flex-align-center font-size-16 pointer">
          <img src="@/assets/img/home/header/icon_home.svg" alt="" />
          首页
        </div>
      </div>
      <div class="right c5aaafb">
        <span @click="changeFullScreen">{{
          isFullScreen ? "退出全屏" : "全屏"
        }}</span>
        数据日期: {{ date }}
      </div>
    </div>
    <div class="absolute title-content flex flex-center c5aaafb">
      <i class="title mr-10">visualization</i>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import { addZero } from "@/utils/tools"
import screenFull from "screenfull"
const isFullScreen = ref(false)
const changeFullScreen = () => {
  if (screenFull.isEnabled) {
    screenFull.toggle()
    isFullScreen.value = !isFullScreen.value
  } else {
    console.log("暂不支持全屏")
  }
}

const now = new Date()
const date = `${now.getFullYear()}年${addZero(now.getMonth() + 1)}月${addZero(
  now.getDate()
)}日`
</script>
<style lang="scss" scoped>
.header {
  height: 6.5rem;
  padding: 0.8rem 3rem 0;
  background: url("@/assets/img/home/header/header_bg.svg");
  background-size: 100% auto;
  .header-bg {
    left: 0;
    top: 0;
    z-index: 0;
  }
  > div {
    z-index: 2;
  }
  .left {
    height: 2rem;
    .home {
      margin-right: 2.4rem;
      > img {
        width: 2rem;
        height: 2rem;
        margin-right: 0.7rem;
      }
    }
  }
  > .title-content {
    top: 1rem;
    left: 30%;
    right: 30%;
    .title {
      font-size: 3.4rem;
      color: #5aaafb;
      letter-spacing: 0.3rem;
      font-weight: 600;
    }
  }
}
</style>
