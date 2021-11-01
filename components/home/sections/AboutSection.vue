<template>
  <v-row class="position-relative">
    <v-spacer></v-spacer>
    <v-col cols="9">
      <v-row class="elevation-10" no-gutters>
        <v-col>
          <v-img :src="content.image" :aspect-ratio="16 / 9"></v-img>
        </v-col>
        <v-col>
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
    </v-col>
    <v-spacer></v-spacer>
    <div class="centered-y">
      <p class="rotate-90 text-uppercase subtitle-1 text--secondary">
        about me
      </p>
    </div>
  </v-row>
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
  right: 0.5rem;
  transform: translate(30%, -20%);
}
.rotate-90 {
  transform: rotate(90deg);
  transform-origin: center;
}
</style>
