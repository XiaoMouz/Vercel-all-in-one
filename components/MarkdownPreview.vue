<script setup lang="ts">
import { ref } from 'vue';
import markdownIt from 'markdown-it';

const props = defineProps<{
  content?: string;
}>();

// markdown-it
const htmlContent = ref('');
const md = markdownIt();
if (props.content != null) {
  htmlContent.value = md.render(props.content);
}
</script>

<template>
  <div v-html="htmlContent"></div>
</template>
<style scoped>
.markdown-preview {
  width: 70dvw;
}
</style>
