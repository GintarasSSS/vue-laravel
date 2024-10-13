<template>
    <the-header />
    <section class="container-xl">
        <router-view />
    </section>
</template>

<script>
    import TheHeader from "./src/components/TheHeader.vue";

    export default {
        name: "App",
        components: {
            TheHeader
        },
        setup() {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    // todo: less styles here
</style>
