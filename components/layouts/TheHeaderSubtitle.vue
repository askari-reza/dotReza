<template>
  <div
    class="d-flex align-center justify-center justify-space-between flex-grow-1"
  >
    <div>
      <span class="subtitle-1">Web developer </span>
      <v-divider></v-divider>
      <span class="subtitle-2"> frontend </span>
    </div>
    <div>
      <v-btn v-if="content.tel" text link :href="content.tel.link">
        {{ content.tel.title }}
      </v-btn>
      <span>/</span>
      <v-btn v-if="content.mail" text link :href="content.mail.link">
        {{ content.mail.title }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mdiPhone, mdiEmail } from '@mdi/js'
export default {
  name: 'TheHeaderSubtitle',
  data() {
    return {
      content: {},
      mdiPhone,
      mdiEmail,
    }
  },
  async fetch() {
    const content = await this.$nuxt.context
      .$content('app/contact-info')
      .only(['mail', 'tel'])
      .fetch()
    const unusedItems = ['extension', 'path']
    unusedItems.forEach((item) => delete content[item])
    this.content = content
  },
}
</script>

<style></style>
