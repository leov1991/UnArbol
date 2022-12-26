export default defineNuxtRouteMiddleware((to)=> {
    const user = useSupabaseUser()
    if(!user.value && to.path === '/posts/new'){
        navigateTo('/login')
    }

})