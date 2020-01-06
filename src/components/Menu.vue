<template>
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-center ">
            <ul class="uk-navbar-nav">
                <li class="uk-active"><a href="">
                    <router-link to="/">Home</router-link>
                </a></li>
                <li><a href="">
                    <router-link to="/applicants">Applicants</router-link>
                </a></li>
                <li><a href="">
                    <router-link to="/employees">Employees</router-link>
                </a></li>
                <li><a href="">
                    <router-link to="/teams">Teams</router-link>
                </a></li>
                <li><a href="">
                    <router-link to="/districts">Districts</router-link>
                </a></li>
                <li><a href="">
                    <router-link to="/departments">Departments</router-link>
                </a></li>
                <li><a href="">
                    <router-link to="/divisions">Divisions</router-link>
                </a></li>
                <li><a href="">
                    <router-link to="/company">Company</router-link>
                </a></li>
                <li><a href="">
                    <router-link to="/about">About</router-link>
                </a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Menu"
    };
</script>

<style scoped>

</style>