import { createWebHistory, createRouter } from "vue-router";
import SearchPageVue from "./components/SearchPage.vue";
import ResultPageVue from "./components/ResultPage.vue";
import ItemPageVue from "./components/Item/ItemPage.vue";
import UnitPageVue from "./components/Unit/UnitPage.vue";
import DeckPageVue from "./components/Deck/DeckPage.vue";

const routes = [
  {
    path: "/",
    component: SearchPageVue,
  },
  {
    path: "/result/:name",
    component: ResultPageVue,
  },
  {
    path: "/stats/items",
    component: ItemPageVue,
  },
  {
    path: "/stats/units",
    component: UnitPageVue,
  },
  {
    path: "/deck",
    component: DeckPageVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
