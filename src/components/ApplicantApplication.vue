<template>
    <div>
        <button
                class="uk-button uk-button-primary"
                v-on:click.prevent="getAutoApplicant"
        >Get a new applicant</button>
        <button
                class="uk-button uk-button-default"

        >Fill out the application form</button>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";

    export default {
        name: "ApplicantApplication",
        methods:{
            ...mapActions(["recruitApplicant"]),
            getAutoApplicant(){
                this.$emit("recruit-applicant")
            }
        },
        computed: {
            ...mapGetters([])
        }
    };
</script>

<style scoped>

</style>