<script lang="ts" setup>
useHead({
  title: 'About Me',
})
</script>

<template>
  <div class="pt-5  gothic-a1">
    <h1 class="text-5xl bebas-neue text-center tracking-wider">ABOUT ME</h1>

    <section class="text-lg mt-10">
      <h2 class="text-2xl bebas-neue mb-2.5 tracking-wider">HEY👋 GLAD YOU MADE IT HERE</h2>

      <p>
        My name is Chiebidolu Chinaemerem, and I am a fullstack web developer who is very passionate about web
        development and technology. I love to build scalable and functional fullstack web applications, with my goto
        programming
        language being <strong>JavaScript</strong>.
      </p>
      <p>
        I am a full & proud citizen of my motherland, Nigeria. I am currently studying
        <strong>Data Science</strong> at
        <strong>University of Lagos</strong>, Nigeria, before which I studied in <strong>Jextoban Secondary
          School</strong>
      </p>
      <p>
        I have always had a liking for technology and programming, and I became interested in fullstack development
        (mainly website, mobile application, and software development) after my secondary education.
        I began learning programming as a self-taught developer in 2022, watched a lot of tutorials on YouTube and
        learned a lot of things, and I am always working on myself to become a better developer.
      </p>
    </section>

    <section>

      <h2 class="text-2xl bebas-neue mt-10 tracking-wide">THINGS I LEARNT ALONG THE WAY</h2>

      <div class="flex flex-wrap gap-x-20 gap-y-5">
        <div v-for="skill, type in skills">
          <h3 class="text-2xl bebas-neue mt-5 mb-2.5 tracking-wider">{{ type }}</h3>
          <ol>
            <li class="flex items-center gap-2.5 mb-2" v-for="{ icon, name } in skill">
              <Icon :name="icon" size="25" />
              <span>{{ name }}</span>
            </li>
          </ol>
        </div>
      </div>

    </section>

    <section>
      <h2 class="text-2xl bebas-neue mt-10 mb-2.5 tracking-wider">MY HOBBIES</h2>

      <ul>
        <li>Programming (Can't escape this one)</li>
        <li>Listening to songs (It goes well with Programming)</li>
        <li>Watching Anime 😎 (Love this one)</li>
        <li>Reading books (Mostly programming documentation)</li>
        <li>Forcing myself to take a break from programming</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl bebas-neue mt-10 mb-2.5 tracking-wider">LET'S SHARE OPINIONS</h2>
      <div>I am willing to connect if you are 😉</div>

      <div class="flex gap-7 mt-5">
        <a href="https://wa.me/2348121847635?text=Hello%20Chiebidolu%20Chinaemerem,%20my%20name%20is%20%5BYour%20Name%5D.%0A"
          target="_blank" rel="noopener noreferrer">
          <Icon name="i-fa6-brands:whatsapp" size="30" />
        </a>
        <a href="https://www.linkedin.com/in/chinaemerem-chiebidolu-802388258/" title="Follow me on LinkedIn"
          target="_blank" rel="noopener noreferrer">
          <Icon name="i-fa6-brands:linkedin" size="30" />
        </a>
        <a href="https://twitter.com/chiebidolu06" title="Follow me on Twitter" target="_blank"
          rel="noopener noreferrer">
          <Icon name="i-fa6-brands:x-twitter" size="30" />
        </a>
        <a href="https://www.instagram.com/chiebidoluchinaemerem/" title="Follow me on Instagram" target="_blank"
          rel="noopener noreferrer">
          <Icon name="i-fa6-brands:instagram" size="30" />
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
p {
  margin-bottom: 15px;
}

ul li {
  margin-bottom: 15px;
}

strong {
  color: rgb(245, 245, 245);
}
</style>
