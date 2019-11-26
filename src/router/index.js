import Vue from "vue";
import VueRouter from "vue-router";
import Potter from "../views/Potter.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "potter",
    component: Potter
  },
  {
    path: "/swapi",
    name: "swapi",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "swapi" */ "../views/Swapi.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
