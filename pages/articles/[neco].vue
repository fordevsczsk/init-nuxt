<script setup>
    const route = useRoute();

    console.log(route, 'route');

    definePageMeta({
        middleware: 'auth',
        layout: 'custom'
    });
</script>

<template>
    <main>
        <h1>Article detail - {{ route.params.neco }}</h1>
        
        <ArticleItem />
        <CommentsBox />
    </main>
</template>