<script></script>
<template>
  <div class="container">
    <div class="row history">
      <div class="col"><h1>la nostra storia</h1></div>
      <div class="col text-story">
        <img src="/public/img/la-sede.jpeg" alt="la sede" />
        <p>
          La Società Generale Ricambi (Europa) p.A. nasce nel 1953 da un'idea
          dei fratelli Alberto e Franco Saporetti. L'azienda si è imposta
          rapidamente come leader nella distribuzione in Italia di ricambi e
          accessori per il settore motociclistico. A partire dal 1985, abbiamo
          acquisito importanti realtà europee come Euromoto in Spagna, Moraco in
          Francia e Langenscheidt in Germania. Contemporaneamente all'espansione
          della rete di distribuzione, abbiamo acquisito anche aziende di
          produzione per ampliare la gamma di articoli offerti. SGR mette al
          centro la continua ricerca e selezione di prodotti di qualità: ad
          oggi, proponiamo e commercializziamo più di 25.000 referenze. La mole
          di articoli e ordini da gestire ogni giorno ha reso necessaria
          l'implementazione, dal 2013, di un magazzino automatizzato. Questo
          vero e proprio asset aziendale è sia un vantaggio strategico sia un
          esempio particolarmente apprezzato di innovazione tecnologica sul
          territorio. Per semplificare le interazioni con i clienti e garantire
          un servizio di eccellenza, abbiamo creato un portale altamente
          informativo in grado di ricevere e trasmettere gli ordini in tempo
          reale. La rete di agenti su tutto il territorio italiano si aggiunge
          agli strumenti digitali per supportare i clienti nella scelta dei
          prodotti più adatti alle loro necessità. SGR è una presenza costante
          su riviste di settore e ad eventi per il mondo delle due ruote. Un
          reparto dedicato alla comunicazione si occupa di coordinare le uscite
          pubblicitarie e i redazionali per presentare le ultime novità del
          mercato. I clienti sono particolarmente attivi sia sul sito web
          aziendale sia nelle interazioni con le newsletter. Oggi Società
          Generale Ricambi (Europa) p.A mantiene la leadership nella
          distribuzione di ricambi e accessori moto grazie a un'attenta
          selezione dei migliori brand del settore e a un servizio attento al
          minimo dettaglio.
        </p>
      </div>
      <div class="col group">
        <h2>il nostro gruppo</h2>
        <div class="group-logo">
          <img src="/public/moraco.png" alt="moraco" />
          <img src="/public/langensheidt.png" alt="langenscheidt" />
          <img src="/public/euromoto.jpeg" alt="euromoto" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.history {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto;
  font-family: "Chakra Petch", sans-serif;
}
.history h1 {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  color: rgb(207, 50, 18);
}
.text-story {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 2rem;
  font-weight: 500;
}
.text-story p {
  text-align: center;
  line-height: 2rem;
}
.text-story img {
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.group {
  text-align: center;
  text-transform: uppercase;
  color: rgb(207, 50, 18);
}
.group h2 {
  font-weight: bold;
}
.group-logo {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 1rem;
}
.group-logo img {
  border-radius: 15px;
  padding: 10px;
}
</style>
