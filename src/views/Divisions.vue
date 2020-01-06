<template>
    <div class="uk-container">
        <Title
        v-bind:title="'Divisions'"
        ></Title>
    </div>
</template>

<script>
    import Title from "@/components/Title";

    export default {
        name: "Divisions",
        components: {
            Title
        }
    };
</script>

<style scoped>
    *{
        font-family: Raleway;
    }
</style>