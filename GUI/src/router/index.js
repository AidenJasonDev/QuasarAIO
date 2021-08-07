import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Profiles from "../views/Profiles.vue";
import Proxies from "../views/Proxies.vue";
import Settings from "../views/Settings.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profiles",
    name: "Profiles",
    component: Profiles,
  },
  {
    path: "/proxies",
    name: "Proxies",
    component: Proxies,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
