<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
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

        },
        mounted(){
            this.eventHub.$on('update:selected', (item, vm)=>{
                let {width, height, top, left} = vm.$el.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left}px`
            })
        }
    }
</script>

<style scoped lang="scss">
    $tabs-height:40px;
    $line-bottom-color:blue;
    $border-color:#ddd;
    .tabs-head{
        height: $tabs-height;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        border-bottom:1px solid $border-color;
       > .actions-wrapper{
           margin-left: auto;
           padding-right: 1.5em;
       }
        > .line{
            position: absolute;
            bottom: 0;
            transition: all .3s;
            border-bottom: 1px solid $line-bottom-color;
        }
    }
</style>