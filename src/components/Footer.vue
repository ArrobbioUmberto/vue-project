<script>
</script>
<template>
  <footer>
    <div class="container-cm">
      <div class="row footer_up">
        <div class="col-5">
          <ul class="list_detail">
            <li>
              <h3>SOCIETÀ GENERALE RICAMBI (EUROPA) S.P.A.</h3>
            </li>
            <li>
              <h4>Sede Legale:</h4>
              <address>Via Pasquale Sottocorno, 52 - 20129 Milano</address>
            </li>
            <li>
              <h4>Sede di Bologna:</h4>
              <address>
                Via Armaroli, 10/12 40012 Calderara di Reno (BO)
              </address>
              <h4>
                <img src="/icon/telephone.png" alt="phone" />
                <a href="tel:+39 051722557">+39 051722557</a>
              </h4>
              <h4>
                <img src="/icon/fax.png" alt="fax" />
                <a href="tel:(+39) 051.720376">(+39) 051.720376</a>
              </h4>
              <h4>
                <img src="/icon/email.png" alt="email" />
                <a href="mailto:info@sgr-it.com">info@sgr-it.com</a>
              </h4>
            </li>
            <li>
              <span class="title_society_detail">Capitale Sociale:</span>
              <span class="society_detail">€ 1.332.460,00 i.v.</span>
            </li>
            <li>
              <span class="title_society_detail"
                >Codice Fiscale e Partita IVA:</span
              >
              <span class="society_detail">04826180152</span>
            </li>
            <li>
              <span class="title_society_detail"
                >Iscritta nel Registro delle Imprese di Milano:</span
              >
              <span class="society_detail">04826180152</span>
            </li>
            <li>
              <span class="title_society_detail"
                >C.C.I.A.A. Milano n.R.E.A.:</span
              >
              <span class="society_detail">1042173</span>
            </li>
          </ul>
        </div>
        <div class="col-3 d-flex flex-column gap-5">
          <ul class="list_info">
            <li class="list_title">informazioni</li>
            <li><router-link to="/privacy">privacy</router-link></li>
            <li><router-link to="/cookies">cookies policy</router-link></li>
            <li>
              <router-link to="/sell-conditions"
                >condizioni di vendita</router-link
              >
            </li>
          </ul>
          <ul class="list_info">
            <li class="list_title">link rapidi</li>
            <li><router-link to="/account">account</router-link></li>
            <li><router-link to="/shopping-cart">carrello</router-link></li>
            <li><router-link to="/orders">ordini</router-link></li>
          </ul>
        </div>
        <!-- sezione da valutare per utilità lato clienti rispetto alla sezione contatti -->
        <div class="col-4">
          <div class="row map_box">
            <div id="map" class="col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842.5380145726117!2d11.274369476119173!3d44.5655593929471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd19669ef02e3%3A0x7a6c2a73b6b9eff8!2sSociet%C3%A0%20Generale%20Ricambi!5e0!3m2!1sit!2sit!4v1697729155159!5m2!1sit!2sit"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div class="col mt-4">
              <ul class="social">
                <li>
                  <a
                    href="https://www.facebook.com/sgr.italia/?locale=it_IT"
                    target="_blank"
                    ><img src="/icon/facebook.png" alt="facebook.png"
                  /></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/sgr.italia/?hl=it"
                    target="_blank"
                    ><img src="/icon/instagram.png" alt="instagram.png"
                  /></a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/sgr-italia/"
                    target="_blank"
                    ><img src="/icon/linkedin.png" alt="linkedin.png"
                  /></a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@sgr.italia" target="_blank"
                    ><img src="/icon/youtube.png" alt="youtube.png"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row footer_down">
        <div class="col-4 copyright">
          <p>© Copyright 1998-2021 SGR. All Rights Reserved.</p>
          <p>Icons made by monkik from www.flaticon.com</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap");

footer {
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: start;
  font-family: "Chakra Petch", sans-serif;
}
.container-cm {
  max-width: 1248px;
  padding: 0 2%;
}
/* SECTION FOOTER UP  */
.footer_up {
  padding: 20px 0;
}
/* SEZIONE CAPITALE SOCIALE E DETTAGLI  */

.list_detail h3 {
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Chakra Petch", sans-serif;
}
.list_detail h4 {
  font-size: 1.1rem;
  font-weight: bold;
}
.title_society_detail {
  font-weight: 800;
}
.society_detail {
  font-weight: 300;
  margin-left: 10px;
}
h4 img {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
/* SEZIONE LINK UTILI  */

.list_title {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
  font-family: "Chakra Petch", sans-serif;
}
ul li {
  text-transform: capitalize;
  margin-bottom: 5px;
}
ul a:hover {
  color: red;
  text-decoration: underline;
}
/* SEZIONE MAPPA E SOCIAL  */

.social {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 40px;
}
.social img {
  width: 100%;
  height: 100%;
}

/* PARTE DI GOOGLE MAPS  */
/* #map {
  height: 100%;
} */

.map_box {
  padding: 10px 0;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
}
#map iframe {
  width: 100%;
  height: 100%;
  border-radius: 25px;
}
.map_box button {
  padding: 5px 15px;
  border: none;
  border-radius: 25px;
  background-color: red;
  max-width: max-content;
}
.map_box button:hover {
  color: white;
  background-color: blue;
}
.agent_search {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.agent_description {
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 5px;
  font-family: "Dela Gothic One", cursive;
}
/* SECTION FOOTER DOWN  */
.footer_down {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
}

/* SEZIONE COPYRIGHT  */
.copyright {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.copyright p {
  margin: 0;
}
</style>
