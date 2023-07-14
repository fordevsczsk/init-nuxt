<script setup>
    const route = useRoute();

    console.log(route, 'route');

    definePageMeta({
        // Anonymous/ Inline middleware
        middleware: defineNuxtRouteMiddleware((to, from) => {
            console.log('to', to);
            console.log('from', from);
        }),
    });
</script>

<template>
    <div>
        <h1>Articles</h1>
        <nuxt-link to="/articles/web-development-guild">Article detail</nuxt-link>
    </div>
</template>