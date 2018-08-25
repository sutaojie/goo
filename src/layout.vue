<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Glayout",
        data(){
            return{
                layoutClass:{
                    haveSider:false
                }
            }
        },
        mounted(){
            this.$children.forEach((vm)=>{
                if(vm.$options.name === "Gsider"){
                    this.layoutClass.haveSider = true
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .layout{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        &.haveSider{
            flex-direction: row;
        }
    }
</style>