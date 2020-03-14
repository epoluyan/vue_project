<template>
    <div class="zg-request-form__field-wrap js-textarea">
        <textarea class="zg-request-form__field _textarea" :placeholder="text" name="problem_other"></textarea>
    </div>
</template>
<script>
export default {
    props: {
        text: String
    }
}
</script>
<style>

</style>