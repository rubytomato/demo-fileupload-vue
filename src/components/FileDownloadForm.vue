<template>
  <div class="download">
    <img src="@/assets/logo.png">
    <slot name="nav"></slot>
    <h1>File Download</h1>
    <div>
      <form>
        <input type="text" @change="onFileSelected">
        <button @click.prevent="onDownload">Download</button>
      </form>
      <div class="images">
        <p>image list</p>
        <p v-for="(img, index) in imageList" v-bind:key="index">
          <img v-bind:src="img">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.SITE_URL,
  timeout: 10000
})

export default {
  name: 'FileDownloadForm',
  data () {
    return {
      selectedFile: null,
      imageList: []
    }
  },
  methods: {
    onFileSelected (event) {
      console.log(event)
      this.selectedFile = event.target.value
    },
    onDownload () {
      instance.get(`/download?file=${this.selectedFile}`)
        .then(res => {
          console.log(res)
          return new Promise((resolve, reject) => {
            if (res.status === 200 && res.data.url) {
              resolve(res.data.url)
            } else {
              reject(new Error('SignedUrl not found'))
            }
          })
        })
        .then(res => {
          console.log(res)
          this.imageList.push(res)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>
