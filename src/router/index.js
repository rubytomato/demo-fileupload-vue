import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FileUploadForm from '@/components/FileUploadForm'
import FileDownloadForm from '@/components/FileDownloadForm'
import Parallax from '@/components/Parallax'
import Cards from '@/components/Cards'

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
