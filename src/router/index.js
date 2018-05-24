import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import FileUploadForm from '@/pages/FileUploadForm'
import FileDownloadForm from '@/pages/FileDownloadForm'
import Parallax from '@/pages/Parallax'
import Cards from '@/pages/Cards'
import SimpleForm from '@/pages/SimpleForm'

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
      path: '/simple-form',
      name: 'SimpleForm',
      component: SimpleForm
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
