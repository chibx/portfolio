<script lang="ts" setup>

</script>

<template>
  <div class="pt-5  gothic-a1">
    <h1 class="text-4xl bebas-neue text-center">ABOUT ME</h1>

    <section class="text-lg mt-10">
      <h2 class="text-2xl bebas-neue mb-2.5">HEY👋 GLAD YOU MADE IT HERE</h2>

      <p>
        My name is Chiebidolu Chinaemerem, and I am a fullstack web developer who is very passionate about web
        development and technology. I love to build scalable and functional fullstack web applications, with my goto
        programming
        language being <strong>JavaScript</strong>.
      </p>
      <p>
        Born on July 15, 2006, I am a full & proud citizen of my motherland, Nigeria. I am currently studying
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
      <h2 class="text-2xl bebas-neue mt-10">THINGS I LEARNT ALONG THE WAY</h2>

      <div class="flex flex-wrap gap-x-20 gap-y-5">
        <div v-for="skill, type in skills">
          <h3 class="text-2xl bebas-neue mt-5 mb-2.5">{{ type }}</h3>
          <ol>
            <li class="flex items-center gap-2.5 mb-2" v-for="{ icon, name } in skill">
              <Icon :name="icon" size="25" />
              <span>{{ name }}</span>
            </li>
          </ol>
        </div>
      </div>
      
      <p class="mt-10">
        My true strength lies in programming languages/frameworks defined in the <strong>"Core"</strong> section above, but that doesn't mean
        I can't work with languages/frameworks defined in the secondary section as well.
      </p>
    </section>

    <section>
      <h2 class="text-2xl bebas-neue mt-10 mb-2.5">THINGS I DO IN MY FREE TIME</h2>

      <ul>
        <li>Programming (Can't escape this one)</li>
        <li>Listening to songs (It goes well with Programming)</li>
        <li>Watching Anime 😎 (You've gotta try this one)</li>
        <li>Playing video games (Once in a while)</li>
        <li>Reading books (Mostly programming documentation)</li>
        <li>Forcing myself to take a break from programming</li>
      </ul>

      <p class="mt-10">
        As much as I love anime, programming seems to draw me in, hence I spend most of my time programming. <br />
        Regardless of it being my time to relax, I still hear the voice of my laptop telling me to come back and write
        code 😅<br />
        Also, just because I love anime a lot doesn't make me a weeb or weird, people like me have what they love and I
        believe they shouldn't be criticized for something like this <em>(just saying)</em>
      </p>
    </section>

    <section>
      <h2 class="text-2xl bebas-neue mt-10 mb-2.5">LET'S SHARE OPINIONS</h2>
      <div>I am willing to connect if you are 😉</div>

      <div class="flex gap-7 mt-3">
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
</style>