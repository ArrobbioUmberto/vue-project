<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import CustomFooter from "../components/CustomFooter.vue";
export default {
  components: {
    Header,
    Footer,
    CustomFooter,
  },
 
};
</script>
<template>
  <Header :showCustomFooter="showCustomFooter" />
  <main>
    <router-view />
  </main>
  <component v-if="$route.meta.showCustomFooter" :is="CustomFooter" />
  <Footer v-else />
</template>

<style lang="scss" scoped></style>
