<template>
  <div id="line-chart"></div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from "vue"
import { toThousands, getChartFontSize } from "@/utils/tools"

let chartInstance: any

const chartOptions = {
  color: ["#725CFA", "#3FD4CF", "#FF9626"],
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
    triggerOn: "mousemove", // 什么时候触发提示小图标，点击click的时候，或者鼠标滑过的时候，默认是mousemove鼠标滑过
    /* formatter可以以字符串模板方式写，也可以用回调函数写，不过字符串模板略有限制，我们使用回调函数会灵活点 */
    formatter: function (params: any) {
      return `<div style="margin:0;padding:0;"><p style="margin:0;padding:0 3px;">${
        params.seriesName
      }
          <span class="bold">${toThousands(params.data)}</span> 万元</p></div>`
    },
  },
  legend: {
    orient: "horizontal",
    itemWidth: getChartFontSize(),
    itemHeight: getChartFontSize(),
    textStyle: {
      color: "#fff",
      fontSize: getChartFontSize(),
    },
    top: 10,
    data: ["手机", "平板", "笔记本"],
  },
  grid: {
    top: "30%",
    left: "3%",
    right: "5%",
    bottom: "5%",
    containLabel: true,
  },
  xAxis: [
    {
      name: "年",
      type: "category",
      data: ["2019", "2020", "2021", "2022"],
      axisLabel: {
        interval: 0,
        color: "#8FC7FF",
        fontSize: getChartFontSize(),
      },
      nameGap: 4,
      nameTextStyle: {
        color: "rgba(143, 199, 255, 0.6)",
        fontSize: getChartFontSize(),
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
        interval: 0,
        color: "#8FC7FF",
        fontSize: getChartFontSize(),
      },
      nameTextStyle: {
        color: "rgba(143, 199, 255, 0.6)",
        fontSize: getChartFontSize(),
      },
    },
  ],
  series: [
    {
      name: "笔记本",
      type: "line",
      // 拐点大小
      symbolSize: 8,
      areaStyle: {
        normal: {
          color: new (window as any)["echarts"].graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              { offset: 0, color: "rgba(63,212,207,.5)" },
              { offset: 0, color: "rgba(63,212,207,.3)" },
              { offset: 1, color: "rgba(255,255,255,.1)" },
            ]
          ),
        },
      },
      data: [100, 200, 300, 400],
    },
    {
      name: "平板",
      type: "line",
      // 拐点大小
      symbolSize: 8,
      areaStyle: {
        normal: {
          color: new (window as any)["echarts"].graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              { offset: 0, color: "rgba(255,150,38,.5)" },
              { offset: 0, color: "rgba(255,150,38,.3)" },
              { offset: 1, color: "rgba(255,255,255,.1)" },
            ]
          ),
        },
      },
      data: [400, 300, 200, 100],
    },
    {
      name: "手机",
      type: "line",
      // 拐点大小
      symbolSize: 8,
      areaStyle: {
        normal: {
          color: new (window as any)["echarts"].graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              { offset: 0, color: "rgba(114,92,250,.5)" },
              { offset: 0, color: "rgba(114,92,250,.3)" },
              { offset: 1, color: "rgba(255,255,255,.1)" },
            ]
          ),
        },
      },
      data: [200, 300, 100, 400],
    },
  ],
}

const init = () => {
  const chartDom = document.getElementById("line-chart")
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
#line-chart {
  width: 40rem;
  height: 30rem;
  margin-left: 2rem;
}
</style>
