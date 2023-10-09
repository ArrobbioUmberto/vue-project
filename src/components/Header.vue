<script>
export default {
  data() {
    return {
      showBrands: true,
      currentLetter: "A",
      brands: [
        {
          firstLetter: "",
          title: "100%",
        },
        {
          firstLetter: "A",
          title: "acebikes",
        },
        {
          firstLetter: "B",
          title: "bando",
        },
        {
          firstLetter: "C",
          title: "cl brakes",
        },
        {
          firstLetter: "D",
          title: "did",
        },
        {
          firstLetter: "E",
          title: "energy safe",
        },
        {
          firstLetter: "F",
          title: "flosser",
        },
        {
          firstLetter: "G",
          title: "gryyp",
        },
        {
          firstLetter: "H",
          title: "hert",
        },
        {
          firstLetter: "K",
          title: "kellermann",
        },
        {
          firstLetter: "M",
          title: "michelin",
        },
        {
          firstLetter: "N",
          title: "nachi",
        },
        {
          firstLetter: "O",
          title: "optimate",
        },
        {
          firstLetter: "P",
          title: "pirelli",
        },
        {
          firstLetter: "R",
          title: "rapid",
        },
        {
          firstLetter: "S",
          title: "sbs",
        },
        {
          firstLetter: "T",
          title: "topline",
        },
        {
          firstLetter: "U",
          title: "uclear",
        },
        {
          firstLetter: "V",
          title: "vesrah",
        },
        {
          firstLetter: "W",
          title: "wd-40",
        },
        {
          firstLetter: "X",
          title: "xena",
        },
        {
          firstLetter: "Y",
          title: "yuasa",
        },
        {
          firstLetter: "Z",
          title: "zadi",
        },
      ],
    };
  },
  name: "Header",
  props: {
    showCustomFooter: Boolean, // Passa la meta-proprietà showCustomFooter come prop
  },
  methods: {
    toggleDropdown() {
      this.showBrands = !this.showBrands;
    },
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
            <li><a href="/">home</a></li>
            <li><a href="/catalogs">cataloghi</a></li>
            <li @click="toggleDropdown">
              Brands
              <div class="wrap" :class="{ hidden: showBrands }">
                <ul>
                  <li class="parent-window d-flex flex-nowrap">
                    <ul class="row list-index col-4">
                      <li>
                        <ul>
                          <li><h1>indice</h1></li>
                          <li v-for="item in brands">
                            <span @click="selectLetter">{{
                              item.firstLetter
                            }}</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <ul class="row list-logo col-8">
                      <li>
                        <ul>
                          <li><h1>brands</h1></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li><a href="/search">ricerca</a></li>
            <li class="dropdown-mc">
              chi siamo
              <div class="dropdown-content">
                <a href="/history">storia</a>
                <a href="/news">news</a>
              </div>
            </li>
            <!-- (dropdown, chi siamo e news) -->
            <li><a href="/contacts">contatti</a></li>
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
/* SEZIONE DROPDOWN DEI BRANDS  */
header {
  position: relative;
}
.hidden {
  display: none;
}
.wrap {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 999999;
  height: 400px;
  background-color: yellow;
}
/* SEZIONE DEL DROPDOWN BRAND  */
.parent-window {
  position: absolute;
  width: 100%;
  height: 100%;
}
.list-index {
  display: flex;
}
.list-brand {
  display: flex;
}
.header_box {
  display: flex;
  align-items: center;
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
