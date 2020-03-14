<template>
    <li class="zg-request-form__fields-list">
        <CardButton v-for="(item, index) in list"
            v-model="selected"
            :id="`problems-relations-${index}`"
            :key="item.title"
            :title="item.title"
            :image="item.image"
            />
    </li>
</template>
<script>
import CardButton from '~/components/CardButton.vue'
export default {
    components: {
    CardButton
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