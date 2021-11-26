<template>
  <header class="py-3 pr-2 mb-4 bg-dark">


    <ul class="nav justify-content-end">

        <li class="btn btn-primary btn-nav">
            <router-link to="/" exact>Accueil</router-link>
        </li>

        <li class="btn btn-primary btn-nav">
            <router-link to="/blogposts">Articles</router-link>
        </li>

        <li class="btn btn-primary btn-nav">
            <router-link to="/page2">Page 2</router-link>
        </li>

    </ul>


  </header>
</template>

<script>
  export default {
    name: "Header",
  };
</script>

<style>
  .btn-nav {
    margin: 5px;
    width: 15%;
  }
  @media all and (max-width: 560px) {
    .btn-nav {
      width: auto;
    }
  }
  .btn-nav a {
    color: #fff;
  }
  .btn-nav a:hover {
    color: #fff;
  }
  .btn-nav a.router-link-active {
    font-weight: bold;
    text-transform: uppercase;
  }
</style>
