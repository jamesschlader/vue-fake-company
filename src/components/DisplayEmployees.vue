<template>
    <div class="uk-container">
        <DisplayMenu
                v-bind:items="items"
                v-bind:activeItem="active"
                v-on:set-active="setActive"
        ></DisplayMenu>

        <div v-show="active === 'display'">
            <EmployeeList
                    v-bind:employees="getAllEmployees"
                    v-on:set-active="setActive"
            ></EmployeeList>
        </div>

        <div v-show="active === 'details'">
            <h1>Employee Details</h1>
            <ApplicantDetails
                    v-bind:applicant="this.selected"
            ></ApplicantDetails>
        </div>

        <div v-show="active === 'scopes'">
            <ScopesList
                    v-bind:scopes="getAllScopes"
                    v-bind:isCreate="isCreate"
                    v-on:open-input="openInput"
                    v-on:add-one="addOne"
                    v-on:add-scope="addScope"
                    v-on:delete-scope="deleteScope"
                    v-on:edit-scope="editScope"
            >
            </ScopesList>
        </div>

        <div v-show="active === 'positions'">
            <PositionView
                    v-bind:positions="getAllPositions.map(item=>item).sort(sortPositions)"
                    v-on:update-position-sort="updatePositionSort"
            ></PositionView>
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
    import EmployeeList from "@/components/EmployeeList";
    import ScopesList from "@/components/ScopesList";
    import PositionView from "@/components/PositionView";

    export default {
        name: "DisplayEmployees",
        components: {
            EmployeeList,
            ApplicantThumbnail,
            ApplicantDetails,
            DisplayMenu, Title,
            DisplayScopes,
            ScopesList,
            PositionView
        },
        data() {
            return {
                active: "display",
                selected: blankApplicant,
                items: ["display", "scopes", "positions", "hire"],
                isCreate: false,
                positionsDesc: true,
                positionSortBy: "title"
            };
        },
        methods: {
            ...mapActions(["fetchAllEmployees",
                              "fetchAllScopes",
                              "addScope",
                              "deleteScope",
                              "editScope",
                              "fetchAllPositions"
                          ]),
            setActive(message, obj = blankApplicant) {
                this.active = message;
                this.selected = obj;
            },
            addOne(scope) {
                this.addScope(scope);
                this.isCreate = !this.isCreate;
            },
            openInput() {
                this.isCreate = true;
            },
            updatePositionSort(heading, desc) {
                this.positionSortBy = heading;
                this.positionsDesc = desc;
            },
            sortPositions(a, b) {
                const sortText = (a, b) => {

                    if (a[this.positionSortBy.toLowerCase()] > b[this.positionSortBy.toLowerCase()]) {
                        return -1;
                    }
                    if (b[this.positionSortBy.toLowerCase()] > a[this.positionSortBy.toLowerCase()]) {
                        return 1;
                    }
                    return 0;
                }

                if (this.positionsDesc) {
                    if (typeof this.positionSortBy === "string") {
                        return sortText(a, b);
                    } else {
                        return a[this.positionSortBy] - b[this.positionSortBy];
                    }
                } else {
                    if (typeof this.positionSortBy === "string") {
                        return sortText(b, a);
                    } else {
                        return b[this.positionSortBy] - a[this.positionSortBy];
                    }
                }
            }
        },
        computed: {
            ...mapGetters(["getAllEmployees", "getAllScopes", "getAllPositions"])
        },
        created() {
            this.fetchAllScopes();
            this.fetchAllPositions();
        },
    };
</script>

<style scoped>
    * {
        font-family: Raleway;
    }
</style>