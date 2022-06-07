import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { microOptions } from "./qiankun-app";
import { initGlobalState, registerMicroApps, start } from "qiankun";

import "ant-design-vue/dist/antd.css";

createApp(App).use(store).use(router).mount("#app");

// 注册微应用，接受两个参数，1.必选微应用注册信息 2.和可选的微应用生命周期钩子 https://qiankun.umijs.org/zh/api
registerMicroApps(microOptions, {});

start();
