<template>
    <div class="tabs-item" :class="classes" @click="onClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-item",
        inject:['eventHub'],
        data(){
          return{
              active:false,
          }
        },
        props:{
          name:{
              type:String|Number,
              required:true
          },
            disable:{
              type:Boolean,
                default:false
            }
        },
        mounted(){
          this.eventHub.$on('update:selected', (name)=>{
              this.active = this.name === name;
          })
        },
        computed:{
          classes(){
              return {
                  active: this.active,
                  disable:this.disable
              }
          }
        },
        methods:{
            onClick(){
                if(this.disable) {return }
                this.eventHub.$emit('update:selected', this.name, this)
            }
        }
    }
</script>

<style scoped lang="scss">
    $active-font-color:blue;
    $disable-text-color: grey;
    .tabs-item{
        flex-shrink:0;
        padding: 0 1em;
        height: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        &.active{
            color:$active-font-color;
            font-weight: bold;
        }
        &.disable{
            color: $disable-text-color;
            cursor:not-allowed;
        }
    }

</style>