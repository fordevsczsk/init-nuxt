export default defineNuxtRouteMiddleware((to, from) => {
    // named route middleware
    if (1 === 1) {
        console.log('is logged in');
    } else {
        return navigateTo('/nekam');
    }
});