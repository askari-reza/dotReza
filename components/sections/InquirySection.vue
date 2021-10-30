<template>
  <v-row class="mt-16 py-16" justify="center">
    <v-col cols="9" class="position-relative">
      <v-img
        class="t"
        :src="src"
        width="100"
        max-width="100%"
        max-height="100%"
        :aspect-ratio="1 / 1"
        alt="test iamge"
      />
      <div
        class="elevation-10 d-flex flex-row justify-space-around align-center"
        style="height: 200px"
      >
        <div>
          <p class="display-1">
            {{ content.title }}
          </p>
          <p class="subtitle-1">
            {{ content.subtitle }}
          </p>
        </div>
        <div></div>
        <div>
          <v-btn :href="content.cta.link" large class="text-uppercase">{{
            content.cta.text
          }}</v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
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
  data() {
    return {
      src: require('~/assets/images/test-02.png'),
    }
  },
}
</script>

<style lang="scss" scoped></style>
