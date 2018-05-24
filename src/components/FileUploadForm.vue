<template>
  <v-content class="upload">
    <slot name="nav"></slot>
    <h1>File Upload</h1>
    <div>
      <form>
        <input type="file" @change="onFileSelected">
        <v-btn depressed color="info" @click.prevent="onUpload">Upload</v-btn>
      </form>
      <div class="progress">
        <p>upload progress</p>
        <v-progress-circular v-bind:value="uploadProgress"></v-progress-circular>
      </div>
    </div>
    <v-alert :value="true" type="success">
      This is a success alert.
    </v-alert>
    <slot name="footer"></slot>
  </v-content>
</template>

<script>
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.SITE_URL,
  timeout: 10000
})

export default {
  name: 'FileUploadForm',
  data () {
    return {
      selectedFile: null,
      uploadProgress: 0
    }
  },
  methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
    },
    onUpload () {
      const fd = new FormData()
      fd.append('file', this.selectedFile, this.selectedFile.name)
      instance.post('/upload', fd, {
        onUploadProgress: (uploadEvent) => {
          const progress = Math.round(uploadEvent.loaded / uploadEvent.total * 100)
          this.uploadProgress = progress
        }
      })
        .then(res => {
          // this.uploadProgress = 'upload completed'
        })
        .catch(err => {
          console.error(err)
          // this.uploadProgress = 'upload error'
        })
    }
  }
}
</script>
