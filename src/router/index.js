import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import directives from '@/components/directives'
import didatabind from '@/components/didatabind'
import eventdeal from '@/components/eventdeal'
import styledeno from '@/components/styledeno'
import computedemo from '@/components/computedemo'
import watchdemo from '@/components/watchdemo'
import ajaxdemo from '@/components/ajaxdemo'
import provincedemo from '@/components/provincedemo'
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
  },
  {
    path: '/style',
    name: 'styledeno',
    component: styledeno
  },
  {
    path: '/com',
    name: 'computedemo',
    component: computedemo
  },
  {
    path: '/wat',
    name: 'watchdemo',
    component: watchdemo
  },
  {
    path: '/ajax',
    name: 'ajaxdemo',
    component: ajaxdemo
  },
  {
    path: '/prov',
    name: 'provincedemo',
    component: provincedemo
  }
  ]
})
