import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FileUploadForm from '@/components/FileUploadForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/form',
      name: 'FileUploadForm',
      component: FileUploadForm
    }
  ]
})
