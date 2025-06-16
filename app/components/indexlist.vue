<script setup lang='ts'>

const { data: list,send,onSuccess,  onError,  onComplete } =  await useRequest(get('/business/information/getInvestmentList'),{  initialData: []})  //不行
onSuccess(event => {
  console.log('请求成功，响应数据为:', event.data);
  console.log('本次请求的method实例为:', event.method);
  console.log('响应数据是否来自缓存:', event.fromCache);
});
onError(event => {
  console.log('请求失败，错误信息为:', event.error);
  console.log('本次请求的method实例为:', event.method);
});
onComplete(event => {
  // event.status在成功时为success，失败时为error
  console.log('请求完成，状态为：', event.status);
  console.log('本次请求的method实例为:', event.method);
  console.log('响应数据是否来自缓存:', event.fromCache);
  if (event.data) {
    console.log('请求数据：',event.data)
  } else if (event.error) {
    console.log('错误信息：',event.error)
  }
});
</script>

<template>
  <div>
    <div class="" >请求数据：{{ JSON.stringify(list) }}</div>
    <!-- <div class="" v-else>没有请求</div> -->
    <button type="primary" @click="send">发送</button>
  </div>
</template>
