import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import FitnessTracker from '../views/FitnessTracker.vue';
import Login from '../views/Login.vue';
import {CurrentUser} from '../models/Users';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home, meta: {isSecret: true} },
  { path: '/fitnesstracker', name: 'Fitness Tracker', component: FitnessTracker, meta: {isSecret: true} },
  { path: '/login', name: 'Login', component: Login },
  { path: '/logout', name: 'Logout', meta: {CurrentUser: null} },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach( (to, from, next) => {
  if(to.meta.isSecret && !CurrentUser) next('/about');
  else next();
});


export default router;
