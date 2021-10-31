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
import AboutSection from '~/components/home/sections/AboutSection.vue'
import BannerSection from '~/components/home/sections/BannerSection.vue'
import InquirySection from '~/components/home/sections/InquirySection.vue'
import MainSection from '~/components/home/sections/MainSection.vue'
import TechsSection from '~/components/home/sections/TechsSection.vue'
// import WorksSection from '~/components/sections/WorksSection.vue'
export default {
  components: {
    MainSection,
    AboutSection,
    TechsSection,
    BannerSection,
    InquirySection,
    // WorksSection,
  },
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
}
</script>
