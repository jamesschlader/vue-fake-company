<template>
    <div class="uk-container">
        <form>
            <div class="uk-margin">
                <label for="position-title" class="uk-form-label">Title</label>
                <div class="uk-form-controls">
                    <input
                            type="text"
                            class="uk-input uk-form-width-large"
                            id="position-title"
                            v-model="title">
                </div>
            </div>
            <div class="uk-margin">
                <label for="position-title" class="uk-form-label">Rate</label>
                <div class="uk-form-controls">
                    <input
                            type="text"
                            class="uk-input uk-form-width-large"
                            id="position-rate"
                            v-model="rate">
                </div>
            </div>
            <div class="uk-margin">
                <label for="position-title" class="uk-form-label">Frequency</label>
                <div class="uk-form-controls">
                    <input
                            type="text"
                            class="uk-input uk-form-width-large"
                            id="position-frequency"
                            v-model="frequency">
                </div>
            </div>
            <div class="uk-margin">
                <label for="position-scopes" class="uk-form-label">Scopes</label>
                <div class="">
                    <select
                            class="uk-select uk-form-width-large"
                            id="position-scopes"
                            v-model="scopes"
                            multiple>
                        <option v-for="scope in getAllScopes" v-bind:value=scope>{{scope.name}}</option>
                    </select>
                </div>
                <div>
                    <ul class="uk-list">
                        <li v-for="scope in scopes">{{scope.name}}</li>
                    </ul>
                </div>
            </div>
            <input type="submit" class="uk-button uk-button-primary" v-on:click.prevent="addPosition">
        </form>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: "PositionAddForm",
        data(){
            return {
                title: "",
                rate: "",
                frequency: "",
                scopes:[]
            }
        },
        methods: {
            ...mapActions(["fetchAllScopes"]),
            addPosition(){
                const newPosition = {
                    title: this.title, rate: parseFloat(this.rate), frequency: this.frequency, scopes: this.scopes
                };
                this.$emit("add-position", newPosition);
                this.title = "";
                this.rate = "";
                this.frequency = "";
                this.scopes =[]
            },
            addToScopes(event){
                this.scopes = [event, ...this.scopes]
            }
        },
        computed: {
            ...mapGetters(["getAllScopes"])
        }
    };
</script>

<style scoped>

</style>