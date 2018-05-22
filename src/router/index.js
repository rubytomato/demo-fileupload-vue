import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FileUploadForm from '@/components/FileUploadForm'
import FileDownloadForm from '@/components/FileDownloadForm'

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
    }
  ]
})
