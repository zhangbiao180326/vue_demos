import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import directives from '@/components/directives'
import didatabind from '@/components/didatabind'
import eventdeal from '@/components/eventdeal'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/dire',
    name: 'directives',
    component: directives
  },
  {
    path: '/did',
    name: 'didatabind',
    component: didatabind
  },
  {
    path: '/eve',
    name: 'eventdeal',
    component: eventdeal
  }
  ]
})
