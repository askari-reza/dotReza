<template>
  <div class="">{{ slug }}</div>
</template>

<script>
export default {
  asyncData({ params }) {
    return {
      slug: params.slug,
    }
  },
}
</script>

<style></style>
