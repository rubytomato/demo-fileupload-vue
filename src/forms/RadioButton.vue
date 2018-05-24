<template>
  <div>
    <p><small>{{ label }}</small></p>
    <label v-for="(item, index) in items" v-bind:key="index">
      <input type="radio" v-bind:value="item.value" v-bind:checked="item.value === value" v-on="listeners" v-bind="$attrs" v-bind:class="addClass">
      <span>{{ item.key }}</span>
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'RadioButton',
  model: {
    prop: 'value'
  },
  props: {
    'value': {
      type: String,
      required: true
    },
    'items': {
      type: Array,
      required: true
    },
    'label': {
      type: String,
      required: true
    },
    'addClass': {
      type: String
    }
  },
  mounted () {
    console.log('RadioButton.mounted value: ' + this.value)
  },
  updated () {
  },
  methods: {
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        change: event => {
          this.$emit('input', event.target.value)
        }
      }
    }
  }
}
</script>
