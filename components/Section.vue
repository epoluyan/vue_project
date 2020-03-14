<template>
                <section class="zg-request-form__step">
                    <HeaderSection text="Что вас беспокоит?"/>
                        <fieldset class="zg-request-form__fieldset">
                        <ul class="zg-request-form__fields-list">
                            <ListCards />
                        </ul>
                        <RequestFormText text="Опишите свои ощущения"/>
                        </fieldset>
                </section>
</template>
<script>
import ListCards from '~/components/ListCards.vue'
import HeaderSection from '~/components/HeaderSection.vue'
import RequestFormText from '~/components/RequestFormText.vue'
export default {
  components: {
    ListCards,
    HeaderSection,
    RequestFormText
  }
}
</script>
<style>

</style>