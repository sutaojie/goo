<template>
    <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        props:{
            span:{
                type:[Number, String]
            },
            offset:{
                type:[Number, String]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col{
        background: #ccc;
        border: 1px solid red;
        width: 50%;
        height: 20px;
        margin: 0 10px;
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
    }

</style>