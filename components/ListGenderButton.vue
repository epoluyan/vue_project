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
                    title: 'М',
                    name: 'gender',
                    idName: 'gender_male'
                },
                {
                    title: 'Ж',
                    name: 'gender',
                    idName: 'gender_female'
                },
                {
                    title: 'Неважно',
                    name: 'gender',
                    idName: 'gender_any'
                },
            ],
        }  
    }
}
</script>