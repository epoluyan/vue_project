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
                {
                    title: 'Сложности на работе',
                    image: '/images/work.svg'
                },
                {
                    title: 'Проблемы в общении',
                    image: '/images/sorrow.png'
                },
                {
                    title: 'Сексуальные отношения',
                    image: '/images/sex-problems.svg'
                },
                {
                    title: 'ЛГБТ-отношения',
                    image: '/images/lgb.svg'
                },
                {
                    title: 'Проблемы из детства',
                    image: '/images/childhood-problems.svg'
                },
                {
                    title: 'Заниженная самооценка',
                    image: '/images/self-esteem.svg'
                },
                {
                    title: 'Личные границы',
                    image: '/images/scope.svg'
                },
                {
                    title: 'Чувство вины',
                    image: '/images/other.png'
                },
                {
                    title: 'Панические атаки',
                    image: '/images/scare.png'
                },
                {
                    title: 'Непонятные эмоции',
                    image: '/images/panik.png'
                },
                {
                    title: 'Серьёзные потери',
                    image: '/images/frustration.svg'
                },
                {
                    title: 'Другое',
                    image: '/images/thoughts.svg'
                },
            ],
        }  
    }
}
</script>