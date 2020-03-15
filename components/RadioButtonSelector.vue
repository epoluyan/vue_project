<template>
    <div class="zg-request-form__field-wrap _radio" style="margin-bottom: 10px;">
            <RadioButton v-for="item in list"
                v-model="selected"
                :id="item.idName"
                :key="item.title"
                :title="item.title"
                :name="item.name"
                />
    </div>
</template>
<script>
import RadioButton from '~/components/RadioButton.vue'
export default {
    components: {
    RadioButton
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