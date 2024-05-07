import { createWebHistory, createRouter } from "vue-router";

import TheWelcome from "@/components/TheWelcome.vue";

import Login from "@/components/Login.vue";

import List from "@/components/List.vue";
import Create from "@/components/Create.vue";
import Register from "@/components/Register.vue";

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
  {
    path: "/register",
    name: "",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
