<script setup lang='ts'>

const { data: list } = await useRequest(get('/business/information/getInvestmentList'),{  initialData: []})  //不行
</script>

<template>
  <div>
    <div class="" v-if="list.length">请求数据：{{ JSON.stringify(list) }}</div>
    <div class="" v-else>没有请求</div>
  </div>
</template>
