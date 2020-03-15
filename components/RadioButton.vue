<template>
        <div class="zg-request-form__field-wrap _radio" style="margin-bottom: 5px;margin-right: 4px">
                <input 
                    v-model="selected"
                    class="zg-request-form__field-wrap _radio _input" 
                    type="radio" 
                    :name="name" 
                    :id="id" 
                    :value="title"  >
				<label class="zg-request-form__field-wrap _radio label" :for="id">	
					<span style="font-weight:400; line-height: 22px; font-size: 20px; color:#222">{{title}}</span>
				</label>
        </div>
</template>
<script>
export default {
    props: {
        value: Array,
        name: String,
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