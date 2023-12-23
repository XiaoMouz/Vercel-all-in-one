<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import MarkdownPreviewVue from '../components/MarkdownPreview.vue'
import { useRoute } from 'vue-router'
import '@material/web/button/outlined-button.js'

const postData = reactive<{ title?: string; content?: string }>({})
const loaded = ref(false)

// get route, for get slug params
const route = useRoute()

// loaded data
onMounted(() => {
  const slug = route.params.slug

  if (slug) {
    fetch(`http://localhost:3000/api/content/post/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        loaded.value = true
        postData.title = data.data.title
        postData.content = data.data.text
      })
      .catch((error) => {
        console.error('Error fetching post:', error)
      })
  }
})
</script>

<template>
  <div>
    <md-outlined-button>Back</md-outlined-button>
    <!-- show blog content -->
    <article v-if="postData">
      <h1>{{ postData.title }}</h1>
      <MarkdownPreviewVue v-if="loaded" :content="postData.content" />
    </article>
  </div>
</template>
