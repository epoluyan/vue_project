<template>
    <section class="js-submit-step zg-request-form__submit-step">
        <button type="submit" class="zg-request-form__submit">Далее</button>
        <p class="zg-request-form__agree">
            Нажимая &laquo;Далее&raquo;, вы принимаете <a href="https://drive.google.com/open?id=1ILLccEQvAVKjzfF0v6YolTwtNeWNmNYH" target="_blank">Условия пользования сайтом</a> и&nbsp;<a href="https://drive.google.com/file/d/1g0roB_Vwq5p9T_ewQXlV9_HinEJrUrff" target="_blank">Обработки персональных данных</a>
        </p>
    </section>
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