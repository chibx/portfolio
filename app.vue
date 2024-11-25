<script setup lang="ts">

</script>

<template>
  <div class="h-full lato">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <main class="flex justify-center min-h-screen w-full h-full">
        <div class="min-w-[300px] w-full max-w-[2000px]">
          <NuxtPage />
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
  background-color: white;
  /* background: linear-gradient(120deg, rgba(44, 4, 186, 1) 0%, rgba(108, 2, 255, 1) 32%, rgba(104, 95, 255, 1) 61%, rgba(68, 0, 255, 1) 95%); */
  /* background: repeating-linear-gradient(120deg, rgba(44, 4, 186, 1) 0%, #3a136d 20%, #18015a 21%, rgb(115, 66, 250) 35%); */
}

.lato {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.oswald{
  font-family: "Oswald";
  font-weight: 400;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s ease-out;
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