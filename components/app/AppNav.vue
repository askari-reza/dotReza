<template>
  <nav>
    <v-list
      :class="{ 'd-flex': horizontal }"
      :flat="flat"
      :dense="dense"
      :color="color"
      nav
    >
      <v-list-item v-for="item in nav" :key="item.title" nuxt :to="item.link">
        <v-list-item-icon v-if="icon">
          <v-icon v-text="icons[item.icon]"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-capitalize">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </nav>
</template>

<script>
import { mdiHome, mdiCardAccountDetails, mdiEmail } from '@mdi/js'
export default {
  name: 'AppNav',
  props: {
    horizontal: {
      type: Boolean,
      required: false,
      default: false,
    },
    flat: {
      type: Boolean,
      required: false,
      default: false,
    },
    dense: {
      type: Boolean,
      required: false,
      default: false,
    },
    color: {
      type: String,
      required: false,
      default: '',
    },
    icon: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      nav: [],
      icons: {
        mdiHome,
        mdiCardAccountDetails,
        mdiEmail,
      },
    }
  },
  async fetch() {
    const content = await this.$nuxt.context.$content('app/nav').fetch()
    this.nav = content.nav
  },
  methods: {},
}
</script>

<style scoped>
.v-list.d-flex .v-list-item {
  margin-bottom: 0;
}
</style>
