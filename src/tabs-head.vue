<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabsHead",
        inject:['eventHub'],
        created(){

        }
    }
</script>

<style scoped lang="scss">
    $tabs-height:40px;
    .tabs-head{
        border: 1px solid red;
        height: $tabs-height;
        display: flex;
        align-items: center;
        justify-content: flex-start;
       > .actions-wrapper{
           margin-left: auto;
       }
    }
</style>