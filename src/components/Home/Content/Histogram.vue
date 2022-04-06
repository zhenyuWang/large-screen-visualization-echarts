<template>
  <div id="histogram"></div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from "vue"
import { toThousands, getChartFontSize } from "@/utils/tools"

let chartInstance: any

const chartOptions = {
  color: ["#FF9626", "#3DFFDC", "#268AFF", "#1ED6FF", "#5A3FFF"],
  tooltip: {
    padding: 5,
    textStyle: {
      fontSize: getChartFontSize(),
      color: "#fff",
    },
    backgroundColor: "rgba(8,21,58,.5)",
    borderColor: "rgba(90,170,251,.5)",
    axisPointer: {
      type: "shadow",
    },
    trigger: "item",
    // 什么时候触发提示小图标，点击click的时候，或者鼠标滑过的时候，默认是mousemove鼠标滑过
    triggerOn: "mousemove",
    // formatter可以以字符串模板方式写，也可以用回调函数写，不过字符串模板略有限制，使用回调函数会灵活点
    formatter: function (params: any) {
      if (params.seriesName === "合计") {
        return `<div style="margin:0;padding:0;">总额：${toThousands(
          params.data
        )}万元</p></div>`
      }
      return `<div style="margin:0;padding:0;"><p style="margin:0;padding:0 3px;">${
        params.seriesName
      }</p><p style="margin:0;padding:0 3px;">
          金额：${toThousands(params.data)}万元</p></div>`
    },
  },
  legend: {
    orient: "vertical",
    itemWidth: getChartFontSize(),
    itemHeight: getChartFontSize(),
    textStyle: {
      color: "#fff",
      fontSize: getChartFontSize(),
    },
    right: 0,
    top: 50,
    data: ["合计", "手机", "平板", "笔记本", "一体机"],
  },
  grid: {
    top: "15%",
    left: "5%",
    right: "17%",
    bottom: "0",
    containLabel: true,
  },
  xAxis: [
    {
      name: "年",
      type: "category",
      data: ["2019", "2020", "2021", "2022"],
      axisLabel: {
        fontSize: getChartFontSize(),
        interval: 0,
        color: "#8FC7FF",
      },
      nameTextStyle: {
        fontSize: getChartFontSize(),
        color: "rgba(143, 199, 255, 0.6)",
      },
    },
  ],
  yAxis: [
    {
      name: "总额(万元)",
      type: "value",
      axisLine: {
        show: true,
      },
      axisTick: {
        show: true,
      },
      // 水平分隔线样式
      splitLine: {
        show: false,
      },
      axisLabel: {
        color: "#8FC7FF",
        fontSize: getChartFontSize(),
      },
      nameTextStyle: {
        fontSize: getChartFontSize(),
        color: "rgba(143, 199, 255, 0.6)",
      },
    },
  ],
  series: [
    {
      name: "合计",
      type: "line",
      data: [400, 800, 1200, 1600],
      // 拐点大小
      symbolSize: 8,
    },
    {
      name: "一体机",
      type: "bar",
      barWidth: "48%",
      stack: "amount",
      data: [100, 200, 300, 400],
      // 是否显示柱子背景色
      showBackground: true,
      // 柱子背景色样式
      backgroundStyle: {
        color: "rgba(255,255,255,.1)",
      },
    },
    {
      name: "笔记本",
      type: "bar",
      barWidth: "48%",
      stack: "amount",
      data: [100, 200, 300, 400],
    },
    {
      name: "平板",
      type: "bar",
      barWidth: "48%",
      stack: "amount",
      data: [100, 200, 300, 400],
    },
    {
      name: "手机",
      type: "bar",
      barWidth: "48%",
      stack: "amount",
      data: [100, 200, 300, 400],
    },
  ],
}

const init = () => {
  const chartDom = document.getElementById("histogram")
  if (chartDom) chartInstance = (window as any)["echarts"].init(chartDom)
  chartInstance?.setOption(chartOptions)
}

onMounted(() => {
  init()
})

const resize = () => {
  chartOptions.legend.itemWidth = getChartFontSize()
  chartOptions.legend.itemHeight = getChartFontSize()
  chartOptions.legend.textStyle.fontSize = getChartFontSize()
  chartOptions.tooltip.textStyle.fontSize = getChartFontSize()
  chartOptions.xAxis[0].axisLabel.fontSize = getChartFontSize()
  chartOptions.yAxis[0].axisLabel.fontSize = getChartFontSize()
  chartOptions.yAxis[0].nameTextStyle.fontSize = getChartFontSize()
  chartInstance?.setOption(chartOptions)
  chartInstance?.resize()
}

window.addEventListener("resize", resize)
onUnmounted(() => {
  window.removeEventListener("resize", resize)
})
</script>
<style lang="scss" scoped>
#histogram {
  width: 40rem;
  height: 30rem;
}
</style>
