<script>
export default {
  data() {
    return {
      showBrands: true,
      currentLetter: "A",
      selectedBrands: [
        {
          firstLetter: "A",
          logo: [
            {
              title: "acebikes",
              img: "./logo/acebikes.jpeg",
            },
            {
              title: "afam",
              img: "./logo/afam.jpeg",
            },
            {
              title: "all balls",
              img: "./logo/allballs.jpeg",
            },
            {
              title: "ansell",
              img: "./logo/ansell.jpeg",
            },
          ],
        },
      ],
      brands: [
        {
          firstLetter: "123",
          logo: [
            {
              title: "100%",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "A",
          logo: [
            {
              title: "acebikes",
              img: "./logo/acebikes.jpeg",
            },
            {
              title: "afam",
              img: "./logo/afam.jpeg",
            },
            {
              title: "all balls",
              img: "./logo/allballs.jpeg",
            },
            {
              title: "ansell",
              img: "./logo/ansell.jpeg",
            },
          ],
        },
        {
          firstLetter: "B",
          logo: [
            {
              title: "bando",
              img: "./logo/bando.jpeg",
            },
            {
              title: "bardahl",
              img: "./logo/bardahl.jpeg",
            },
            {
              title: "belray",
              img: "./logo/belray.jpeg",
            },
            {
              title: "beru",
              img: "./logo/beru.jpeg",
            },
            {
              title: "byterd",
              img: "./logo/byterd.jpeg",
            },
          ],
        },
        {
          firstLetter: "C",
          logo: [
            {
              title: "circuit",
              img: "./logo/circuit.jpeg",
            },
            {
              title: "clbrakes",
              img: "./logo/clbrakes.jpeg",
            },
          ],
        },
        {
          firstLetter: "D",
          logo: [
            {
              title: "denso",
              img: "./logo/denso.jpeg",
            },
            {
              title: "did",
              img: "./logo/did.jpeg",
            },
            {
              title: "dit",
              img: "./logo/dit.jpeg",
            },
            {
              title: "ducati",
              img: "./logo/ducati.jpeg",
            },
            {
              title: "duracell",
              img: "./logo/duracell.jpeg",
            },
            {
              title: "dze",
              img: "./logo/dze.jpeg",
            },
          ],
        },
        {
          firstLetter: "E",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "F",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "G",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "H",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "K",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "M",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "N",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "O",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "P",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "R",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "S",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "T",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "U",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "V",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "W",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "X",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "Y",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
        {
          firstLetter: "Z",
          logo: [
            {
              title: "bando",
              img: "./logo/logo.jpeg",
            },
          ],
        },
      ],
    };
  },
  name: "Header",
  props: {
    showCustomFooter: Boolean, // Passa la meta-proprietà showCustomFooter come prop
  },
  methods: {
    preventDropdownClose(event) {
      event.stopPropagation();
    },
    toggleDropdown() {
      this.showBrands = !this.showBrands;
    },
    selectLetter(letter) {
      console.log(letter);
      (this.currentLetter = letter),
        (this.selectedBrands = this.brands.filter(
          (product) => product.firstLetter === letter
        ));
      console.log(this.selectedBrands[0].logo);
    },
  },
};
</script>
<template>
  <header>
    <div class="container p-2">
      <div class="row header_box">
        <div class="col-3">
          <a href="/"> <img src="/img/logoSGR.png" alt="logo" /></a>
        </div>
        <nav class="col-7 nav_box">
          <ul class="navigation">
            <li><a href="/">home</a></li>
            <li><a href="/catalogs">cataloghi</a></li>
            <li @click="toggleDropdown">
              Brands
              <div
                class="wrap"
                :class="{ hidden: showBrands }"
                @click="preventDropdownClose"
              >
                <ul>
                  <li class="parent-window d-flex flex-nowrap align-items-center">
                    <ul class="row list-index col-4">
                      <li
                        class="d-flex justify-content-center align-items-center"
                      >
                        <ul class="d-flex flex-column gy-5">
                          <li class="list-letters">
                            <span
                              v-for="item in brands"
                              class="letter"
                              @click="selectLetter(item.firstLetter)"
                              >{{ item.firstLetter }}</span
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <ul class="row list-logo col-8">
                      <li>
                        <ul>
                          <li class="slice-brands">
                            <div
                              class="card-brand"
                              v-for="item in selectedBrands[0].logo"
                            >
                              <img
                                class="logo-brand"
                                :src="item.img"
                                :alt="item.title"
                              />
                              <h3 class="text-center">{{ item.title }}</h3>
                            </div>
                          </li>
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
.header_box {
  display: flex;
  align-items: center;
  justify-content: center;
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
  background-color: white;
  border: 1px solid black;
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
.list-logo {
  display: flex;
}
.list-letters {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 10px;
}
.letter {
  flex-basis: 15%;
  text-align: center;
  border-radius: 25px;
  background-color: rgba(128, 128, 128, 0.8);
  padding: 10px 0;
  width: min-content;
  color: white;
}
.letter:hover {
  background-color: rgba(0, 0, 255, 0.8);
  cursor: pointer;
}
.slice-brands {
  display: flex;
  flex-wrap: wrap;
  column-gap: 25px;
  padding-left: 10px;
}
.logo-brand {
  width: 150px;
  height: 150px;
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
