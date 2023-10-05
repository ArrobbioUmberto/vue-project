import Home from "../pages/Home.vue";
import Products from "../pages/Products.vue";
import Default from "../layouts/Default.vue";
import Contacts from "../pages/Contacts.vue";
import History from "../pages/History.vue";
import News from "../pages/News.vue";
import Search from "../pages/Search.vue";
import AgentSearch from "../pages/AgentSearch.vue";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Default, // Utilizza il layout predefinito
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "/products",
          component: Products,
        },
        {
          path: "/contacts",
          component: Contacts,
        },
        {
          path: "/history",
          component: History,
        },
        {
          path: "/news",
          component: News,
        },
        {
          path: "/search",
          component: Search,
        },
        {
          path: "/agent",
          component: AgentSearch,
          meta: {
            showCustomFooter: true,
          },
        },
      ],
    },
  ],
});

export { router };
