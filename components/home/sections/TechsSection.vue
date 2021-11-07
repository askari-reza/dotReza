<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="auto"
        :order="$vuetify.breakpoint.mobile ? 'last' : null"
      >
        <v-carousel
          cycle
          interval="2000"
          hide-delimiter-background
          hide-delimiters
          height="100"
          :show-arrows="false"
          vertical
          class="mx-auto mx-sm-0"
        >
          <v-carousel-item
            v-for="(icon, i) in icons"
            :key="i"
            transition="fade-transition"
          >
            <v-icon
              :light="!$vuetify.theme.dark"
              :dark="$vuetify.theme.dark"
              size="100"
              >{{ icon }}</v-icon
            >
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col class="d-flex align-center">
        <nuxt-content :document="content"></nuxt-content>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiLanguageJavascript,
  mdiVuejs,
  mdiNuxt,
  mdiVuetify,
  mdiJquery,
  mdiBootstrap,
} from '@mdi/js'
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
      test: mdiLanguageHtml5,
      icons: [
        mdiLanguageHtml5,
        mdiLanguageCss3,
        mdiLanguageJavascript,
        mdiVuejs,
        mdiNuxt,
        mdiVuetify,
        mdiJquery,
        mdiBootstrap,
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
::v-deep .v-carousel {
  width: 100px;
}
</style>
