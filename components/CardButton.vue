<template>
        <div class="zg-request-form__fields-columns">
                    <input 
                        v-model="selected"
                        class="zg-request-form__checkbox zg-anketa-form-btn-problems-relations"
                        type="checkbox"
                        name="problem[]"
                        :id="id"
                        :value="title">
                <label style="width:300px" class="zg-request-form__checkbox-label" :for="id">
                    <div class="zg-request-form__checkbox-label-table" style="display: table;width: auto;box-sizing: border-box;margin-left: 0; margin-right:0;">
                    <div class="zg-request-form__checkbox-label-img"><img :src="image" style="width:80px; height:80px;margin-right: 10px;"></div>
                    <div class="zg-request-form__checkbox-label-text" style="display: table-cell; margin-left: 5px; vertical-align: middle; width: auto; box-sizing: border-box;font-size: 20px;">{{title}}</div>
                    </div>
                </label>
        </div>
</template>
<script>
export default {
    props: {
        value: Array,
        title: String,
        image: String,
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