<template>
  <div>
    <ul class="liste">
      <li v-for="(fruit, index) in fruits" v-bind:key="index">
        <span>
          {{ fruit }}
        </span>
      </li>
    </ul>
    <!-- Valeur de la prop dans l'élément parent "Contenu" -->
    <p>{{ infosFruits }}</p>
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
    props: ["infosFruits"],
  };
</script>

<style scoped src="./Liste.css"></style>
