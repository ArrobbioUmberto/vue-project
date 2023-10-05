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
  data() {
    return {
      showCustomFooter: false, // Imposta il valore predefinito a false
    };
  },
};
</script>
<template>
  <Header :showCustomFooter="showCustomFooter" />
  <main>
    <router-view />
  </main>
  <CustomFooter v-if="$route.meta.showCustomFooter" />
  <Footer v-else />
</template>

<style lang="scss" scoped></style>
