<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" class="d-flex justify-center align-center">
        <p class="text-center">
          <span class="font-italic"> Veni, Vidi, Vici </span>
          <br />
          <span class="font-weight-black">I came, I saw, I learned</span>
        </p>
      </v-col>
      <v-col cols="12" sm="6">
        <v-img
          :src="content.image.src"
          height="150"
          contain
          :aspect-ratio="16 / 9"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'BannerSection',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
