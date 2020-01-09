<template>
    <div class="uk-container">
        <Title v-bind:title="'Positions'"></Title>

        <button class="uk-button uk-button-primary"
                v-on:click.prevent="openAdd"
        ><span uk-icon="plus"></span></button>

        <div
                class="uk-margin-top"
                v-show="add"

        >
            <p>Gonna add a position!</p>
            <PositionAddForm
                    v-on:add-position="createPosition"
            ></PositionAddForm>
        </div>

        <div
                class="uk-margin-top"

        >
            <table class="uk-table uk-table-middle uk-table-divider">
                <caption>Positions</caption>
                <thead>
                <tr>
                    <th class="uk-text-justify"
                        v-on:click.prevent="setSort('title')">
                        Title
                        <span
                                uk-icon="chevron-up"
                                v-show="sortOn === 'title'&& desc"
                                v-on:click.prevent="toggleSort"
                        ></span>
                        <span
                                uk-icon="chevron-down"
                                v-show="sortOn === 'title'&& !desc"
                                v-on:click.prevent="toggleSort"
                        ></span>
                    </th>
                    <th class="uk-text-justify"
                        v-on:click.prevent="setSort('rate')">
                        Rate
                        <span
                                uk-icon="chevron-up"
                                v-show="sortOn === 'rate'&& desc"
                                v-on:click.prevent="toggleSort"
                        ></span>
                        <span
                                uk-icon="chevron-down"
                                v-show="sortOn === 'rate'&& !desc"
                                v-on:click.prevent="toggleSort"
                        ></span>
                    </th>
                    <th class="uk-text-justify"
                        v-on:click.prevent="setSort('frequency')">
                        Frequency
                        <span
                                uk-icon="chevron-up"
                                v-show="sortOn === 'frequency'&& desc"
                                v-on:click.prevent="toggleSort"
                        ></span>
                        <span
                                uk-icon="chevron-down"
                                v-show="sortOn === 'frequency'&& !desc"
                                v-on:click.prevent="toggleSort"
                        ></span>
                    </th>
                    <th class="uk-text-justify"
                        v-on:click.prevent="setSort('scopes')">
                        Scopes
                        <span
                                uk-icon="chevron-up"
                                v-show="sortOn === 'scopes'&& desc"
                                v-on:click.prevent="toggleSort"
                        ></span>
                        <span
                                uk-icon="chevron-down"
                                v-show="sortOn === 'scopes'&& !desc"
                                v-on:click.prevent="toggleSort"
                        ></span>
                    </th>

                    <th class="uk-text-justify uk-width-small">delete</th>
                </tr>
                </thead>
                <tbody>
                <tr
                        v-for="position in positions"
                        v-bind:key="position.id"
                        class="uk-text-justify"
                >
                    <td>
                        <span
                                class="editable"
                                v-on:click.prevent="editField(position, 'title')">{{position.title}}</span>
                        <div v-show="activeField === (`title+${position.id}`)">
                            <input
                                    class="uk-input uk-form-width-medium"
                                    v-model="text">
                            <button
                                    class="uk-button uk-button-secondary"
                                    v-on:click.prevent="saveEdits(position, 'title')"
                            >Save
                            </button>
                            <button
                                    class="uk-button uk-button-default"
                                    v-on:click.prevent="activeField = ''"
                            >Cancel
                            </button>
                        </div>
                    </td>
                    <td>
                        <span
                                class="editable"
                                v-on:click.prevent="editField(position, 'rate')"
                        >${{parseFloat(position.rate).toFixed(2)}}</span>
                        <div v-show="activeField === (`rate+${position.id}`)">
                            <input
                                    class="uk-input uk-form-width-medium"
                                    v-model="text">
                            <button
                                    class="uk-button uk-button-secondary"
                                    v-on:click.prevent="saveEdits(position, 'rate')"
                            >Save
                            </button>
                            <button
                                    class="uk-button uk-button-default"
                                    v-on:click.prevent="activeField = ''"
                            >Cancel
                            </button>
                        </div>
                    </td>
                    <td>
                        <span
                                class="editable"
                                v-on:click.prevent="editField(position, 'frequency')"
                        >{{position.frequency}}</span>
                        <div v-show="activeField === (`frequency+${position.id}`)">
                            <input
                                    class="uk-input uk-form-width-medium"
                                    v-model="text">
                            <button
                                    class="uk-button uk-button-secondary"
                                    v-on:click.prevent="saveEdits(position, 'frequency')"
                            >Save
                            </button>
                            <button
                                    class="uk-button uk-button-default"
                                    v-on:click.prevent="activeField = ''"
                            >Cancel
                            </button>
                        </div>
                    </td>
                    <td>
                        <span
                                class="editable"
                                v-on:click.prevent="editField(position, 'scopes')"
                        >Edit</span>
                        <div v-show="activeField === (`scopes+${position.id}`)">
                            <select
                                    class="uk-select uk-form-width-medium"
                                    v-model="scopes"
                                    multiple>
                                <option
                                        v-for="scope in getAllScopes"
                                        v-bind:value="scope"
                                        v-bind:class="{'uk-text-bold': position.scopes.find(s => s.name === scope.name) }"
                                >{{scope.name}}
                                </option>
                            </select>
                            <div class="uk-display-block">
                                <button
                                        class="uk-button uk-button-secondary "
                                        v-on:click.prevent="saveEdits(position, 'scopes')"
                                >Save
                                </button>
                                <button
                                        class="uk-button uk-button-default"
                                        v-on:click.prevent="activeField = ''"
                                >Cancel
                                </button>
                            </div>

                        </div>
                    </td>
                    <td>
                        <button class="cutable uk-button" v-on:click.prevent="cutItOut(position)">
                            <span uk-icon="close"></span>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import Title from "@/components/Title";
    import PositionAddForm from "@/components/PositionAddForm";

    export default {
        name: "PositionView",
        components: { Title, PositionAddForm },
        props: ["positions"],
        data() {
            return {
                add: false,
                sortOn: "title",
                desc: true,
                activeField: "",
                text: "",
                scopes: []
            };
        },
        methods: {
            ...mapActions(["addPosition", "deletePosition", "editPosition", "fetchAllPositions"]),
            openAdd() {
                this.add = true;
            },
            createPosition(position) {
                this.add = !this.add;
                this.addPosition(position);
            },
            toggleSort() {
                this.desc = !this.desc;
                this.$emit("update-position-sort", this.sortOn, this.desc);
            },
            setSort(heading) {
                this.sortOn = heading;
                this.$emit("update-position-sort", this.sortOn, this.desc);
            },
            cutItOut(position) {
                this.deletePosition(position);
            },
            editField(position, fieldName) {
                this.activeField = `${fieldName}+${position.id}`;
                if (fieldName.includes("scope")) {
                    this.scopes = position[fieldName];
                } else {
                    this.text = position[fieldName];
                }
            },
            saveEdits(position, activeField) {
                if (activeField.includes("scope")) {
                    position[activeField] = this.scopes;
                } else {
                    position[activeField] = this.text;
                }
                this.activeField = "";
                this.text = "";
                this.scopes = [];
                this.editPosition(position);
            }
        },
        computed: {
            ...mapGetters(["getAllScopes"])
        },
        created() {
            this.fetchAllPositions();
        }
    };
</script>

<style scoped>
    * {
        font-family: Raleway;
    }

    .cutable {
        background-color: white;
    }

    .cutable:hover {
        cursor: pointer;
        color: red;
    }

    .editable:hover {
        cursor: pointer;
        color: green;
    }
</style>