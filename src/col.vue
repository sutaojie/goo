<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        props:{
            span:{
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

        $class-prefix:col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width:($n /24) * 100%
            }
        }
    }

</style>