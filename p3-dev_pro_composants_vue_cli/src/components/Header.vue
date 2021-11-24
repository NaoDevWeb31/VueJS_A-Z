<template>
  <header class="header-top">
    <p>{{ titre }}</p>
  </header>
</template>

<script>
  import { bus } from "@/main";

  export default {
    name: "Header",
    data() {
      return {
        titre: "Mon titre de base",
      };
    },
    created() {
      // Données transmises de Liste.vue à Header.vue via le bus déclaré dans main.js
      bus.$on("changeTitre", (data) => {
        this.titre = data;
      });
    },
  };
</script>

<style scoped>
  .header-top {
    position: fixed;
    top: 0;
    height: 50px;
    background: #333;
    color: #f1f1f1;
    width: 100%;
    text-align: center;
    line-height: 50px;
    font-size: 25px;
  }
</style>
