<template>
  <v-app dark>
    <v-app-bar app clipped-right>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
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
export default {
  data() {
    return {
      mdiMenu,
      mdiClose,
      drawer: false,
    }
  },
}
</script>
