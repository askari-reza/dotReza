<template>
  <v-footer class="d-block" padless inset app>
    <v-row justify="center">
      <v-col cols="auto">
        <v-card flat color="transparent">
          <v-card-title class="text-center"> stay conected </v-card-title>
          <v-card-text>
            <address class="d-flex flex-column">
              <v-btn text href="mailto:" class="headline font-style-normal"
                >mail@dotreza.com</v-btn
              >
              <v-btn text href="wa.me/" class="subtitle-1 font-style-normal"
                >0099</v-btn
              >
            </address>
          </v-card-text>
          <v-card-actions class="d-flex flex-row justify-center">
            <app-socials horizontal :shaped="false"></app-socials>
          </v-card-actions>
        </v-card>
        <h5 class="headline text-center"></h5>
      </v-col>
    </v-row>
    <v-container>
      <v-row no-gutters>
        <v-col class="d-flex flex-row justify-start align-center">
          <nuxt-link to="/" class="text-decoration-none text--primary"
            >dotReza</nuxt-link
          >
        </v-col>
        <v-col class="d-flex flex-row justify-center align-center">
          <app-nav horizontal color="transparent" :icon="false"></app-nav>
        </v-col>
        <v-col
          class="
            d-flex
            flex-row
            justify-end
            align-center
            text-uppercase text--primary
          "
        >
          &copy; {{ currentYear }} all rights reserved
        </v-col>
      </v-row>
    </v-container>
    <v-row no-gutters>
      <v-col>color 1</v-col>
      <v-col>color 2</v-col>
      <v-col>color 3</v-col>
      <v-col>color 4</v-col>
    </v-row>
  </v-footer>
</template>

<script>
import AppNav from '../app/AppNav.vue'
import AppSocials from '../app/AppSocials.vue'
export default {
  name: 'TheFooter',
  components: { AppNav, AppSocials },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style></style>
