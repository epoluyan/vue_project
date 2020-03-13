<template>
  <div class="header">
    <Header />  
    <Section />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Section from '~/components/Section.vue'
//import ListCards from '~/components/ListCards.vue'

export default {
  components: {
    Header,
    Section,
    //ListCards
  }
}
</script>
<style>

</style>