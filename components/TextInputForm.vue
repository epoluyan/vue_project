<template>
        <div class="zg-request-form__field-wrap _inline">
            <input 
                v-model="input"
                :placeholder="placeholder" 
                class="zg-request-form__field" 
                type="text" 
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