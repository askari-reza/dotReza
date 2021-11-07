<template>
  <v-container>
    <v-row no-gutters align="center">
      <v-col>
        <v-img
          :src="content.image"
          width="200"
          max-width="100%"
          max-height="100%"
          contain
          :aspect-ratio="16 / 9"
          alt=""
        />
        <v-card>
          <v-card-text class="d-flex flex-row justify-space-around">
            <div>
              <p class="text-h3">{{ content.title }}</p>
              <p class="text-subtitle-1">{{ content.subtitle }}</p>
            </div>
            <div class="d-flex align-center">
              <v-btn
                :href="content.cta.link"
                large
                color="primary"
                class="text-uppercase"
                >{{ content.cta.text }}</v-btn
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'InquirySection',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.right {
  left: 0;
}
</style>
