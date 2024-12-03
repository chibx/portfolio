<script lang="ts" setup>
const route = useRoute()

const isModalOpen = ref(false)
const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Projects',
        path: '/projects'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
]

watch(()=> route.path, () => {
    setTimeout(() => {
        isModalOpen.value = false
    }, 100)
})
</script>

<template>
    <div class="select-none">
        <header class="w-full h-20 flex items-center justify-around">
            <!-- <img src="/logo.webp" class="logo" alt="Logo"> -->
            <Logo class="logo" />
            <nav class="links flex items-center gap-10 text-gray-100">
                <NuxtLink v-for="link in links" :key="link.name" :to="link.path"
                    class="transition duration-300 hover:text-white"
                    :class="route.path === link.path ? 'text-white' : 'opacity-75'">
                    {{ link.name }}
                </NuxtLink>
            </nav>
            <span @click="isModalOpen = true" class="hamburger">
                <Icon name="i-radix-icons:hamburger-menu" size="40" />
            </span>
                <div class="talk font-bold transition duration-300">
                    <button @click="$router.push('/contact')">Let's Talk</button>
                </div>
        </header>

        <div class="modal" :class="isModalOpen ? 'open' : ''">
            <div class="mt-5">
                <span class="flex justify-end pr-[30px]">
                    <Icon @click="isModalOpen = false" class="cursor-pointer" name="material-symbols:close" size="40" />
                </span>
            </div>
            <nav class="mt-10 flex flex-col items-center">
                <NuxtLink v-for="link in links" :key="link.name" :to="link.path"
                    class="inline-block w-full transition duration-300 font-bold hover:text-white py-5 text-center"
                    :class="route.path === link.path ? 'text-white' : 'opacity-70'">
                    {{ link.name }}
                </NuxtLink>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.links {
    background-color: black;
    padding: 15px 40px;
    border-radius: 50px;
}

.logo {
    height: 30px;
    width: fit-content;
}

.logo :deep(path) {
    fill: white;
}

.talk button {
    background-image: linear-gradient(150deg, #5797ff 10%, #0048bb 60%, #003180 100%);
    padding: 12px 30px;
    border-radius: 50px;
    color: white;
}

.hamburger {
    display: none;
    cursor: pointer;
}

.modal{
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    height: 0;
    z-index: 20;
    transition: height 0.4s ease;
    background-color: #0c121a;
}

.open {
    height: 100%;
}

.modal a:hover{
    background-color: #152130;
}

@media (max-width: 850px) {
    .talk {
        display: none;
    }

    header {
        padding: 0 20px;
        justify-content: space-between;
    }

    .links {
        background-color: transparent;
        padding-right: 10px;
        border-radius: none;
    }
}

@media (max-width: 600px) {
    .links {
        display: none;
    }

    .hamburger {
        display: block;
        margin-right: 10px;
    }
}
</style>