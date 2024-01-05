<script setup lang="ts">
import MarkdownPreviewVue from '@/components/MarkdownPreview.vue'
import { useRoute } from 'vue-router'
import type { ContentTableData } from '~/server/db/entities/content.entity';
import type { ResponseModel } from '~/server/model/ResponseModel';

// get route, for get slug params
const route = useRoute()

const { data, pending, error, refresh } = await useFetch<ResponseModel<{
  lock: Boolean,
  content: ContentTableData
}>>(`/api/blog/post/${route.params.slug}`)

if (data.value) {
  useSeoMeta({
    title: data.value.data?.content?.title,
    ogImage: data.value.data?.content?.headImage
  })
}

</script>

<template>
  <div>
    <!-- show blog content -->
    <article v-if="data && data.data">
      <h1>{{ data.data.content.title }}</h1>
      <MarkdownPreviewVue v-if="!data.data.content.password && data.data.content.text"
        :content="data.data.content.text" />
    </article>
  </div>
</template>
