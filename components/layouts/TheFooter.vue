<template>
  <v-footer class="d-block" padless inset>
    <v-row justify="center">
      <v-col cols="auto">
        <v-card flat color="transparent">
          <v-card-title class="justify-center"> stay conected </v-card-title>
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
            flex-column
            align-end
            justify-center
            text-uppercase text--primary
          "
        >
          &copy; {{ currentYear }} all rights reserved

          <span class="text-lowercase subtitle-2"
            >all illustrations from
            <a href="https://undraw.co" target="_blank">unDraw</a>
          </span>
        </v-col>
      </v-row>
    </v-container>
    <v-row no-gutters>
      <v-col class="primary">
        <v-sheet color="primary" height="20" width="100%"></v-sheet>
      </v-col>
      <v-col class="secondary">
        <v-sheet color="secondary" height="20" width="100%"></v-sheet>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style></style>
