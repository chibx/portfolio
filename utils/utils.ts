import type { Reactive } from "vue"
import type { InjectionKey } from "vue"

type Project = {
    name: string,
    description: string,
    image: string,
    link: string
    github?: string
}

type Experience = {
    company: string,
    position: string,
    date: string,
    desc: string
}

export type Toast = {
    id: number;
    type: 'success' | 'error';
    message: string;
    /** In ms */
    duration?: number
}

export const toastKey: InjectionKey<Reactive<Toast[]>> = Symbol('toast')


export const projects: Project[] = [
    {
        name: 'GloreySings',
        description: 'A website for gospel singer GloreySings.',
        image: '/projects/gloreysings-site.webp',
        link: 'https://glorey-sings.vercel.app/',
    },
    {
        name: 'WinWeb',
        description: 'The closest Windows 11 can be on the web',
        image: '/projects/winweb.webp',
        link: 'https://winweb-pied.vercel.app',
        github: 'https://github.com/chibx/WinWeb'
    },
    {
        name: 'Everything Furniture Enterprise',
        description: 'A website for a company that sells furniture.',
        image: '/projects/everything-enterprise.webp',
        link: 'https://client1-portfolio-one.vercel.app',
        github: 'https://github.com/chibx/everything-enterprise'
    },
];


export const skills = {
    "Core": [
        {
            name: 'HTML',
            icon: 'i-vscode-icons:file-type-html',
        },
        {
            name: 'CSS',
            icon: 'i-vscode-icons:file-type-css'
        },
        {
            name: 'Tailwind CSS',
            icon: 'i-vscode-icons:file-type-tailwind'
        },
        {
            name: 'JavaScript',
            icon: 'i-vscode-icons:file-type-js-official'
        },
        {
            name: 'TypeScript',
            icon: 'i-vscode-icons:file-type-typescript-official'
        },
        {
            name: 'Vite',
            icon: 'i-vscode-icons:file-type-vite'
        },
        {
            name: 'Vue.js',
            icon: 'i-vscode-icons:file-type-vue'
        },
        {
            name: 'Nuxt.js',
            icon: 'i-vscode-icons:file-type-nuxt'
        },
        {
            name: 'Node.js',
            icon: 'i-vscode-icons:file-type-node'
        },
        {
            name: 'Docker',
            icon: 'i-devicon:docker'
        },
        {
            name: 'PostgreSQL',
            icon: 'i-devicon:postgresql'
        },
        {
            name: 'Git',
            icon: 'i-vscode-icons:file-type-git'
        },
        {
            name: 'GitHub',
            icon: 'i-skill-icons:github-light'
        }
    ],
    "Others": [
        {
            name: 'React',
            icon: 'i-vscode-icons:file-type-reactjs'
        },
        {
            name: 'Next.js',
            icon: 'i-vscode-icons:file-type-next'
        },
        {
            name: 'Flutter',
            icon: 'i-vscode-icons:file-type-flutter'
        },
        {
            name: 'Dart',
            icon: 'i-devicon:dart'
        },
        {
            name: 'Golang',
            icon: 'i-devicon:go-wordmark'
        }
    ]
}


export const experience: Experience[] = [
    {
       company: 'Obiwezy Enterprise',
       position: 'Web Admin (Intern)',
       date: '(Nov 2022 - May 2024)',
       desc: `Interned at <a href="https://obiwezy.com/" target="_blank" rel="noopener noreferrer">Obiwezy Enterprise</a> as a Web Administrator, helped maintain the large
codebase of their website and applications, while also ensuring efficiency and scalabilty of
their e-commerce platform. I also gained a fundamental knowledge of Content
Management Systems through the continuous use of Magento
`
    },
]

export const links = [
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