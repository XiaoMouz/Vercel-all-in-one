<script setup lang="ts">
import MarkdownViewer from '~/components/content/MarkdownViewer.vue';
import { useRoute } from 'vue-router';
import type { ContentTableData } from '~/server/db/entities/content.entity';
import type { ResponseModel } from '~/server/model/ResponseModel';

definePageMeta({
  layout: 'board',
});

// get route, for get slug params
const route = useRoute();

const { data, pending, error, refresh } = await useFetch<
  ResponseModel<{
    lock: Boolean;
    content: ContentTableData;
  }>
>(`/api/blog/post/${route.params.slug}`);

if (data.value) {
  useSeoMeta({
    title: data.value.data?.content?.title,
    ogImage: data.value.data?.content?.headImage,
  });
}
</script>

<template>
  <div class="container">
    <!-- loading show loading, done show content vif handle-->
    <div v-if="pending">loading...</div>
    <div v-else-if="error">error</div>
    <div v-else>
      <article class="blog-post" v-if="data && data?.data">
        <div
          :style="{
            backgroundImage: 'url(' + data.data.content.headImage + ')',
          }"
          class="header-image"
        ></div>
        <h1 class="title">{{ data.data.content.title }}</h1>
        <!-- <MarkdownViewer :content="data?.data.content.content" /> -->
        <div class="end" />
      </article>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
}

.blog-post {
  width: 60%;
  max-width: 100%;
  min-width: 300px;
  background: rgba(50, 50, 50, 0.9);
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: auto;
}

.blog-post .header-image {
  width: 100%;
  height: auto;
  max-height: fit-content;
}

.header-image {
  min-height: 300px;
  background-position: 50% 50%;
  background-size: cover;
}

.blog-post .title {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
  color: white;
}

.blog-post .content {
  color: white;
}

.post-content > img {
  max-width: 100%;
  height: auto;
  margin: 2rem 0;
  max-width: 50%;
  max-height: min-content;
}
</style>
