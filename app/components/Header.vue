<script setup lang="ts">
const items = computed(() => [
  { label: '首  页', to: '/' },
  { label: '新闻', to: '/news' },
])
</script>

<template>
  <UNavigationMenu  :items="items" highlight variant="link"/>
</template>
