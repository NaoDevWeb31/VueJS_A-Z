<template>
  <main class="container-fluid">


    <div class="row my-5">
      <div class="col text-center">
        <h1>Le Post numéro {{ id }}</h1>
      </div>
    </div>

    <div class="row my-5 fill-page">
      <div class="col">

            <div class="card">
              <div class="card-body">
                <h2 class="h4 card-title">{{ articleUnique.title }}</h2>
                <p class="card-text">{{ articleUnique.body }}</p>
              </div>
              <div class="card-footer">
                  <router-link to="./">
                    <button class="btn btn-warning">Retour aux articles</button>
                  </router-link>
              </div>
            </div>
            
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
 import axios from "axios";

  export default {
    name: "Post",
    data() {
        return {
            id: this.$route.params.id,
            articleUnique: [],
        }
    },
    mounted() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then((reponse) => {
          console.log(reponse);
          this.articleUnique = reponse.data;
        });
    },
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
