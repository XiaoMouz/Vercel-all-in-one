<script setup lang="ts">
const props = defineProps<{
  cid: number
  slug: string | null
  title: string
  headImage?: string
  views: number
  stars: number
  commentsNum: number
}>()
</script>
<template>
  <nuxt-link :to="`/post/${slug || cid}`">
    <div class="w-50vh">
      <img class="w-50vh h-25vh" :src="headImage" alt="headImage" />
      <p class="title-medium">{{ title }}</p>
      <label>{{ views }}</label> - <label>{{ stars }}</label> -
      <label>{{ commentsNum }}</label>
    </div>
  </nuxt-link>
</template>
<style scoped></style>
