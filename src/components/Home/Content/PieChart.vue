<template>
  <div id="pie-chart"></div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from "vue"
import { getChartFontSize, toThousands } from "@/utils/tools"

let chartInstance: any

const chartOptions = {
  legend: {
    icon: "circle",
    orient: "horizontal",
    itemWidth: 6,
    itemHeight: 6,
    textStyle: {
      color: "rgba(255,255,255,.7)",
      fontSize: 10,
    },
    left: 80,
    bottom: 0,
    data: ["手机", "平板", "笔记本"],
  },
  tooltip: {
    backgroundColor: "#09163e",
    borderColor: "#679de7",
    padding: 0,
    margin: 0,
    textStyle: {
      fontSize: 10,
    },
    trigger: "item",
    // 什么时候触发提示小图标，点击click的时候，或者鼠标滑过的时候，默认是mousemove鼠标滑过
    triggerOn: "mousemove",
    // formatter可以以字符串模板方式写，也可以用回调函数写，不过字符串模板略有限制，使用回调函数会灵活点
    formatter: function (params: any) {
      const data = params.data,
        res = `
                  <div style="margin:0;padding:.5rem 1rem;
                  color: rgba(255,255,255,0.80);
                  background-size:100% 100%;">
                    <p class="flex flex_justify_between" style="margin:0;padding:0 3px;line-height:3rem;">
                      <span style="max-width:9rem" class="t_ellipse">${
                        data.name
                      }：</span>
                      <span>
                      <span class="fontsize_14 cff9626">${toThousands(
                        data.amount
                      )}</span>
                      万美元</span>
                    </p>
                    <p class="flex flex_justify_between" style="margin:0;padding:0 3px;line-height:2rem;">
                    <span>占比：</span>
                    <span class="c-fff bold">${data.value}%</span>
                    </p>
                  </div>
                `
      return res
    },
  },
  grid: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0%",
    containLabel: true,
  },
  series: [
    {
      type: "pie",
      radius: ["0%", "70%"],
      color: ["#D26914", "#ff9626", "#FFCD87"],
      label: {
        show: false,
      },
      data: [
        { name: "手机", value: 20, amount: 200 },
        { name: "平板", value: 30, amount: 300 },
        { name: "笔记本", value: 50, amount: 500 },
      ],
    },
  ],
}

const init = () => {
  const chartDom = document.getElementById("pie-chart")
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
  chartInstance?.setOption(chartOptions)
  chartInstance?.resize()
}

window.addEventListener("resize", resize)
onUnmounted(() => {
  window.removeEventListener("resize", resize)
})
</script>
<style lang="scss" scoped>
#pie-chart {
  width: 30rem;
  height: 30rem;
}
</style>
