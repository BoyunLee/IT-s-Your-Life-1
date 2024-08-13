import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
} from "vue-router";

import MainPage from "@/components/MainPage.vue";
import CreatePage from "@/components/CreatePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "MainPage", component: MainPage },
    { path: "/create", name: "CreatePage", component: CreatePage },
  ],
});

export default router;
