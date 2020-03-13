<template>
    <div class="sd">
        <CardButton v-for="item in list"
            v-model="selected"
            :key="item.title"
            :title="item.title"
            :image="item.image"
            />
    </div>
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