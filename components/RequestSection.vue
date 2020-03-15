<template>
  <section class="zg-request-form__step">
    <HeaderSection text="Как с вами связаться?"/>
    <fieldset class="zg-request-form__fieldset">
        <div class="zg-request-form__inputs-wrap">
            <TextInputForm 
                placeholder="Имя"
                name="name"
                id="name-1" />
            <PhoneInputForm 
                name="phone"
                id="phone_number" />
            <EmailInputForm 
                placeholder="Эл. почта"
                name="email"
                id="email-1"
                dataValid="email" />
        </div>
        <input class="zg-request-form__field" type="hidden" id="visitor_uid" name="visitor_uid" value=""/>
				<input class="zg-request-form__field" type="hidden" id="form_id" name="form_id" value="anketa_main"/>
    </fieldset>
  </section>
</template>
<script>
import HeaderSection from '~/components/HeaderSection.vue'
import TextInputForm from '~/components/TextInputForm.vue'
import PhoneInputForm from '~/components/PhoneInputForm.vue'
import EmailInputForm from '~/components/EmailInputForm.vue'

export default {
  components: {
    HeaderSection,
    TextInputForm,
    PhoneInputForm,
    EmailInputForm
  }
}
</script>
<style>

</style>