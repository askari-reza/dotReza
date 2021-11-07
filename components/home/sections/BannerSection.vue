<template>
  <v-container>
    <v-row>
      <v-col cols="6" class="d-flex justify-center align-center">
        <p class="text-center">
          <span class="font-italic"> Veni, Vidi, Vici </span>
          <br />
          <span class="font-weight-black">I came, I saw, I learned</span>
        </p>
      </v-col>
      <v-col cols="6">
        <v-img
          :src="content.image"
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
  data() {
    return {
      words: ['I came', 'I saw', 'I learned'],
    }
  },
  computed: {},
}
</script>

<style scoped></style>
