<template>
  <div class="position-relative">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" class="d-flex align-center">
          <v-card flat>
            <v-card-title>
              <h1>
                {{ content.title }}
              </h1>
            </v-card-title>
            <v-card-subtitle class="subtitle-1 text-uppercase pt-2">
              {{ content.subtitle }}
            </v-card-subtitle>
            <v-card-text>
              <nuxt-content :document="content"></nuxt-content>
            </v-card-text>
            <v-card-actions
              :class="{ 'justify-end': $vuetify.breakpoint.mobile }"
            >
              <v-btn color="primary" :href="content.cta.link" large
                >{{ content.cta.text }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          :order="$vuetify.breakpoint.mobile ? 'first' : null"
        >
          <v-img
            :src="content.image"
            max-width="100%"
            :aspect-ratio="16 / 9"
            contain
            alt=""
          />
        </v-col> </v-row
    ></v-container>
    <div v-if="!$vuetify.breakpoint.mobile" class="centered-y">
      <app-socials></app-socials>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSection',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.centered-y {
  left: 0;
}
</style>
