<template>
  <v-list
    dense
    :class="{ 'd-flex': horizontal }"
    :shaped="shaped"
    color="transparent"
    width="auto"
  >
    <v-list-item
      v-for="item in contact"
      :key="item.title"
      :ripple="ripple"
      :href="item.link"
      target="_blank"
    >
      <v-list-item-icon>
        <v-icon v-text="icons[item.icon]"></v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list>
</template>

<script>
import { mdiLinkedin, mdiInstagram, mdiGithub, mdiTwitter } from '@mdi/js'

export default {
  name: 'AppSocials',
  props: {
    horizontal: {
      type: Boolean,
      required: false,
      default: false,
    },
    shaped: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      icons: { mdiLinkedin, mdiInstagram, mdiGithub, mdiTwitter },
      contact: {},
      ripple: false,
    }
  },
  async fetch() {
    const content = await this.$nuxt.context
      .$content('app/contact-info')
      .only(['instagram', 'linkedin', 'github', 'twitter'])
      .fetch()
    const unusedItems = ['extension', 'path']
    unusedItems.forEach((item) => delete content[item])
    this.contact = content
  },
}
</script>

<style scoped>
.d-flex .v-list-item__icon:first-child {
  margin-right: 0;
}
</style>
