import { Home } from "./home";
import { Detail } from "./detail";
export const routes = [...Home, ...Detail];
// if (process.env.NODE_ENV === "development") {
//   routes = require("./router-list/dev-routers").default;
// } else {
//   routes = require("./router-list/prod-routers").default;
// }
