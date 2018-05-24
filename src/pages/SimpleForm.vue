<template>
  <v-content class="simple-form page">
    <slot name="nav"></slot>
    <h1 class="display-1 ma-2">Simple Form</h1>
    <v-container grid-list-xl text-xs-center>
      <form>
        <v-layout row wrap>
          <v-flex xs3>
            <v-card dark color="blue lighten-1" class="pa-1">
              <label>name</label>
            </v-card>
          </v-flex>
          <v-flex xs8 text-xs-left>
            <v-card class="pa-1">
              <text-input v-model="form.name" label="name" addClass="ma-1" />
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs3>
            <v-card dark color="blue lighten-1" class="pa-1">
              <label>email</label>
            </v-card>
          </v-flex>
          <v-flex xs8 text-xs-left>
            <v-card class="pa-1">
              <text-input v-model="form.email" label="email" addClass="ma-1" />
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs3>
            <v-card dark color="blue lighten-1" class="pa-1">
              <label>address</label>
            </v-card>
          </v-flex>
          <v-flex xs8 text-xs-left>
            <v-card class="pa-1">
              <!-- <input type="text" v-model="form.address" placeholder="address" style="width: 100%;"> -->
              <!--
                <input type="text" v-bind:value="text" v-on:input="$emit('input', $event.target.value)" >
              -->
              <text-input v-model="form.address" label="address" addClass="ma-1" />
            </v-card>
          </v-flex>
        </v-layout>
        <!-- RADIO -->
        <v-layout row wrap>
          <v-flex xs3>
            <v-card dark color="blue lighten-1" class="pa-1">
              <label>fruit</label>
            </v-card>
          </v-flex>
          <v-flex xs8 text-xs-left>
            <v-card class="pa-1">
              <radio-button v-model="form.fruit" v-bind:items="fruits" label="fruit" addClass="ma-1" />
            </v-card>
          </v-flex>
        </v-layout>
        <!-- Single CHECKBOX -->
        <!-- Multi CHECKBOX -->
        <v-layout row wrap>
          <v-flex xs3>
            <v-card dark color="blue lighten-1" class="pa-1">
              <label>soup</label>
            </v-card>
          </v-flex>
          <v-flex xs8 text-xs-left>
            <v-card class="pa-1">
              <multi-checkbox v-model="form.soups" v-bind:items="soups" label="soup" addClass="ma-1" />
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs2 offset-xs3>
            <v-btn depressed color="info" v-on:click="onSubmit">Submit</v-btn>
          </v-flex>
          <v-flex xs2 offset-xs1>
            <v-btn depressed color="success" v-on:click="onClear">Clear</v-btn>
          </v-flex>
        </v-layout>
      </form>
    </v-container>
    <v-container grid-list-xl text-xs-left>
      <v-layout row>
        <v-flex xs12>
          <p>name: {{ form.name }}</p>
          <p>email: {{ form.email }}</p>
          <p>address: {{ form.address }}</p>
          <p>fruit: {{ form.fruit }}</p>
          <p>soups: {{ form.soups }}</p>
        </v-flex>
      </v-layout>
    </v-container>
    <slot name="footer"></slot>
  </v-content>
</template>

<script>
import TextInput from '@/forms/TextInput'
import RadioButton from '@/forms/RadioButton'
import MultiCheckbox from '@/forms/MultiCheckbox'
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.SITE_URL,
  timeout: 30000
})

export default {
  name: 'SimpleForm',
  components: {
    'text-input': TextInput,
    'radio-button': RadioButton,
    'multi-checkbox': MultiCheckbox
  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        address: '',
        fruit: '',
        soups: []
      },
      fruits: [
        {key: 'APPLE', value: 'apple'},
        {key: 'BANANA', value: 'banana'},
        {key: 'CHERRY', value: 'cherry'},
        {key: 'DURIAN', value: 'durian'},
        {key: 'ELDERBERRY', value: 'elderberry'}
      ],
      soups: [
        'Ajiaco', 'Bakso', 'Callaloo', 'Dalithoy', 'Etrog', 'Fanesca'
      ]
    }
  },
  methods: {
    onSubmit (event) {
      console.log('onSubmit', event)
      console.log(this.form)
    },
    onClear (event) {
      console.log('onClear: ', event)
      this.form.name = ''
      this.form.email = ''
      this.form.address = ''
      this.form.fruit = ''
      this.form.soups = []
    },
    notice () {
      console.log(instance)
    }
  }
}
</script>
