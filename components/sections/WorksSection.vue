<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-col cols="9">
      <v-card>
        <v-card-title> works </v-card-title>
        <v-card-subtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </v-card-subtitle>
        <v-card-actions>
          <v-btn>See more</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="6">
      <v-img :src="src" width="400px" max-width="100%" :aspect-ratio="1 / 1" />
    </v-col>
    <v-col>
      <v-carousel cycle hide-delimiters :show-arrows="false">
        <v-carousel-item v-for="(item, i) in works" :key="i">
          <v-card light>
            <v-card-title> {{ item.title }} </v-card-title>
            <v-card-subtitle>
              {{ item.description }}
            </v-card-subtitle>
            <v-card-text>
              <v-img
                src=""
                width="300px"
                max-width="100%"
                :aspect-ratio="1 / 1"
              />
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" :to="item.path">read more</v-btn>
            </v-card-actions>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'WorksSection',
  data() {
    return {}
  },
  async fetch() {},
}
</script>

<style lang="scss" scoped></style>
