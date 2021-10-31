<template>
  <v-app dark>
    <v-app-bar app clipped-right elevate-on-scroll>
      <v-toolbar-title class="primary--text">{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>{{ mdiThemeLightDark }}</v-icon>
      </v-btn>
      <v-app-bar-nav-icon class="primary--text" @click="drawer = !drawer">
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
import { mdiMenu, mdiClose, mdiThemeLightDark } from '@mdi/js'
import AppNav from '~/components/app/AppNav.vue'
export default {
  components: { AppNav },
  data() {
    return {
      mdiMenu,
      mdiClose,
      mdiThemeLightDark,
      drawer: false,
      title: 'dotReza',
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile
    },
  },
}
</script>
