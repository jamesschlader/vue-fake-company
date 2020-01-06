<template>
    <div>
        <div v-for="scope in scopes" class="uk-display-inline-block uk-margin-large-right uk-margin-top">
            <p
                    class="target uk-display-inline-block uk-margin-right"
                    v-on:click.prevent="openEdit(scope)">{{scope.name}}</p>

        </div>

        <div v-show="showInput">
            <button
                    class="uk-input uk-form-width-small uk-button-muted"
                    v-on:click.prevent="deleteScope(selectedScope)"
            >Delete</button>
            <input
                    type="text"
                    v-model="name"
                    v-bind:placeholder="selectedScope.name"
                    class="uk-input uk-form-width-large">
            <input
                    type="submit"
                    class="uk-input uk-form-width-small uk-button-secondary"
                    v-on:click.prevent="saveEdit(selectedScope)">
        </div>
    </div>
</template>

<script>

    export default {
        name: "DisplayScopes",
        props: ["scopes"],
        data(){
            return {
                showInput: false,
                name: "",
                selectedScope: { name: ""}
            }
        },
        methods: {
            deleteScope(scope) {
                this.$emit("delete-scope", scope)
                this.showInput = !this.showInput;
            },
            openEdit(scope){
                this.selectedScope = scope;
                this.showInput = true
            },
            saveEdit(scope){
                scope.name = this.name;
                this.$emit("save-edit", scope);
                this.showInput = !this.showInput;
                this.name = "";
            }
        }
    };
</script>

<style scoped>
    .box {
        border: solid 1px black;
        color: black;
        background-color: red;
        max-height: 25px;
        padding: 6px
    }

    .box:hover {
        cursor: pointer
    }
    .target:hover{
        cursor: pointer;
        color: #32d296;
    }
</style>