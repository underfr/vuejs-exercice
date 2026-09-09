import type { RouteRecordRaw } from 'vue-router'

// Vite remplace ça au build par un objet { chemin: () => import(...) }
const modules = import.meta.glob('../views/exercices/*.vue')

// Pour renommer proprement un exercice sans toucher au nom de fichier
const overrides: Record<string, string> = {
    '03-fetch-api': 'Appels API',
}

function toTitle(slug: string) {
    return (
        overrides[slug] ??
        slug
            .replace(/^\d+[-_]?/, '')   // vire le "01-" de tri
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase())
    )
}

export const exerciceRoutes: RouteRecordRaw[] = Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, loader]) => {
        const slug = path.split('/').pop()!.replace(/\.vue$/, '')
        return {
            path: `/ex/${slug}`,
            name: `ex-${slug}`,
            component: loader,               // lazy-loadé automatiquement
            meta: { title: toTitle(slug) },
        }
    })