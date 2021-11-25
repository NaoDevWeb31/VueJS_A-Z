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

      <h2 class="h3 mt-3">Select Box</h2>

      <div class="form-group">
        <select v-model="formData.select" class="form-control">
          <option v-for="(pays, index) in formData.listePays" :key="index">{{ pays }}</option>
        </select>
      </div>

      <h2 class="h3 mt-3">CheckBoxes</h2>

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


      <h2 class="card-header border mt-3">Résultats</h2>

      <div class="card-body border p-3">
        <p>Prénom : {{ formData.prenom }}</p>
        <p style="white-space: pre">Texte : {{ formData.txt }}</p>

        <p>Checkboxes :</p>
        <ul>
          <li v-for="(fruit, index) in formData.checkFruits" :key="index">{{ fruit }}</li>
        </ul>

        <p>Choix du select : {{ formData.select }}</p>
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
          checkFruits: [],
          select: "",
          listePays: ["Russie", "Japon", "Canada", "Mexique"]
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
