<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "tabs",
        props:{
           selected:{
               type:String,
               required:true
           },
            direction:{
               type:String,
                default:'horizontal',
                validator(value){
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        data(){
          return{
              eventHub:new Vue()
          }
        },
        provide(){
            return {
                eventHub: this.eventHub
            }
        },
        mounted(){
            this.$children.forEach((vm)=>{
                if(vm.$options.name === 'TabsHead'){
                    vm.$children.forEach((childVm)=>{
                        if(childVm.$options.name === 'tabs-item' &&
                            childVm.name === this.selected)
                            this.eventHub.$emit('update:selected', this.selected, childVm)
                    })
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    .tabs{
    }
</style>