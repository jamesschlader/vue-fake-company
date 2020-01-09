<template>
    <div>
        <Title
                v-bind:title="'Display Employees'"
        ></Title>
        <div>
            <applicant-thumbnail
                    v-bind:key="employee.image"
                    v-for="employee in employees.filter(item=>{
                        return !item.image
                    }).sort((a,b)=>{
                    return b.assessment - a.assessment
                    })"
                    v-bind:applicant="employee"
                    v-on:select-active="setActive(employee)"
            ></applicant-thumbnail>
        </div>
    </div>
</template>

<script>
    import Title from "@/components/Title";
    import ApplicantThumbnail from "@/components/ApplicantThumbnail";

    export default {
        name: "EmployeeList",
        components: {Title, ApplicantThumbnail},
        props: ["employees"],
        methods: {
            setActive(employee){
                this.$emit("set-active", "details", employee);
            }
        }
    };
</script>

<style scoped>

</style>