<template>
  <v-flex xs12>
    <v-card v-bind:color="item.color" class="white--text">
      <v-container fluid grid-list-lg>
        <v-layout row>
          <v-flex xs7>
            <div>
              <div class="headline">{{ item.title }}</div>
              <div>{{ item.description }}</div>
            </div>
          </v-flex>
          <v-flex xs5>
            <v-card-media v-bind:src="item.image" height="125px" contain></v-card-media>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    'item': {
      type: Object,
      required: true
    }
  }
}
</script>
