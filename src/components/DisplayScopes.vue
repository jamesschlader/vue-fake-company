<template>
    <div>
        <div
                v-for="scope in scopes"
                class="uk-display-inline-block uk-margin-large-right uk-margin-top uk-card uk-card-body uk-card-hover"
                v-on:click.prevent="openEdit(scope)">
            <h3 class="uk-card-title">{{scope.name}}</h3>
            <p>{{scope.description}}</p>

        </div>

        <div v-show="showInput">
            <form>
                <fieldset class="uk-fieldset uk-width-1-2">
                    <div class="uk-margin">
                        <input
                                type="text"
                                v-model="name"
                                v-bind:placeholder="selectedScope.name"
                                class="uk-input">
                    </div>
                    <div class="uk-margin">
                        <input
                                type="text"
                                v-bind:placeholder="selectedScope.description"
                                class="uk-input">
                    </div>
                    <div class="uk-margin ">
                        <input
                                type="submit"
                                class="uk-input uk-form-width-small uk-button-secondary"
                                v-on:click.prevent="saveEdit(selectedScope)">
                        <button
                                class="uk-input uk-form-width-small uk-button-default"
                                v-on:click.prevent="showInput = false"
                                >Cancel</button>
                        <button
                                class="uk-input uk-form-width-small uk-button-danger uk-float-right"
                                v-on:click.prevent="deleteScope(selectedScope)"
                        >Delete
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        name: "DisplayScopes",
        props: ["scopes"],
        data() {
            return {
                showInput: false,
                name: "",
                selectedScope: { name: "", description: "" }
            };
        },
        methods: {
            deleteScope(scope) {
                this.$emit("delete-scope", scope);
                this.showInput = !this.showInput;
            },
            openEdit(scope) {
                this.selectedScope = scope;
                this.showInput = true;
            },
            saveEdit(scope) {
                scope.name = this.name;
                this.$emit("save-edit", scope);
                this.showInput = !this.showInput;
                this.name = "";
            }
        }
    };
</script>

<style scoped>

</style>