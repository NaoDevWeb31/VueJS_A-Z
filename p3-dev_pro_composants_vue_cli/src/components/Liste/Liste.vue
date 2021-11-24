<template>
  <div>
    <ul class="liste mt-5">
      <!-- Valeur de la prop transmise dans le composant parent "Contenu" -->
      <!-- Utiliser la prop "myArr" dans le composant enfant -->
      <li v-for="(film, index) in myArr" v-bind:key="index">
        <div class="card">
          <div class="card-body">
            <span> Titre : {{ film.titre }} </span><br />
            <span> Date : {{ film.date }} </span>
          </div>
        </div>
      </li>
    </ul>
    <p>{{ txt }}</p>
    <div v-on:click="supprFilm" class="btn btn-danger mt-2">
      Supprime le film
    </div>
    <div v-on:click="supprTxt" class="btn btn-danger mt-2 ml-2">
      Supprime le txt
    </div>
    <div v-on:click="changeTitre" class="btn btn-danger mt-2 ml-2">
      Modifie le titre
    </div>
  </div>
</template>

<script>
  export default {
    name: "Liste",
    data() {
      return {};
    },
    props: ["myArr", "txt"],
    methods: {
      supprFilm: function () {
        this.myArr.pop();
      },
      supprTxt: function () {
        this.txt = "";
      },
      changeTitre: function () {
        this.$emit("changeTitre", "Mon nouveau titre");
      },
    },
  };
</script>

<style scoped src="./Liste.css"></style>
