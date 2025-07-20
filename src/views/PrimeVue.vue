<template>
  <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
    <div class="max-w-4xl mx-auto flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <div class="text-sm text-surface-600 dark:text-surface-200 leading-tight">
          <span>Published </span>
          <span class="font-bold">April 6, 2025</span>
          <span> by </span>
          <span class="font-bold">Onur Senture</span>
        </div>

        <h1 class="text-2xl font-medium text-surface-900 dark:text-surface-0 leading-tight">
          Content Section Title
        </h1>

        <p class="text-lg text-surface-700 dark:text-surface-300 leading-normal">
          Metus aliquam eleifend mi in nulla posuere. In vitae turpis massa sed elementum tempus
          egestas sed. Dui ut ornare lectus sit. Massa ultricies mi quis hendrerit.
        </p>
      </div>

      <div class="flex flex-wrap gap-2">
        <Tag value="New" severity="info" class="!text-sm !font-bold !py-1" />
        <Tag value="Technology" severity="success" class="!text-sm !font-bold !py-1" />
        <Tag value="Education" severity="danger" class="!text-sm !font-bold !py-1" />
      </div>

      <div class="flex flex-col gap-6">
        <p class="text-base text-surface-700 dark:text-surface-300 leading-normal">
          Nisi est sit amet facilisis. Ac odio tempor orci dapibus ultrices in iaculis nunc sed.
          Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Nullam vehicula
          ipsum a arcu cursus vitae congue. Leo urna molestie at elementum eu facilisis. Fusce id
          velit ut tortor. Purus non enim praesent elementum facilisis leo vel fringilla est. Semper
          risus in hendrerit gravida rutrum quisque non tellus orci. Neque convallis a cras semper.
          Vitae elementum curabitur vitae nunc sed. Ornare massa eget egestas purus viverra accumsan
          in. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Sit amet risus
          nullam eget. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at.
        </p>

        <blockquote class="pl-8 text-lg text-surface-500 dark:text-surface-400 leading-normal">
          "In short, GPU.js is a JavaScript acceleration library that can be used for
          general-purpose computations on GPUs using JavaScript. It supports browsers, Node.js and
          TypeScript."
        </blockquote>

        <p class="text-base text-surface-700 dark:text-surface-300 leading-normal">
          Convallis tellus id interdum velit laoreet id donec ultrices. Lacus sed viverra tellus in
          hac habitasse platea dictumst. Ultricies tristique nulla aliquet enim. Nunc scelerisque
          viverra mauris in aliquam sem fringilla. Laculis urna id volutpat lacus laoreet.
        </p>

        <p class="text-base text-surface-700 dark:text-surface-300 leading-normal">
          Nunc sed velit dignissim sodales ut.<br />
          Lorem mollis aliquam ut porttitor.<br />
          Urna nec tincidunt praesent semper feugiat nibh sed.
        </p>
      </div>

      <div class="flex flex-col items-center gap-2">
        <img
          src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/content/content-1.jpg"
          alt="Image"
          class="w-full h-70 object-cover rounded-lg"
        />
        <p class="text-sm text-surface-700 dark:text-surface-300 leading-tight text-center">
          Id porta nibh venenatis cras sed felis eget velit.
        </p>
      </div>

      <div class="flex flex-col gap-6">
        <h2 class="text-xl font-normal text-surface-900 dark:text-surface-0 leading-tight">
          Massa vitae tortor condimentum lacinia
        </h2>
        <p class="text-base text-surface-700 dark:text-surface-300 leading-normal">
          Lacus viverra vitae congue eu consequat ac felis donec et. A lacus vestibulum sed arcu
          non. Mauris vitae ultricies leo integer malesuada nunc vel. Dolor sit amet consectetur
          adipiscing elit ut aliquam purus. Ac tincidunt vitae semper quis lectus nulla at volutpat.
          Enim lobortis scelerisque fermentum dui faucibus in ornare. In mollis nunc sed id semper.
          Vitae ultricies leo integer malesuada nunc vel risus commodo.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tag from 'primevue/tag'
</script>
