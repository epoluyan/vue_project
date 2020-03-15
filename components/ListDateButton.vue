<template>
    <li style="width: 100%">
        <RadioButtonSelector v-model="selected" :list="list" />
    </li>
</template>
<script>
import RadioButtonSelector from '~/components/RadioButtonSelector.vue'
export default {
    components: {
    RadioButtonSelector
    },
    data () {
        return {
            selected: ['Неважно'],
            list: [
                {
                    title: 'Сегодня',
                    name: 'date',
                    idName: 'date_today'
                },
                {
                    title: 'Завтра',
                    name: 'date',
                    idName: 'date_tomorrow'
                },
            ],
        }  
    }
}
</script>