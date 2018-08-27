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
            ipad:{
                type:Object,
                validator,
            },
            narrowPc:{
                type:Object,
                validator,
            },
            pc:{
                type:Object,
                validator,
            },
            widePc:{
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
                let {span, offset, ipad, narrowPc, pc, widePc} = this
                let webPageSize = this.webPageSize
                return [
                    ...(webPageSize({span, offset})),
                    ...(webPageSize(ipad,'ipad-')),
                    ...(webPageSize(narrowPc,'narrow-pc-')),
                    ...(webPageSize(pc,'pc-')),
                    ...(webPageSize(widePc,'wide-pc-'))
                ]
            },
            colStyle(){
                return {
                    paddingLeft:this.gutter/2 + 'px',
                    paddingRight:this.gutter/2 + 'px',
                }
            }
        },
        methods:{
            webPageSize(obj, str=''){
                if(!obj) return [];
                let array =[]
                obj.span ?  array.push( `col-${str}${obj.span}`) : ''
                obj.offset ? array.push(`offset-${str}${obj.offset}`) : ''
                return array
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col{
        background: #ccc;

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
        @media (min-width: 577px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 769px){ // 770
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 993px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 1201px) {
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
    }


</style>