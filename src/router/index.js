import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import FileUploadForm from '@/pages/FileUploadForm'
import FileDownloadForm from '@/pages/FileDownloadForm'
import Parallax from '@/pages/Parallax'
import Cards from '@/pages/Cards'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/upload-form',
      name: 'FileUploadForm',
      component: FileUploadForm
    },
    {
      path: '/download-form',
      name: 'FileDownloadForm',
      component: FileDownloadForm
    },
    {
      path: '/parallax',
      name: 'Parallax',
      component: Parallax
    },
    {
      path: '/cards',
      name: 'Cards',
      component: Cards
    }
  ]
})
