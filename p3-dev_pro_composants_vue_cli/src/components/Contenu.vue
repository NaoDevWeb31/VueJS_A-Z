<template>
  <div class="container mt-5">
    <h1>Rentrez des choses à faire.</h1>

    <form>
      <div class="form-group">
        <label for="action">Action</label>
        <input
          v-model="formData.tache"
          type="text"
          id="action"
          class="form-control"
          placeholder="Tâche..."
        />
      </div>

      <button @click.prevent="creationItem" class="btn btn-primary mb-3">
        Créer une tâche
      </button>
    </form>

    <ul class="list-group list-group-flush">
      <li
        v-for="(tache, index) in tableauTaches"
        :key="index"
        class="list-group-item"
      >
        <item
          :tache="tache"
          :id="index"
          :suppression="suppression"
        ></item>
      </li>
    </ul>
  </div>
</template>

<script>
  import Item from "./Item.vue";

  export default {
    name: "Contenu",
    data() {
      return {
        formData: {
          tache: "",
        },
        tableauTaches: ["JavaScript", "Vue", "Python", "React"],
      };
    },
    components: {
      item: Item,
    },
    methods: {
      creationItem() {
        this.tableauTaches.push(this.formData.tache);
        this.formData.tache = "";
      },
      suppression(e) {
        console.log("id " + e.target.parentNode.id + " : " +  e.target.previousSibling.textContent + " ➤ Supprimé avec succès !");
        this.tableauTaches.splice(e.target.parentNode.id, 1);
      },
    },
  };
</script>

<style>
  h1 {
    margin-top: 100px !important;
  }
</style>
