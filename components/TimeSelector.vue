<template>
    <div class="time-chooser--items">
        <TimeButton v-for="item in list"
            v-model="selected"
            :id="`class_time${item.title}`"
            :key="item.title"
            :title="item.title"
            />
    </div>
</template>
<script>
import TimeButton from '~/components/TimeButton.vue'
export default {
    components: {
    TimeButton
    },
    props: {
        value: Array,
        list: Array
    },
    computed: {
        selected: {
            get () {
                return this.value;
            },
            set (newValue) {
                this.$emit('input', newValue);
            }
        }
    }
}
</script>