<template>
    <div class="uk-container">
        <Title
        v-bind:title="'Applicants'"
        ></Title>
        <display-applicants/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import DisplayApplicants from "@/components/DisplayApplicants";
    import Title from "@/components/Title";

    export default {
        name: "Applicants",
        components: {
          DisplayApplicants, Title
        }
    }
</script>

<style scoped>
    * {
        font-family: Raleway;
    }
</style>
