<template>
  <label>
    <small>{{ label }}</small>
    <input type="text" v-bind:value="value" v-on="listeners" v-bind="$attrs" style="width: 98%; font-size: 1.4em;" v-bind:class="addClass">
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'TextInput',
  props: {
    'value': {
      type: String,
      required: true
    },
    'label': {
      type: String
    },
    'addClass': {
      type: String
    }
  },
  mounted () {
    console.log('TextInput.mounted value: ' + this.value)
  },
  updated () {
  },
  methods: {
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => {
          this.$emit('input', event.target.value)
        }
      }
    }
  }
}
</script>

<style scoped>
input[type="text"]:focus {
  outline: 0;
}
</style>
