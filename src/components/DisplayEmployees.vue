<template>
    <div class="uk-container">
        <DisplayMenu
                v-bind:items="items"
                v-on:set-active="setActive"
        ></DisplayMenu>
        <div v-show="active === 'display'">
            <Title
                    v-bind:title="'Display Employees'"
            ></Title>
            <div>
                <applicant-thumbnail
                        v-bind:key="applicant.image"
                        v-for="applicant in getAllEmployees.filter(item=>{
                        return !item.image
                    }).sort((a,b)=>{
                    return b.assessment - a.assessment
                    })"
                        v-bind:applicant="applicant"
                        v-on:select-active="setActive('details', applicant)"
                ></applicant-thumbnail>
            </div>
        </div>
        <div v-show="active === 'details'">
            <h1>Employee Details</h1>
            <ApplicantDetails
                    v-bind:applicant="this.selected"
            ></ApplicantDetails>
        </div>
        <div v-show="active === 'scopes'">
            <Title
                    v-bind:title="'Scopes'"
            ></Title>
            <button class="uk-button uk-button-primary"
                    v-on:click.prevent="openInput"
            ><span uk-icon="plus"></span></button>
            <div
                    v-show="isCreate"
            >
                <input
                        type="text"
                        class="uk-input uk-form-width-large"
                        v-model="name" placeholder="new scope">
                <input
                        type="submit"
                        class="uk-input uk-form-width-small uk-button-secondary"
                        v-on:click.prevent="addOne">
            </div>
            <DisplayScopes
                    v-bind:scopes="getAllScopes"
                    v-on:add-scope="addScope"
                    v-on:delete-scope="deleteScope"
                    v-on:save-edit="editScope"
            ></DisplayScopes>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import blankApplicant from "@/utils/blankApplicant";
    import DisplayMenu from "@/components/DisplayMenu";
    import Title from "@/components/Title";
    import ApplicantDetails from "@/components/ApplicantDetails";
    import ApplicantThumbnail from "@/components/ApplicantThumbnail";
    import DisplayScopes from "@/components/DisplayScopes";

    export default {
        name: "DisplayEmployees",
        components: { ApplicantThumbnail, ApplicantDetails, DisplayMenu, Title, DisplayScopes },
        data() {
            return {
                active: "display",
                selected: blankApplicant,
                items: ["display", "scopes"],
                isCreate: false,
                name: ""
            };
        },
        methods: {
            ...mapActions(["fetchAllEmployees", "fetchAllScopes", "addScope", "deleteScope", "editScope"]),
            setActive(message, obj = blankApplicant) {
                this.active = message;
                this.selected = obj;
            },
            addOne() {
                const name = this.name;
                this.addScope({name});
                this.name = "";
                this.isCreate = !this.isCreate;
            },
            openInput() {
                this.isCreate = true;
            }
        },
        computed: {
            ...mapGetters(["getAllEmployees", "getAllScopes"])
        },
        created() {
            this.fetchAllScopes();
        },
    };
</script>

<style scoped>
    * {
        font-family: Raleway;
    }
</style>