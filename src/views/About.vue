<template>
  <div class="uk-container">
    <Title
    v-bind:title="'About'"
    ></Title>
  </div>
</template>

<script>
  import Title from "@/components/Title";

  export default {
    name: "About",
    components: {
      Title
    }
  };

</script>

<style scoped >
  * {
    font-family: Raleway;
  }
</style>
