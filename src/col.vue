<template>
    <div class="col" :class="colClass" :style="colStyle">
        <div style="border:1px solid green">
            <slot></slot>
        </div>

    </div>
</template>

<script>
let validator = (value)=>{
    if(!value){return false}
    let keys = Object.keys(value)
    let valid = true
    keys.forEach((key)=>{
        if(!['span','offset'].includes(key)){
            valid = false
        }
    })
    return valid
}
    export default {
        props:{
            span:{
                type:[Number, String]
            },
            offset:{
                type:[Number, String]
            },
            phone:{
                type:Object,
                validator,
            },
            ipad:{
                type:Object,
                validator,
            }
        },
        data(){
          return{
              gutter:0
          }
        },
        computed:{
            colClass(){
                let {span, offset, phone, ipad} = this
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`,
                    ... (phone ? [`col-phone-${phone.span}`] : []),
                    ... (ipad ? [`col-ipad-${ipad.span}`] : [])
                ]
            },
            colStyle(){
                return {
                    paddingLeft:this.gutter/2 + 'px',
                    paddingRight:this.gutter/2 + 'px',
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col{
        background: #ccc;
        border: 1px solid red;

        height: 20px;
        $class-prefix:col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width:($n /24) * 100%
            }
        }
        $class-prefix:offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left:($n /24) * 100%
            }
        }
        @media (max-width : 800px) {
            $class-prefix:col-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width:($n /24) * 100%
                }
            }
            $class-prefix:col-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left:($n /24) * 100%
                }
            }
        }
        @media (max-width : 600px) {
            $class-prefix:col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width:($n /24) * 100%
                }
            }
            $class-prefix:col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left:($n /24) * 100%
                }
            }
        }
    }


</style>