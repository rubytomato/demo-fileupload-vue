<template>
  <v-content class="upload page">
    <slot name="nav"></slot>
    <h1 class="display-1 ma-2">File Upload</h1>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <form>
            <input type="file" v-on:change="onFileSelected">
            <v-btn depressed color="info" v-on:click.prevent="onUpload">Upload</v-btn>
          </form>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-progress-circular :size="100" :width="15" :rotate="180" v-bind:value="uploadProgress" color="pink">{{ uploadProgress }}</v-progress-circular>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-alert :value="uploadCompleted" type="success" v-if="uploadCompleted">
            This is a success alert.
          </v-alert>
        </v-flex>
      </v-layout>
    </v-container>
    <slot name="footer"></slot>
  </v-content>
</template>

<script>
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.SITE_URL,
  timeout: 30000
})

export default {
  name: 'FileUploadForm',
  data () {
    return {
      selectedFile: null,
      uploadProgress: 0,
      uploadCompleted: false
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
          this.uploadCompleted = true
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>
