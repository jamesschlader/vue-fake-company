<template>
    <div>
        <Title
                v-bind:title="'Scopes'"
        ></Title>
        <button class="uk-button uk-button-primary"
                v-on:click.prevent="$emit('open-input')"
        ><span uk-icon="plus"></span></button>
        <div
                v-show="isCreate"
        >
            <input
                    type="text"
                    class="uk-input uk-form-width-large"
                    v-model="name" placeholder="new scope">
            <input
                    type="text"
                    class="uk-input uk-form-width-large"
                    v-model="description" placeholder="describe the scope">
            <input
                    type="submit"
                    class="uk-input uk-form-width-small uk-button-secondary"
                    v-on:click.prevent="addScope({name, description})">
        </div>
        <DisplayScopes
                v-bind:scopes="scopes"
                v-on:add-scope="addScope"
                v-on:delete-scope="deleteScope"
                v-on:save-edit="editScope"
        ></DisplayScopes>
    </div>
</template>

<script>
    import Title from '@/components/Title';
    import DisplayScopes from "@/components/DisplayScopes";

    export default {
        name: "ScopesList",
        components: {Title, DisplayScopes},
        props: ["scopes", "isCreate"],
        data(){
            return {
                name: "",
                description: ""
            }
        },
        methods: {
            addScope(scope){
                this.$emit("add-scope", scope)
            },
            deleteScope(scope){
                this.$emit("delete-scope", scope)
            },
            editScope(scope){
                this.$emit("edit-scope", scope)
            }
        }
    };
</script>

<style scoped>

</style>