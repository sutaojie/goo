<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-button-group",
        mounted(){

            for(let node of this.$el.children){
                let nodeName = node.nodeName.toLowerCase()
                if(nodeName !== 'button'){
                    console.warn(`你的子组件不是 button, 而是${nodeName}`)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .g-button-group{
        display: inline-flex;
        vertical-align:middle;

        > .g-button{
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px;
            }
            &:hover {
                z-index: 1;
            }
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
        }
    }
</style>