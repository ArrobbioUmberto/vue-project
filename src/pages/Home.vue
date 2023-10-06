<script>
import Featured from "../components/Featured.vue";
import Hero from "../components/Hero.vue";
import Presentation from "../components/Presentation.vue";

export default {
  components: {
    Hero,
    Featured,
    Presentation,
  },
};
</script>
<template>
  <Hero />
  <Featured />
  <Presentation />
</template>
<style scoped></style>
