<template>
  <section class="zg-request-form__step">
    <HeaderSection text="Когда проведём занятие?"/>
      <fieldset class="zg-request-form__fieldset">
        <div class="zg-request-form__fields-list-columns"> 
        <ul class="zg-request-form__fields-list-horisontal" style="list-style: none; display: flex; flex-wrap:wrap;">
            <ListDateButton />
            <CalendarPicker />
            <TimeBlock />
        </ul>
        </div>
      </fieldset>
  </section>
</template>
<script>
import HeaderSection from '~/components/HeaderSection.vue'
import ListDateButton from '~/components/ListDateButton.vue'
import CalendarPicker from '~/components/CalendarPicker.vue'
import TimeBlock from '~/components/TimeBlock.vue'
export default {
  components: {
    HeaderSection,
    ListDateButton,
    CalendarPicker,
    TimeBlock
  }
}
</script>
<style>

</style>