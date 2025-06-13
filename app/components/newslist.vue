<script setup lang='ts'>

const { data: list } = await useRequest(get('/business/information/getNewsList'),{  initialData: [{
    infoId: '',
    title: '',
    publishTime: '2025-06-05 16:15:34',
    content: '<p></p>',
  }]}) 
</script>

<template>
  <div>
    <div class="" v-if="list.length">请求数据：{{ JSON.stringify(list) }}</div>
    <div class="" v-else>没有请求</div>
  </div>
</template>
