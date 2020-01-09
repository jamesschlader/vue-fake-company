<template>
    <div class="uk-container uk-flex uk-flex-around">
        <div class="">
            <img v-bind:src="this.applicant.employeeInfo.image" v-bind:alt="this.applicant.employeeInfo.lastName"/>
            <p>{{this.applicant.employeeInfo.firstName}} {{this.applicant.employeeInfo.lastName}}</p>
            <p>{{this.applicant.employeeInfo.email}}</p>
            <p>{{this.applicant.employeeInfo.address.street}}</p>
            <p>{{this.applicant.employeeInfo.address.city}}, {{this.applicant.employeeInfo.address.state}}
                {{this.applicant.employeeInfo.address.zip}}</p>
            <p>{{this.applicant.employeeInfo.phone}}</p>
            <p>Assessment Score: {{this.applicant.assessment}}</p>
            <p>Resume:</p>
            <p>{{this.applicant.history[0].company}}</p>
            <p>{{this.applicant.history[0].description}}</p>
            <p>Start: {{this.applicant.history[0].fromValue}}</p>
            <p>End: {{this.applicant.history[0].toValue}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ApplicantDetails",
        props: ["applicant"]
    };
</script>

<style scoped>
    img {
        margin: 3px;
        height: 200px;
        width: auto;
        border-radius: 50%;
    }
</style>