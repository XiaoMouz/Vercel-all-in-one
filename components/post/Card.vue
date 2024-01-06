<script setup lang="ts">
const props = defineProps<{
  cid: number;
  slug: string | null;
  title: string;
  headImage?: string;
  views: number;
  stars: number;
  commentsNum: number;
}>();
</script>
<template>
  <div w-70 h-35 rd-6px class="card">
    <nuxt-link :to="`/post/${slug || cid}`">
      <div rd-6px class="overlay"></div>
      <div w-full h-full bg-blend-color>
        <p truncate>{{ title }}</p>
        <label>{{ views }}</label> - <label>{{ stars }}</label> -
        <label>{{ commentsNum }}</label>
      </div>
    </nuxt-link>
  </div>
</template>
<style scoped>
.card {
  background: v-bind("`url('${headImage}')`") no-repeat center center / cover;
  transition: all 0.2s;
}
.card:hover {
  .overlay {
    background: rgba(0, 0, 0, 0.5);
  }
}

.overlay {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
</style>
