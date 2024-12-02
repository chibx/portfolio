<script lang="ts" setup>

</script>

<template>
    <div class="flex justify-center items-center flex-col homepage">
        <section class="intro w-full h-full flex items-center justify-around gap-5">
            <div>
                <!-- <strong class="hello tracking-wide">HELLO I'M</strong> -->
                <div>
                    <h1 class="text-7xl bebas-neue text-white">HEY! I'M CHINAEMEREM</h1>
                    <h2 class="text-5xl hello bebas-neue tracking-wider">I AM A FULLSTACK WEB DEVELOPER</h2>
                </div>
                <div class="links flex flex-wrap items-center justify-between gap-2.5">
                    <div class="flex gap-6 mt-5 social-links">
                        <a href="https://github.com/chibx" target="_blank" rel="noopener noreferrer">
                            <Icon name="i-fa6-brands:github" size="35" />
                        </a>
                        <a href="https://twitter.com/chiebidolu06" target="_blank" rel="noopener noreferrer">
                            <Icon name="i-fa6-brands:twitter" size="35" />
                        </a>
                        <a href="https://www.linkedin.com/in/chinaemerem-chiebidolu-802388258/" target="_blank"
                            rel="noopener noreferrer">
                            <Icon name="i-fa6-brands:linkedin" size="35" />
                        </a>
                    </div>
                    <a href="/resume.pdf" target="_blank" rel="noopener" class="resume">View CV</a>
                </div>
            </div>
            <div class="portrait relative w-1/3 min-w-[300px] overflow-hidden">
                <div class="pic relative">
                    <NuxtImg class="w-full" src="/pic.webp" alt="Image" />
                </div>
            </div>
        </section>

        <section class="about mt-[200px]">
            <h2 class="before-line text-5xl bebas-neue relative inline-block">About</h2>
            <div class="mt-5">
                <p>
                    My name is Chiebidolu Chinaemerem. I am a fullstack web developer, and very passionate about web
                    development and technology.
                    I love to build scalable and functional fullstack web applications, with my goto programming
                    language
                    being <strong>JavaScript</strong>.
                </p>
            </div>
            <NuxtLink to="/about">MORE ABOUT ME</NuxtLink>
        </section>

        <section class="benefits mt-[200px]">
            <div class="benefit-head">
                <h2 class="before-line text-5xl bebas-neue relative inline-block">BENEFITS OF HIRING ME</h2>
            </div>
            <div class="benefits-container">
                <div>
                    <div>
                        <NuxtImg src="/resp2.webp" alt="Responsive Design" />
                    </div>
                    <div>
                        <h2 class="text-3xl bebas-neue">Responsive Design</h2>
                        <p class="mt-2.5">
                            By hiring me, you get a fully responsive website that looks great on all devices.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <NuxtImg src="/fast3.webp" alt="Quick Delivery" />
                    </div>
                    <div>
                        <h2 class="text-3xl bebas-neue">Quick Delivery</h2>
                        <p class="mt-2.5">
                            By hiring me, you are sure to get great results on time
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <NuxtImg src="/resp2.webp" alt="Beautiful Outcome" />
                    </div>
                    <div>
                        <h2 class="text-3xl bebas-neue">Outstanding Result</h2>
                        <p class="mt-2.5">
                            By hiring me, you'll surely be glad you did.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-[200px]">
            <div class="text-center">
                <h2 class="before-line text-5xl bebas-neue relative inline-block">SKILLS</h2>
            </div>
            <div class="mt-20">
                <Skills v-for="_skills, type in skills" :skills="_skills" :type="type" :key="type" />
            </div>
        </section>

        <section class="mt-[200px]">
            <div class="text-center">
                <h2 class="before-line text-5xl bebas-neue relative inline-block">PROJECTS</h2>
            </div>

            <Projects :count="10" />
        </section>
    </div>
</template>

<style scoped>
.homepage > section {
    min-width: 300px;
    width: 90%;
}

.before-line::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    bottom: -2px;
    background-color: #5797ff;
}

a.resume {
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    padding: 12px 40px;
    margin-top: 20px;
    border-radius: 50px;
    background-image: linear-gradient(150deg, #5797ff 10%, #0048bb 60%, #003180 100%);
}

.social-links a:hover {
    color: #5797ff;
}

.hello {
    /* color: #5797ff; */
    color: transparent;
    background-clip: text;
    background-image: linear-gradient(180deg, #5797ff 30%, #003180 100%);
}

.pic::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    /* bottom: 0;
   left: 0; */
    background-image: linear-gradient(to bottom, transparent 30%, rgba(0, 0, 0, 0.8) 100%);
}

.about {
    text-align: center;
}

.about p {
    max-width: 1200px;
}

.about a {
    display: inline-block;
    font-weight: bold;
    padding: 15px 30px;
    margin-top: 20px;
    border-radius: 50px;
    background-image: linear-gradient(150deg, #5797ff 10%, #0048bb 60%, #003180 100%);
}

.about a:hover {
    background-image: linear-gradient(150deg, #003180 10%, #0048bb 60%, #5797ff 100%);
}

.benefit-head {
    text-align: center;
}

.benefits h2 {
    display: inline-block;
}

.benefits-container {
    /* display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
    display: flex;

    justify-content: space-between;
    gap: 20px;
    margin-top: 50px;
}

.benefits-container > div {
    display: flex;
    gap: 20px;
    justify-content: space-around;
    align-items: center;
    width: clamp(300px, 100%, 500px);
}

.benefits-container img {
    height: 150px;
    min-width: 150px;
}

@media (max-width: 1500px) {
    .benefits-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        place-items: center;
        gap: 50px;
    }

    .benefits-container > div:nth-child(3) {
        grid-column: span 2;
        place-self: center;
    }
}

@media (max-width: 1160px) {
    .benefits-container {
        grid-template-columns: minmax(300px, 1fr);
        place-items: center;
    }

    .benefits-container > div:nth-child(3) {
        grid-column: span 1;
    }

    .portrait {
        display: none;
    }

    .intro {
        justify-content: center;
        padding: 50px 0 0;
    }

    .intro h1 {
        font-size: 5rem;
        text-align: center;
    }

    .intro h2 {
        font-size: 2.5rem;
        text-align: center;
    }

    .links {
        margin-top: 20px;
        column-gap: 50px;
        justify-content: space-around;
    }
}

@media (max-width: 700px) {
    .intro h1 {
        font-size: 4rem;
    }

    .intro h2 {
        font-size: 2rem;
    }
}

@media (max-width: 620px) {
    .benefits-container > div {
        flex-direction: column;
        width: clamp(300px, 100%, 500px);
        text-align: center;
    }
}

@media (max-width: 450px) {

    .about h2,
    .benefit-head h2 {
        font-size: 2.5rem;
    }
}
</style>