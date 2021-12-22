import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Profiles from "../views/Profiles.vue";
import Proxies from "../views/Proxies.vue";
import Inventory from "../views/Inventory.vue"
import Captcha from '../views/Captcha.vue'
import Auth from '../views/Auth.vue'

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth
  },
  {
    path: "/home",
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
    path: "/inventory",
    name: "Inventory",
    component: Inventory
  },
  {
    path: "/captcha",
    name: "Captcha",
    component: Captcha
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
