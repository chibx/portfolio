import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    site: {
        url: "chibx.vercel.app",
        indexable: true,
    },
    router: { options: { scrollBehaviorType: "smooth" } },
    robots: {
        allow: "*",
        sitemap: "/sitemap.xml",
    },
    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
            charset: "utf-8",
            meta: [
                {
                    name: "theme-color",
                    media: "(prefers-color-scheme: light)",
                    content: "#0F3877",
                },
                { name: "color-scheme", content: "light dark" },
                {
                    name: "viewport",
                    content: "viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
                },
                { name: "format-detection", content: "telephone=no" },
                { name: "msapplication-tap-highlight", content: "no" },
                { name: "mobile-web-app-capable", content: "yes" },
                { name: "apple-mobile-web-app-title", content: "Chinaemerem Chiebidolu's Portfolio" },
            ],
            link: [
                { rel: "icon", type: "image/png", href: "/logo.png" },
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com" },
            ],
            base: { href: "/" },
        },
        pageTransition: {
            name: "fade-up",
            mode: "out-in",
        },
    },
    modules: ["@vueuse/nuxt", "@nuxt/icon", "@nuxtjs/seo", "@nuxt/image"],
    schemaOrg: {
        identity: "Person",
    },
    sitemap: {
        xsl: false,
    },
    icon: {
        mode: "svg",
    },
    runtimeConfig: {},
    css: [],
    vue: {
        compilerOptions: {
            prefixIdentifiers: true,
            mode: "module",
            comments: false,
            // isCustomElement: (tag)=> tag.toLowerCase().startsWith('atropos'),
        },
    },
    nitro: {
        esbuild: {
            options: {
                target: "node18",
            },
        },
    },
    devServer: {
        port: 5100,
        host: "0.0.0.0",
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
