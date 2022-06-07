import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Service from "../views/serve/index.vue";
import About from "../views/about/index.vue";
import Home from "../views/home/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [],
  },
  {
    path: "/service",
    name: "service",
    component: Service,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

console.log(process.env.BASE_URL);

const router = createRouter({
  history: createWebHistory(
    (window as Window & typeof globalThis & { __POWERED_BY_QIANKUN__: string })
      .__POWERED_BY_QIANKUN__
      ? "/reactapp"
      : "" + process.env.BASE_URL
  ),
  routes,
});

export default router;
