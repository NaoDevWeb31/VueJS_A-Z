<template>
  <div>
    <section>
      <h2>Liste de Fruits</h2>
      <ul class="liste">
        <li v-for="(fruit, index) in fruits" v-bind:key="index">
          <span>
            {{ fruit }}
          </span>
        </li>
      </ul>
    </section>
    <section>
      <h2>Type</h2>
      <ul>
        <!-- Utiliser la prop "infosFruits" dans le composant enfant -->
        <li v-for="(infoFruit, i) in infosFruits" :key="i">
          {{ infoFruit.type }}
        </li>
      </ul>
    </section>
    <!-- Valeur de la prop transmise dans le composant parent "Contenu" -->
    <p>{{ prenom }}</p>
    <!-- Utiliser la prop "prenom" dans le composant enfant -->
    <p>{{ reversing() }}</p>
  </div>
</template>

<script>
  export default {
    name: "Liste",
    data() {
      return {
        fruits: ["Orange", "Papaye", "Fraise"],
      };
    },
    props: ["prenom", "infosFruits"],
    methods: {
      reversing: function () {
        return this.prenom.split("").reverse().join("");
      },
    },
  };
</script>

<style scoped src="./Liste.css"></style>
