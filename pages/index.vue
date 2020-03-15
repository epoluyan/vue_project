<template>
  <div class="header">
    <div class="zg-wrap">
      <body class="zg">
        <Header />  
        <section class="zg-step2 js-layout">
          <div class="zg-step2__form">
            <form class="ajax_form zg-request-form js-step2-form" style="wight:300px" id="anketa_main" action="https://match.zigmund.online/ordercreate.json" method="post">
              <CardSection />
              <GenderSection />
              <DateSection />
              <RequestSection />
              <ConfirmButton />
              <input type="hidden" name="af_action" value="f6e7d4bc713b46685b878707fd45f5da" />
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
import CardSection from '~/components/CardSection.vue'
import GenderSection from '~/components/GenderSection.vue'
import DateSection from '~/components/DateSection.vue'
import RequestSection from '~/components/RequestSection.vue'
import ConfirmButton from '~/components/ConfirmButton.vue'
import StickyInfo from '~/components/StickyInfo.vue'

export default {
  components: {
    Header,
    CardSection,
    GenderSection,
    DateSection,
    RequestSection,
    ConfirmButton,
    StickyInfo
  }
}
</script>
<style>

</style>