<template>
  <div class="position-relative">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" sm="6">
          <v-img :src="content.image" contain :aspect-ratio="16 / 9"></v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card flat>
            <v-card-subtitle class="text-uppercase pb-0">
              {{ content.subtitle }}
            </v-card-subtitle>
            <v-card-title class="text-uppercase pt-0">
              {{ content.title }}
            </v-card-title>
            <v-card-text>
              <nuxt-content :document="content" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div
      v-if="!$vuetify.breakpoint.mobile"
      class="centered-y rotate-90 text-uppercase subtitle-1 text--secondary"
    >
      about me
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.centered-y {
  // right: 0.5rem;
  right: 0;
  // transform: translate(30%, -20%);
}
.rotate-90 {
  transform: rotate(90deg);
  transform-origin: center;
}
</style>
