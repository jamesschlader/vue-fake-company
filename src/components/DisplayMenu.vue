<template>
    <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
        <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
                <li
                        v-for="item in items"
                        v-on:click.prevent="setActive(item)"
                        v-bind:class="[{ 'uk-active': isActive(item) }]"
                ><a href="">{{item}}</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "DisplayMenu",
        props: ["items"],
        data() {
            return {
                active: "display"
            };
        },
        methods: {
            setActive(message) {
                this.active = message;
                this.$emit('set-active', message)
            },
            isActive(item) {
                return this.active === item;
            }
        }
    };
</script>

<style scoped>
    * {
        font-family: Raleway;
    }
</style>