<template>
  <section class="zg-request-form__step">
    <HeaderSection text="Что важно в психологе?"/>
      <fieldset class="zg-request-form__fieldset">
        <div class="zg-request-form__fields-list-columns">
            <ul class="zg-request-form__fields-list-horisontal" style="list-style: none; display: flex; flex-wrap:wrap;">
                <ListGenderButton />
            </ul>
        </div>
      <RequestFormText text="Как вы представляете своего психолога?"/>
      </fieldset>
  </section>
</template>
<script>
import ListGenderButton from '~/components/ListGenderButton.vue'
import HeaderSection from '~/components/HeaderSection.vue'
import RequestFormText from '~/components/RequestFormText.vue'
export default {
  components: {
    ListGenderButton,
    HeaderSection,
    RequestFormText
  }
}
</script>
<style>

</style>