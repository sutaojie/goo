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
            this.eventHub.$emit('update:selected', this.selected)
        }
    }
</script>

<style scoped lang="scss">
    .tabs{
    }
</style>