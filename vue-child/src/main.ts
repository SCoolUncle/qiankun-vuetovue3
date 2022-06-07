import { createApp, App as AppType, ComponentPublicInstance } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

let instance: ComponentPublicInstance;
let app: AppType;
function render(props: any) {
  const { container } = props;
  app = createApp(App);
  instance = app
    .use(store)
    .use(router)
    .mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行单独渲染
if (
  !(window as Window & typeof globalThis & { __POWERED_BY_QIANKUN__: string })
    .__POWERED_BY_QIANKUN__
) {
  console.log("独立运行");
  render({});
}

export async function bootstrap() {
  console.log("-----------bootstrap---------");
}

export async function mount(props: any) {
  render(props);
  console.log("----------mount---------");
  console.log(props);
}

export async function unmount() {
  console.log("-----------unmount---------");
  app.unmount();
}
