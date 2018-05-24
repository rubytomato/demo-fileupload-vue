<template>
  <v-flex xs12>
    <v-card v-bind:color="item.color" class="white--text" v-bind:tile="false" v-bind:hover="true">
      <v-card-title primary-title>
        <div class="headline">{{ item.title }}</div>
        <div>{{ item.description }}</div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat dark>Details</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'NormalCard',
  props: {
    'item': {
      type: Object,
      required: true
    }
  }
}
</script>
