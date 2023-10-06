<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
  data() {
    return {
      ambition: [
        {
          id: 1,
          img: "/img/disponibilità2.jpg",
          title: "Disponibilità",
          subtitle: "Bla Bla Bla",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, corporis! Explicabo adipisci vero quam minus cupiditate consequatur esse a pariatur!Soluta hic tempore vitae dolorem id doloremque deserunt laborum at.Laborum deserunt culpa maiores laudantium.Mollitia minima eum quidem cum!",
        },
        {
          id: 2,
          img: "/img/disponibilità.jpg",
          title: "Tracking Spedizione",
          subtitle: "Bla Bla Bla",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, corporis! Explicabo adipisci vero quam minus cupiditate consequatur esse a pariatur!Soluta hic tempore vitae dolorem id doloremque deserunt laborum at.Laborum deserunt culpa maiores laudantium.Mollitia minima eum quidem cum!",
        },
        {
          id: 3,
          img: "/img/consegne.jpg",
          title: "Mole di consegna giornaliera",
          subtitle: "Bla Bla Bla",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, corporis! Explicabo adipisci vero quam minus cupiditate consequatur esse a pariatur!Soluta hic tempore vitae dolorem id doloremque deserunt laborum at.Laborum deserunt culpa maiores laudantium.Mollitia minima eum quidem cum!",
        },
        {
          id: 4,
          img: "/img/brands.jpeg",
          title: "Oltre 60 brand",
          subtitle: "Bla Bla Bla",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, corporis! Explicabo adipisci vero quam minus cupiditate consequatur esse a pariatur!Soluta hic tempore vitae dolorem id doloremque deserunt laborum at.Laborum deserunt culpa maiores laudantium.Mollitia minima eum quidem cum!",
        },
        {
          id: 5,
          img: "/img/logoSGR.png",
          title: "N.1 in Italia distributore ricambi moto",
          subtitle: "Bla Bla Bla",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, corporis! Explicabo adipisci vero quam minus cupiditate consequatur esse a pariatur!Soluta hic tempore vitae dolorem id doloremque deserunt laborum at.Laborum deserunt culpa maiores laudantium.Mollitia minima eum quidem cum!",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="presentation">
    <div class="container p-5 sizing-cm">
      <swiper
        :cssMode="true"
        :keyboard="true"
        :mouseWheel="true"
        :spaceBetween="30"
        :navigation="true"
        :slidesPerView="1"
        :autoplay="{
          delay: 10000,
          disableOnInteraction: false,
        }"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          class="slider-cm"
          v-for="item in ambition"
          :key="item.index"
          ><img :src="item.img" :alt="item.title" />
          <div class="text">
            <h1>{{ item.title }}</h1>
            <h3>{{ item.subtitle }}</h3>
            <p>{{ item.description }}</p>
          </div></swiper-slide
        >
      </swiper>
    </div>
  </div>
</template>
<style scoped>
.presentation {
  background-color: black;
}
.sizing-cm {
  height: 800px;
}
.slider-cm img {
  width: 100%;
  height: 100%;
}
.mySwiper {
  position: relative;
  border-radius: 25px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  height: 100%;
}

.text {
  position: absolute;
  bottom: 0;
  right: 0;
  color: black;
  padding: 20px 40px;
  background-color: rgba(255, 255, 255, 0.4);
  text-align: end;
}
.swiper-slide {
  height: unset;
}
</style>
