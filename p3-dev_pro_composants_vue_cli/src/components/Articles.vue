<template>
  <main class="container-fluid">


    <div class="row">
      <div class="col text-center">
        <h1>Les articles de blog !</h1>
      </div>
    </div>

    <div class="row">
      <div class="col">

        <ul class="list-group list-group-flush">
          <li
            v-for="(article, index) in allArticles"
            :key="index"
            class="list-group-item list-group-item-action"
          >
            <router-link :to="`/blogposts/${index + 1}`">

              <div class="card">
                <div class="card-body">
                  {{ article.title }}
                </div>
              </div>
              
            </router-link>

          </li>
        </ul>

      </div>
    </div>

    
  </main>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Articles",
    data() {
      return {
        allArticles: [],
      };
    },
    created() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((reponse) => {
          console.log(reponse);
          for (const blogPost of reponse.data) {
            this.allArticles.push(blogPost);
          }
        });
    },
  };
</script>

<style>
  /* .list-group-item{
   border:none
 } */
  .list-group-item-action:focus,
  .list-group-item-action:hover {
    background-color: #b0d5fc;
  }
</style>
