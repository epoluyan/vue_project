<template>
    <TimeSelector v-model="selected" :list="list" />
</template>
<script>
import TimeSelector from '~/components/TimeSelector.vue'
export default {
    components: {
    TimeSelector
    },
    data () {
        return {
            selected: ['7'],
            list: [
                {
                    title: '7'
                },
                {
                    title: '8'
                },
                {
                    title: '9'
                },
                {
                    title: '10'
                },
                {
                    title: '11'
                },
                {
                    title: '12'
                },
                {
                    title: '13'
                },
                {
                    title: '14'
                },
                {
                    title: '15'
                },
                {
                    title: '16'
                },
                {
                    title: '17'
                },
                {
                    title: '18'
                },
                {
                    title: '19'
                },
                {
                    title: '20'
                },
                {
                    title: '21'
                },
                {
                    title: '22'
                },
                {
                    title: '23'
                },
                {
                    title: '24'
                },
            ],
        }  
    }
}
</script>