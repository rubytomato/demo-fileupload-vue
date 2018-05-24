<template>
  <div>
    <p><small>{{ label }}</small></p>
    <label v-for="(item, index) in items" v-bind:key="index">
      <input type="checkbox" v-bind:value="item" v-bind:checked="selectedItems.includes(item)" v-model="selectedItems" v-on="listeners" v-bind="$attrs" class="ma-1">
      <span>{{ item }}</span>
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'CheckboxInput',
  model: {
    prop: 'values'
  },
  props: {
    'values': {
      type: Array,
      required: true
    },
    'items': {
      type: Array,
      required: true
    },
    'label': {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selectedItems: this.values || []
    }
  },
  mounted () {
    console.log('CheckboxInput.mounted values: ' + this.values)
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
          this.$emit('input', this.selectedItems)
        }
      }
    }
  }
}
</script>
