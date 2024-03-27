<script setup lang="ts">
definePageMeta({
  layout: 'board',
});
</script>

<template>
  <div h-100dvh>
    <main mx-auto h-full grid place-items-center>
      <div p-6 rd-6 flex justify-center flex-warp class="secondary-container">
        <div>
          <Nowplaying v-if="false" />
        </div>
        <div>
          <div>
            <section>
              <span font-size-8 class="primary-text">
                Hi, I&apos;m
                <span font-bold
                  >Xia&#770;oMo&#768;uz<span font-normal font-size-5
                    >(i)</span
                  ></span
                >&nbsp;👋
              </span>
              <div>
                <WatchdogsLoadingWriter />
              </div>
            </section>
          </div>
          <section mt-6 flex items-center justify-center gap-4>
            <a class="button" href="https://x.com/XiaoMouz"
              ><IconTwitter class="primary-fill button-icon"
            /></a>
            <a class="button" href="https://github.com/XiaoMouz">
              <IconGithub class="primary-fill button-icon" />
            </a>
            <a class="button" target="_blank" href="https://t.me/XiaoMouz"
              ><IconPaperPlane class="primary-fill button-icon" />
            </a>
            <a class="button" target="_blank" href="mailto:gxiaomouz@gmail.com"
              ><IconGmail class="primary-fill button-icon"
            /></a>
            <a
              class="button"
              target="_blank"
              href="https://m.mou.best/@XiaoMouz"
            >
              <IconMastodon class="primary-fill button-icon" />
            </a>
            <a
              class="button"
              target="_blank"
              href="https://space.bilibili.com/64110204"
            >
              <IconBilibili class="primary-fill button-icon" />
            </a>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.button-icon {
  @apply mt-1 align-middle size-5;
}
.button {
  @apply rd-2 block size-8 text-center;
  transition-duration: 0.2s;
}

.button:hover {
  @apply bg-black bg-op-20;
}
@media (prefers-color-scheme: dark) {
  .button:hover {
    @apply bg-white bg-op-20;
  }
}
</style>
