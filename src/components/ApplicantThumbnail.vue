<template>
    <div class="wrapper">
        <div
                class="applicant-card"
                v-on:click.prevent="$emit('select-active')"
        >
            <img v-bind:src="applicant.employeeInfo.image" v-bind:alt="applicant.employeeInfo.lastName" />
            <div class="details">

            <p>{{applicant.employeeInfo.firstName}} {{applicant.employeeInfo.lastName}}</p>
            <p>Score: {{applicant.assessment}}</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ApplicantThumbnail",
        props: ["applicant"],
        methods:{
        }
    }
</script>

<style scoped>
    .wrapper{
        display: inline-block;
        margin: 5px 10px;
    }

    .applicant-card{
       border: cadetblue solid 1px;
        border-radius: 10px;
        height: 55px;
        padding: 10px;
        max-width: 300px;
        display: flex;
        flex-direction: row;
    }
    .applicant-card:hover{
        cursor: pointer;
        background-color: aquamarine;
    }
    .details{

    }
    .details p{
        margin: 3px auto;
    }
    img {
        margin: 3px;
        height: 100%;
        border-radius: 50%;
    }
</style>