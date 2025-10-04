<script lang="ts" setup>
import { toastKey, type Toast } from '~/utils/utils';

const toasts = reactive<Toast[]>([])
const id = ref(0);
provide('toastId', id)
provide(toastKey, toasts)
</script>

<template>

  <slot />

  <Teleport to="body">
      <div class="fixed min-w-[300px] w-[90%] max-w-[450px] z-10 -translate-x-1/2 left-1/2">
    <TransitionGroup name="list">
            <div class="toast w-full flex items-center justify-between gap-2.5 mb-5 mr-2.5 px-2.5" v-for="toast in toasts" :key="toast.id" :class="{'error': toast.type === 'error'}">
                <div class="max-w-[200px] text-ellipsis overflow-hidden" :title="toast.message">{{ toast.message }}</div>
                <span class="cursor-pointer" @click="toasts.splice(toasts.indexOf(toast), 1)"><Icon name="i-mdi:close" size="30" /></span>
            </div>
        </TransitionGroup>
    </div>
  </Teleport>
</template>

<style scoped>
.toast {
    padding: 15px 10px;
    border-radius: 10px;
    font-weight: bold;
    background-color: #ffffff;
    color: black;
}
.toast.error{
    background-color: #dd6c6c;
}
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-to{
    opacity: 0;
    transform: translateY(-30px) scaleX(0.6);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>