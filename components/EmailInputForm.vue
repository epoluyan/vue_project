<template>
    <div class="zg-request-form__field-wrap js-valid__block _inline">
        <input 
            v-model="input"
            :placeholder="placeholder"
            :data-valid="dataValid" 
            data-required="true" 
            class="js-valid__field zg-request-form__field"
            :id="id"
            :name="name" 
            value=""/>
    </div>
</template>
<script>
export default {
    props: {
        value: Array,
        name: String,
        placeholder: String,
        dataValid: String,
        id: String
    },
    computed: {
        input: {
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