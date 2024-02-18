<script setup lang="ts">
definePageMeta({
  layout: 'board',
});
</script>

<template>
  <div h-full>
    <div h-100vh h-full bg-gray class="main">
      <div flex flex-row class="controller">
        <div mb-auto class="card">
          <AppMe
            :avatar="'https://avatars.githubusercontent.com/u/54032212'"
            :name="'XiaoMouz'"
            :title="'Foolish'"
            :description="'Like some stupid guy'"
            :social-links="[]"
          />
        </div>
        <div mt-auto flex flex-col class="blog-list">
          <PostList />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body,
html {
  height: 100%;
  margin: 0;
}

.controller {
  display: flex;
  flex-direction: column;
  width: 80%; /* adjust as needed */
  height: 80%; /* adjust as needed */

  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.me-card,
.post-list {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.post-list {
  max-width: 100%;
}
</style>
