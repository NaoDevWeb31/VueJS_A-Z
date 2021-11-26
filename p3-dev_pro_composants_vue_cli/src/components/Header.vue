<template>
  <header>
    <ul>
      <li><router-link to="/" exact>Accueil</router-link></li>
      <li><router-link to="/page1">Page 1</router-link></li>
      <li><router-link to="/page2">Page 2</router-link></li>
    </ul>
  </header>
</template>

<script>
  export default {
    name: "Header",
  };
</script>

<style>
  .router-link-active {
    color: red;
  }
</style>
