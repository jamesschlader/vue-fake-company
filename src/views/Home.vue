<template>
    <div class="uk-container">
        <Title
        v-bind:title="'Home'"
        ></Title>
    </div>
</template>

<script>
    import Title from "@/components/Title";

    export default {
        name: "Home",
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