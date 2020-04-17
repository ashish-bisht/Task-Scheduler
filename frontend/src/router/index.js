import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TaskList from '../views/TaskList.vue'
import TaskDetail from '../views/TaskDetail.vue'
import TaskCreate from '../views/CreateTask.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/task',
    name: 'task-list',
    component: TaskList
  },

  {
    path: '/task/:id',
    name: 'task-detail',
    component: TaskDetail,
    props: true
  },
  {
    path: '/task/create',
    name: 'task-create',
    component: TaskCreate
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
