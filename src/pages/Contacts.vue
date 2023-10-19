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
      <div class="col">col mappa</div>
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
</style>
