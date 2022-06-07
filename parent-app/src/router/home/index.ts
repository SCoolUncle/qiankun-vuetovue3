import { RouteRecordRaw } from "vue-router";
export const Home: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: {
      // icon: 'logo-yen',
      title: "首页",
      showAlways: true,
      access: ["root", "admin"],
    },
    component: () => import("@/views/home/index.vue"),
  },
];
