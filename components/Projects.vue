<script lang="ts" setup>
import { stagger } from 'motion';
import { animate } from 'motion/mini';

const props = defineProps<{
    count?: number;
    delay?: number
    duration?: number
}>()

const projectsEl = useTemplateRef('projects')

const { remove } = useObserver(projectsEl, (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            remove(entry.target)
            const projects = entry.target.querySelectorAll('.project');
            animate(projects, { opacity: [0, 1], transform: ['translate(50px, 100px) scale(0.75)', ''] }, { duration: props.duration || 0.5, delay: stagger(props.delay || 0.3), ease: 'easeOut' }).then(() => {
                entry.target.classList.remove('opacity-0')
            })
        }
    })
})
</script>

<template>
    <div class="projects mt-20" ref="projects">
        <div v-for="project, i in projects.slice(0, count)" class="project opacity-0"
            :aria-label="`Project Name - ${project.name}`" :aria-describedby="`project-description-${i}`">
            <NuxtImg class="w-full" :src="project.image" :alt="`Picture of my project, ${project.name}`" />

            <div class="details flex flex-col mt-2.5 px-5">
                <h3 class="text-lg gothic-a1 font-bold" aria-label="Project's Name">{{ project.name }}</h3>
                <div class="description" :id="`project-description-${i}`">
                    {{ project.description }}
                </div>
                <div class="links flex gap-4 my-3">
                    <a :href="project.link" target="_blank" rel="noopener noreferrer" title="View my project's website">
                        <Icon name="material-symbols:open-in-new" size="40" />
                    </a>
                    <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer"
                        title="Check my project on GitHub">
                        <Icon name="i-mdi:github" size="40" />
                    </a>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
/* .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, max(400px, 30vw)));
    place-content: center;
    gap: 30px;
} */

.projects {
    display: flex;
    place-content: center;
    flex-wrap: wrap;
    gap: 30px;
}

.project {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 300px;
    max-width: 450px;
    border-radius: 5px;
    overflow: hidden;
    background-color: #313142;
    box-shadow: -12px 15px 10px 0px #1a1a2be3;
}
</style>