<script setup lang="ts">
useHead({
  link: [
    {
      href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Gothic+A1:wght@400;700&family=Poppins:wght@400;500;700&family=Roboto:wght@500;700&display=swap",
      rel: "stylesheet"
    }
  ]
})
</script>

<template>
  <div class="h-full poppins text-gray-300">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <main class="flex justify-center min-h-screen w-full h-full px-5 mb-40">
        <div class="min-w-[300px] w-full max-w-[2000px] pt-10">
          <ToastProvider>
            <NuxtPage />
          </ToastProvider>
        </div>
      </main>
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
  /* background-color: rgb(10, 10, 25); */
  /* background-color: #0c121a; */
  background-color: #272829;
  /* background: linear-gradient(120deg, rgba(44, 4, 186, 1) 0%, rgba(108, 2, 255, 1) 32%, rgba(104, 95, 255, 1) 61%, rgba(68, 0, 255, 1) 95%); */
  /* background: repeating-linear-gradient(120deg, rgba(44, 4, 186, 1) 0%, #3a136d 20%, #18015a 21%, rgb(115, 66, 250) 35%); */
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

.fade-enter-active,
.fade-leave-active {
  transition: .4s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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