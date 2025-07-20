<template>
  <section class="bg-center bg-cover bg-no-repeat z-10 bg-surface-0 dark:bg-surface-800">
    <div class="p-20 pb-0 flex flex-col items-center relative overflow-hidden">
      <div class="flex flex-col items-center z-20 gap-2">
        <span
          class="text-center font-semibold leading-normal text-primary-600 dark:text-primary-300"
          >MULTIPLY YOUR DEVELOPMENT SPEED</span
        >
        <h3
          class="text-center font-bold text-3xl md:text-5xl text-black/80 dark:text-white/80 mt-0 mb-6 leading-tight"
        >
          Start your business with <br />
          <span
            class="bg-gradient-to-r from-primary-700 to-primary-300 dark:from-primary-400 dark:to-primary-200 bg-clip-text text-transparent leading-tight"
            >PrimeBlocks</span
          >
        </h3>
      </div>
      <div class="flex flex-col md:flex-row gap-4">
        <!-- TODO: 做一个 quickstart 的 demo，展示如何 PubSub -->
        <Button type="button" label="Get Started" rounded class="z-20" />
        <!-- 直接 redirect 到 Doc 页面，参考如何自定义自己的订阅界面：https://preview--stream-wave-view.lovable.app/#feed -->
        <Button type="button" label="Documentation" rounded text class="z-20" />
      </div>
      <!-- Middle Section -->
      <div class="w-full grow flex items-start justify-center mt-12">
        <!-- <div
          class="overflow-hidden w-full aspect-[720/395] max-w-[900px] rounded-t-3xl shadow-2xl border border-b-0 border-primary-100 dark:border-primary-400/30"
        >
          <img
            :src="
              isDarkMode
                ? '/images/blocks/marketing/hero/hero-3d-dark.jpg'
                : '/images/blocks/marketing/hero/hero-3d-light.jpg'
            "
            alt="Image"
            class="block w-full h-full object-cover object-top rounded-t-3xl"
          />
        </div> -->
      </div>
      <!-- <img
        src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-5.png"
        alt="Image"
        class="hidden xl:block absolute z-10 xl:z-30 top-[66%] left-[73.5%]"
      />
      <img
        src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-6.png"
        alt="Image"
        class="hidden xl:block absolute z-10 xl:z-30 top-[70%] right-[77%]"
      />
      <img
        src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-7.png"
        alt="Image"
        class="hidden xl:block absolute z-10 xl:z-30 top-[22%] left-[70%]"
      />
      <img
        src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-8.png"
        alt="Image"
        class="hidden xl:block absolute z-10 xl:z-30 top-[35%] left-[19%]"
      /> -->
    </div>
  </section>
</template>
<script setup>
import Button from 'primevue/button'
// const { isDarkMode } = useLayout()
</script>
