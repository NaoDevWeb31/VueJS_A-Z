<template>
  <div class="container mt-5">

    <h1>Notre premier Formulaire</h1>

    <form>

      <div class="form-group">
        <label for="prenom">Ton prénom</label>
        <input
          v-model.lazy="formData.prenom"
          type="text"
          id="prenom"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="txt">Ton texte</label>
        <textarea
          v-model="formData.txt"
          id="txt"
          class="form-control"
        ></textarea>
      </div>


      <div class="form-check">
          <input v-model="formData.checkFruits" value="Fraise" id="fraise" type="checkbox" class="form-check-input">
          <label for="fraise" class="form-check-label">Fraise</label>
      </div>

      <div class="form-check">
          <input v-model="formData.checkFruits" value="Pomme" id="pomme" type="checkbox" class="form-check-input">
          <label for="pomme" class="form-check-label">Pomme</label>
      </div>

      <div class="form-check">
          <input v-model="formData.checkFruits" value="Cerises" id="cerises" type="checkbox" class="form-check-input">
          <label for="cerises" class="form-check-label">Cerises</label>
      </div>


      <h2 class="mt-3">Résultats</h2>

      <div class="card p-3">
        <p>Prénom : {{ formData.prenom }}</p>
        <p style="white-space: pre">Texte : {{ formData.txt }}</p>

        <p>Checkboxes :</p>
        <ul>
          <li v-for="(fruit, index) in formData.checkFruits" :key="index">{{ fruit }}</li>
        </ul>
      </div>

    </form>

  </div>
</template>

<script>
  export default {
    name: "Contenu",
    data() {
      return {
        formData: {
          prenom: "",
          txt: "",
          checkFruits: []
        }
      };
    },
    methods: {},
    components: {},
  };
</script>

<style>
  h1 {
    margin-top: 100px !important;
  }
</style>
