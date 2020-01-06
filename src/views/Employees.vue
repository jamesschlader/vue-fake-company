<template>
    <div class="uk-container">
        <Title
        v-bind:title="'Employees'"
        ></Title>
        <DisplayEmployees></DisplayEmployees>
    </div>
</template>

<script>
    import Title from "@/components/Title";
    import DisplayEmployees from "@/components/DisplayEmployees";
    export default {
        name: "Employees",
        components: {
            Title, DisplayEmployees
        }
    };
</script>

<style scoped>
    * {
        font-family: Raleway;
    }
</style>