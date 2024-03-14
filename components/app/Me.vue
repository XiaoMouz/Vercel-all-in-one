<template>
  <div class="about-me-card">
    <div class="card-header">
      <img class="avatar" :src="avatar" alt="Profile picture" />
    </div>
    <div class="card-content">
      <h1 class="name">{{ name }}</h1>
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
    </div>
    <div class="card-footer">
      <a
        v-for="link in socialLinks"
        :key="link.name"
        :href="link.url"
        class="social-link"
        target="_blank"
      >
        <img :src="link.icon" :alt="link.name" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  avatar: string;
  name: string;
  title: string;
  description: string;
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
}>();
</script>

<style scoped>
.about-me-card {
  max-width: 21.25rem;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}

.card-header {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.avatar {
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  border: 4px solid #eee;
  animation: light 6s ease-in-out infinite;
}

@keyframes light {
  0% {
    box-shadow: 0 0 4px #e16b8c;
  }

  25% {
    box-shadow: 0 0 16px #b28fce;
  }

  50% {
    box-shadow: 0 0 4px #a8d8b9;
  }

  75% {
    box-shadow: 0 0 16px #2ea9df;
  }

  100% {
    box-shadow: 0 0 4px #e03c8a;
  }
}
.card-content {
  text-align: center;
}

.name {
  font-size: 1.5rem;
  margin: 0;
  color: #fff;
}

.title {
  font-size: 1.125rem;
  color: #9e9e9e;
  margin: 4px 0;
}

.description {
  font-size: 0.785rem;
  color: #93b1be;
  margin-top: 8px;
}

.card-footer {
  margin-top: 16px;
}

.social-link {
  margin: 0 8px;
  display: inline-block;
}

.social-link img {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
