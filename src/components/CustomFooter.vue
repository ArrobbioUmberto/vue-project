<script>
export default {
  name: "CustomFooter",
};
</script>
<template>
  <footer>
    <div class="container">
      <div class="row footer_up">
        <div class="col-6">
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
        <div class="col-3">
          <ul class="list_info">
            <li class="list_title">informazioni</li>
            <li><a href="/privacy">privacy</a></li>
            <li><a href="/cookies">cookies policy</a></li>
            <li>
              <a href="/sell-conditions">condizioni di vendita</a>
            </li>
            <li><a href="/contacts">contatti</a></li>
          </ul>
          <ul class="list_info">
            <li class="list_title">link rapidi</li>
            <li><a href="/account">account</a></li>
            <li><a href="/shopping-cart">carrello</a></li>
            <li><a href="/orders">ordini</a></li>
          </ul>
        </div>
      </div>
      <div class="row footer_down">
        <div class="col-4">
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
}
/* SECTION FOOTER UP  */
.footer_up {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
}
/* SEZIONE CAPITALE SOCIALE E DETTAGLI  */

.list_detail li:first-child {
  font-size: 1rem;
  font-weight: bold;
  font-family: "Dela Gothic One", cursive;
}
.title_society_detail {
  font-weight: 800;
}
.society_detail {
  font-weight: 300;
  margin-left: 10px;
}
h4 img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
/* SEZIONE LINK UTILI  */

.list_title {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  font-family: "Dela Gothic One", cursive;
}
ul li {
  text-transform: capitalize;
  margin-bottom: 5px;
}
ul a:hover {
  color: red;
  text-decoration: underline;
}

/* SECTION FOOTER DOWN  */
.footer_down {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

/* SECTION SOCIAL  */
.social {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
}
.social img {
  width: 80%;
  height: 100%;
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
