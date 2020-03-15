<template>
    <li style="width: 100%">
        <div class="time-chooser">
            <div class="time-chooser--title">
                Выберите удобные часы
            </div>
            <div class="time-chooser--subtitle">
                лучше несколько вариантов
            </div>
                <ListTimeButton />
        </div>
    </li>
</template>
<script>
import ListTimeButton from '~/components/ListTimeButton.vue'
export default {
  components: {
    ListTimeButton
  }
}
</script>
<style>

</style>