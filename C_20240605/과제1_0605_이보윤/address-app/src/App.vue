<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/components/MainPage.vue";
import CreatePage from "@/components/CreatePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "MainPage", component: MainPage },
    { path: "/create", name: "CreatePage", component: CreatePage },
  ],
});

export default {
  name: "App",
  router,
};
</script>

<style>
/* 스타일 작성 */
</style>
