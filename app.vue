<script setup lang="ts">
useHead({
  titleTemplate: '%s | Chinaemerem Chiebidolu',
  link: [
    {
      href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Gothic+A1:wght@400;700&family=Poppins:wght@400;500;700&family=Roboto:wght@500;700&display=swap",
      rel: "stylesheet"
    }
  ],
  meta: [
    {
      name: "description",
      content: "Chinaemerem Chiebidolu Ekenedilichukwu, chiebidolu06, @chiebidolu06"
    }
  ]
})
const { y } = useWindowScroll({ behavior: 'smooth' })
</script>

<template>
  <div class="h-full gothic-a1 text-gray-300">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <main class="flex justify-center min-h-screen w-full h-full px-5 mb-20">
        <div class="min-w-[300px] w-full max-w-[2000px]">
          <ToastProvider>
            <NuxtPage />
          </ToastProvider>
        </div>
      </main>
      <Transition name="arrow">
        <span class="arrow-up" v-show="y > 500" @click="y = 0">
          <Icon name="material-symbols:chevron-right-rounded" size="30" class="-rotate-90" />
        </span>
      </Transition>
    </NuxtLayout>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
}


body {
  overflow-x: hidden;
  /* background-color: #272829; */
  /* background: linear-gradient(120deg, rgb(6, 0, 29) 0%, #220f3b 20%, #0f003a 21%, rgb(19, 13, 36) 35%); */
  /* background: repeating-linear-gradient(120deg, rgb(6, 0, 29) 0%, #220f3b 20%, #0f003a 21%, rgb(19, 13, 36) 35%); */
  background: repeating-linear-gradient(120deg, #00012b 25%, #00013d 45%, #000142 65%, #00012b 105%);
}

.arrow-up {
  background-color: #e6e6e6;
  color: #272829;
  position: fixed;
  right: 20px;
  bottom: 30px;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;
  z-index: 10;
}

.bebas-neue {
  font-family: "Bebas Neue", serif;
}

.gothic-a1 {
  font-family: "Gothic A1", sans-serif;
}

.poppins {
  font-family: "Poppins", sans-serif;
}

.roboto {
  font-family: "Roboto", serif;
}

.arrow-enter-active,
.arrow-leave-active {
  transition: .3s;
}

.arrow-enter-from,
.arrow-leave-to {
  opacity: 0;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: .3s ease-out;
}

/* .fade-up-enter-from,
.fade-up-leave-to {

} */

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

strong {
  font-weight: bold;
}

.rotate {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>