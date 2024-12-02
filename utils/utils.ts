type Project = {
    name: string,
    description: string,
    image: string,
    link: string
    github?: string
}


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
    }
]


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