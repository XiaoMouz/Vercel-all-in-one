<template>
  <div>
    <markdown-it-vue class="content" :content="content" />
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue';
import 'markdown-it-vue/dist/markdown-it-vue.css';
export default {
  components: {
    MarkdownItVue,
  },
  data() {
    return {
      content: '# your markdown content',
    };
  },
};
</script>
