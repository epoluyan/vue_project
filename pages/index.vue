<template>
  <div class="header">
    <Header />  
    <ListCards />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import ListCards from '~/components/ListCards.vue'

export default {
  components: {
    Header,
    ListCards
  }
}
</script>
<style>

</style>