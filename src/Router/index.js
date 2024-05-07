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
    meta: { requiresAuth: true },
  },
  {
    path: "/create",
    name: "",
    component: Create,
    meta: { requiresAuth: true },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("token")) {
      next({ name: "Home" });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
