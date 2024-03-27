<script lang="ts">
onMounted(() => {
  const content = document.getElementById('content');
  const speed = 110;
  content.style.animationDuration = `${content.clientWidth / speed}s`;
});
</script>
<template>
  <div h-full mr-9 rd-6 class="on-secondary">
    <div p-4 h-auto w-40 flex flex-col flex-nowrap gap-4>
      <div flex-grow-1 flex gap-2 grid-items-center>
        <img
          src="https://blog.mou.best/picture/avanw1.jpg"
          alt="Personal Picture"
          class="w-8 h-8 rd-36"
        />
        <span line-height-none overflow-hidden class="secondary-text"
          >在专注模式中
        </span>
        <i w-2 h-2 rd-50 bg-green block></i>
      </div>
      <div>
        <a flex-grow-2 flex w-full gap-2 decoration-none>
          <img
            min-w-0
            min-h-0
            max-h-12
            overflow-hidden
            rd-6
            class="on-primary"
            src="https://blog.mou.best/picture/avanw1.jpg"
          />
          <section max-w-26>
            <span font-bold aria-hidden="true" class="primary-text"
              >在 Steam 上玩</span
            >
            <div max-w-26 text-ellipsis line-clamp-1 overflow-hidden>
              <span
                text-nowrap
                w-26
                overflow-hidden
                class="secondary-text"
                id="content"
                href=""
              >
                Hell Diver 2
              </span>
            </div>
          </section>
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
#content {
  animation: roll linear infinite;
}
@keyframes roll {
  0% {
    transform: translateX(6.5rem);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
