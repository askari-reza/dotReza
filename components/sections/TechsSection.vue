<template>
  <v-row>
    <v-col cols="9">
      <v-row>
        <v-col>
          <v-carousel
            cycle
            interval="2000"
            height="auto"
            hide-delimiter-background
            hide-delimiters
            :show-arrows="false"
            vertical
          >
            <v-carousel-item v-for="(img, i) in imgs" :key="i">
              <v-img
                :src="require(`~/assets/images/${img}`)"
                class="rounded-circle mx-auto"
                width="50"
                max-width="100%"
                :aspect-ratio="1 / 1"
              /> </v-carousel-item
          ></v-carousel>
        </v-col>
        <v-col>
          <nuxt-content :document="content"></nuxt-content>
        </v-col>
      </v-row>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
export default {
  name: 'TechsSection',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imgs: ['test-01.jpg', 'test-02.png', 'image.png'],
    }
  },
}
</script>

<style lang="scss" scoped></style>
