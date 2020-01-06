<template>
  <div id="app">
   <Menu/>
      <router-view/>
  </div>
</template>

<script>
  import Menu from "./components/Menu";
  export default {
    name: "App",
    components: { Menu }
  };
</script>
<style>
    *{
        font-family: Raleway;
    }
</style>
