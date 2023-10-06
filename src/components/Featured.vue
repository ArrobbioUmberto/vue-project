<script>
export default {
  data() {
    return {
      card: [
        {
          img: "/img/prodotto.png",
          title: "prodotto bello 1",
          priority: true,
        },
        {
          img: "/img/prodotto.png",
          title: "prodotto bello 2",
          priority: true,
        },
        {
          img: "/img/prodotto.png",
          title: "prodotto bello 3",
          priority: false,
        },
        {
          img: "/img/prodotto.png",
          title: "prodotto bello 4",
          priority: true,
        },
        {
          img: "/img/prodotto.png",
          title: "prodotto bello 5",
          priority: true,
        },
        {
          img: "/img/prodotto.png",
          title: "prodotto bello 6",
          priority: true,
        },
        {
          img: "/img/prodotto.png",
          title: "prodotto bello 7",
          priority: true,
        },
        {
          img: "/img/prodotto.png",
          title: "prodotto bello 8",
          priority: true,
        },
      ],
    };
  },
};
</script>
<template>
  <div class="main_bg p-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="featured_title">
            <!-- I Prodotti che i nostri clienti amano -->
            Non perderti queste incredibili promozioni
          </h1>
        </div>
      </div>
      <div class="row cm-slider">
        <div
          class="card card-cm"
          v-for="item in card"
          :class="{ hidden: !item.priority }"
        >
          <img :src="item.img" class="card-img-top" :alt="item.title" />
          <div class="card-body d-flex justify-content-around flex-column">
            <h5 class="card-title text-capitalize">{{ item.title }}</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              perspiciatis. Neque optio provident distinctio voluptatibus
              voluptas aliquid suscipit magni quod!
            </p>
            <div class="details">
              <a href="#" class="btn">Dettaglio prodotto</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row to_promo">
        <button class="btn-promo">Scopri i prodotti in evidenza</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Tourney:ital,wght@1,100;1,300;1,400;1,500;1,600&display=swap");
.main_bg {
  background-image: url("/img/cross1.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}
.cm-slider {
  overflow-x: auto;
  flex-wrap: nowrap !important;
  gap: 20px;
}
.cm-slider img {
  height: 50%;
  aspect-ratio: 1;
  padding: 20px 20px 0;
}
.hidden {
  display: none;
}
.card-cm {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 25px;
  flex-basis: calc((100% / 3) - 20px);
}
.details {
  display: flex;
  justify-content: end;
  align-items: center;
}
.cm-slider a {
  color: blue;
  font-size: 1.3em;
  border: 1px solid;
}
.cm-slider a:hover {
  background-color: blue;
  color: white;
}
.featured_title {
  font-size: 3em;
  padding: 20px 0;
  text-align: center;
  font-family: "Tourney", cursive;
  color: blue;
}
.to_promo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}
.btn-promo {
  width: fit-content;
  border: none;
  background-color: blue;
  color: white;
  border-radius: 15px;
  padding: 10px 20px;
}
.btn-promo:hover {
  background-color: yellow;
  color: black;
}
</style>
