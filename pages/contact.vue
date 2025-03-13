<script lang="ts" setup>
useHead({
  title: 'Reach Out to Me',
})
</script>

<template>
  <div class="h-full">
    <div class="h-full flex items-center justify-center">
      <div class="h-full form-cont flex items-center">

        <div class="socials flex flex-wrap items-center justify-center gap-x-5 gap-y-5 -mt-40">
          <a class="rounded-3xl outline outline-none hover:outline-white hover:bg-gray-800 outline-1"
            href="https://wa.me/2348121847635?text=Hello%20Chiebidolu%20Chinaemerem,%20my%20name%20is%20%5BYour%20Name%5D.%0AI%20am%20interested%20in%20retaining%20your%20services"
            target="_blank" rel="noopener noreferrer">
            <div class="flex flex-col items-center justify-center gap-2.5">
              <Icon name="i-fa6-brands:whatsapp" size="75" />

              <span>WhatsApp</span>
            </div>

          </a>
          <a class="rounded-3xl outline outline-none hover:outline-white hover:bg-gray-800 outline-1"
            href="https://www.linkedin.com/in/chinaemerem-chiebidolu-802388258/" target="_blank"
            rel="noopener noreferrer">
            <div class="flex flex-col items-center justify-center gap-2.5">
              <Icon name="i-fa6-brands:linkedin" size="75" />

              <span>Linkedn</span>
            </div>

          </a>
          <a class="rounded-3xl outline outline-none hover:outline-white hover:bg-gray-800 outline-1"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=chiebidoluc%40gmail.com&subject=INTEREST%20IN%20RETAINING%20YOUR%20SERVICES&body=Hello%20Chiebidolu%20Chinaemerem,%20my%20name%20is%20%5BYour%20Name%5D.%0AI%20am%20interested%20in%20retaining%20your%20services"
            target="_blank" rel="noopener noreferrer">
            <div class="flex flex-col items-center justify-center gap-2.5">
              <Icon name="i-fa6-solid:envelope" size="75" />

              <span>Gmail</span>
            </div>

          </a>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.socials div {
  width: 150px;
  height: 150px;
}

@media (max-width: 400px) {
  .socials {
    column-gap: 30px;
  }

  .socials div {
    width: 75px;
    height: 75px;
  }

  .socials a {
    border-radius: 5px !important;
  }

  .socials span {
    font-size: 0.9em;
  }

  .socials svg {
    width: 30px;
    height: 30px;
  }
}
</style>