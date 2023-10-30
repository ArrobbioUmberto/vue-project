<script>
export default {
  data() {
    return {
      hero: [
        {
          title: "promo mese",
          img: "/img/hero1.jpeg",
        },
        {
          title: "evento",
          img: "/img/evento.jpeg",
        },
        {
          title: "youtube",
          img: "/img/hero3.jpeg",
        },
        {
          title: "catalogo",
          img: "/img/catalogo_hero.jpeg",
        },
      ],
      currentIndex: 0,
      intervallo: 12000,
      intervalloAutoPlay: null,
    };
  },
  methods: {
    prevSlide() {
      //   console.log(this.currentIndex, "prima del prev");
      if (this.currentIndex === 0) {
        this.currentIndex = this.hero.length - 1;
        // console.log(this.currentIndex, "dopo del prev");
      } else {
        this.currentIndex--;
      }
    },
    nextSlide() {
      //   console.log(this.currentIndex, "prima del next");
      if (this.currentIndex === this.hero.length - 1) {
        this.currentIndex = 0;
        // console.log(this.currentIndex, "dopo del next");
      } else {
        this.currentIndex++;
      }
    },
    play: function () {
      this.intervalloAutoPlay = setInterval(this.nextSlide, this.intervallo);
    },
  },
  mounted() {
    this.play();
  },
};
</script>
<template>
  <div class="hero">
    <div
      class="slider-wrapper"
      :class="{ active: index === this.currentIndex }"
      v-for="(item, index) in hero"
      :key="index"
    >
      <img :src="item.img" :alt="item.title" />
    </div>
    <div class="arrows">
      <button class="prev" @click="prevSlide">&lt;</button>
      <button class="next" @click="nextSlide">&gt;</button>
    </div>
  </div>
</template>
<style scoped>
.slider-wrapper {
  display: none;
}
.slider-wrapper.active {
  display: block;
}
.hero {
  position: relative;
}
.hero img {
  width: 100%;
  height: 75vh;
}
.arrows {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.arrows button {
  background: rgba(192, 192, 192, 0.8);
  border: none;
  border-radius: 25px;
  font-size: 2.5rem;
  padding: 4px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.prev {
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(12px, -50%);
}

.next {
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translate(-12px, -50%);
}
</style>
