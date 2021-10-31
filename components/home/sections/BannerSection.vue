/* eslint-disable no-console */
<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-col cols="2">
      <v-carousel
        cycle
        interval="2000"
        height="auto"
        hide-delimiter-background
        hide-delimiters
        :show-arrows="false"
      >
        <v-carousel-item v-for="(word, i) in words" :key="i">
          <span class="text--primary title">{{ word }}</span>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BannerSection',
  data() {
    return {
      words: ['I came', 'I saw', 'I learned'],
    }
  },
  computed: {},
}
</script>

<style scoped></style>
