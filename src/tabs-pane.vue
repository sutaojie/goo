<template>
   <div class="tabs-pane" v-if="active" :class="active">
       <slot></slot>
   </div>
</template>

<script>
    export default {
        name: "tabs-pane",
        inject:['eventHub'],
        data(){
            return{
                active:false,
            }
        },
        props:{
          name:{
              type:String | Number,
              required:true,
          }
        },
        created(){
            this.eventHub.$on('update:selected',(name)=>{
                this.active = this.name === name;
            })
        }
    }
</script>

<style scoped lang="scss">
    .tabs-pane{

        &.active{
            background-color: red;
        }
    }
</style>