<template>
    <div class="wrapper" >
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly" :class="{error}"
               @input ="$emit('input',$event.target.value)"
               @change ="$emit('change', $event.target.value)"
               @focus ="$emit('focus', $event.target.value)"
               @blur ="$emit('blur', $event.target.value)"
        >
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>

    </div>
</template>

<script>
    import Icon from './icon'
    export default {
        components:{
          Icon
        },
        props:{
            value:{
                type:String
            },
            disabled:{
                type:Boolean,
                default:false
            },
            readonly:{
                type:Boolean,
                default:false
            },
            error:{
                type:String
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size:14px;
    $input-height:34px;
    $border-radius:5px;
    $border-color:#999;
    $box-shadow-color: rgba(0,0,0,0.5);
    $border-hover-color:#666;
    $border-red: #F1453D;
    .wrapper{
        font-size: $font-size;display: inline-flex;align-items: center; :not(:last-child){margin-right: .5em;}
        > input{border-radius: $border-radius;height: $input-height;border:1px solid $border-color;padding: 0 8px;font-size: inherit;
            &:focus{box-shadow: inset 0 1px 3px $box-shadow-color;outline: none;}
            &:hover{border-color: $border-hover-color;}
            &[disabled],&[readonly]{cursor:not-allowed;border-color: #bbb;color:#bbb;}
            &.error{border-color: $border-red;}
        }
        .errorMessage{color:$border-red;}
        .icon-error{fill:$border-red;}
    }
</style>