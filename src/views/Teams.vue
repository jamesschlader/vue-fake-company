<template>
    <div class="uk-container">
        <Title
        v-bind:title="'Teams'"
        ></Title>
    </div>
</template>

<script>
    import Title from "@/components/Title";

    export default {
        name: "Teams",
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