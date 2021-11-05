<template>
  <div class="">WORKS</div>
</template>

<script>
export default {
  asyncData({ params }) {
    return {
      slug: params.slug,
    }
  },
  head() {
    return {
      title: 'Works',
    }
  },
}
</script>

<style></style>
