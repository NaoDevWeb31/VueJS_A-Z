<template>
  <div class="container mt-5">
    <!-- Utilisation des props du composant enfant "Liste" -->
    <liste :myArr="myArr" :txt="txt"></liste>
    <!-- Référence au même tableau "myArr" = valeur de référence => suppression dans les 2 tableaux -->
    <!-- "txt" = valeur primitive => suppression du "txt" sélectionné uniquement -->
    <liste :myArr="myArr" :txt="txt"></liste>
  </div>
</template>

<script>
  import Liste from "./Liste/Liste.vue";

  export default {
    name: "Contenu",
    data() {
      return {
        myArr: [
          { titre: "Inception", date: 2010 },
          { titre: "Avatar", date: 2009 },
          { titre: "Seven", date: 1995 },
        ],
        txt: "Hello World",
      };
    },
    components: {
      liste: Liste,
    },
  };
</script>

<style></style>
