<template>
  <div>
    <h1>
      {{ txt }}
    </h1>
    <!-- Utilisation des props du composant enfant "Liste" -->
    <liste
      :prenom="prenom"
      :infosFruits="infosFruits"
      :presentation="presentation"
    ></liste>
  </div>
</template>

<script>
  import Liste from "./Liste/Liste.vue";

  export default {
    name: "Contenu",
    data() {
      return {
        txt: "Je suis le contenu",
        prenom: "Naomi",
        infosFruits: [
          { saison: "Décembre - Avril", type: "Agrume" },
          { saison: "Octobre - Décembre", type: "Baie" },
          { saison: "Avril - Juin", type: "Fruit rouge" },
        ],
        presentation: function () {
          console.log("Hello depuis le Parent !");
        },
      };
    },
    components: {
      liste: Liste,
    },
  };
</script>

<style></style>
