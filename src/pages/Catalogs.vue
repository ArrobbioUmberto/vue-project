<script>
export default {
  data() {
    return {
      catalogs: [
        {
          title: " catalogo 1",
          anno_pubblicazione: "2020",
          image: "/catalogs/cat-accessori-23.jpeg",
        },
        {
          title: " catalogo 2",
          anno_pubblicazione: "2024",
          image: "/catalogs/accessori-24.jpeg",
        },
        {
          title: " catalogo 3",
          anno_pubblicazione: "2023",
          image: "/catalogs/cat-allballs.jpeg",
        },
        {
          title: " catalogo 4",
          anno_pubblicazione: "2021",
          image: "/catalogs/cat-catene-corone.jpeg",
        },
        {
          title: " catalogo 5",
          anno_pubblicazione: "2023",
          image: "/catalogs/cat-hert.jpeg",
        },
        {
          title: " catalogo 6",
          anno_pubblicazione: "2023",
          image: "/catalogs/cat-lub-23.jpeg",
        },
        {
          title: " catalogo 7",
          anno_pubblicazione: "2019",
          image: "/catalogs/cat-miw-2023.jpeg",
        },
        {
          title: " catalogo 8",
          anno_pubblicazione: "2021",
          image: "/catalogs/sp-connect.jpeg",
        },
        {
          title: " catalogo 9",
          anno_pubblicazione: "2023",
          image: "/catalogs/cat-accessori-23.jpeg",
        },
        {
          title: " catalogo 10",
          anno_pubblicazione: "2024",
          image: "/catalogs/accessori-24.jpeg",
        },
        {
          title: " catalogo 11",
          anno_pubblicazione: "2023",
          image: "/catalogs/cat-allballs.jpeg",
        },
        {
          title: " catalogo 12",
          anno_pubblicazione: "2021",
          image: "/catalogs/cat-catene-corone.jpeg",
        },
        {
          title: " catalogo 13",
          anno_pubblicazione: "2023",
          image: "/catalogs/cat-hert.jpeg",
        },
        {
          title: " catalogo 14",
          anno_pubblicazione: "2023",
          image: "/catalogs/cat-lub-23.jpeg",
        },
        {
          title: " catalogo 15",
          anno_pubblicazione: "2023",
          image: "/catalogs/cat-miw-2023.jpeg",
        },
        {
          title: " catalogo 16",
          anno_pubblicazione: "2021",
          image: "/catalogs/sp-connect.jpeg",
        },
      ],
      selectedCatalogs: {},
      currentPage: 1,
      catalogsPerPage: 8,
      selectedYear: null,
      filteredCatalogs: [],
    };
  },
  methods: {
    getPageCatalogs() {
      const startIndex = (this.currentPage - 1) * this.catalogsPerPage;
      const endIndex = startIndex + this.catalogsPerPage;
      return this.filteredCatalogs.slice(startIndex, endIndex);
    },
    filterCatalogsByYear(year) {
      this.selectedYear = year;
      this.currentPage = 1;
      if (this.selectedYear) {
        this.filteredCatalogs = this.catalogs.filter(
          (catalog) => catalog.anno_pubblicazione === this.selectedYear
        );
      } else {
        this.filteredCatalogs = this.catalogs;
      }
    },
  },
  created() {
    this.filteredCatalogs = [...this.catalogs];
  },
};
</script>
<template>
  <div class="container-cm">
    <h1 class="title_section">Cataloghi</h1>
    <div class="row">
      <div class="selector_year">
        <button @click="filterCatalogsByYear(null)">tutti</button
        ><button @click="filterCatalogsByYear('2024')">2024</button
        ><button @click="filterCatalogsByYear('2023')">2023</button
        ><button @click="filterCatalogsByYear('2021')">2021</button
        ><button @click="filterCatalogsByYear('2020')">2020</button
        ><button @click="filterCatalogsByYear('2019')">2019</button>
      </div>
    </div>
    <div class="catalogs">
      <div class="catalogs_item" v-for="item in getPageCatalogs()">
        <div class="box_img">
          <img :src="item.image" :alt="item.title" />
        </div>
        <div class="description_box">
          <h3>{{ item.title }}</h3>
          <p>anno di pubblicazione {{ item.anno_pubblicazione }}</p>
          <button>download</button>
        </div>
      </div>
    </div>
    <div class="pagination_controls">
      <button @click="currentPage -= 1" :disabled="currentPage === 1">
        Precedente
      </button>
      <button
        @click="currentPage += 1"
        :disabled="currentPage * catalogsPerPage >= filteredCatalogs.length"
      >
        Successivo
      </button>
    </div>
  </div>
</template>
<style scoped>
.container-cm {
  margin: 20px auto;
  max-width: 1000px;
  font-family: "Chakra Petch", sans-serif;
}
.title_section {
  font-size: 4.5rem;
}

/* SEZIONE DEI SELETTORI ANNI  */
.selector_year {
  margin: 1rem auto;
  max-width: 80%;
  display: flex;
  justify-content: space-around;
}
.selector_year button {
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  border-radius: 15px;
  font-size: 1.2rem;
  border: none;
  color: white;
  background-color: rgba(13, 38, 94, 0.8);
}
.selector_year button:hover {
  background-color: rgb(207, 50, 19);
  transform: scale(1.1);
}

/* SEZIONE DEI CATALOGHI */
.catalogs {
  display: flex;
  flex-wrap: wrap;
  gap: 20px 10px;
}
.catalogs_item {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% / 4) - 10px);
}
.box_img img {
  width: 100%;
}
.description_box {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  padding: 5px;
}
.description_box h3 {
  text-transform: capitalize;
}
.description_box button {
  max-width: fit-content;
  border-radius: 15px;
  padding: 3px 5px;
  text-transform: capitalize;
  box-shadow: 0px 0px 10px 0px #ffffff;

  color: white;
  align-self: center;
  background-color: rgb(207, 50, 19);
}

/* SEZIONE DEI BOTTONI PER INDICIZZARE  */

.pagination_controls {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 10px;
}
.pagination_controls button {
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 15px;
}
</style>
