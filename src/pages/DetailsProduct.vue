<script>
export default {
  data() {
    return {
      product: {
        productImages: [
          // Elenco delle immagini dei prodotti
          "/img/prodotto1.jpeg",
          "/img/prodotto2.jpeg",
          "/img/prodotto3.jpeg",
          "/img/prodotto4.jpeg",
          "/img/prodotto5.jpeg",
        ],
        currentIndex: 0, // Immagine iniziale selezionata
      },
    };
  },
  computed: {
    selectedImage() {
      return this.product.productImages[this.product.currentIndex];
    },
    visibleProductImages() {
      // Visualizza solo le immagini che non corrispondono all'immagine principale
      return this.product.productImages.filter(
        (image, index) => index !== this.product.currentIndex
      );
    },
  },
  methods: {
    selectImage(index) {
      this.product.currentIndex = index;
    },
    scrollImages(step) {
      this.product.currentIndex =
        (this.product.currentIndex + step + this.product.productImages.length) %
        this.product.productImages.length;
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="row flex-column align-items-center">
          <div class="bigImage">
            <img :src="selectedImage" alt="prodotto-scelto" />
          </div>
          <div class="d-flex align-items-center">
            <div class="arrow left" @click="scrollImages(-1)">&#11157;</div>
            <div class="d-flex">
              <div class="d-flex gallery">
                <img
                  v-for="(image, index) in visibleProductImages"
                  :key="index"
                  :src="image"
                  alt="immagine"
                  @click="selectImage(product.productImages.indexOf(image))"
                />
              </div>
            </div>
            <div class="arrow right" @click="scrollImages(1)">&#11157;</div>
          </div>
        </div>
        <div class="text-center">
          {{ product.currentIndex + 1 }} di {{ product.productImages.length }}
        </div>
      </div>
      <div class="col-6 A">COL DETTAGLI</div>
    </div>
    <div class="row B">prodotti correlati</div>
  </div>
</template>
<style scoped>
.A {
  background-color: yellow;
}
.B {
  background-color: red;
}
.gallery {
  margin: 0 auto;
  width: 100%;
  overflow-x: auto;
}
.gallery img {
  width: calc((100% / 3) - 30px);
  margin: 15px;
}
img {
  max-width: 100%;
  border-radius: 15px;
}
.arrow {
  cursor: pointer;
  font-size: 1.3rem;
  background-color: rgba(128, 128, 128, 0.6);
  color: white;
  border-radius: 25px;
  padding: 5px;
}
.left {
  transform: rotate(180deg);
}
.bigImage {
  width: 100%;
  height: 500px;
}
.bigImage img {
  padding: 20px;
  width: 100%;
  height: 100%;
}
</style>
