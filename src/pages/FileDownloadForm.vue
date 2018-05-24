<template>
  <v-content class="download page">
    <slot name="nav"></slot>
    <h1 class="display-1 ma-2">File Download</h1>
    <v-container fluid>
      <v-layout row>
        <v-flex xs3 offset-xs3>
          <v-text-field
            id="file-name"
            name="file-name"
            label="Download File Name"
            @change="onFileSelected"></v-text-field>
        </v-flex>
        <v-flex xs3 offset-xs1>
          <v-btn depressed color="info" @click.prevent="onDownload">Download</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs9 offset-xs3>
          <v-subheader>Image list</v-subheader>
          <p v-for="(img, index) in imageList" v-bind:key="index">
            <img v-bind:src="img">
          </p>
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
      this.selectedFile = event
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
