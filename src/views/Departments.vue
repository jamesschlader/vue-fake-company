<template>
    <div class="uk-container">
        <Title
        v-bind:title="'Departments'"
        ></Title>
    </div>
</template>

<script>
    import Title from "@/components/Title";
    export default {
        name: "Departments",
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