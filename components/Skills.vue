<script lang="ts" setup>
import { animate } from 'motion/mini'
import { stagger } from 'motion'

defineProps<{
    type: string;
    skills: { name: string, icon: string }[]
}>()

const skillsRef = useTemplateRef('skills')

const { remove } = useObserver(skillsRef, (entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              remove(entry.target)
              const h3 = entry.target.querySelector('h3');
              const skills = entry.target.querySelectorAll('.skills-box > div');
              animate(h3!, { opacity: [0, 1], transform: ['translateY(50px)', 'translateY(0)'] }, { duration: 0.5 }).then(() => {
                  h3!.classList.remove('opacity-0')
              })
              animate(skills, { opacity: [0, 1], transform: ['translateY(150px)', 'translateY(0)'] }, { duration: 0.6, delay: stagger(0.15), ease: 'easeOut' }).then(() => {
                  entry.target.classList.remove('opacity-0')
              })
          }
      })
})
</script>

<template>
    <div ref="skills" class="text-center">
            <h3 class="text-5xl bebas-neue relative inline-block opacity-0 mb-7">{{ type }}</h3>


        <div class="skills-box mb-20">
            <div v-for="skill in skills" :key="skill.name" :title="skill.name" class="opacity-0">
                <Icon :name="skill.icon" size="75" />
                <strong class="text-xl font-normal tracking-widest">{{ skill.name }}</strong>
            </div>
        </div>
    </div>
</template>

<style scoped>
.skills-box {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 70px 30px;
}

.skills-box > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
}
</style>