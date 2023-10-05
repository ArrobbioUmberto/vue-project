<script>
export default {
  name: "Header",
  props: {
    showCustomFooter: Boolean, // Passa la meta-proprietà showCustomFooter come prop
  },
};
</script>
<template>
  <header>
    <div class="container p-2">
      <div class="row header_box">
        <div class="col-3">
          <router-link to="/">
            <img src="/img/logoSGR.png" alt="logo"
          /></router-link>
        </div>
        <nav class="col-7 nav_box">
          <ul class="navigation">
            <li><router-link to="/">home</router-link></li>
            <li>categorie</li>
            <!--(dropdown,con varie famiglie di prodotti)-->
            <li><router-link to="/search">ricerca</router-link></li>
            <li class="dropdown-mc">
              chi siamo
              <div class="dropdown-content">
                <router-link to="/history">storia</router-link>
                <router-link to="/news">news</router-link>
              </div>
            </li>
            <!-- (dropdown, chi siamo e news) -->
            <li><router-link to="/contacts">contatti</router-link></li>
          </ul>
        </nav>
        <div class="col-2 login_box">
          <button>Login</button>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap"); */

.header_box {
  display: flex;
  align-items: baseline;
  justify-content: center;
}
.col-3 img {
  width: 100%;
  height: 100%;
}
/* SECTION OF NAVIGATION AND NAV BOX  */
.nav_box {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.navigation {
  /* font-family: "Dela Gothic One", cursive; */
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.navigation li {
  font-size: 1.2rem;
  text-transform: capitalize;
}
.navigation li:hover,
.navigation a:hover {
  color: red;
  cursor: pointer;
}
.navigation a {
  color: black;
}
/* SEZIONE DEL DROPDOWN  */
.dropdown-mc {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: min-content;
  border-radius: 25px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px;
  z-index: 1;
}
.dropdown-content a {
  color: black;
  transform: scale(1);
  margin-right: 5px;
}

.dropdown-mc:hover .dropdown-content {
  display: flex;
  flex-direction: column;
}
/* LOGIN SECTION  */

.login_box button {
  border-radius: 25px;
  border: none;
  padding: 10px 20px;
}
.login_box button:hover {
  background-color: blue;
  transform: scale(1.2);
  color: white;
}
</style>
