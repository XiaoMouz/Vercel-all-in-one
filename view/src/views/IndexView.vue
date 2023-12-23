<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import { reactive, ref } from 'vue'

// data is a array
let data = ref<any>([])

fetch('http://localhost:3000/api/content/post')
  .then((res) => res.json())
  .then((res) => {
    // 清空数组
    data.value.splice(0, res.data.length)
    // 添加新数据到数组
    data.value.push(...res.data)
    console.log(res.data)
  })
</script>

<template>
  <!-- v for data-->
  <div class="top">
    <header>
      <div class="wrapper">
        <!-- get list and for each data's title -->
        <div v-for="item in data">
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
    </header>
  </div>
</template>

<style scoped></style>
