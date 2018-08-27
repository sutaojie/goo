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
                this.eventHub.$emit('update:selected', this.name, this)
            }
        }
    }
</script>

<style scoped lang="scss">
    $active-font-color:blue;
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
    }

</style>