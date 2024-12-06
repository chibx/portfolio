<script lang="ts" setup>

</script>

<template>
    <!-- <div v-for="_experience in experience">
     
  </div> -->
    <ul class="mt-20 experience">
        <li class="mb-5 flex gap-5" v-for="_experience in experience">
            <div class="ball"></div>
            <div class="max-w-[1200px]">
                <h3 class="text-3xl bebas-neue tracking-wide inline-block">{{ _experience.company }}</h3>
                <div class="flex flex-wrap gap-x-[100px] gap-y-2.5 items-center justify-between mt-2.5 mb-5"><strong>{{ _experience.position
                        }}</strong> <em>{{ _experience.date }}</em></div>
                <p v-html="_experience.desc"></p>
            </div>
        </li>
    </ul>
</template>

<style scoped>
.experience {}

.ball {
    padding: 10px;
    height: fit-content;
    /* background-color: white; */
    border: 2px solid white;
    border-radius: 50%;
    margin-top: 5px;
}
:deep(a){
    /* color: #5797ff; */
    text-decoration: underline;
    text-underline-offset: 2px;
}
</style>