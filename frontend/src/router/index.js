import Vue from 'vue'
import Router from 'vue-router'
import AddQuestion from '@/components/AddQuestion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddQuestion',
      component: AddQuestion
    }
  ]
})
