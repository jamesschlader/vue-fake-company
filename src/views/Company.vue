<template>
    <div class="uk-container">
        <Title
        v-bind:title="'Company'"
        ></Title>
    </div>
</template>

<script>
    import Title from "@/components/Title";

    export default {
        name: "Company",
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