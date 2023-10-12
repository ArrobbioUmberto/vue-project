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
      // Visualizza solo le immagini che non corrispondono all'immagine ingrandita
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
      <div class="col-6 img_box">
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
        <div class="text-center indice">
          {{ product.currentIndex + 1 }} di {{ product.productImages.length }}
        </div>
      </div>
      <div class="col-6 d-flex align-items-center flex-column">
        <div class="row">
          <div class="col"><h1 class="product_name">nome prodotto</h1></div>
        </div>
        <div class="row justify-content-around">
          <div class="pills text">
            <span
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <h3 class="code_text">codice sgr:</h3>
              <p class="detail_code">123456</p>
            </span>
          </div>
          <div class="pills price">
            <span
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <h3 class="price_text">consigliato al pubblico*</h3>
              <p class="detail_price">&euro; 19,99</p>
            </span>
          </div>
          <div class="col">
            <p class="iva_text">
              *tutti i prezzi sono da considerare IVA esclusa
            </p>
          </div>
        </div>
        <div class="row C">
          <div class="col">descrizione</div>
        </div>
        <div class="row D"><div class="col">barcode</div></div>
        <div class="row E"><div class="col">categoria->accessori</div></div>
      </div>
    </div>
    <div class="row B">prodotti correlati</div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,400;0,500;1,400;1,500&display=swap");
.A {
  background-color: yellow;
}
.B {
  background-color: red;
}
.C {
  background-color: blue;
}
.D {
  background-color: green;
}
.E {
  background-color: cornflowerblue;
}
.indice {
  font-size: 1.4rem;
  font-weight: 500;
  font-family: "Chakra Petch", sans-serif;
}
.gallery {
  margin: 0 auto;
  width: 100%;
  overflow-x: auto;
}
.gallery img {
  width: calc((100% / 3) - 30px);
  margin: 15px;
  background-color: transparent;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  border-radius: 15px;
}

/* SEZIONE COLONNA DI DESTRA CON DETTAGLI PRODOTTO E CODICI  */
.product_name {
  text-transform: uppercase;
  padding: 20px;
  font-weight: bold;
  font-family: "Chakra Petch", sans-serif;
}

.iva_text {
  margin-top: 10px;
  font-size: 0.6rem;
}
.code_text,
.price_text {
  font-size: 1.3rem;
  text-transform: uppercase;
  margin-bottom: 0;
}
.price_text {
  white-space: nowrap;
}
.pills {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  flex-basis: calc((100% / 2) - 10px);
  gap: 10px;
  border-radius: 25px;
  padding: 10px;
  color: white;
  font-family: "Chakra Petch", sans-serif;
}
.price {
  background-color: rgb(0, 40, 94);
}
.text {
  background-color: rgb(216, 52, 0);
}
.detail_price,
.detail_code {
  font-size: 2rem;
  font-weight: bold;
}
</style>
