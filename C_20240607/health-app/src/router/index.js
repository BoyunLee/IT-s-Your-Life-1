// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import MemberInfo from "../components/MemberInfo.vue";
import PTMemberInfo from "../components/PTMemberInfo.vue";

const routes = [
  { path: "/member-info", component: MemberInfo },
  { path: "/pt-member", component: PTMemberInfo },
  { path: "/", component: MemberInfo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
