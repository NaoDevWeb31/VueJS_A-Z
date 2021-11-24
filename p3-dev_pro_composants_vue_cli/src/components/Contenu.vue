<template>
  <div>
    <p>
      {{ txt }}
    </p>
    <!-- Prop "personne" dans le composant enfant "Liste" -->
    <liste :infosFruits="infosFruits[1].saison"> </liste>
  </div>
</template>

<script>
  import Liste from "./Liste/Liste.vue";

  export default {
    name: "Contenu",
    data() {
      return {
        txt: "Je suis le contenu",
        infosFruits: [
          { saison: "Décembre - Avril", type: "Agrume" },
          { saison: "Octobre - Décembre", type: "Baie" },
          { saison: "Avril - Juin", type: "Fruit rouge" },
        ],
      };
    },
    components: {
      liste: Liste,
    },
  };
</script>

<style></style>
