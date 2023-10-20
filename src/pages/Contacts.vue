<script></script>
<template>
  <div class="container">
    <div class="row p-4">
      <div class="col d-flex flex-column">
        <h1 class="text-capitalize">contattaci</h1>
        <form class="form_contacts">
          <label for="">nome</label>
          <input type="text" />
          <label for="">email</label>
          <input type="email" />
          <label for="">telefono</label>
          <input type="tel" />
          <label for="">oggetto</label>
          <input type="text" />
          <label for="">messaggio</label>
          <textarea rows="5" cols="40" />
          <button>invia</button>
        </form>
      </div>
      <div class="col map_box">
        <div class="row flex-column">
          <div class="map col">
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
          <div class="sedi col">
            <div class="bologna">
              <div class="d-flex">
                <img src="/icon/point_map.png" alt="point-of-view" />
                <h1>bologna</h1>
              </div>
              <div class="d-flex">
                <img src="/icon/building.png" alt="building" />
                <div>
                  <p>Via Armaroli, 10/12</p>
                  <p>40012 Calderara di Reno(BO)</p>
                </div>
              </div>
              <p>
                <i class="fa-solid fa-phone-volume"></i>
                <a href="tel:(+39) 051722557">+39 051722557</a>
              </p>
              <p>
                <i class="fa-solid fa-fax"></i>
                <a href="tel:(+39) 051.720376">+39 051720376</a>
              </p>
              <p>
                <i class="fa-solid fa-envelope-open-text"></i>
                <a href="mailto:info@sgr-it.com">info@sgr-it.com</a>
              </p>
            </div>
            <div class="milano">
              <div class="d-flex">
                <img src="/icon/point_map.png" alt="point-of-view" />
                <h1>milano</h1>
              </div>
              <div class="d-flex">
                <img src="/icon/building.png" alt="building" />
                <div>
                  <p>Via P. Sottocorno, 52</p>
                  <p>20129 Milano</p>
                </div>
              </div>
              <p>
                <i class="fa-solid fa-phone-volume"></i>
                <a href="tel:(+39) 027382368">+39 027382368</a>
              </p>
              <p>
                <i class="fa-solid fa-phone-volume"></i>
                <a href="tel:(+39) 0276110273">+39 0276110273</a>
              </p>
              <p>
                <i class="fa-solid fa-fax"></i>
                <a href="tel:(+39) 0270106598">+39 0270106598</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.form_contacts {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-family: "Chakra Petch", sans-serif;
}
.form_contacts label {
  text-transform: capitalize;
  font-size: 1.3rem;
  margin: 0.5rem;
}
.form_contacts button {
  margin-top: 2rem;
  text-transform: capitalize;
  max-width: fit-content;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1.3rem;
  align-self: center;
  background-color: rgb(207, 50, 19);
  color: white;
}
.form_contacts input,
.form_contacts textarea {
  border-radius: 5px;
  line-height: 2rem;
  border: 1px solid black;
  padding: 5px;
}
.map_box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  font-family: "Chakra Petch", sans-serif;
}
.map iframe {
  width: 100%;
  height: 300px;
  border-radius: 15px;
}
.sedi {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
}
.sedi i {
  font-size: 2rem;
  margin-right: 1rem;
}
.bologna img,
.milano img {
  width: 50px;
  height: 50px;
  margin-right: 1rem;
}
.bologna a,
.milano a {
  color: black;
}
.bologna h1,
.milano h1 {
  text-transform: capitalize;
}
.sedi p {
  margin: 0;
  padding-bottom: 5px;
}
</style>
