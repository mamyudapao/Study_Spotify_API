import Vue from "vue";
import VueRouter from "vue-router";
import NowPlaying from "../views/NowPlaying";

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'NowPlaying',
  component: NowPlaying,
  props: (route) => {
    return {
      routeParams: route.query
    }
  }
}];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
