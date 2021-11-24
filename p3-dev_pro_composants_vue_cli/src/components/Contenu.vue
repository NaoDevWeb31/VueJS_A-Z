<template>
  <div class="container mt-5">
    <h1>Appel à une API</h1>

    <div class="mt-4 mx-auto">
      <img :src="urlImg" alt="Image de chat" class="img-thumbnail" />
    </div>

  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Contenu",
    data() {
      return {
        urlImg: null,
      };
    },
    mounted() {
      this.getCatImg();
      this.updateImage();
    },
    methods: {
      getCatImg() {
        axios
          .get("https://api.thecatapi.com/v1/images/search")
          .then((response) => {
            this.urlImg = response.data[0].url;
          });
      },
      updateImage() {
        var newImage = new Image();
        if (newImage.complete) {
          newImage.src = this.urlImg;
          this.urlImg = newImage.src = this.getCatImg();
        }
        setTimeout(this.updateImage, 10000);
      },
    },
    components: {},
  };
</script>

<style>
  h1 {
    margin-top: 100px !important;
  }
</style>
