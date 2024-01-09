<script setup lang="ts"></script>

<template>
  <div class="main">
    <div class="controller">
      <div class="card">
        <p>Hello</p>
        <AppMe
          :avatar="'https://gitee.com/xiaomouz/xiaomouz/raw/master/upload/images/b1bfc9aeb2cfd.jpg'"
          :name="'XiaoMouz'"
          :title="'Foolish'"
          :description="'Like some stupid guy'"
          :social-links="[]"
        />
      </div>
      <div flex flex-col>
        <h1>Post List</h1>
        <PostList />
      </div>
    </div>
  </div>
</template>

<style scoped>
.controller {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 100% 100%;
}
</style>
