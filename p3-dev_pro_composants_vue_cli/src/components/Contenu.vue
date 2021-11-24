<template>
  <div class="container mt-5">
      
    <h1>{{ titre }}</h1>

        <div class="btn btn-outline-primary mr-2" @click="componentId = 'texte1'">Onglet 1</div>
        <div class="btn btn-outline-primary" @click="componentId = 'texte2'">Onglet 2</div>

        <div class="onglets card mb-5">
            <!-- Composants dynamiques -->
            <component class="p-5" :is="componentId"></component>
        </div>

        <modale :revele="revele" :toggleModale="toggleModale"></modale>
        <button @click="toggleModale" class="btn btn-success">Ouvre le modale</button>
        
  </div>
</template>

<script>
  import Texte1 from "./Texte1.vue";
  import Texte2 from "./Texte2.vue";
  import Modale from './Modale.vue';

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
        titre: "Je suis le Titre",
        toggle1: true,
        toggle2: false,
        componentId: "texte1",
        revele: false,
      };
    },
    methods: {
      toggleOng1() {
        this.toggle1 = true;
        this.toggle2 = false;
      },
      toggleOng2() {
        this.toggle1 = false;
        this.toggle2 = true;
      },
        toggleModale(){
            this.revele = !this.revele;
        },
    },
    components: {
      "texte1": Texte1,
      "texte2": Texte2,
      "modale": Modale
    },
  };
</script>

<style>
  h1 {
    margin-top: 100px !important;
  }

  .onglets{
      height: 300px;
  }
</style>
