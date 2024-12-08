<script lang="ts" setup>
useHead({
  title: 'Reach Out to Me',
})

const isMessageSending = ref(false);
const formEl = useTemplateRef('form')
const toast = useToast()

const sendMessage = useDebounceFn(async () => {
  if(isMessageSending.value) return;

  isMessageSending.value = true;
  const formData = new FormData(formEl.value!)
  const response = await $fetch('/api/contact-me', {
    method: 'POST',
    body: formData
  });

  await new Promise((r) => { setTimeout(r, 500) })
  if(response.success){
     toast.add({
      type: 'success',
      message: 'Email sent successfully'
     })
  }
  isMessageSending.value = false;
}, 500)
</script>

<template>
    <div>
      <div class="flex items-center justify-center">
      <div class="form-cont">
        <div class="form">
          <form @submit.prevent="sendMessage" ref="form" action="/api/contact-me" method="post"
            class="contact-form w-full flex flex-col gap-5">
            <div>
              <input type="email" name="sender_email" placeholder="Email Address" aria-label="Your Email Address" required />
            </div>
            <div>
              <input type="text" name="sender_name" placeholder="Full Name" aria-label="Full Name" required />
            </div>
            <div>
              <textarea name="message" placeholder="Message goes here" aria-label="Message Body" required></textarea>
            </div>

            <div>
              <button class="flex justify-center">
                <svg v-if="isMessageSending" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                  viewBox="0 0 24 24">
                  <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path stroke-dasharray="16" stroke-dashoffset="16" d="M12 3c4.97 0 9 4.03 9 9">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0" />
                      <animateTransform attributeName="transform" dur="1s" repeatCount="indefinite" type="rotate"
                        values="0 12 12;360 12 12" />
                    </path>
                    <path stroke-dasharray="64" stroke-dashoffset="64" stroke-opacity=".3"
                      d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="64;0" />
                    </path>
                  </g>
                </svg>
                <template v-else>
                  SEND
                </template>
              </button>
            </div>

            <small class="text-white opacity-75">This form shows you a nice response but it won&apos;t inform me. You should prefer to use one of the methods below, as this form is to complement the page.</small>
          </form>
        </div>


        <div class="flex justify-center mt-10 font-bold">OR</div>

        <div class="flex justify-center gap-20 mt-10">
          <a href="https://wa.me/2348121847635?text=Hello%20Chiebidolu%20Chinaemerem,%20my%20name%20is%20%5BYour%20Name%5D.%0AI%20am%20interested%20in%20retaining%20your%20services"
            target="_blank" rel="noopener noreferrer">
            <Icon name="i-fa6-brands:whatsapp" size="35" />
          </a>
          <a href="https://www.linkedin.com/in/chinaemerem-chiebidolu-802388258/" target="_blank"
            rel="noopener noreferrer">
            <Icon name="i-fa6-brands:linkedin" size="35" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chiebidoluc%40gmail.com&subject=INTEREST%20IN%20RETAINING%20YOUR%20SERVICES&body=Hello%20Chiebidolu%20Chinaemerem,%20my%20name%20is%20%5BYour%20Name%5D.%0AI%20am%20interested%20in%20retaining%20your%20services"
            target="_blank" rel="noopener noreferrer">
            <Icon name="i-fa6-solid:envelope" size="35" />
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
.form-cont {
  width: clamp(300px, 100%, 500px);
}

.form {
  padding: 50px 0 0px;
  /* box-shadow: -10px 15px 10px 0px #38383863, 10px 15px 10px 0px #38383863; */
}

.form-cont input {
  color: white;
  background-color: #333435;
  width: 100%;
  padding: 15px;
}

.form-cont input:focus,
.form-cont textarea:focus {
  outline: 2px solid #b0becc;
}

.form-cont textarea {
  color: white;
  background-color: #333435;
  width: 100%;
  padding: 10px;
  height: 200px;
  resize: none;
}

.form-cont button {
  padding: 15px 0;
  width: 100%;
  font-weight: bold;
  overflow: hidden;
  background-image: linear-gradient(150deg, #003180 0%, #0048bb 25%, #0048bb 75%, #022969 100%);
}
</style>