import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
} from "vue-router";

import CreatePage from "@/components/CreatePage.vue";
import MainPage from "@/components/MainPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "MainPage", component: MainPage },
    { path: "/create", name: "CreatePage", component: CreatePage },
  ],
});

export default router;
