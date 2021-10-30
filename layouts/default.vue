<template>
  <v-app dark>
    <v-app-bar app clipped-right>
      <the-header></the-header>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon> {{ drawer ? mdiClose : mdiMenu }}</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      clipped
      disable-route-watcher
      disable-resize-watcher
    >
      <app-nav></app-nav>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
import { mdiMenu, mdiClose } from '@mdi/js'
import TheHeader from '~/components/layouts/TheHeader.vue'
import TheFooter from '~/components/layouts/TheFooter.vue'
export default {
  components: { TheHeader, TheFooter },
  data() {
    return {
      mdiMenu,
      mdiClose,
      drawer: false,
    }
  },
}
</script>
