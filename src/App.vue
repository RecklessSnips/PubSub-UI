<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

console.log('Environment: ', import.meta.env.MODE)
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>
