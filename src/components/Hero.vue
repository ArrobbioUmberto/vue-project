<script>
export default {
  data() {
    return {
      hero: [
        {
          title: "promo mese",
          img: "/img/map.webp",
        },
        {
          title: "evento",
          img: "/img/logoSGR.png",
        },
        {
          title: "youtube",
          img: "/img/map.webp",
        },
        {
          title: "ultimo arrivo",
          img: "/img/logoSGR.png",
        },
      ],
      currentIndex: 0,
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
  flex-shrink: 0;
  width: 100vw;
  height: 50vh;
}
.arrows {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.arrows button {
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.prev {
  margin-right: 10px;
}

.next {
  margin-left: 10px;
}
</style>
