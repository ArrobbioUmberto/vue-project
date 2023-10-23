<script>
import VueMagnifier from "@websitebeaver/vue-magnifier";
import "@websitebeaver/vue-magnifier/styles.css";
export default {
  components: {
    VueMagnifier,
  },
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
      related_product: [
        {
          img: "/img/prodotto.png",
          title:
            "OCCHIALI DA SOLE 100% KONNOR - MATTE TRANSLUCENT BROWN FADE - LENTI HIPER A SPECCHIO ARGENTO",
          price: 19.99,
          priority: true,
        },
        {
          img: "/img/prodotto1.jpeg",
          title: "GUANTI DONNA FIVE WFX DISTRICT WP BLACK (M)",
          price: 19.99,
          priority: true,
        },
        {
          img: "/img/prodotto2.jpeg",
          title:
            "SP UNIVERSAL PHONE CLAMP MAX SPC+ - PORTACELLULARE UNIVERSALE A MORSETTO MAX SPC+",
          price: 19.99,
          priority: true,
        },
        {
          img: "/img/cross1.jpeg",
          title: "CAVALLETTO POSTERIORE TOPLINE CON ATTACCO A V",
          price: 19.99,
          priority: true,
        },
        {
          img: "/img/cross2.jpeg",
          title: "CARICABATTERIE ENERGYSAFE 6V/12V PREMIUM14",
          price: 19.99,
          priority: true,
        },
      ],
    };
  },

  computed: {
    imageStyle() {
      const numImages = this.product.productImages.length - 1;
      const widthCSS = `calc((100% / ${numImages}) - 30px)`;
      return {
        width: widthCSS,
      };
    },
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
            <VueMagnifier
              :src="selectedImage"
              height="100%"
              mgWidth="250"
              mgHeight="250"
              zoomFactor= 0.7
            />
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
                  :style="imageStyle"
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
      <div class="col-6 detail_box">
        <div class="row">
          <div class="col">
            <h1 class="product_name">
              tyrefix basic - set di fissaggio per ruota posteriori
            </h1>
          </div>
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
        <div class="row">
          <div class="col">
            <h2 class="description_title">descrizione:</h2>
            <p class="description_text">
              Le cinghie Tyrefix sono la soluzione migliore per fissare la ruota
              posteriore della tua moto. Assicura un fissaggio sicuro ed una
              protezione totale e grazie al suo materiale flessibile e
              resistente si adatta ad ogni tipo di pneumatico.
            </p>
            <h3 class="subtitle_detail">Caratteristiche principali:</h3>
            <ul>
              <li>Facile e veloce da installare</li>
              <li>Speciale materiale di attrito</li>
              <li>
                Include una solida borsa dotata di comoda maniglia per il
                trasporto
              </li>
            </ul>
            <h3 class="subtitle_detail">Dettagli tecnici</h3>
            <ul>
              <li>Materiale: poliestere</li>
              <li>Lunghezza cinghie: 65 cm</li>
              <li>Peso netto: 2,1 kg</li>
              <li>Dimensioni (LxPxA): 40x23x6 cm</li>
            </ul>
          </div>
        </div>
        <div class="row w-100">
          <div class="col d-flex align-items-center p-0 barcode">
            <h2>barcode:</h2>
            <img src="/barcode2.png" alt="codebar" />
          </div>
        </div>
        <div class="row w-100">
          <div class="col category p-0">
            <h2>categoria:</h2>
            <span>accessori</span>
            <span> > cavalletti</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container p-5">
    <div class="row flex-column text-center">
      <div class="col">
        <h3 class="title">anche questo potrebbe interessare</h3>
      </div>
      <div class="col wrapper">
        <div v-for="item in related_product" class="card">
          <img :src="item.img" :alt="item.title" />
          <h1>{{ item.title }}</h1>
          <p>{{ item.price }} &euro;</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");
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
}
.gallery img {
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
  position: relative;
  display: inline-block;
}
.bigImage img {
  padding: 20px;
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

/* SEZIONE COLONNA DI DESTRA CON DETTAGLI PRODOTTO E CODICI  */
.detail_box {
  font-family: "Chakra Petch", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product_name {
  text-transform: uppercase;
  padding: 20px;
  font-weight: bold;
  font-size: 2.2rem;
}

.iva_text {
  margin-top: 10px;
  font-size: 0.6rem;
  text-align: end;
  margin-right: 10px;
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

/* SEZIONE CON I PRODOTTI CORRELATI  */
.title {
  padding: 20px;
  font-family: "Chakra Petch", sans-serif;
  text-transform: uppercase;
  font-size: 2.3rem;
  font-weight: 600;
}
.wrapper {
  display: flex;
  gap: 20px;
  margin: 20px auto;
}
.card {
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% / 5) - 20px);
  font-weight: bold;
  cursor: pointer;
}
.card:hover {
  transform: scale(1.1);
}
.card img {
  width: 100%;
  height: 250px;
  padding: 10px;
  border-radius: 15px;
}
.card h1 {
  font-size: 0.8rem;
  text-transform: uppercase;
  text-align: center;
  padding: 5px;
}
.card p {
  margin-top: auto;
}

/* SEZIONE CON DETTAGLI PRODOTTO  */

/* SEZIONE DESCRIZIONE  */
.description_text {
  font-size: 1rem;
  font-family: "Chakra Petch", sans-serif;
}
.description_title {
  font-family: "Chakra Petch", sans-serif;
  text-transform: capitalize;
  font-weight: bold;
}
.subtitle_detail {
  margin-top: 0.7rem;
}
/* SEZIONE BARCODE  */
.barcode h2 {
  text-transform: capitalize;
  font-weight: bold;
}
.barcode img {
  margin-left: 25%;
}

/* SEZIONE CATEGORIA E ACCESSORI  */
.category h2 {
  text-transform: capitalize;
  font-weight: bold;
}
.category span {
  text-transform: uppercase;
  font-family: "Chakra Petch", sans-serif;
}

/* LENTE DI INGRANDIMENTO  */
</style>
