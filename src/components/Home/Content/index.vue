<template>
  <div class="content flex flex-justify-around">
    <Histogram />
    <LineChart />
    <CircularChart />
    <PieChart />
  </div>
</template>
<script setup lang="ts">
import Histogram from "./Histogram.vue"
import LineChart from "./LineChart.vue"
import CircularChart from "./CircularChart.vue"
import PieChart from "./PieChart.vue"
</script>
