<template>
    <div class="time-chooser--items">
        <label class="time-picker" :for="id">
            <span >{{title}}</span>
        </label>
        <input 
            v-model="selected"
            class="zg-request-form__checkbox"
            type="checkbox"
            name="class_time[]"
            :id="id"
            :value="title">
    </div>
</template>
<script>
export default {
    props: {
        value: Array,
        title: String,
        id: String
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
<style>

</style>