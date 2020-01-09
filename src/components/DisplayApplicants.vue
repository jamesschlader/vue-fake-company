<template>
    <div class="uk-container">
        <DisplayMenu
        v-bind:items="items"
        v-bind:activeItem="active"
        v-on:set-active="setActive"
        ></DisplayMenu>
        <div v-show="active === 'display'">
            <Title
            v-bind:title="'Display Applicants'"
            ></Title>
            <div>
                <ApplicantThumbnail
                    v-bind:key="applicant.image"
                    v-for="applicant in getAllApplicants.filter(item=>{
                        return !item.image
                    }).sort((a,b)=>{
                    return b.assessment - a.assessment
                    })"
                    v-bind:applicant="applicant"
                    v-on:select-active="setActive('details', applicant)"
                ></ApplicantThumbnail>
            </div>
        </div>
        <div v-show="active === 'create'">
            <h1>Apply</h1>
            <ApplicantApplication v-on:recruit-applicant="recruitOne"></ApplicantApplication>
        </div>
        <div v-show="active === 'details'">
            <h1>Applicant Details</h1>
            <ApplicantDetails
            v-bind:applicant="this.selected"
            ></ApplicantDetails>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    import ApplicantThumbnail from "@/components/ApplicantThumbnail";
    import ApplicantDetails from "@/components/ApplicantDetails";
    import Title from "@/components/Title"
    import blankApplicant from "@/utils/blankApplicant";;
    import DisplayMenu from "@/components/DisplayMenu";
    import ApplicantApplication from "@/components/ApplicantApplication";

    export default {
        name: "DisplayApplicants",
        components: {
            DisplayMenu,
            ApplicantThumbnail, ApplicantDetails, Title, ApplicantApplication
        },
        data() {
            return {
                active: "display",
                selected: blankApplicant,
                items: ["display", "create"]
            }
        },
        methods: {
            ...mapActions(["fetchAllApplicants", "recruitApplicant"]),
            setActive(message, obj = blankApplicant) {
                this.active = message;
                this.selected = obj
            },
            recruitOne(){
                this.setActive("display");
                this.recruitApplicant();
            }
        },
        created() {
            this.fetchAllApplicants();
        },
        computed: {
            ...mapGetters(["getAllApplicants"])
        }
    }

</script>

<style scoped>
    *{
        font-family: Raleway;
    }
</style>