<template>
  <div class="bloc-modale" v-if="revele">
    <div @click="toggleModale" class="overlay"></div>

    <div class="modale card">
      <button class="btn-modale btn btn-danger btn-sm" @click="toggleModale">X</button>
      <h2>Le contenu du modale</h2>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: "Modale",
    props: ["revele", "toggleModale"],
  };
</script>

<style scoped>
  .bloc-modale {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .modale {
    background: #f1f1f1;
    color: #333;
    padding: 50px;
    position: fixed;
  }

  .btn-modale {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
