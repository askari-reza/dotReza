/* eslint-disable no-console */
<template>
  <v-row class="position-relative">
    <div class="centered-y">
      <app-socials></app-socials>
    </div>
    <v-spacer></v-spacer>
    <v-col cols="5">
      <v-card flat>
        <v-card-title>
          <h1>
            {{ content.title }}
          </h1>
        </v-card-title>
        <v-card-subtitle class="subtitle-1">
          {{ content.subtitle }}
        </v-card-subtitle>
        <v-card-text>
          <nuxt-content :document="content"></nuxt-content>
        </v-card-text>
        <v-card-actions>
          <v-btn :href="content.cta.link" large>{{ content.cta.text }} </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="5">
      <v-img
        :src="src"
        width="500"
        max-width="100%"
        max-height="100%"
        :aspect-ratio="1 / 1"
        alt="test iamge"
      />
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
import AppSocials from '../app/AppSocials.vue'
export default {
  name: 'MainSection',
  components: { AppSocials },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      src: require('~/assets/images/test-02.png'),
    }
  },
}
</script>

<style lang="scss" scoped>
.centered-y {
  left: 0;
}
</style>
