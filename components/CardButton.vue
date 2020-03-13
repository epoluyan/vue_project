<template>
    <div class="zg-request-form__field-wrap">
        <input type="checkbox"  name="problem[]" id="problems-relations"
            class="zg-request-form__checkbox zg-anketa-form-btn-problems-relations" value="title"   >
        <label style="width:300px" class="zg-request-form__checkbox-label" for="problems-relations">
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
        image: String
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
.zg-request-form__field-wrap {
    width: 49%
}
._error .zg-request-form__field {
    border-color: red
}
.zg-request-form__field-wrap {
    position: relative
}
.zg-request-form__field-wrap._hidden {
    display: none
}
.zg-request-form__field-wrap._with-label {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}
.zg-request-form__field-wrap._inline {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    width: 48.5%;
    height: 50px;
    min-height: 47px
}
.zg-request-form__field-wrap._inline:not(:last-child) {
    margin-bottom: 20px
}
.zg-request-form__field-wrap {
        width: 100%
    }
.zg-request-form__field-wrap._select {
    display: block;
    font-size: 1em;
    font-family: inherit;
    font-weight: normal;
    color: #222;
    line-height: 1.4;
    padding: 12px 15px;
    width: 100%;
    max-width: 100%;
    border: 1px solid #dedede;
    border-radius: 5px;
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    background-image: url("data:../assets/image/svg+xml;utf8,<svg fill=!string!height=!string!viewBox=!string!width=!string!xmlns=!string!><path d=!string!/><path d=!string!fill=!string!/></svg>");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: 50%
}

.zg-request-form__field-wrap._select::-ms-expand {
    display: none
}

.zg-request-form__field-wrap._select:hover {
    cursor: pointer
}

.zg-request-form__field-wrap._select option {
    font-weight: normal
}

.zg-request-form__field-wrap._radio {
    margin: 0;
    box-sizing: border-box;
    display: block;
    min-width: 0;
    background-color: #FFF;
    display: inline-block
}

.zg-request-form__field-wrap._radio._input {
    margin: 0 0 0;
    box-sizing: border-box;
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: stretch
}

.zg-request-form__field-wrap._radio._input {
    width: 0;
    height: 0;
    position: absolute;
    -webkit-appearance: none;
    left: -9999px
}

.zg-request-form__field-wrap._radio._input+label {
    margin: 0px;
    padding: 0.6rem 1.2rem;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    border-radius: 5px;
    border: solid 1px #dedede;
    background-color: #FFF;
    font-size: 1rem;
    line-height: 100%;
    font-weight: 600;
    text-align: center;
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
    transition: border-color .15s ease-out, color .25s ease-out, background-color .15s ease-out
}

.zg-request-form__field-wrap._radio+label:hover {
    border-color: #0094ff;
    cursor: pointer
}

.zg-request-form__field-wrap._radio._input:checked+label {
    border-color: #0094ff;
    z-index: 1
}

.zg-request-form__field-wrap._radio+label:focus {
    outline: dotted 1px #CCC;
    outline-offset: .45rem
}
@media screen and (max-width:560px) {
    .zg-request-form__field-wrap {
        width: 100%
    }
    .zg-request-form__field-wrap._inline {
        width: 100%
    }
    .zg-request-form__field-wrap._inline:nth-child(odd) {
        margin-right: 0
    }
    .zg-request-form__field-wrap._inline:not(:last-child) {
        margin-bottom: 10px
    }
}
</style>