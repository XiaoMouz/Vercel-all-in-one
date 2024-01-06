<script setup lang="ts">
import type { ContentTableData } from '~/server/db/entities/content.entity';
import type { ResponseModel } from '~/server/model/ResponseModel';

const { data, pending, error, refresh } = await useFetch<
  ResponseModel<{
    posts: ContentTableData[];
  }>
>('/api/blog/post');
</script>

<template>
  <!-- v for data-->
  <div flex flex-row>
    <!-- get list and for each data's title -->
    <div v-for="item in data?.data?.posts">
      <PostCard
        :cid="item.cid"
        :slug="item.slug"
        :title="item.title"
        :headImage="item.headImage"
        :views="item.views"
        :stars="item.stars"
        :commentsNum="item.commentsNum"
      />
      <br />
    </div>
  </div>
</template>

<style scoped></style>
