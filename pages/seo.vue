<script setup>
    // způsob 1
    useHead({
        title: 'Nuxt App SEO page',
        meta: [
            { name: 'description', content: 'Nuxt 3 app description' }
        ],
        bodyAttrs: {
            class: 'test'
        },
        script: [ { innerHTML: 'console.log(\'Hello from script\')' } ],
    });

    // způsob 2 -> key: values
    useSeoMeta({
        ogTitle: 'Neco og title',
        description: 'Neco description',
        ogDescription: 'Neco og description',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
        cokoliv: 'cokoliv here'
    });
</script>

<template>
    <h1>SEO & Meta</h1>
</template>