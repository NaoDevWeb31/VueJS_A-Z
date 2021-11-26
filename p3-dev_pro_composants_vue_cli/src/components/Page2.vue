<template>
  <main class="container-fluid">


    <div class="row mb-5">
      <div class="col text-center">
        <h1>Voici la Page 2</h1>
      </div>
    </div>

    <div class="row my-5 fill-page">
      <div class="col">
      </div>
    </div>

    <div class="row my-5 mx-auto">
      <div class="col d-flex justify-content-center">
        <div @click="goDebut" class="btn btn-warning w-50 py-2">Retour au début</div>
      </div>
    </div>


  </main>
</template>

<script>
  export default {
    name: "Page2",
    methods: {
      goDebut(){
        this.$router.push("/");
      }
    }
  };
</script>

<style>
 .fill-page{
   height: 40vh;
 }
</style>
