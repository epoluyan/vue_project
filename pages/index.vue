<template>
  <div class="header">
    <div class="zg-wrap">
      <body class="zg">
        <Header />  
        <section class="zg-step2 js-layout">
          <div class="zg-step2__form">
            <form class="ajax_form zg-request-form js-step2-form" style="wight:300px" id="anketa_main" action="https://match.zigmund.online/ordercreate.json" method="post">
              <Section />
            </form>
          </div>
        <StickyInfo />
        </section>
      </body>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Section from '~/components/Section.vue'
import StickyInfo from '~/components/StickyInfo.vue'

export default {
  components: {
    Header,
    Section,
    StickyInfo
  }
}
</script>
<style>

</style>