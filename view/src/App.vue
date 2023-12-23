<template>
  <div class="h-full text-center flex select-none all:transition-400 background">
    <!-- navigation -->
    <nav>
      <router-link to="/">Home</router-link>
    </nav>

    <!-- router  -->
    <router-view></router-view>
  </div>
  <div absolute bottom-5 right-0 left-0 text-center op30 fw300>
    on-demand · instant · fully customizable
  </div>
</template>

<script setup lang="ts"></script>
<style>
/* globe style */
@import url(./assets/markdown.css);
</style>
