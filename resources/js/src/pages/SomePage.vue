<template>
    <h1>Some Page {{ counter }}</h1>
    <button class="btn btn-primary" @click="increment">Increment</button>
</template>

<script>
    import { computed } from 'vue';
    import { useStore } from "vuex";

    export default {
        setup() {
            const store = useStore();

            const counter = computed(() => store.getters['getCounter'] );
            const increment = () => {
                store.dispatch('increment');
            };

            return {
                increment,
                counter
            }
        }
    }
</script>
