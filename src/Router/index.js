import { createWebHistory, createRouter } from "vue-router";

import TheWelcome from "@/components/TheWelcome.vue";

import Login from "@/components/Login.vue";

import List from "@/components/List.vue";
import Create from "@/components/Create.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Login,
  },
  {
    path: "/welcome",
    name: "",
    component: List,
  },
  {
    path: "/create",
    name: "",
    component: Create,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
