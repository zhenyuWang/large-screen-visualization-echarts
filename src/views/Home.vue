<template>
  <div class="bg fixed">
    <Header />
    <Content></Content>
  </div>
</template>
<script setup lang="ts">
import Header from "@/components/Home/Header.vue"
import Content from "@/components/Home/Content/index.vue"
</script>
<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #040c29;
}
</style>
