<template>
  <!-- Next part  -->
  <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
    <div class="flex flex-wrap justify-between items-center">
      <div class="w-full lg:w-6/12 p-4 pr-8 max-w-2xl flex flex-col gap-12">
        <div class="gap-6 flex flex-col">
          <span class="text-primary font-bold block uppercase leading-tight"
            >SUPERCHARGE YOUR PRODUCT</span
          >
          <div
            class="font-bold text-surface-900 dark:text-surface-0 text-5xl leading-tight max-w-xl"
          >
            Take Control of Your Marketing Strategy
          </div>
          <p class="mt-0 text-surface-600 dark:text-surface-400 leading-normal text-xl">
            Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. In ante metus
            dictum at tempor commodo ullamcorper a lacus.
          </p>
        </div>

        <InputGroup class="relative rounded-full max-w-full md:max-w-xl">
          <InputText
            type="text"
            placeholder="Email"
            class="bg-white/90 text-black/90 !px-6 !border-surface-200 dark:!border-surface-700 !rounded-full !py-4 !pr-32"
          />
          <Button
            type="button"
            label="Join Now"
            rounded
            class="!absolute !z-10 !h-[calc(100%-14px)] !top-1/2 !-translate-y-1/2 !right-3 !rounded-full"
          />
        </InputGroup>
      </div>
      <div
        class="w-full lg:w-1/2 p-6 lg:p-16 lg:py-28 flex items-center justify-center bg-primary-50 dark:bg-primary-400/20 lg:mt-0 rounded-3xl h-full"
      >
        <div class="relative w-full pb-[56.25%] h-0">
          <iframe
            class="absolute top-0 left-0 w-full h-full rounded-2xl"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dTkwgK67ZJo?si=4fH9r2r9rHGaNaFn"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </div>

  <!-- List of News -->
  <div class="bg-surface-0 dark:bg-surface-900 px-6 lg:px-20 py-20">
    <div class="w-full flex items-start lg:flex-row flex-col gap-12">
      <div class="lg:w-1/6">
        <h1 class="text-4xl font-bold text-surface-900 dark:text-surface-0 leading-tight">
          Recent News
        </h1>
        <p class="mt-4 text-surface-600 dark:text-surface-200 text-lg leading-normal">
          Stay updated with the latest discoveries, innovations, and explorations in space science.
        </p>
      </div>
      <!-- Start of items -->
      <div class="flex-1 flex flex-col gap-8">
        <DataView :value="news" :layout="layout" class="gap-8">
          <template #header>
            <div class="flex justify-end">
              <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                <template #option="{ option }">
                  <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
                </template>
              </SelectButton>
            </div>
          </template>

          <template #list="slotProps">
            <div class="flex flex-col gap-6">
              <div
                v-for="(item, index) of slotProps.items"
                :key="index"
                class="flex items-strt md:flex-row flex-col gap-6"
              >
                <div class="w-full md:w-56 h-60 md:h-44 overflow-hidden rounded-xl">
                  <img class="w-full h-full object-cover" :src="item.image_url" :alt="item.title" />
                </div>
                <div class="md:flex-1">
                  <div class="py-1 px-2 rounded-md bg-surface-100 dark:bg-surface-800 w-fit">
                    <span class="text-surface-600 dark:text-surface-200 text-sm">{{
                      item.date
                    }}</span>
                  </div>
                  <h4
                    class="mt-4 text-xl font-medium text-surface-900 dark:text-surface-0 leading-tight"
                  >
                    {{ item.pubDate }}
                  </h4>
                  <p class="mt-2 text-lg text-surface-600 dark:text-surface-200 leading-normal">
                    {{ item.title }}
                  </p>
                </div>
              </div>
            </div>
          </template>

          <template #grid="slotProps">
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              <div
                v-for="(item, index) in slotProps.items"
                :key="index"
                class="bg-surface-0 dark:bg-surface-900 rounded-xl overflow-hidden shadow-sm"
              >
                <!-- 封面图 -->
                <img :src="item.image_url" :alt="item.title" class="w-full h-48 object-cover" />

                <!-- 文字内容 -->
                <div class="p-6 flex flex-col gap-4">
                  <!-- 日期标签 -->
                  <div class="py-1 px-2 rounded-md bg-surface-100 dark:bg-surface-800 w-fit">
                    <span class="text-surface-600 dark:text-surface-200 text-sm">{{
                      item.pubDate
                    }}</span>
                  </div>

                  <!-- 标题 -->
                  <h4
                    class="text-xl font-medium text-surface-900 dark:text-surface-0 leading-tight"
                  >
                    {{ item.title }}
                  </h4>

                  <!-- 描述 -->
                  <p class="text-lg text-surface-600 dark:text-surface-200 leading-normal">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </template>
        </DataView>
      </div>
    </div>
  </div>

  <!-- Featured Articles -->
  <div
    class="bg-surface-50 dark:bg-surface-950 px-6 lg:px-20 py-20 flex flex-col justify-center items-center gap-12"
  >
    <div class="text-4xl text-surface-900 dark:text-surface-0 font-bold leading-tight text-center">
      Featured Articles
    </div>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <template v-for="(item, index) of blogs2" :key="index">
        <div class="bg-surface-0 dark:bg-surface-900 rounded-2xl shadow-sm flex flex-col gap-4 p-2">
          <img
            :src="item.cover"
            :alt="item.title"
            class="w-full aspect-[16/9] rounded-lg object-cover"
          />
          <div class="p-6 flex flex-col gap-8">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <span class="text-primary font-medium leading-tight">
                  {{ item.category }}
                </span>
                <div
                  class="text-surface-900 dark:text-surface-0 text-lg font-medium leading-normal"
                >
                  {{ item.title }}
                </div>
              </div>
              <div class="text-surface-700 dark:text-surface-200 text-base leading-normal">
                {{ item.description }}
              </div>
            </div>
            <div class="flex items-start gap-4">
              <Avatar
                :image="item.author.image"
                :alt="item.author.name"
                shape="circle"
                class="!w-12 !h-12"
              />
              <div class="flex-1 flex flex-col gap-2">
                <div class="font-medium text-surface-900 dark:text-surface-0 leading-tight">
                  {{ item.author.name }}
                </div>
                <div class="text-surface-600 dark:text-surface-200 text-sm leading-tight">
                  {{ item.date }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { news } from '../api/news.ts'
import Button from 'primevue/button'
import InputGroup from 'primevue/inputgroup'
import InputText from 'primevue/inputtext'

const newsList = ref([])

news.getBBC().then((response) => {
  console.log(response.data)
  newsList.value = response.data
})

const blogs = ref([
  {
    image:
      'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/emphasized-heading-blog-1.jpg',
    date: 'Nov 8.2024',
    title: 'Undiscovered Galaxies & Life Possibilities',
    description:
      'New observations with advanced telescopes are uncovering conditions that may support life in the cosmos. The findings are intriguing scientists worldwide.',
  },
  {
    image:
      'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/emphasized-heading-blog-2.jpg',
    date: 'Oct 29.2024',
    title: 'Moon Colonization Efforts',
    description:
      'Scientists have initiated new projects to establish sustainable living infrastructure on the lunar surface. What will the first Moon colony look like?',
  },
  {
    image:
      'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/emphasized-heading-blog-3.jpg',
    date: 'Oct 29.2024',
    title: 'Black Holes & Time Warping',
    description:
      "The phenomenon of light bending and time warping around black holes remains one of the universe's greatest mysteries. Can we ever unravel it?",
  },
])

const blogs2 = ref([
  {
    category: 'Crime',
    color: 'blue',
    title: 'Fugitive flamingo spotted in Florida',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    cover:
      'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-1.jpg',
    author: {
      name: 'Anna Lane',
      image:
        'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1.png',
    },
    date: 'Apr 5, 202X',
  },
  {
    category: 'Wildlife',
    color: 'pink',
    title: 'To the Ends of the Earth',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    cover:
      'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-2.jpg',
    author: {
      name: 'Arlene McCoy',
      image:
        'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-2.png',
    },
    date: 'Apr 5, 202X',
  },
  {
    category: 'Marine',
    color: 'orange',
    title: "'Real and imminent' extinction risk",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    cover:
      'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-3.jpg',
    author: {
      name: 'Floyd Miles',
      image:
        'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-3.png',
    },
    date: 'Apr 5, 202X',
  },
])

const products = ref()
const layout = ref('list')
const options = ref(['list', 'grid'])

const getSeverity = (product: any) => {
  switch (product.inventoryStatus) {
    case 'INSTOCK':
      return 'success'

    case 'LOWSTOCK':
      return 'warn'

    case 'OUTOFSTOCK':
      return 'danger'

    default:
      return null
  }
}
</script>
../api/news.ts
