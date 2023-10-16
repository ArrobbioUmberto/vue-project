<script>
export default {
  data() {
    return {
      news: [
        {
          title:
            "SGR APRE LA COLLABORAZIONE CON ANDREA DOVIZIOSO E 04 PARK - MONTE CORALLI",
          text: "Nel corso dei 70 anni di esperienza della nostra azienda, abbiamo sviluppato molte partnership con piloti e realtà appartenenti alle più importanti competizioni motoristiche internazionali. Siamo felici di annunciare un’ulteriore collaborazione che entusiasmerà gli appassiona...",
          img: "/img/cross1.jpeg",
          data: "10 / 10 / 2023",
        },
        {
          title:
            "SGR RINNOVA LA COLLABORAZIONE CON IL CAMPIONE DI MOTOCROSS ANDREA DOVIZIOSO",
          text: "SGR è orgogliosa di annunciare il rinnovo della collaborazione con il campione di motocross Andrea Dovizioso. Dopo anni di successi con il nostro team, siamo entusiasti di continuare questa partnership di successo.",
          img: "/img/cross2.jpeg",
          data: "15/02/2023",
        },
        {
          title:
            "04 PARK E ANDREA DOVIZIOSO SI PREPARANO PER LA NUOVA STAGIONE DI CORSE",
          text: "04 Park è emozionata di lavorare a stretto contatto con il talentuoso pilota Andrea Dovizioso per la prossima stagione di corse. Siamo pronti a raggiungere nuovi traguardi insieme.",
          img: "/img/la-sede.jpeg",
          data: "20/01/2023",
        },
        {
          title:
            "04 PARK E ANDREA DOVIZIOSO SI PREPARANO PER LA NUOVA STAGIONE DI CORSE",
          text: "04 Park è emozionata di lavorare a stretto contatto con il talentuoso pilota Andrea Dovizioso per la prossima stagione di corse. Siamo pronti a raggiungere nuovi traguardi insieme.",
          img: "/img/prodotto1.jpeg",
          data: "02/01/2023",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="wrapper">
    <div class="container">
      <div class="row live">
        <div class="col"><h1 class="live_title">live streaming</h1></div>
        <div class="col video">
          <img src="/youtube-video.png" alt=" frame video" />
        </div>
      </div>
    </div>
    <div class="container -">
      <div class="row news">
        <div class="col"><h1 class="news_title">news</h1></div>
        <div class="col box_news_items">
          <div class="news_item" v-for="item in news">
            <div class="img_box col-4">
              <img :src="item.img" alt="item.title" />
            </div>
            <div class="description_box col-8">
              <h2>{{ item.title }}</h2>
              <p>{{ item.text }}</p>
              <p class="data">{{ item.data }}</p>
              <button>Leggi l'articolo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(11, 39, 95, 1) 98%,
    rgba(255, 255, 255, 1) 100%
  );
}
.live {
  display: flex;
  flex-direction: column;
  font-family: "Chakra Petch", sans-serif;
}
.live .col {
  display: flex;
  justify-content: center;
  align-items: center;
}
.live_title {
  font-family: "Tourney", cursive;
  color: rgb(207, 50, 18);
  margin-top: 2rem;
  text-transform: capitalize;
  font-size: 2.5rem;
  padding: 20px;
}
.video {
  box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 45px 0px;

  border-radius: 15px;
}
.live img {
  padding: 10%;
  width: 70%;
}

/* SEZIONE DELLE NEWS  */

.news {
  display: flex;
  flex-direction: column;
  font-family: "Chakra Petch", sans-serif;
}
.news .col {
  display: flex;
  justify-content: center;
  align-items: center;
}
.news_title {
  text-transform: capitalize;
  font-size: 4rem;
  padding: 20px;
  margin-top: 2rem;
  color: rgb(207, 50, 18);
}
.box_news_items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
}
.news_item {
  display: flex;
  background-color: rgba(255, 255, 255, 0.93);
  border-radius: 15px;
}
.img_box img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
.description_box {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
}
.description_box h2 {
  font-size: 2.3rem;
  font-weight: bold;
}
.description_box .data {
  margin-left: 1rem;
}
.description_box button {
  border: none;
  border-radius: 15px;
  max-width: fit-content;
  align-self: center;
  padding: 1rem;
  color: white;
  background-color: rgb(207, 50, 18);
}
</style>
