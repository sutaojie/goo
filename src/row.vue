<template>
    <div class="row" :style="{marginLeft:-gutter/2 + 'px',marginRight:-gutter/2 + 'px'}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "row",
        props:{
            gutter:{
                type:[Number, String]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .row{
        background-color: coral;
        display: flex;

    }
</style>