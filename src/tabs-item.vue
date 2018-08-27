<template>
    <div class="tabs-item" :class="classes" @click="xxx">
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
          }
        },
        mounted(){
          this.eventHub.$on('update:selected', (name)=>{
              this.active = this.name === name;
          })
        },
        computed:{
          classes(){
              return { active: this.active}
          }
        },
        methods:{
            xxx(){
                this.eventHub.$emit('update:selected', this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs-item{
        flex-shrink:0;
        padding: 0 1em;
        &.active{
            background-color: red;
        }
    }

</style>