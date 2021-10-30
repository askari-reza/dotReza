<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-col cols="9">
      <div class="d-flex">
        veni vidi vici
        <v-spacer></v-spacer>
        <v-card style="height: 200px; width: 300px">
          <div class="test">{{ words[wordIndex] }}</div>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BannerSection',
  data() {
    return {
      wordIndex: 0,
      words: ['veni', 'vidi', 'vici'],
      src: require('~/assets/images/test-02.png'),
    }
  },
  mounted() {
    setInterval(this.changeWords, 1000)
  },
  methods: {
    changeWords() {
      if (this.wordIndex === this.words.length - 1) {
        this.wordIndex = 0
      } else {
        this.wordIndex++
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
