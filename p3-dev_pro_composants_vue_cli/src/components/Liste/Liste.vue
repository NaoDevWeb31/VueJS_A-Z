<template>
  <div>
    <div class="row">
      <section class="col">
        <h2>Fruits</h2>
        <ul class="liste">
          <li
            v-for="(fruit, index) in fruits"
            v-bind:key="index"
          >
            <span>
              {{ fruit }}
            </span>
          </li>
        </ul>
      </section>
      <section class="col">
        <h2>Types</h2>
        <ul>
          <!-- Utiliser la prop "infosFruits" dans le composant enfant -->
          <li
            v-for="(infoFruit, i) in infosFruits"
            :key="i"
          >
            {{ infoFruit.type }}
          </li>
        </ul>
      </section>
    </div>

    <div class="row">
      <!-- Valeur de la prop transmise dans le composant parent "Contenu" -->
      <p class="col">{{ prenom }}</p>
      <!-- Utiliser la prop "prenom" dans le composant enfant -->
      <p class="col-6">{{ reversing() }}</p>
      <p class="col-6">{{ presentation() }}</p>
    </div>
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
    props: {
      prenom: { type: String, required: true },
      infosFruits: { type: Array },
      presentation: { type: Function },
    },
    methods: {
      reversing: function () {
        return this.prenom.split("").reverse().join("");
      },
    },
  };
</script>

<style scoped src="./Liste.css"></style>
