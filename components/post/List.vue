<script setup lang="ts">
import type { ContentTableData } from '~/server/db/entities/content.entity';
import type { ResponseModel } from '~/server/model/ResponseModel';

const { data, pending, error, refresh } = await useFetch<
  ResponseModel<{
    posts: ContentTableData[];
  }>
>('/api/blog/post');

function y_scroll(event: WheelEvent) {
  // handle scroll x or y

  (event.currentTarget as HTMLDivElement).scrollLeft += event.deltaY;
}
</script>

<template>
  <div class="dance">
    <!-- v for data-->
    <div flex flex-row flex-gap-6 class="list" @wheel="y_scroll">
      <!-- get list and for each data's title -->
      <div class="itme" v-for="item in data?.data?.posts">
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
  </div>
</template>

<style scoped>
.list {
  overflow-x: visible;
  overflow-y: hidden;
  gap: 16px; /* or use margin if gap is not supported */
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 8px;
}
.list::-webkit-scrollbar {
  display: none;
}

.item {
  border-radius: 12px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  /* This is for the ripple effect placeholder, replace with actual ripple directive */
  position: relative;
  overflow: hidden;
}
.item:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
</style>
