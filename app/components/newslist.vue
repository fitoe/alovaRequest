<script setup lang='ts'>

const { data: list } = await useRequest(get('/business/information/getNewsList')) // 十秒后切换过来，不请求
// const { data: list } = await useAsyncData(async () => await get('/business/information/getNewsList')) // 可以
</script>

<template>
  <div>
    <div class="" v-if="list?.length">请求数据：{{ JSON.stringify(list) }}</div>
    <div class="" v-else>没有请求</div>
  </div>
</template>
