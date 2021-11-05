<template>
  <div id="section-wrapper">
    <main-section :content="main"></main-section>
    <about-section :content="about"></about-section>
    <techs-section :content="techs"></techs-section>
    <banner-section></banner-section>
    <!-- <works-section></works-section> -->
    <inquiry-section :content="inquiry"></inquiry-section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    try {
      const [main, about, inquiry, techs] = await Promise.all([
        $content('sections/main').fetch(),
        $content('sections/about').fetch(),
        $content('sections/inquiry').fetch(),
        $content('sections/techs').fetch(),
      ])
      return { main, about, inquiry, techs }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  },
  head() {
    return {
      title: 'dotReza',
      titleTemplate: '%s',
    }
  },
}
</script>
