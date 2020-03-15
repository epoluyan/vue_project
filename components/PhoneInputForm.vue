<template>
    <div class="zg-request-form__field-wrap js-valid__block _inline-table">
        <input 
            v-model="input" 
            type="tel" 
            data-valid="phone" 
            data-required="true" 
            class="zg-request-form__field" 
            id="phone_multi"  
            value=""/>
		<input 
            type="hidden" 
            :name="name"  
            :id="id">
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