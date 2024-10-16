import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/Home/Home.vue";
import ResultsPage from "../pages/Results/Results.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/results/:origem/:destino/:dataIda/:dataVolta/:adultos",
    name: "Results",
    component: ResultsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
