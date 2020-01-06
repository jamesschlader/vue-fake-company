<template>
    <div class="uk-container">
        <Title
        v-bind:title="'Districts'"
        ></Title>
    </div>
</template>

<script>
    import Title from "@/components/Title";

    export default {
        name: "Ditricts",
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