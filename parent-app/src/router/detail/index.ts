import { RouteRecordRaw } from "vue-router";
export const Detail: Array<RouteRecordRaw> = [
  {
    path: "/detail",
    name: "detail",
    meta: {
      // icon: 'logo-yen',
      title: "详情",
      showAlways: true,
      access: ["root", "admin"],
    },
    component: () => import("@/views/detail/index.vue"),
  },
];
