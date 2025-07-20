<template>
  <News></News>
  <RouterView></RouterView>
</template>

<script lang="ts" setup>
import News from '@/components/News.vue'
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'

// 在跳转到这个view的时候，触发 onMounted 来拉取最新的新闻
</script>
