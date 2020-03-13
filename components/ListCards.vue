<template>
    <CardsSelector v-model="selected" :list="list" />
</template>
<script>
import CardsSelector from '~/components/CardsSelector.vue'
export default {
    components: {
    CardsSelector
    },
    data () {
        return {
            selected: ['Поиск себя'],
            list: [
                {
                    title: 'Трудности в отношениях',
                    image: '/images/diffidence.svg'
                },
                {
                    title: 'Поиск себя',
                    image: '/images/yourself.svg'
                },
                {
                    title: 'Семейные проблемы',
                    image: '/images/family-problems.svg'
                },
            ],
        }  
    }
}
</script>>